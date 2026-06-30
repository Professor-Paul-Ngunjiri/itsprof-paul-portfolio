import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, PackageCheck, Sparkles, Target } from "lucide-react";
import {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, FileText,
} from "lucide-react";
import { getSubService, getSubServices, services, site } from "@/lib/site";

const ICONS = {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} as const;

export const Route = createFileRoute("/services/$slug/$subSlug")({
  loader: ({ params }) => {
    const service = services.find((x) => x.slug === params.slug);
    const subService = service ? getSubService(params.slug, params.subSlug) : undefined;
    if (!service || !subService) throw notFound();
    return { service, subService };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    const subService = loaderData?.subService;
    if (!service || !subService) return { meta: [{ title: "Sub-service - ItsProf Paul" }] };
    return {
      meta: [
        { title: `${subService.name} - ${service.name} - ItsProf Paul` },
        { name: "description", content: subService.summary },
        { property: "og:title", content: `${subService.name} - ItsProf Paul` },
        { property: "og:description", content: subService.summary },
      ],
      links: [{ rel: "canonical", href: `/services/${service.slug}/${subService.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Sub-service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary hover:underline">Back to services</Link>
    </div>
  ),
  component: SubServiceDetail,
});

function SubServiceDetail() {
  const { service, subService } = Route.useLoaderData() as {
    service: typeof services[number];
    subService: NonNullable<ReturnType<typeof getSubService>>;
  };
  const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Sparkles;
  const siblingSubServices = getSubServices(service.slug).filter((x) => x.slug !== subService.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-8">
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-gold hover:opacity-80"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> {service.name}
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur">
                <Icon className="h-7 w-7 text-gold" />
              </div>
              <span className="hero-eyebrow">/ {service.category.toLowerCase()}</span>
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tighter lg:text-7xl">
              {subService.name}
            </h1>
            <p className="mt-5 font-display text-xl text-gradient-gold lg:text-2xl">{subService.kicker}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 lg:text-lg">{subService.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" search={{ service: service.slug, sub: subService.slug }} className="btn-hero-primary">
                Brief this project <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-hero-outline">
                <MessageCircle className="h-4 w-4" /> WhatsApp me now
              </a>
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="font-mono text-xs uppercase tracking-widest text-gold">Parent service</div>
              <h2 className="mt-2 font-display text-2xl font-bold">{service.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{service.tagline}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gold">From</div>
                  <div className="mt-1 font-display text-lg font-semibold">{service.startingAt}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gold">Timeline</div>
                  <div className="mt-1 font-display text-lg font-semibold">{service.timeline}</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-semibold">Ideal for</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{subService.idealFor}</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-semibold">Why it works</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{subService.proof}</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <PackageCheck className="h-6 w-6 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-semibold">Delivery model</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Scoped from the parent {service.name.toLowerCase()} service, then tuned to the exact channel, assets and deadline.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ outcomes</span>
            <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">What this should change.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The work is judged by practical gains: better clarity, better consistency and a stronger path to action.
            </p>
          </div>
          <div className="grid gap-3">
            {subService.outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl bg-gradient-blue p-10 text-secondary-foreground lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gold">/ scope</span>
              <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">What is normally included.</h2>
              <p className="mt-3 text-sm leading-relaxed opacity-90">
                This is the starter scope. Larger engagements can add strategy, production, development or campaign rollout.
              </p>
            </div>
            <ul className="space-y-3">
              {subService.packages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {siblingSubServices.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ related sub-services</span>
          <h2 className="mt-2 font-display text-3xl font-bold">Other lanes inside {service.name}.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {siblingSubServices.map((sub) => (
              <Link
                key={sub.slug}
                to="/services/$slug/$subSlug"
                params={{ slug: service.slug, subSlug: sub.slug }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary"
              >
                <h3 className="font-display text-xl font-semibold">{sub.name}</h3>
                <p className="mt-2 text-sm text-primary">{sub.kicker}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sub.summary}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-3">
                  Open page <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-primary p-12 text-center text-primary-foreground shadow-elegant lg:p-16">
          <h2 className="font-display text-3xl font-bold lg:text-5xl">Want {subService.name.toLowerCase()} done properly?</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-95">
            Send the brief, deadline and rough budget. I will reply with the smartest scope for the outcome you need.
          </p>
          <Link to="/contact" search={{ service: service.slug, sub: subService.slug }} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground">
            Hire me now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
