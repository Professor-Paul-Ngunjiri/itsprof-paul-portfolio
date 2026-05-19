import type { VercelRequest, VercelResponse } from "@vercel/node";

let serverEntry: any;

async function getServerEntry() {
  if (!serverEntry) {
    try {
      const mod = await import("../dist/server/index.js");
      serverEntry = mod.default || mod;
    } catch (e) {
      try {
        const mod = await import("../dist/server/server-entry.js");
        serverEntry = mod.default || mod;
      } catch (e2) {
        console.error("Could not load server entry:", e, e2);
        throw new Error("Failed to load server entry");
      }
    }
  }
  return serverEntry;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const server = await getServerEntry();
    
    // Create a Request object from the Vercel request
    const url = new URL(
      req.url || "/",
      `https://${req.headers.host || "localhost"}`
    );
    
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

    const request = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers as HeadersInit),
      body,
    });

    // Call the server's fetch handler
    const response = await server.fetch(request, {}, {});

    // Set status
    res.status(response.status);
    
    // Copy headers
    for (const [key, value] of response.headers) {
      res.setHeader(key, value);
    }

    // Send body
    if (response.body) {
      const reader = response.body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(value);
        }
      } finally {
        reader.releaseLock();
      }
    }
    
    res.end();
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ 
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : String(error)
    });
  }
}
