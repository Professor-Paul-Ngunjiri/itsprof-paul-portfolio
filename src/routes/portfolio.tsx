import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — ItsProf Paul · Brand, Web, Photo, Film, Marketing" },
      { name: "description", content: "Selected projects by Paul Ngunjiri across branding, web, photography, video and digital marketing." },
      { property: "og:title", content: "Portfolio — Paul Ngunjiri" },
      { property: "og:description", content: "100+ projects across 15 disciplines." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const categories = ["All", "Branding", "Web Dev", "UI/UX", "Photography", "Video", "Marketing"];

function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 text-center">
          <span className="hero-eyebrow">/ portfolio</span>
          <h1 className="mt-3 font-display text-5xl lg:text-7xl font-bold tracking-tighter">
            My work <span className="text-gradient-gold">speaks for itself.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
            Browse 100+ projects across design, development, film and marketing. Each shipped, each measured, each held to a portfolio-grade bar.
          </p>
          <Link to="/contact" className="btn-hero-primary mt-8">
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 -mx-2 px-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-card"
                  : "border-border hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <article key={p.slug} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <div className={`absolute inset-0 ${
                i % 4 === 0 ? "bg-gradient-primary" : i % 4 === 1 ? "bg-gradient-blue" : i % 4 === 2 ? "bg-gradient-gold" : "bg-secondary"
              }`} />
              <div className="absolute inset-0 bg-mesh opacity-30" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-primary-foreground">
                <div className="inline-flex w-fit rounded-full bg-background/20 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
                  {p.category}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm opacity-90">{p.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View case study <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-full border-2 border-border px-6 py-3.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
            Explore my full visual archive on Pinterest <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="rounded-[2.5rem] bg-gradient-blue text-secondary-foreground p-12 lg:p-16 text-center shadow-elegant">
          <h2 className="font-display text-4xl lg:text-5xl font-bold">Impressed? Let's create your next success story.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground">Get a quote</Link>
            <Link to="/services" className="rounded-full border-2 border-secondary-foreground/40 px-6 py-3.5 text-sm font-semibold">View services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
