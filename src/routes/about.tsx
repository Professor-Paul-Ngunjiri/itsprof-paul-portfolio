import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, Download } from "lucide-react";
import { expertisePillars, values } from "@/lib/site";
import aboutImg from "@/assets/paul-about.webp";
import portraitImg from "@/assets/paul-portrait.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Paul Ngunjiri | Brand, Web & Creative Technology Partner" },
      { name: "description", content: "Meet Paul Ngunjiri, a Nairobi-based brand and web strategist helping ambitious teams build premium identities, websites, content and growth systems." },
      { property: "og:title", content: "About Paul Ngunjiri | ItsProf Paul" },
      { property: "og:description", content: "The values, process and professional standards behind ItsProf Paul." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const certs = [
  { name: "Google Analytics", org: "Google", year: "2024" },
  { name: "Google Ads", org: "Google", year: "2024" },
  { name: "Meta Blueprint", org: "Meta", year: "2023" },
  { name: "HubSpot Content Marketing", org: "HubSpot", year: "2023" },
  { name: "Adobe Creative Suite", org: "Adobe", year: "2022" },
  { name: "BSc Mathematics & CS", org: "University", year: "2021" },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="hero-eyebrow">/ about</span>
            <h1 className="mt-3 font-display text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              I'm Paul Ngunjiri.<br />
              <span className="text-gradient-gold">I turn ideas into trusted digital brands.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Popularly known as ItsProf Paul, I help founders, companies, churches, schools, NGOs, government teams and ambitious individuals build brands, websites, content and growth systems that look premium, feel clear and create real business confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/cv.pdf" className="btn-hero-primary">
                <Download className="h-4 w-4" /> Download my CV
              </a>
              <Link to="/contact" className="btn-hero-outline">
                Let's talk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
            <img src={aboutImg} loading="eager" fetchPriority="high" decoding="async" alt="Paul Ngunjiri" className="relative mx-auto h-full max-h-[560px] w-full object-contain object-center drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ story</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">Built for clients who need more than good-looking design.</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My work sits where strategy, design, technology and marketing meet. That means a logo is judged by how well it positions the brand, a website by how clearly it converts, and a campaign by the commercial signal it creates.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the last four years, I have worked with ambitious brands across Kenya, East Africa and international markets. The services vary - identity, digital products, film, marketing systems and proposal design - but the promise stays consistent: premium thinking, careful execution and professional communication from start to finish.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              {
                title: "Strategy before styling",
                text: "The brief starts with audience, positioning, offer clarity and the business result the work must support.",
              },
              {
                title: "Execution with a team mindset",
                text: "I can lead the creative direction and collaborate with specialist partners when a project needs production depth.",
              },
              {
                title: "Handoff without friction",
                text: "Deliverables are built for real teams: source files, usage notes, launch guides and clarity at every step.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONING PILLARS */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ positioning</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Four roles clients understand immediately.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {expertisePillars.map((pillar, index) => (
              <div key={pillar.title} className="rounded-3xl border border-border bg-card p-7 shadow-card">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ education</span>
          <h2 className="mt-2 font-display text-4xl font-bold">Academic foundation.</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-primary pl-5">
              <div className="text-xs font-mono text-muted-foreground">2017 - 2021</div>
              <h3 className="mt-1 font-display text-xl font-semibold">BSc Mathematics & Computer Science</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Core modules: algorithms, data structures, probability and statistics, computational mathematics and systems programming. I use that training to make the creative process structured, measurable and technically sound.
              </p>
            </div>
            <div className="border-l-2 border-border pl-5">
              <div className="text-xs font-mono text-muted-foreground">Before 2017</div>
              <h3 className="mt-1 font-display text-xl font-semibold">Secondary School Education</h3>
              <p className="mt-2 text-sm text-muted-foreground">Nairobi, Kenya.</p>
            </div>
          </div>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ certifications</span>
          <h2 className="mt-2 font-display text-4xl font-bold">Credentials.</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {certs.map((c) => (
              <div key={c.name} className="rounded-2xl border border-border bg-card p-4 hover:border-primary transition-colors">
                <Award className="h-5 w-5 text-gold" />
                <div className="mt-3 font-semibold text-sm">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.org} - {c.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ values</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold">Principles clients feel in the work.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-primary">/{(i+1).toString().padStart(2,"0")}</span>
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN SIDE */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-square rounded-[2rem] overflow-hidden border border-border shadow-elegant">
          <img src={portraitImg} loading="lazy" decoding="async" alt="Paul Ngunjiri portrait" className="h-full w-full object-contain" />
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ off-screen</span>
          <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold">The human behind the work.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Outside the studio I study design systems, product strategy, visual culture and the businesses behind memorable brands. I think best in calm conversations, which is why the best projects usually begin with a clear brief, honest constraints and a shared ambition to build something that lasts.
          </p>
          <p className="mt-4 font-display italic text-xl text-foreground">
            "Premium work is not noise. It is clarity, taste and discipline working together."
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card hover:shadow-glow transition-shadow">
            Work with me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
