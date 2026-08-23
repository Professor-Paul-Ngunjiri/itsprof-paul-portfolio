import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  Compass,
  ExternalLink,
  Facebook,
  Hammer,
  Instagram,
  Linkedin,
  Mic2,
  MonitorCog,
  Music2,
  PenTool,
  Target,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { beliefStatements, capabilityGroups, clientBrands, projects, site, thinkingPrinciples } from "@/lib/site";
import { GoogleReviews } from "@/components/GoogleReviews";
import heroImg from "@/assets/paul-hero.webp";
import workImg from "@/assets/paul-work.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paul Ngunjiri | Digital Strategist, Creator & Consultant" },
      {
        name: "description",
        content:
          "Paul Ngunjiri is a Digital Strategist, Creator and Consultant helping ambitious businesses turn ideas, brands and technology into digital experiences and growth systems.",
      },
      {
        name: "keywords",
        content:
          "Paul Ngunjiri, ItsProf Paul, Digital Strategist Kenya, digital consultant Nairobi, brand strategy, digital transformation, websites, digital marketing, Pahwah Digitech",
      },
      { property: "og:title", content: "Paul Ngunjiri | Digital Strategist, Creator & Consultant" },
      {
        property: "og:description",
        content:
          "I think, build and teach at the intersection of strategy, branding, technology and digital marketing.",
      },
    ],
  }),
  component: Index,
});

const identityPoints = [
  "Business",
  "Technology",
  "Branding",
  "Marketing",
  "Human behaviour",
];

const signatureModes = [
  {
    icon: Brain,
    title: "Think",
    desc: "I explore business, technology, branding, marketing, psychology and digital transformation.",
    items: ["Digital strategy", "Business systems", "Customer psychology", "AI", "Entrepreneurship"],
  },
  {
    icon: BookOpen,
    title: "Teach",
    desc: "I share practical knowledge through content, education and frameworks that make digital decisions easier.",
    items: ["Videos", "Articles", "Guides", "Tutorials", "Talks"],
  },
  {
    icon: Hammer,
    title: "Build",
    desc: "I do not only discuss ideas. I apply them through brands, websites, content, systems and digital products.",
    items: ["Brands", "Websites", "Software", "Marketing systems", "Digital products"],
  },
];

const workModes = [
  {
    title: "Strategic Consulting",
    desc: "For businesses needing clarity, direction and expert perspective before they invest.",
  },
  {
    title: "Project Work",
    desc: "For businesses needing a brand, website, campaign, system or digital experience designed and built.",
  },
  {
    title: "Digital Transformation",
    desc: "For organisations modernising how they operate, communicate, market and grow.",
  },
  {
    title: "Long-Term Partnership",
    desc: "For teams that need continuous strategic, creative and digital support.",
  },
];

const insightCategories = [
  { title: "Think", desc: "Business, strategy, technology and ideas." },
  { title: "Build", desc: "Projects, experiments and creation." },
  { title: "Learn", desc: "Tutorials and educational content." },
  { title: "Observe", desc: "Lessons about brands, markets and human behaviour." },
];

const speakingTopics = [
  "Digital Transformation",
  "Branding Beyond Logos",
  "Websites as Business Systems",
  "Digital Marketing Strategy",
  "AI for Business",
  "Building Digital Systems",
];

