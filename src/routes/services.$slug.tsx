import { createFileRoute, Link, Outlet, notFound, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Tag, ArrowLeft, MessageCircle } from "lucide-react";
import {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} from "lucide-react";
import { getSubServices, services, site } from "@/lib/site";
import { ProcessShowcase } from "@/components/ProcessShowcase";

const ICONS = {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} as const;

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service | ItsProf Paul" }] };
    return {
      meta: [
        { title: `${s.name} | ItsProf Paul` },
        { name: "description", content: `${s.tagline} Explore process, deliverables, pricing range and quote options for premium ${s.category.toLowerCase()} work.` },
        { property: "og:title", content: `${s.name} | Paul Ngunjiri` },
        { property: "og:description", content: s.tagline },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary hover:underline">Back to all services</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: typeof services[number] };
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== `/services/${s.slug}`) return <Outlet />;

  const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Sparkles;

  const related = services.filter((x) => x.slug !== s.slug && x.category === s.category).slice(0, 3);
  const subServices = getSubServices(s.slug);
  const processStages = s.process.map((step, index) => ({
    step: step.step,
    title: step.title,
    desc: step.desc,
    timeframe: ["Kickoff", "Strategy window", "Production phase", "Review phase", "Launch window", "Support period"][index] ?? "Confirmed after the brief",
    activities: [
      step.desc,
      index === 0 ? "Confirm goals, audience and success measures" : "Review the strongest direction with you",
      "Agree the next action before moving forward",
    ],
    deliverables: [
      `${step.title} summary`,
      "Decision checklist",
      "Next-step recommendation",
    ],
    caseStudy: {
      title: `${s.name}: ${step.title.toLowerCase()} scenario`,
      description: [
        `A client came in needing ${s.name.toLowerCase()} but did not yet have a clean brief. This stage clarified the goal, audience, deadline and success measure before money was wasted on production.`,
        `The project needed a stronger direction before execution. This stage turned scattered references and opinions into one practical route the client could approve with confidence.`,
        `The approved direction became real work here: the strongest ideas were built, refined and checked against the original business goal so the output stayed useful, not just attractive.`,
        `The client reviewed the work through a focused decision point. Feedback was grouped, priorities were agreed and changes were handled without losing the quality of the original idea.`,
        `This stage prepared the final files, launch notes and practical recommendations so the client could use the work immediately across the right channels.`,
        `After delivery, the client received support on rollout, usage and next improvements, making the project easier to sustain beyond handoff.`,
      ][Math.min(index, 5)],
      client: "Client scenario",
      industry: s.category,
    },
  }));

  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <Link to="/services" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-gold hover:opacity-80">
              <ArrowLeft className="h-3.5 w-3.5" /> All services
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 backdrop-blur p-3 border border-white/20">
                <Icon className="h-7 w-7 text-gold" />
              </div>
              <span className="hero-eyebrow">/ {s.category.toLowerCase()}</span>
            </div>
            <h1 className="mt-5 font-display text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              {s.name}
            </h1>
            <p className="mt-5 text-xl lg:text-2xl text-gradient-gold font-display">{s.tagline}</p>
            <p className="mt-5 text-base lg:text-lg max-w-2xl text-white/85 leading-relaxed">{s.hero}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" search={{ service: s.slug }} className="btn-hero-primary">
                Hire me now <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-hero-outline">
                <MessageCircle className="h-4 w-4" /> WhatsApp me now
              </a>
            </div>
          </div>
          <aside className="lg:col-span-4 rounded-3xl border border-white/20 bg-white/10 backdrop-blur p-6 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                <Tag className="h-3.5 w-3.5" /> Starting at
              </div>
              <div className="mt-1 font-display text-3xl font-bold">{s.startingAt}</div>
            </div>
            <div className="h-px bg-white/15" />
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                <Clock className="h-3.5 w-3.5" /> Typical timeline
              </div>
              <div className="mt-1 font-display text-2xl font-semibold">{s.timeline}</div>
            </div>
            <div className="h-px bg-white/15" />
            <Link to="/contact" search={{ service: s.slug }} className="block w-full text-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground hover:opacity-90 transition-opacity">
              Hire me now
            </Link>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Best for",
              desc: `Founders, marketing teams and organisations that need ${s.name.toLowerCase()} to feel premium, consistent and ready for real business use.`,
            },
            {
              title: "Business problem solved",
              desc: "This removes unclear positioning, inconsistent assets, slow execution and the hidden cost of creative work that looks nice but does not support sales.",
            },
            {
              title: "Return on investment",
              desc: "You leave with stronger market presence, clearer customer trust signals and deliverables built to improve conversion, recall and team efficiency.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {subServices.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">/ specialist pages</span>
              <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold">Choose the exact lane.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Every sub-service now has a focused page with scope, outcomes, package shape and next steps.
            </p>
          </div>
          <div className="mt-9 grid md:grid-cols-3 gap-4">
            {subServices.map((sub) => (
              <Link
                key={sub.slug}
                to="/services/$slug/$subSlug"
                params={{ slug: s.slug, subSlug: sub.slug }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.category}</div>
                <h3 className="mt-3 font-display text-xl font-semibold">{sub.name}</h3>
                <p className="mt-2 text-sm font-semibold text-primary">{sub.kicker}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sub.summary}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-3">
                  Open page <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ what's included</span>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold">Everything in the box.</h2>
            <p className="mt-3 text-muted-foreground">No "additional charges later". The list below is what ships.</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {s.features.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessShowcase
        title={`${s.name} process, step by step.`}
        intro="See exactly how the project moves, what happens in each stage and what you can expect before we move to the next decision."
        stages={processStages}
        variant="muted"
      />

      {/* DELIVERABLES */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="rounded-3xl bg-gradient-blue text-secondary-foreground p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gold">/ deliverables</span>
              <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold">What lands in your inbox.</h2>
              <p className="mt-3 opacity-90">Final hand-off includes every asset, every source file and a clear usage guide.</p>
            </div>
            <ul className="space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-base">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-20">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ faq</span>
          <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold">Common questions.</h2>
        </div>
        <div className="space-y-3">
          {s.faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <span className="font-display text-base font-semibold">{f.q}</span>
                <span className="text-primary group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ related services</span>
          <h2 className="mt-2 font-display text-3xl font-bold">Often paired with...</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {related.map((r) => {
              const RI = ICONS[r.icon as keyof typeof ICONS] ?? Sparkles;
              return (
                <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary transition-all">
                  <RI className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-display text-lg font-semibold">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-20">
        <div className="rounded-[2.5rem] bg-gradient-primary text-primary-foreground p-12 lg:p-16 text-center shadow-elegant">
          <h2 className="font-display text-3xl lg:text-5xl font-bold">Ready to start your {s.name.toLowerCase()} project?</h2>
          <p className="mt-4 max-w-xl mx-auto opacity-95">Send the brief today and I will respond with the clearest next step, timeline and investment range.</p>
          <Link to="/contact" search={{ service: s.slug }} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground">
            Hire me now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
