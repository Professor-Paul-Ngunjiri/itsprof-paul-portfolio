import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/site";
import { ProjectCover } from "@/components/ProjectCover";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — ItsProf Paul · Brand, Web, Photo, Film, Marketing, Editorial" },
      { name: "description", content: "Selected projects by Paul Ngunjiri across branding, web, photography, video, marketing, packaging and editorial documents." },
      { property: "og:title", content: "Portfolio — Paul Ngunjiri" },
      { property: "og:description", content: "100+ projects across 16 disciplines." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [active, setActive] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>(["All"]);
    projects.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, []);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="relative bg-hero overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 text-center">
          <span className="hero-eyebrow">/ portfolio</span>
          <h1 className="mt-3 font-display text-5xl lg:text-7xl font-bold tracking-tighter">
            My work <span className="text-gradient-gold">speaks for itself.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/85">
            Browse 100+ projects across design, development, film, marketing and editorial. Each shipped, each measured, each held to a portfolio-grade bar.
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <article key={p.slug} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border hover:-translate-y-1 transition-transform">
              <ProjectCover title={p.title} category={p.category} hue={p.hue} className="h-full w-full" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-white/90">{p.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white">
                  View case study <ArrowRight className="h-3 w-3" />
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
