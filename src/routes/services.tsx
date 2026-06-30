import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} from "lucide-react";
import { expertisePillars, getSubServices, servicePillars, services } from "@/lib/site";

const ICONS = {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Brand, Web, Content & Growth Systems by Paul Ngunjiri" },
      { name: "description", content: "Premium brand strategy, web design, development, content production, marketing and editorial services delivered through three focused creative pillars." },
      { property: "og:title", content: "Services | ItsProf Paul" },
      { property: "og:description", content: "Brand, web, media and growth services for ambitious businesses that want premium execution and measurable return." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const differentiators = [
  { t: "Strategic creative direction", d: "Brand, web, film, marketing and editorial decisions are connected to one commercial objective." },
  { t: "Specialist delivery without vendor chaos", d: "I lead the system and collaborate with trusted specialists where a brief needs deeper production capacity." },
  { t: "Nairobi-based, global standard", d: "African market fluency, international polish and async-friendly communication for serious clients." },
  { t: "Fast turnaround, no quality drop", d: "Disciplined systems mean speed without burning the brief." },
  { t: "Client-centred communication", d: "Clear updates, transparent timelines, no jargon walls." },
  { t: "Transparent pricing", d: "No hidden fees. Quotes you can hand to finance without explanation." },
];

const tiers = [
  { name: "Spark", price: "From KES 25,000", popular: false, features: ["Single deliverable", "1 concept direction", "2 revision rounds", "5–7 day turnaround", "Source files delivered"] },
  { name: "Illuminate", price: "From KES 75,000", popular: true, features: ["Multi-deliverable package", "3 concept directions", "Unlimited rounds within scope", "2–3 week turnaround", "Full source files + style guide", "30 days post-launch support"] },
  { name: "Legacy", price: "Custom quote", popular: false, features: ["Full multi-channel system", "Strategy + design + production", "Dedicated weekly check-ins", "4–8 week engagement", "Brand book + asset library", "90 days post-launch support"] },
];

function Services() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/services") return <Outlet />;

  return (
    <>
      <section className="relative bg-hero overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 text-center">
          <span className="hero-eyebrow">/ services</span>
          <h1 className="mt-3 font-display text-5xl lg:text-7xl font-bold tracking-tighter">
            Brand, web, content<br /> <span className="text-gradient-gold">and growth systems.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/85">
            Three focused service pillars with one accountable creative lead, built for clients who want premium execution without coordinating five separate vendors.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            {servicePillars.map((item) => (
              <span key={item.title} className="rounded-full border border-white/20 bg-white/10 px-3 py-1">{item.title}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-hero-primary">Hire me now</Link>
            <a href="#services" className="btn-hero-outline">See services now</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {expertisePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ services</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold">Every service, organised by outcome.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">Tap any card for the detailed breakdown: process, deliverables, FAQs, investment range and quote options.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Sparkles;
            const subServices = getSubServices(s.slug);
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-card"
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity" />
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    /{(i + 1).toString().padStart(2, "0")} - {s.category}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight">{s.name}</h3>
                <p className="mt-2 text-sm text-gradient-primary font-display font-semibold">{s.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {subServices.map((sub) => (
                    <span key={sub.slug} className="rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                      {sub.name}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-1.5">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">From</div>
                    <div className="font-display font-bold text-sm">{s.startingAt}</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ pricing</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold">Three engagement tiers.</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Indicative ranges. Every quote is custom, but these tiers make it easy to choose the level of investment that matches your ambition.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div key={t.name} className={`relative rounded-3xl border bg-card p-7 ${t.popular ? "border-primary shadow-elegant lg:scale-105" : "border-border"}`}>
                {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">Most Popular</div>}
                <h3 className="font-display text-2xl font-bold">{t.name}</h3>
                <div className="mt-2 font-mono text-sm text-muted-foreground">{t.price}</div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-7 block text-center rounded-full px-5 py-3 text-sm font-semibold ${t.popular ? "bg-gradient-primary text-primary-foreground" : "border border-border hover:border-primary"}`}>
                  Choose {t.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ why me</span>
          <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold">Why choose ItsProf Paul.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((d) => (
            <div key={d.t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{d.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-16">
        <div className="rounded-[2.5rem] bg-gradient-primary text-primary-foreground p-12 lg:p-20 text-center shadow-elegant">
          <h2 className="font-display text-4xl lg:text-5xl font-bold">Ready to move now?</h2>
          <p className="mt-4 max-w-xl mx-auto opacity-95">Thirty minutes. No hard pitch. Just a real conversation about your goals, timeline, investment range and whether we are a strong fit.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground">
            Hire me now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
