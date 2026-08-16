import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Compass } from "lucide-react";
import { engagementPackages } from "@/lib/site";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Ways to Work With Paul | Strategy, Build & Growth Packages" },
      { name: "description", content: "Choose how to work with Paul Ngunjiri: diagnostic strategy, signature project build, or long-term growth partnership." },
    ],
  }),
  component: Packages,
});

function Packages() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <span className="hero-eyebrow">/ ways to work</span>
          <h1 className="mx-auto mt-3 max-w-4xl font-display text-5xl font-bold tracking-tighter lg:text-7xl">
            Choose the right level of strategic involvement.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Start with clarity, build a complete solution, or work together over time. Each package is designed around business value, not random deliverables.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {engagementPackages.map((pkg) => (
            <article key={pkg.slug} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">{pkg.label}</span>
                <Compass className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold">{pkg.name}</h2>
              <div className="mt-2 font-display text-lg font-semibold text-primary">{pkg.price}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>
              <div className="mt-6 space-y-2">
                {pkg.outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/packages/$slug" params={{ slug: pkg.slug }} className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                View {pkg.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
