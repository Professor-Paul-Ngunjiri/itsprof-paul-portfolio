import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { capabilityGroups, capabilityLines, engagementPackages, getSubServices, services } from "@/lib/site";

const BASE_URL = "https://paul.pahwah.com";

const staticPaths = ["/", "/about", "/philosophy", "/portfolio", "/services", "/packages", "/contact", "/terminal"];
const servicePaths = services.flatMap((service) => [
  `/services/${service.slug}`,
  ...getSubServices(service.slug).map((sub) => `/services/${service.slug}/${sub.slug}`),
]);
const capabilityPaths = [
  ...capabilityGroups.map((group) => `/capabilities/${group.slug}`),
  ...capabilityLines.map((line) => `/capabilities/${line.slug}`),
];
const packagePaths = engagementPackages.map((item) => `/packages/${item.slug}`);
const paths = [...staticPaths, ...servicePaths, ...capabilityPaths, ...packagePaths];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
