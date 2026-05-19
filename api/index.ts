import type { VercelRequest, VercelResponse } from "@vercel/node";

let serverEntry: any;

async function getServerEntry() {
  if (!serverEntry) {
    try {
      // Try to load the server entry from the built dist
      const mod = await import("../dist/server/index.mjs");
      serverEntry = mod.default || mod;
      
      // Verify it has a fetch method
      if (!serverEntry || (typeof serverEntry !== "function" && typeof serverEntry.fetch !== "function")) {
        throw new Error("Server entry does not have a valid fetch handler");
      }
    } catch (error) {
      console.error("Failed to load server entry:", error);
      throw error;
    }
  }
  return serverEntry;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const server = await getServerEntry();
    
    // Create the URL
    const url = new URL(
      req.url || "/",
      `https://${req.headers.host || "localhost"}`
    );
    
    // Prepare the body
    let body: BodyInit | undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      if (typeof req.body === "string") {
        body = req.body;
      } else if (Buffer.isBuffer(req.body)) {
        body = req.body;
      } else if (req.body) {
        body = JSON.stringify(req.body);
      }
    }

    // Create a standard Web Request
    const request = new Request(url, {
      method: req.method,
      headers: new Headers(
        Object.entries(req.headers).map(([k, v]) => [
          k,
          Array.isArray(v) ? v[0] : v || "",
        ])
      ),
      body: body as any,
    });

    // Call the server handler
    let response: Response;
    if (typeof server === "function") {
      response = await server(request);
    } else if (server.fetch) {
      response = await server.fetch(request, {}, {});
    } else {
      throw new Error("Server is not callable");
    }

    // Return the response
    res.status(response.status);
    
    // Copy headers
    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }

    // Send body
    if (response.body) {
      const buffer = await response.arrayBuffer();
      res.send(Buffer.from(buffer));
    } else {
      res.end();
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
