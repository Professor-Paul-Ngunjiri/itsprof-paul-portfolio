import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { seoKeywords, services, site } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://itsprofpaul.com/#person",
      name: site.name,
      alternateName: site.brand,
      jobTitle: site.titles,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      sameAs: Object.values(site.socials).map((social) => social.url),
      knowsAbout: seoKeywords,
      worksFor: {
        "@type": "Organization",
        name: site.partner.name,
        url: site.partner.url,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://itsprofpaul.com/#business",
      name: site.brand,
      founder: { "@id": "https://itsprofpaul.com/#person" },
      url: "https://itsprofpaul.com",
      areaServed: ["Kenya", "East Africa", "International"],
      priceRange: "KES 25,000+",
      serviceType: services.map((service) => service.name),
      description: site.tagline,
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-sm text-primary">404 / not_found</div>
        <h1 className="mt-4 font-display text-7xl font-bold">Lost in the grid.</h1>
        <p className="mt-4 text-muted-foreground">
          That page doesn't exist — but plenty more does.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/" className="rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Go home
          </Link>
          <Link to="/portfolio" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold">
            View work
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">Something broke.</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ItsProf Paul | Paul Ngunjiri - Brand, Web & Creative Technology Partner" },
      { name: "description", content: "Paul Ngunjiri helps ambitious brands build premium identities, fast websites, persuasive content and growth systems from Nairobi to international markets." },
      { name: "author", content: "Paul Ngunjiri" },
      { name: "keywords", content: seoKeywords.join(", ") },
      { property: "og:title", content: "ItsProf Paul | Premium Brand, Web, Content & Growth Systems" },
      { property: "og:description", content: "A Nairobi-based creative technology partner helping ambitious businesses look premium, launch faster and convert better." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
      { name: "theme-color", content: "#d50914" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/logo.svg" },
      { rel: "preload", href: "/assets/paul-hero.webp", as: "image" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const bare = pathname.startsWith("/terminal");

  if (bare) {
    return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
