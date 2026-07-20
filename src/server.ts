import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type EnvRecord = {
  GOOGLE_MAPS_API_KEY?: string;
  GOOGLE_PLACE_ID?: string;
  GOOGLE_PLACE_QUERY?: string;
};

type GooglePlaceReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
};

type GooglePlaceDetailsResponse = {
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    reviews?: GooglePlaceReview[];
  };
  status?: string;
  error_message?: string;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function jsonResponse(body: unknown, init?: ResponseInit): Response {
  const headers = new Headers(init?.headers);
  headers.set("content-type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(body), { ...init, headers });
}

function getEnvValue(env: unknown, key: keyof EnvRecord): string | undefined {
  if (env && typeof env === "object" && key in env) {
    const value = (env as EnvRecord)[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }

  const processEnv = (globalThis as typeof globalThis & { process?: { env?: Record<string, string | undefined> } }).process?.env;
  const value = processEnv?.[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

async function googleReviewsResponse(env: unknown): Promise<Response> {
  const apiKey = getEnvValue(env, "GOOGLE_MAPS_API_KEY");
  let placeId = getEnvValue(env, "GOOGLE_PLACE_ID");

  if (!apiKey) {
    return jsonResponse(
      {
        connected: false,
        reviews: [],
        message: "Google reviews API is ready. Add GOOGLE_MAPS_API_KEY to enable live reviews.",
      },
      { headers: { "cache-control": "public, max-age=300, stale-while-revalidate=3600" } },
    );
  }

  if (!placeId) {
    const placeQuery = getEnvValue(env, "GOOGLE_PLACE_QUERY");
    if (!placeQuery) {
      return jsonResponse(
        {
          connected: false,
          reviews: [],
          message: "Add GOOGLE_PLACE_ID, or add GOOGLE_PLACE_QUERY so the server can find the Google Business Profile.",
        },
        { headers: { "cache-control": "public, max-age=300, stale-while-revalidate=3600" } },
      );
    }

    const findUrl = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
    findUrl.searchParams.set("input", placeQuery);
    findUrl.searchParams.set("inputtype", "textquery");
    findUrl.searchParams.set("fields", "place_id");
    findUrl.searchParams.set("key", apiKey);

    const findResponse = await fetch(findUrl);
    const findPayload = (await findResponse.json()) as { candidates?: { place_id?: string }[]; status?: string };
    placeId = findPayload.candidates?.[0]?.place_id;
  }

  if (!placeId) {
    return jsonResponse({ connected: false, reviews: [] }, { status: 404, headers: { "cache-control": "public, max-age=300" } });
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,rating,user_ratings_total,reviews,url");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url);
  if (!response.ok) {
    return jsonResponse({ connected: false, reviews: [] }, { status: 502, headers: { "cache-control": "public, max-age=300" } });
  }

  const payload = (await response.json()) as GooglePlaceDetailsResponse;
  if (payload.status && payload.status !== "OK") {
    console.error(`Google Places reviews error: ${payload.status} ${payload.error_message ?? ""}`);
    return jsonResponse({ connected: false, reviews: [] }, { status: 502, headers: { "cache-control": "public, max-age=300" } });
  }

  return jsonResponse(
    {
      connected: true,
      placeName: payload.result?.name,
      rating: payload.result?.rating,
      totalReviews: payload.result?.user_ratings_total,
      reviews: (payload.result?.reviews ?? []).map((review) => ({
        authorName: review.author_name ?? "Google reviewer",
        authorPhotoUrl: review.profile_photo_url,
        rating: review.rating ?? 5,
        text: review.text ?? "",
        relativeTimeDescription: review.relative_time_description,
        publishTime: review.time ? new Date(review.time * 1000).toISOString() : undefined,
      })).filter((review) => review.text.trim().length > 0),
    },
    { headers: { "cache-control": "public, max-age=900, stale-while-revalidate=86400" } },
  );
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

function withPerformanceHeaders(request: Request, response: Response): Response {
  const url = new URL(request.url);
  const headers = new Headers(response.headers);

  if (url.pathname.startsWith("/assets/") || /\.(?:webp|png|jpg|jpeg|svg|css|js|woff2?)$/i.test(url.pathname)) {
    headers.set("cache-control", "public, max-age=31536000, immutable");
  } else if (response.headers.get("content-type")?.includes("text/html")) {
    headers.set("cache-control", "public, max-age=0, must-revalidate");
  }

  headers.set("x-content-type-options", "nosniff");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/google-reviews") {
        return googleReviewsResponse(env);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withPerformanceHeaders(request, await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
