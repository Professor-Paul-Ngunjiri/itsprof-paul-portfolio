import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} from "lucide-react";
import { getSubServices, services } from "@/lib/site";

const ICONS = {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ItsProf Paul · 16 Creative Disciplines" },
      { name: "description", content: "Branding, web, photography, video, marketing and large-document design — by Paul Ngunjiri in Nairobi." },
      { property: "og:title", content: "Services — Paul Ngunjiri" },
      { property: "og:description", content: "End-to-end creative solutions, delivered with precision." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const differentiators = [
  { t: "Maths-powered creativity", d: "A BSc in Mathematics & CS underwriting every aesthetic decision." },
  { t: "Multi-disciplinary expertise", d: "Branding, web, film, marketing, editorial — under one roof, one accountability." },
  { t: "Nairobi-based, world-class standards", d: "African context, global craft — and the price tag of neither extreme." },
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
            End-to-end creative,<br /> <span className="text-gradient-gold">delivered with precision.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/85">
            Sixteen disciplines, one creative — engineered with the same rigor a Mathematics & Computer Science degree teaches.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            {['Creative', 'Digital', 'Media', 'Growth', 'Editorial'].map((item) => (
              <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1">{item}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-hero-primary">Get a custom quote</Link>
            <a href="#services" className="btn-hero-outline">Explore all services</a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ services</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold">All sixteen disciplines.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">Tap any card for a full breakdown — process, features, deliverables, FAQs and pricing.</p>
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
                    /{(i + 1).toString().padStart(2, "0")} · {s.category}
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
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Indicative ranges. Every quote is custom — these get the conversation started.</p>
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
          <h2 className="font-display text-4xl lg:text-5xl font-bold">Book a free discovery call.</h2>
          <p className="mt-4 max-w-xl mx-auto opacity-95">Thirty minutes. No pitch. Just a real conversation about your project and whether we're a fit.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground">
            Schedule a call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
