import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star, Linkedin, Instagram, Facebook, CheckCircle2, Gauge, Layers3, ShieldCheck, ExternalLink } from "lucide-react";
import {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, FileText,
} from "lucide-react";
import { site, services, processSteps, values, projects, testimonials } from "@/lib/site";
import { Typewriter } from "@/components/Typewriter";
import { ProjectCover } from "@/components/ProjectCover";
import heroImg from "@/assets/paul-hero.webp";
import workImg from "@/assets/paul-work.webp";

const ICONS = {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} as const;

const signatureSystems = [
  {
    icon: Layers3,
    title: "One Creative Operating System",
    desc: "Strategy, identity, content, code and launch work stay connected, so the project does not lose meaning between handoffs.",
  },
  {
    icon: Gauge,
    title: "Performance Built Into Craft",
    desc: "Every page, campaign and visual system is shaped around speed, clarity, conversion and measurable business outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Handoff Discipline",
    desc: "Source files, usage notes, QA checks, launch lists and post-delivery support are treated as part of the work.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ItsProf Paul — Paul Ngunjiri · Multi-disciplinary Creative in Nairobi" },
      { name: "description", content: "Brands, websites, films and campaigns engineered to move numbers — by Paul Ngunjiri in Nairobi." },
      { property: "og:title", content: "ItsProf Paul — Brands, Websites, Films & Campaigns" },
      { property: "og:description", content: "Multi-disciplinary creative engineered to move numbers." },
    ],
  }),
  component: Index,
});

