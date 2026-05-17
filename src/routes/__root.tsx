import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

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
      { title: "ItsProf Paul — Paul Ngunjiri · Multi-disciplinary Creative in Nairobi" },
      { name: "description", content: "Paul Ngunjiri (ItsProf Paul) is a Nairobi-based brand designer, web developer, photographer and digital marketer. Mathematics meets creativity." },
      { name: "author", content: "Paul Ngunjiri" },
      { property: "og:title", content: "ItsProf Paul — Where Mathematics Meets Creativity" },
      { property: "og:description", content: "Branding, web, film and marketing engineered with the precision of a Mathematics & Computer Science degree." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
      { name: "theme-color", content: "#d50914" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/logo.svg" },
      { rel: "canonical", href: "/" },
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
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