function Index() {
  const previewImages = [workImg, heroImg];
  const getProjectPreview = (index: number, preview?: string) => preview ?? previewImages[index % previewImages.length];
  const [brandPage, setBrandPage] = useState(0);
  const [brandPaused, setBrandPaused] = useState(false);
  const brandsPerPage = 12;
  const brandPages = Math.max(1, Math.ceil(clientBrands.length / brandsPerPage));
  const visibleBrands = useMemo(() => {
    const start = brandPage * brandsPerPage;
    return clientBrands.slice(start, start + brandsPerPage);
  }, [brandPage]);

  useEffect(() => {
    if (brandPaused || brandPages <= 1) return;
    const timer = window.setInterval(() => {
      setBrandPage((page) => (page + 1) % brandPages);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [brandPaused, brandPages]);

  return (
    <>
      <section id="hero" className="relative scroll-mt-28 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-12 lg:px-8 lg:py-16">
          <div className="lg:col-span-7">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/85 backdrop-blur">
              Paul Ngunjiri / ItsProf Paul
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-[2.8rem] font-bold leading-[0.98] tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Digital Strategist, Creator & Consultant
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/86">
              I think, build and teach at the intersection of strategy, branding, technology and digital marketing.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              I help ambitious businesses turn ideas, brands and technology into digital experiences and growth systems that create real business value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-hero-primary group">
                Work With Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/portfolio" className="btn-hero-outline">
                Explore My Work
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4 text-white/70">
              {[
                { i: Linkedin, h: site.socials.linkedin.url },
                { i: Instagram, h: site.socials.instagram.url },
                { i: Facebook, h: site.socials.facebook.url },
                { i: Music2, h: site.socials.tiktok.url },
              ].map((social, index) => (
                <a key={index} href={social.h} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                  <social.i className="h-5 w-5" />
                </a>
              ))}
              <span className="text-xs uppercase tracking-widest">Think / Teach / Create / Build / Advise</span>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute inset-8 rounded-full bg-gold/20 blur-3xl" />
            <img
              src={heroImg}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              alt="Paul Ngunjiri - Digital Strategist, Creator and Consultant"
              className="relative mx-auto max-h-[620px] w-full object-contain drop-shadow-[0_35px_80px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </section>

      <section id="who-is-paul" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ who I am</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              I work where business problems meet digital possibilities.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am not only a designer or developer. My work sits at the intersection of business, technology, branding, marketing and human behaviour.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I focus on understanding challenges, developing strategies and building practical solutions that create measurable value. Sometimes that becomes a brand. Sometimes it becomes a website, a campaign, a workflow, a digital product or a better way for a business to make decisions.
            </p>
            <div className="grid gap-3 sm:grid-cols-5">
              {identityPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-card px-4 py-4 text-center text-sm font-semibold shadow-card">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-i-think-before-build" className="scroll-mt-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">/ philosophy</span>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight lg:text-5xl">How I think before I build.</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                The full philosophy now lives on its own page. On the homepage, the point is simple: I do not start with tools, templates or random activity. I start by understanding the real business problem.
              </p>
              <Link to="/philosophy" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card">
                Read my philosophy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {thinkingPrinciples.slice(0, 4).map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <span className="font-mono text-xs text-muted-foreground">/{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              ))}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <h3 className="font-display text-lg font-semibold">What I believe</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {beliefStatements.slice(0, 4).map((belief) => (
                    <span key={belief} className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                      {belief}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-i-believe" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ signature</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight lg:text-5xl">Think. Teach. Build.</h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            This is the centre of the personal brand: ideas are studied, explained and then applied in real business contexts.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {signatureModes.map((mode) => (
            <article key={mode.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="inline-flex rounded-2xl bg-primary/10 p-3">
                <mode.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{mode.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mode.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {mode.items.map((item) => (
                  <span key={item} className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ capabilities</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight lg:text-5xl">What I Can Help You Build</h2>
            <p className="mt-4 text-muted-foreground">
              These are areas where I help businesses create value. They are capabilities, not a disconnected menu of tasks.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilityGroups.map((group, index) => (
              <article key={group.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">/{group.number ?? String(index + 1).padStart(2, "0")}</span>
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <Link to="/capabilities/$slug" params={{ slug: group.slug }} className="font-display text-xl font-semibold hover:text-primary">
                  {group.title}
                </Link>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{group.desc}</p>
                <Link to="/capabilities/$slug" params={{ slug: group.slug }} className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  View capability overview <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <div className="mt-5 grid gap-2">
                  {group.lines.slice(0, 6).map((line) => (
                    <Link key={line.slug} to="/capabilities/$slug" params={{ slug: line.slug }} className="flex items-start gap-2 rounded-xl px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-primary">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{line.name}</span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card">
              Explore Capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="work-with-me" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-elegant">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ work with me</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">Let's Build Something Meaningful</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Whether you need strategic direction, a stronger digital presence, a new brand, a marketing system or technology solution, I approach every project from the same starting point:
            </p>
            <div className="mt-6 space-y-3 font-display text-xl font-semibold">
              <div>Understand the problem.</div>
              <div>Define the opportunity.</div>
              <div>Build the right solution.</div>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workModes.map((mode) => (
              <article key={mode.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <Compass className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold">{mode.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mode.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pahwah-ecosystem" className="relative scroll-mt-28 overflow-hidden bg-gradient-blue text-secondary-foreground">
        <div className="absolute inset-0 bg-mesh opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">/ ecosystem</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight lg:text-5xl">Building Through Pahwah Digitech</h2>
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              Pahwah Digitech is the digital company I founded to bring together strategy, creativity, technology and digital marketing under one ecosystem.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              While I work as a strategist, creator and consultant, Pahwah allows me to collaborate with a wider team and deliver larger multidisciplinary solutions. When working through Pahwah, clients still benefit from my strategic involvement while gaining access to broader company capabilities.
            </p>
            <a href={site.partner.url} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">
              Learn About Pahwah Digitech <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Paul", desc: "The individual: think, teach, create, advise, build and lead." },
              { title: "Pahwah", desc: "The company: think, build, deliver systems and solutions." },
              { title: "Shared Philosophy", desc: "Strategy, creativity and technology should create business value." },
              { title: "Client Experience", desc: "Work with Paul, with access to Pahwah capability when a larger solution is needed." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <Building2 className="h-5 w-5 text-gold" />
                <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/72">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio-preview" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ work</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight lg:text-5xl">Selected work with thinking behind it.</h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary">
            View Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <article key={project.slug} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={getProjectPreview(index, project.preview)}
                  alt={project.previewAlt ?? `${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</div>
                <h3 className="mt-2 font-display text-xl font-semibold">{project.title}</h3>
                <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Challenge:</span> Create a stronger digital signal for the audience.</p>
                  <p><span className="font-semibold text-foreground">Solution:</span> {project.desc}</p>
                  {project.metric ? <p><span className="font-semibold text-foreground">Outcome:</span> {project.metric}</p> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="insights-and-workshops" className="scroll-mt-28 bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ insights</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">Insights</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A thought leadership space for practical ideas about strategy, technology, branding, digital growth and creation.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {insightCategories.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <PenTool className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ education</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">Speaking & Workshops</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I also educate teams, founders and communities on how to think better about digital growth, technology and brand decisions.
            </p>
            <div className="mt-6 grid gap-3">
              {speakingTopics.map((topic) => (
                <div key={topic} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
                  <Mic2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ brands</span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight lg:text-4xl">Brands and teams I have worked with.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            A growing mix of founders, organisations and teams that needed clearer communication, stronger digital presence and better execution.
          </p>
        </div>
        <div
          className="mt-8 rounded-3xl border border-border bg-card p-4 shadow-card"
          onMouseEnter={() => setBrandPaused(true)}
          onMouseLeave={() => setBrandPaused(false)}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {visibleBrands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target={brand.url.startsWith("http") ? "_blank" : undefined}
              rel={brand.url.startsWith("http") ? "noreferrer" : undefined}
              aria-label={brand.name}
              title={brand.name}
              className="group flex h-28 flex-col items-center justify-center rounded-2xl border border-border bg-white px-4 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
            >
              <span className="flex h-16 w-full items-center justify-center">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    decoding="async"
                    style={{ transform: `scale(${brand.logoScale ?? 1.05})` }}
                    className="max-h-16 max-w-[125px] object-contain"
                  />
                ) : (
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-card">{brand.mark}</span>
                )}
              </span>
              <span className="mt-2 line-clamp-1 text-[11px] font-semibold text-slate-700">{brand.name}</span>
            </a>
          ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex justify-center gap-2">
              {Array.from({ length: brandPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show brand group ${index + 1}`}
                  onClick={() => setBrandPage(index)}
                  className={`h-2.5 rounded-full transition-all ${index === brandPage ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <div className="text-center text-xs text-muted-foreground sm:text-right">
              Showing {brandPage * brandsPerPage + 1}-{Math.min((brandPage + 1) * brandsPerPage, clientBrands.length)} of {clientBrands.length}. Share: <a href="#brands" className="font-semibold text-primary hover:underline">#brands</a>
            </div>
          </div>
        </div>
        <details className="mt-4 rounded-2xl border border-border bg-muted/30 p-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-primary">View all brands in one compact list</summary>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clientBrands.map((brand) => (
              <a key={brand.name} href={brand.url} target={brand.url.startsWith("http") ? "_blank" : undefined} rel={brand.url.startsWith("http") ? "noreferrer" : undefined} className="rounded-xl border border-border bg-background px-3 py-2 hover:text-primary">
                {brand.name}
              </a>
            ))}
          </div>
        </details>
      </section>

      <section id="reviews" className="scroll-mt-28">
        <GoogleReviews />
      </section>

      <section id="start-project" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-10 text-center text-primary-foreground shadow-elegant lg:p-16">
          <div className="absolute inset-0 bg-mesh opacity-30" />
          <div className="relative">
            <MonitorCog className="mx-auto h-9 w-9 text-gold" />
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight lg:text-6xl">
              Ready to turn a serious idea into a meaningful digital system?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85">
              Start with a conversation. I will help you clarify the problem, define the opportunity and choose the right way to build.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground">
                Work With Me
              </Link>
              <Link to="/services" className="rounded-full border-2 border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold">
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
