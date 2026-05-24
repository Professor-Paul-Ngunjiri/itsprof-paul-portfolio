import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, Download, Sparkles } from "lucide-react";
import { values } from "@/lib/site";
import aboutImg from "@/assets/paul-about.webp";
import portraitImg from "@/assets/paul-portrait.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Paul Ngunjiri · ItsProf Paul" },
      { name: "description", content: "Nairobi-based multi-disciplinary creative with a BSc in Mathematics & Computer Science. The story behind ItsProf Paul." },
      { property: "og:title", content: "About — Paul Ngunjiri" },
      { property: "og:description", content: "Where Mathematics Meets Creativity. The story, the values, the experience." },
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
              I'm Paul.<br />
              <span className="text-gradient-gold">Mathematical rigour</span> meets creative craft.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              I blend a BSc in Mathematics & Computer Science with creative practice to build brands, products and campaigns that are both beautiful and measurable. My work focuses on clarity, performance and results — the kind clients notice in the first reporting cycle.
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
          <div className="relative">
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 border-border bg-muted/20 shadow-elegant">
              <div className="flex h-full w-full items-center justify-center bg-muted/10 p-6">
                <img src={aboutImg} loading="eager" fetchPriority="high" decoding="async" alt="Paul Ngunjiri" className="max-h-full max-w-full object-contain object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ story</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">From theorems to typography.</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I bring a disciplined, systems-driven approach to brand, web and campaign work. The training I received in Mathematics & Computer Science gives every decision a clearer logic, better performance and stronger long-term value.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the last four years, I’ve worked with ambitious brands across Kenya, East Africa and international markets. The work varies — identity, digital products, film, marketing systems — but the process is consistently grounded in research, strategic clarity and a launch-ready approach.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              {
                title: "Systems-first creative",
                text: "Every visual decision is backed by layout rules, scale systems and accessible structure.",
              },
              {
                title: "Numbers that shape design",
                text: "Metrics, tests and user data guide the details, so the outcome feels both beautiful and effective.",
              },
              {
                title: "Handoff without friction",
                text: "Deliverables are built for teams: design tokens, source files, launch guides and clarity at every step.",
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

      {/* MATHS × CREATIVITY */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ superpower</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Maths + Creativity = my edge.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { t: "Left brain", c: ["Analytical", "Logical", "Data-driven", "Systematic", "Precise"], cls: "bg-gradient-blue text-secondary-foreground" },
              { t: "The overlap", c: ["Data visualisation", "UX research", "Brand strategy", "Design systems", "Campaign analytics"], cls: "bg-gradient-primary text-primary-foreground shadow-elegant scale-105" },
              { t: "Right brain", c: ["Creative", "Expressive", "Visual", "Emotional", "Intuitive"], cls: "bg-gradient-gold text-gold-foreground" },
            ].map((b) => (
              <div key={b.t} className={`${b.cls} rounded-3xl p-7`}>
                <h3 className="font-display text-2xl font-bold">{b.t}</h3>
                <ul className="mt-4 space-y-2">
                  {b.c.map((x) => <li key={x} className="text-sm font-medium flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> {x}</li>)}
                </ul>
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
              <div className="text-xs font-mono text-muted-foreground">2017 — 2021</div>
              <h3 className="mt-1 font-display text-xl font-semibold">BSc Mathematics & Computer Science</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Core modules: algorithms, data structures, probability & statistics, computational mathematics, systems programming.
              </p>
            </div>
            <div className="border-l-2 border-border pl-5">
              <div className="text-xs font-mono text-muted-foreground">— 2017</div>
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
                <div className="text-xs text-muted-foreground">{c.org} · {c.year}</div>
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
            <h2 className="mt-2 font-display text-4xl lg:text-5xl font-bold">Fourteen guiding principles, explained plainly.</h2>
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
            Outside the studio I read a lot (currently: design systems books and competitive maths puzzles), shoot Nairobi street life on weekends, and drink an embarrassing amount of single-origin coffee. I think best on long walks and I believe the best brief always starts with a real conversation.
          </p>
          <p className="mt-4 font-display italic text-xl text-foreground">
            "Beauty is in the math. Math is in the beauty."
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card hover:shadow-glow transition-shadow">
            Work with me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
