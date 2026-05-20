import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star, Linkedin, Instagram, Facebook, CheckCircle2 } from "lucide-react";
import { site, services, processSteps, values, projects, testimonials } from "@/lib/site";
import { Typewriter } from "@/components/Typewriter";
import heroImg from "@/assets/paul-hero.webp";
import workImg from "@/assets/paul-work.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ItsProf Paul — Paul Ngunjiri · Multi-disciplinary Creative in Nairobi" },
      { name: "description", content: "Brand design, web development, photography, video and digital marketing — engineered with the precision of a Mathematics & Computer Science degree." },
      { property: "og:title", content: "ItsProf Paul — Where Mathematics Meets Creativity" },
      { property: "og:description", content: "Nairobi-based multi-disciplinary creative. 4+ years, 100+ projects, 15+ services." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for new projects
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-balance">
              Paul Ngunjiri.
              <br />
              I am a <Typewriter />
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              <span className="font-semibold text-foreground">ItsProf Paul</span> — Nairobi-based creative working at the intersection of mathematics, code and visual design. I build brands, websites, films and campaigns that move numbers.
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
            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              {[
                { i: Linkedin, h: site.socials.linkedin.url },
                { i: Instagram, h: site.socials.instagram.url },
                { i: Facebook, h: site.socials.facebook.url },
              ].map((s, i) => (
                <a key={i} href={s.h} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  <s.i className="h-5 w-5" />
                </a>
              ))}
              <span className="text-xs uppercase tracking-widest">Find me online</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-6 bg-gradient-primary rounded-[3rem] blur-3xl opacity-30 animate-float" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-2 border-border shadow-elegant bg-gradient-blue">
              <img src={heroImg} alt="Paul Ngunjiri — ItsProf Paul" className="h-full w-full object-cover object-top mix-blend-luminosity opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-background/95 backdrop-blur shadow-card p-4 max-w-[200px]">
              <div className="font-display text-3xl font-bold text-gradient-primary">{site.years}</div>
              <div className="text-xs text-muted-foreground">years engineering creative work</div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-2xl border border-border bg-background/95 backdrop-blur shadow-card p-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
              </div>
              <div className="mt-1 text-xs font-medium">Rated by 50+ clients</div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-border/60 bg-background/40 backdrop-blur">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { n: site.years, l: "Years experience" },
              { n: site.projects, l: "Projects delivered" },
              { n: site.clients, l: "Happy clients" },
              { n: site.services, l: "Creative services" },
              { n: site.countries, l: "Countries served" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-gradient-primary">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ services</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Fifteen disciplines. <span className="text-gradient-primary">One signature.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Each service is held to the same engineering standard: documented process, measurable outcomes, premium finish.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-card"
            >
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
              <div className="font-mono text-xs text-muted-foreground">0{(i + 1).toString().padStart(2, "0")}</div>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
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
              <img src={workImg} alt="Paul Ngunjiri at work" className="h-full w-full object-cover" />
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
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary transition-colors">
              <div className="font-mono text-3xl font-bold text-gradient-primary">{s.n}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
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
          {projects.map((p, i) => (
            <Link
              to="/portfolio"
              key={p.slug}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted to-accent"
            >
              <div className={`absolute inset-0 ${
                i % 3 === 0 ? "bg-gradient-primary" : i % 3 === 1 ? "bg-gradient-blue" : "bg-gradient-gold"
              } opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 bg-mesh opacity-30" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-primary-foreground">
                <div className="inline-flex w-fit rounded-full bg-background/20 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
                  {p.category}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm opacity-90">{p.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View case study <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
              <Link to="/contact" className="rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-gold hover:text-gold-foreground transition-colors">
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
