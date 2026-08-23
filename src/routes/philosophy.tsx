import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, CheckCircle2, Compass, Lightbulb, PenTool } from "lucide-react";
import { beliefStatements, thinkingPrinciples } from "@/data/philosophy";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Philosophy | How Paul Ngunjiri Thinks and Works" },
      { name: "description", content: "The thinking principles behind Paul Ngunjiri's work across strategy, branding, technology, digital growth and consulting." },
    ],
  }),
  component: Philosophy,
});

function Philosophy() {
  return (
    <>
      <section id="how-i-think" className="relative scroll-mt-28 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <span className="hero-eyebrow">/ philosophy</span>
            <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tighter lg:text-7xl">How I think before I build.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              My work begins underneath the surface: business context, customer behaviour, perception, technology, communication and the systems that connect them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-hero-primary">Work With Me <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/services" className="btn-hero-outline">Explore Capabilities</Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-elegant backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Think", "Define the real problem."],
                ["Teach", "Make ideas clear enough to use."],
                ["Create", "Shape perception and experience."],
                ["Build", "Turn strategy into working systems."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <div className="font-display text-2xl font-bold">{title}</div>
                  <p className="mt-2 text-xs leading-relaxed text-white/75">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-i-work" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { icon: Lightbulb, title: "I look for the real problem", desc: "A website problem may be a trust problem. A lead problem may be a positioning problem. I start there." },
            { icon: Compass, title: "I connect strategy to execution", desc: "Ideas only matter when they become useful decisions, useful content and useful digital systems." },
            { icon: PenTool, title: "I build with human context", desc: "The goal is not to impress a designer. It is to help real people understand, trust and act." },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="inline-flex rounded-2xl bg-primary/10 p-3">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="operating-principles" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ operating principles</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">The thinking system behind the work.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            These are the principles I use whether I am advising a founder, designing an identity, planning a website, building a system or shaping a campaign.
          </p>
        </div>
        <div className="grid gap-5">
          {thinkingPrinciples.map((principle, index) => (
            <article key={principle.title} className="grid gap-6 rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary lg:grid-cols-[0.35fr_0.65fr]">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary">/{String(index + 1).padStart(2, "0")}</div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">{principle.title}</h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-foreground">{principle.desc}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{principle.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="beliefs" className="scroll-mt-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ beliefs</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">What I believe.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              These principles shape what I teach, what I build and how I advise businesses.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beliefStatements.map((belief) => (
              <div key={belief} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-display text-lg font-semibold">{belief}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy-cta" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-primary p-10 text-center text-primary-foreground shadow-elegant">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Brain className="h-8 w-8 text-gold" />
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold">Need this kind of thinking on your project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
            Bring the business challenge, the ambition or even the confusion. I will help turn it into a clearer path.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
