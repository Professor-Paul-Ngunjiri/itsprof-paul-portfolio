import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Target } from "lucide-react";
import { getEngagementPackage, site } from "@/lib/site";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = getEngagementPackage(params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.pkg.name} | Work With Paul Ngunjiri` },
      { name: "description", content: loaderData?.pkg.description },
    ],
  }),
  component: PackagePage,
});

function PackagePage() {
  const { pkg } = Route.useLoaderData();

  return (
    <>
      <section id="package-hero" className="relative scroll-mt-28 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <span className="hero-eyebrow">/ {pkg.label}</span>
            <h1 className="mt-3 font-display text-5xl font-bold tracking-tighter lg:text-7xl">{pkg.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{pkg.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" search={{ package: pkg.slug }} className="btn-hero-primary">
                {pkg.cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-hero-outline">Explore capabilities</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="package-details" className="mx-auto grid max-w-7xl scroll-mt-28 gap-6 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <aside className="rounded-3xl border border-border bg-card p-7 shadow-card">
          <div className="font-display text-3xl font-bold text-primary">{pkg.price}</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.marketNote}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <div className="flex items-start gap-2">
              <Target className="mt-0.5 h-4 w-4 text-primary" />
              <span>{pkg.idealFor}</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-primary" />
              <span>{pkg.timeline}</span>
            </div>
          </div>
        </aside>

        <div className="grid gap-6">
          <article className="rounded-3xl border border-border bg-card p-7 shadow-card">
            <h2 className="font-display text-3xl font-bold">What is included</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {pkg.includes.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-3xl border border-border bg-card p-7 shadow-card">
            <h2 className="font-display text-3xl font-bold">What this should create</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {pkg.outcomes.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-muted/35 p-4 text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="package-cta" className="mx-auto max-w-7xl scroll-mt-28 px-5 pb-20 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-primary p-8 text-center text-primary-foreground shadow-elegant lg:p-12">
          <h2 className="font-display text-4xl font-bold">Ready to discuss {pkg.name}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
            Send a short brief and I will respond from {site.email} with the best next step, scope and timeline.
          </p>
          <Link to="/contact" search={{ package: pkg.slug }} className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
