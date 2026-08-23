import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Compass, Layers3, Target } from "lucide-react";
import { getCapabilityGroup, getCapabilityImage, getCapabilityLine } from "@/lib/site";

const pricingNote = "Starting prices indicate the entry point for individual services within this capability. Final investment depends on scope, complexity and engagement model.";

export const Route = createFileRoute("/capabilities/$slug")({
  loader: ({ params }) => {
    const group = getCapabilityGroup(params.slug);
    const capability = getCapabilityLine(params.slug);
    if (!group && !capability) throw notFound();
    return { group, capability };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.group?.title ?? loaderData?.capability?.name ?? "Capability";
    const description = loaderData?.group?.desc ?? loaderData?.capability?.desc ?? "Digital strategy, creative, technology and growth capability by Paul Ngunjiri.";
    return {
      meta: [
        { title: `${title} | Paul Ngunjiri` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} | Paul Ngunjiri` },
        { property: "og:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/capabilities/${loaderData?.group?.slug ?? loaderData?.capability?.slug}` }],
    };
  },
  component: CapabilityPage,
});

function CapabilityPage() {
  const { group, capability } = Route.useLoaderData();
  const isGroup = Boolean(group);
  const title = group?.title ?? capability!.name;
  const eyebrow = group ? `/${group.number} capability` : `/${capability!.group}`;
  const description = group?.desc ?? capability!.desc;
  const heroImage = group?.heroImage ?? getCapabilityImage(capability!.slug, capability!.groupNumber);
  const price = group?.startingAt ?? capability!.price;
  const timeline = group?.estimatedTimeline ?? capability!.timeline;
  const bestFor = group?.bestFor ?? "Clients who need this work done with strategy, taste, technical discipline and business context.";

  return (
    <>
      <section id="capability-hero" className="relative scroll-mt-28 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-28">
          <div>
            <span className="hero-eyebrow">{eyebrow}</span>
            <h1 className="mt-3 font-display text-5xl font-bold tracking-tighter lg:text-7xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{description}</p>
            <div className="mt-6 grid gap-3 text-sm text-white/82 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/60">{group ? "Investment" : "Starting investment"}</div>
                <div className="mt-1 font-display text-lg font-semibold">{price}</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/60">{group ? "Engagement" : "Delivery"}</div>
                <div className="mt-1 font-display text-lg font-semibold">{group?.engagement ?? timeline}</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/60">Mode</div>
                <div className="mt-1 font-display text-lg font-semibold">Strategy-led</div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={capability?.relatedServiceSlug ? { service: capability.relatedServiceSlug } : {}}
                className="btn-hero-primary"
              >
                Work With Me <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-hero-outline">Explore all capabilities</Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gold/20 blur-3xl" />
            <img
              src={heroImage}
              alt={`${title} by Paul Ngunjiri`}
              className="relative aspect-[4/3] w-full rounded-[2rem] border border-white/15 object-cover shadow-elegant"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section id="capability-overview" className="mx-auto grid max-w-7xl scroll-mt-28 gap-6 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <aside className="rounded-3xl border border-border bg-card p-7 shadow-card">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">Best for</div>
          <p className="mt-3 text-lg leading-relaxed">{bestFor}</p>
          {group ? (
            <p className="mt-5 rounded-2xl border border-border bg-muted/35 p-4 text-xs leading-relaxed text-muted-foreground">{pricingNote}</p>
          ) : null}
          <div className="mt-7 grid gap-3 text-sm">
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-primary" />
              <span>{timeline}</span>
            </div>
            <div className="flex items-start gap-2">
              <Layers3 className="mt-0.5 h-4 w-4 text-primary" />
              <span>{isGroup ? `${group!.lines.length} service lines included` : `${capability!.groupNumber} / ${capability!.group}`}</span>
            </div>
          </div>
        </aside>

        {group ? (
          <article className="rounded-3xl border border-border bg-card p-7 shadow-card">
            <h2 className="font-display text-3xl font-bold">What is included under {group.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This capability group helps you choose the right starting point, then move into the exact service line that matches your goal, timeline and investment level.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {group.lines.map((line) => (
                <Link
                  key={line.slug}
                  to="/capabilities/$slug"
                  params={{ slug: line.slug }}
                  className="group rounded-2xl border border-border bg-muted/25 p-5 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-card"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{line.name}</h3>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{line.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{line.price}</span>
                    <span className="rounded-full bg-background px-3 py-1 text-muted-foreground">{line.timeline}</span>
                  </div>
                </Link>
              ))}
            </div>
          </article>
        ) : (
          <div className="grid gap-6">
            <article className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">Authoritative service pricing</div>
              <h2 className="mt-2 font-display text-3xl font-bold">{capability!.price}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                This is the starting investment for {capability!.name}. If the scope includes extra pages, campaign assets, integrations, production days, ad spend, support or urgent delivery, the final quote is adjusted before work begins.
              </p>
              {capability!.price.includes("ad spend") ? (
                <div className="mt-4 rounded-2xl border border-primary/25 bg-primary/10 p-4 text-sm text-primary">
                  The management fee covers strategy, setup and optimisation. Advertising spend is paid separately by the client directly to the ad platform.
                </div>
              ) : null}
            </article>

            <article className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <h2 className="font-display text-3xl font-bold">What you get</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {capability!.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <h2 className="font-display text-3xl font-bold">Why it matters</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {capability!.outcomes.map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-muted/35 p-4 text-sm font-semibold">
                    <Target className="mb-3 h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        )}
      </section>

      <section id="problem-solution-process" className="scroll-mt-28 bg-muted/35">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["Problem", group ? "We identify which service line actually fits the business problem, so you do not buy activity that does not move the result." : `Most ${title.toLowerCase()} requests are really clarity, trust, conversion, efficiency or communication problems. We define that before execution.`],
              ["Solution", "The work is shaped around strategy, useful deliverables, practical implementation and a clear handoff instead of scattered tasks."],
              ["Process", "Brief, diagnosis, scope, creation, review, delivery and next-step guidance. Complex work may include deeper discovery, testing or post-launch support."],
            ].map(([itemTitle, copy]) => (
              <div key={itemTitle} className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <Compass className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold">{itemTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capability-faq" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["What determines the final investment?", "Scope, complexity, number of deliverables, integrations, production requirements, timeline, revisions and support level."],
            ["Can we start small?", "Yes. The entry point is designed for serious clients who want to begin with the right scope before expanding."],
            ["How fast can this be delivered?", group ? group.estimatedTimeline : capability!.timeline],
          ].map(([question, answer]) => (
            <article key={question} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold">{question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="capability-cta" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-primary p-8 text-center text-primary-foreground shadow-elegant lg:p-12">
          <h2 className="font-display text-4xl font-bold">Ready to discuss {title}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
            Send a short brief and I will help clarify the best path, practical scope, timeline and investment level.
          </p>
          <Link
            to="/contact"
            search={capability?.relatedServiceSlug ? { service: capability.relatedServiceSlug } : {}}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
