import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Linkedin, Instagram, Facebook, Music2, CheckCircle2, Gauge, Layers3, ShieldCheck, ExternalLink } from "lucide-react";
import { clientBrands, servicePillars, site, services, processSteps, values, projects } from "@/lib/site";
import { Typewriter } from "@/components/Typewriter";
import { ProcessShowcase } from "@/components/ProcessShowcase";
import { GoogleReviews } from "@/components/GoogleReviews";
import heroImg from "@/assets/paul-hero.webp";
import workImg from "@/assets/paul-work.webp";

const signatureSystems = [
  {
    icon: Layers3,
    title: "One Calm Project Lead",
    desc: "You get one accountable creative partner who can connect strategy, identity, web, content and launch decisions without making you manage the pieces.",
  },
  {
    icon: Gauge,
    title: "Beautiful Work With a Job to Do",
    desc: "Every page, campaign and visual system is shaped around clarity, trust, speed, conversion and measurable business outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Delivery Manners",
    desc: "Clear updates, source files, usage notes, QA checks, launch lists and post-delivery support are treated as part of the work.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paul Ngunjiri | Brand Strategist, Web Designer & Creative Technologist" },
      { name: "description", content: "Premium brand strategy, web design, content production and growth systems for ambitious businesses in Kenya and international markets." },
      { name: "keywords", content: "Paul Ngunjiri, ItsProf Paul, brand strategist Kenya, web designer Nairobi, creative technologist, digital growth partner, portfolio" },
      { property: "og:title", content: "ItsProf Paul | Premium Brand, Web, Content & Growth Systems" },
      { property: "og:description", content: "A Nairobi-based creative technology partner helping ambitious brands look premium, launch faster and convert better." },
    ],
  }),
  component: Index,
});