function Index() {
  const previewPlaceholderImages = [workImg, heroImg];
  const getPlaceholderPreview = (index: number) => previewPlaceholderImages[index % previewPlaceholderImages.length];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Available for new projects
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-balance">
              Paul Ngunjiri.
              <br />
              I am a <Typewriter />
            </h1>
            <p className="mt-7 text-lg text-white/85 max-w-xl leading-relaxed">
              <span className="font-semibold text-white">ItsProf Paul</span> — {site.tagline} Based in Nairobi, working with brands across Africa and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="btn-hero-primary group">
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-hero-outline">
                Let's Build Together
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-white/70">
              {[
                { i: Linkedin, h: site.socials.linkedin.url },
                { i: Instagram, h: site.socials.instagram.url },
                { i: Facebook, h: site.socials.facebook.url },
              ].map((s, i) => (
                <a key={i} href={s.h} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                  <s.i className="h-5 w-5" />
                </a>
              ))}
              <span className="text-xs uppercase tracking-widest">Find me online</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <img
              src={heroImg}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              alt="Paul Ngunjiri — ItsProf Paul"
              className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
            <div className="absolute -bottom-2 -left-2 z-20 rounded-2xl border border-white/25 bg-white/95 backdrop-blur shadow-card p-4 max-w-[200px]">
              <div className="font-display text-3xl font-bold text-gradient-primary">{site.years}</div>
              <div className="text-xs text-foreground/70">years engineering creative work</div>
            </div>
            <div className="absolute -top-2 -right-2 z-20 rounded-2xl border border-white/25 bg-white/95 backdrop-blur shadow-card p-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
              </div>
              <div className="mt-1 text-xs font-medium text-foreground/80">Rated by 50+ clients</div>
            </div>
          </div>
        </div>

        {/* Stats bar — use brand primary gradient and white text for contrast */}
        <div className="relative bg-gradient-primary border-t border-white/30">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: site.years, l: "Years experience" },
              { n: site.projects, l: "Projects delivered" },
              { n: site.clients, l: "Happy clients" },
              { n: site.services, l: "Creative services" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl lg:text-5xl font-extrabold text-white">{s.n}</div>
                <div className="mt-1 text-xs font-display font-semibold uppercase tracking-widest text-white/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ signature system</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Integrated creative & engineering team.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-muted-foreground leading-relaxed">
            The unique advantage here is integration: the brand strategist understands the code, the developer understands the campaign, and the filmmaker understands the conversion path.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {signatureSystems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="inline-flex rounded-xl bg-primary/10 p-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ services</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Sixteen disciplines. <span className="text-gradient-primary">One signature.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Focused specialities across four pillars: Creative · Digital · Media · Growth — tap any card for a full breakdown.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Sparkles;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-card"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-primary/10 p-2.5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">0{(i + 1).toString().padStart(2, "0")}</div>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-3 space-y-1">
                  {s.features.slice(0, 2).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MATHS × CREATIVITY */}
      <section className="relative overflow-hidden bg-gradient-blue text-secondary-foreground">
        <div className="absolute inset-0 bg-mesh opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">/ what makes me different</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              A BSc in Mathematics & Computer Science changes how design gets made.
            </h2>
            <p className="mt-5 text-base lg:text-lg opacity-90 leading-relaxed">
              Linear algebra informs my grid systems. Probability shapes my A/B tests. Algorithms drive my UX flows. Where most creatives rely on intuition alone, I bring measurable rigor to every brief — and the work is sharper for it.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Grid systems built on mathematical ratios",
                "Data-driven A/B testing on campaigns",
                "Algorithmic thinking in UX architecture",
                "Statistical reporting on every project",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:opacity-90 transition-opacity">
              Read my full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2rem] border-2 border-gold/30 overflow-hidden shadow-elegant">
              <img src={workImg} loading="lazy" decoding="async" alt="Paul Ngunjiri at work" className="h-full w-full object-contain" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold text-gold-foreground rounded-2xl p-5 shadow-elegant max-w-[220px] rotate-3">
              <div className="font-display text-2xl font-bold leading-none">∑ × ✦</div>
              <div className="mt-2 text-xs font-medium">Where numbers become narrative.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ process</span>
          <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Seven stages, zero surprises.</h2>
          <p className="mt-4 text-muted-foreground">A documented workflow that the client sees from day one. You always know what's happening, why, and what's next.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((s) => (
            <div key={s.n} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary hover:-translate-y-1 transition-all">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
              <div className="font-mono text-4xl font-bold text-gradient-primary">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK — 4 per row */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ recent work</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Selected projects.</h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary">
            Explore all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((p, index) => {
            const previewSrc = getPlaceholderPreview(index);
            return (
              <article key={p.slug} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-muted/10">
                  <img
                    src={previewSrc}
                    alt={p.previewAlt ?? `${p.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="rounded-3xl bg-gradient-warm p-4 text-white backdrop-blur-sm shadow-xl border border-white/15">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white">{p.category}</p>
                      <p className="mt-2 text-lg font-semibold leading-tight">{p.title}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-cool p-5 text-white backdrop-blur-sm shadow-2xl border border-white/10">
                      <div className="space-y-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{p.category}</p>
                          <p className="mt-2 text-2xl font-semibold leading-tight text-white">{p.title}</p>
                          {p.client ? <p className="mt-3 text-sm text-slate-300">Client: {p.client}</p> : null}
                        </div>

                        <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                          {p.year ? <span className="rounded-full bg-white/10 px-2 py-1">{p.year}</span> : null}
                          {p.metric ? <span className="rounded-full bg-white/10 px-2 py-1">{p.metric}</span> : null}
                        </div>

                        <p className="text-sm leading-relaxed text-slate-200">{p.desc}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:border-primary hover:text-primary">
                          View case study <ArrowRight className="h-3 w-3" />
                        </Link>
                        {p.liveUrl ? (
                          <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:border-primary hover:text-primary">
                            Visit site <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ words from clients</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">What people say.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <blockquote className="font-display text-lg leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ principles</span>
          <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            The principles I build <span className="text-gradient-primary">everything</span> on.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">/{(i+1).toString().padStart(2,"0")}</span>
              </div>
              <h3 className="mt-3 font-display text-base font-semibold">{v.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-12 lg:p-20 text-center text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 bg-mesh opacity-30" />
          <div className="relative">
            <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
              Ready to build something <em className="not-italic underline decoration-gold decoration-4 underline-offset-8">extraordinary</em>?
            </h2>
            <p className="mt-5 max-w-xl mx-auto opacity-95">
              From a single logo to a full brand-and-launch system — let's get on a call and scope it out.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground hover:opacity-90 transition-colors">
                Start a project
              </Link>
              <Link to="/services" className="rounded-full border-2 border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