function Index() {
  const previewPlaceholderImages = [workImg, heroImg];
  const getProjectPreview = (index: number, preview?: string) => preview ?? previewPlaceholderImages[index % previewPlaceholderImages.length];
  const processStages = processSteps.map((step, index) => ({
    step: step.n,
    title: step.title,
    desc: step.desc,
    timeframe: ["Same day", "2-4 days", "3-7 days", "Project phase", "Review phase", "Launch window", "First 30 days"][index],
    activities: step.features,
    deliverables: step.features.map((feature) => `${feature} confirmed`),
    caseStudy: {
      title: [
        "Turning a vague idea into a clear working brief",
        "Finding the strongest market angle before design begins",
        "Choosing one creative direction with confidence",
        "Keeping production aligned across design, content and web",
        "Reducing feedback loops through structured reviews",
        "A smoother launch with fewer last-minute decisions",
        "Using early performance signals to improve the work",
      ][index],
      description: [
        "A founder came in with scattered notes, reference links and an urgent launch goal. The discovery stage turned that into a focused scope, audience map and decision checklist.",
        "A growing organisation needed to look more premium but could not explain its difference. Research clarified the competitors, audience expectations and the positioning angle to lead with.",
        "Instead of guessing from a single mockup, the client compared clear creative routes and selected the direction that best matched their market and revenue goal.",
        "For a digital launch, design, web, copy and content assets moved together so the final brand experience felt consistent instead of assembled at the last minute.",
        "A client with many stakeholders avoided scattered edits by reviewing work through one structured feedback round, grouped by priority and business impact.",
        "For a recent digital launch, the client approved the final website, brand assets and campaign materials with a clear checklist instead of scattered feedback.",
        "After launch, early analytics showed which messages and pages were getting attention, then the next iteration improved clarity and conversion paths.",
      ][index],
      client: "Scenario",
      industry: "Brand, web and growth delivery",
    },
  }));

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-10 pb-10 lg:pt-14 lg:pb-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Available for new projects
            </span>
            <h1 className="mt-5 font-display text-[2.35rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold leading-[1.04] tracking-tighter text-balance">
              <span className="block sm:whitespace-nowrap">I'M Paul Ngunjiri, a</span>
              <span className="mt-1 block max-w-full overflow-visible">
                <Typewriter />
              </span>
            </h1>
            <p className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed">
              I am popularly known as <span className="font-semibold text-white">ItsProf Paul</span>. I help individuals, founders, companies, churches, NGOs, schools, government teams and international organisations turn unclear positioning, slow websites and scattered content into premium brands, fast digital experiences and growth systems that earn trust, launch faster and convert better.
            </p>
            <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/85 backdrop-blur">
              <span>Creative direction, web strategy, content systems and growth thinking in one calm process.</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-hero-primary group">
                Hire me now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-hero-outline">
                See proof now
              </Link>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/72">
              Trusted across 100+ delivered projects by 50+ clients. To hire me, choose a service, send a brief or request a quote, and I will respond with a clear scope, timeline and investment range.
            </p>
            <div className="mt-5 flex items-center gap-4 text-white/70">
              {[
                { i: Linkedin, h: site.socials.linkedin.url },
                { i: Instagram, h: site.socials.instagram.url },
                { i: Facebook, h: site.socials.facebook.url },
                { i: Music2, h: site.socials.tiktok.url },
              ].map((s, i) => (
                <a key={i} href={s.h} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                  <s.i className="h-5 w-5" />
                </a>
              ))}
              <span className="text-xs uppercase tracking-widest">Find me online</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="overflow-hidden rounded-[2.25rem] border border-white/20 bg-white/10 shadow-elegant backdrop-blur">
                <img
                  src={heroImg}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  alt="Paul Ngunjiri - ItsProf Paul"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-gradient-primary border-t border-white/30">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
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
            You do not need to explain your vision to five different vendors. I help you shape the idea, make it look premium, build the digital touchpoints and prepare the assets your audience actually sees.
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
              Three focused pillars. <span className="text-gradient-primary">One coordinated system.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Choose the outcome you need most: a stronger brand and website, better visual content, or a growth system that brings in more serious enquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {servicePillars.map((pillar) => {
            const pillarServices = pillar.services
              .map((slug) => services.find((service) => service.slug === slug))
              .filter(Boolean);
            return (
              <article key={pillar.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-card">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
                <h3 className="font-display text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillarServices.map((service) => (
                    <Link
                      key={service!.slug}
                      to="/services/$slug"
                      params={{ slug: service!.slug }}
                      className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {service!.name}
                    </Link>
                  ))}
                </div>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  See services now <ArrowRight className="h-3 w-3" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* ANALYTICAL CREATIVE SYSTEM */}
      <section className="relative overflow-hidden bg-gradient-blue text-secondary-foreground">
        <div className="absolute inset-0 bg-mesh opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">/ what makes me different</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Analytical thinking. Creative execution. Measurable outcomes.
            </h2>
            <p className="mt-5 text-base lg:text-lg opacity-90 leading-relaxed">
              My Mathematics and Computer Science background gives the work a practical advantage: clearer structure, stronger web performance, better reporting and decisions that can be explained to a boardroom, not just defended by taste.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Strategy translated into visual systems",
                "Fast websites built for search and conversion",
                "Campaign decisions shaped by real data",
                "Reporting that connects design to ROI",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:opacity-90 transition-opacity">
              Read my full story now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2rem] border-2 border-gold/30 overflow-hidden shadow-elegant">
              <img src={workImg} loading="lazy" decoding="async" alt="Paul Ngunjiri at work" className="h-full w-full object-contain" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold text-gold-foreground rounded-2xl p-5 shadow-elegant max-w-[220px] rotate-3">
              <div className="font-display text-2xl font-bold leading-none">ROI</div>
              <div className="mt-2 text-xs font-medium">Where creative work proves its value.</div>
            </div>
          </div>
        </div>
      </section>

      <ProcessShowcase
        title="A clear path from brief to launch."
        intro="Follow the project from first conversation to launch with a simple progress view, practical activities and clear deliverables at every stage."
        stages={processStages}
      />

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ recent work</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Selected projects.</h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary">
            See more work now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((p, index) => {
            const previewSrc = getProjectPreview(index, p.preview);
            return (
              <article key={p.slug} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-muted/10">
                  <img
                    src={previewSrc}
                    alt={p.previewAlt ?? `${p.title} preview`}
                    loading="lazy"
                    decoding="async"
                    width={720}
                    height={720}
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

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ brands</span>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight">Brands and teams I have worked with.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            A growing mix of founders, organisations and campaign teams that needed clearer communication and stronger digital presence.
          </p>
        </div>
        <div className="brand-marquee mt-8 overflow-hidden rounded-3xl border border-border bg-card py-5 shadow-card">
          {[clientBrands, [...clientBrands].reverse()].map((row, rowIndex) => (
            <div key={rowIndex} className="brand-marquee-row overflow-hidden py-2">
              <div className={`brand-marquee-track flex w-max items-center gap-4 px-4 ${rowIndex === 1 ? "brand-marquee-track-reverse" : ""}`}>
                {[...row, ...row, ...row].map((brand, index) => (
                  <a
                    key={`${brand.name}-${rowIndex}-${index}`}
                    href={brand.url}
                    target={brand.url.startsWith("http") ? "_blank" : undefined}
                    rel={brand.url.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={brand.name}
                    title={`${brand.name} - ${brand.description}`}
                    className="group relative flex h-32 min-w-[230px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-white px-6 py-5 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
                  >
                    {brand.logo ? (
                      <span className="flex h-24 w-full items-center justify-center transition-transform duration-300 group-hover:-translate-y-3">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          loading="lazy"
                          decoding="async"
                          style={{ transform: `scale(${brand.logoScale ?? 1.12})` }}
                          className="max-h-24 max-w-[190px] object-contain"
                        />
                      </span>
                    ) : (
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-lg font-bold text-primary-foreground shadow-card transition-transform duration-300 group-hover:-translate-y-3 group-hover:scale-105">{brand.mark}</span>
                    )}
                    <span className="pointer-events-none absolute inset-x-3 bottom-2 translate-y-2 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="block truncate text-xs font-semibold text-slate-700">{brand.name}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <GoogleReviews />

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
              From a single identity system to a full brand-and-launch engine - let's get on a call and scope it properly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground hover:opacity-90 transition-colors">
                Hire me now
              </Link>
              <Link to="/services" className="rounded-full border-2 border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">
                See services now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
