import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, site } from "@/lib/site";
import paulWorkPreview from "@/assets/paul-work.webp";
import paulHeroPreview from "@/assets/paul-hero.webp";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Premium Brand, Web, Content & Growth Work by Paul Ngunjiri" },
      { name: "description", content: "Selected brand, web, UI/UX, photography, video, marketing, packaging and editorial projects by Paul Ngunjiri." },
      { property: "og:title", content: "Portfolio | Paul Ngunjiri" },
      { property: "og:description", content: "Selected work across four connected pillars: brand, web, media and growth." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState("Featured");
  const featuredSlugs = ["savanna-coffee", "msafiri-travel", "echo-records"];
  const featuredProjects = useMemo(
    () => projects.filter((project) => featuredSlugs.includes(project.slug)),
    []
  );
  const [selectedSlug, setSelectedSlug] = useState(featuredProjects[0]?.slug ?? projects[0]?.slug ?? "");

  const categories = useMemo(() => {
    const set = new Set<string>(["All"]);
    projects.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, []);

  const years = useMemo(() => {
    const set = new Set<string>(["All"]);
    projects.forEach((p) => p.year && set.add(p.year));
    return Array.from(set).sort((a, b) => (a === "All" ? -1 : b === "All" ? 1 : Number(b) - Number(a)));
  }, []);

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesYear = activeYear === "All" || p.year === activeYear;
        const matchesQuery =
          query.trim() === "" ||
          [p.title, p.client, p.category, p.desc].some((value) =>
            value?.toLowerCase().includes(query.trim().toLowerCase())
          );
        return matchesCategory && matchesYear && matchesQuery;
      }),
    [activeCategory, activeYear, query]
  );

  const sortOptions = [
    { value: "Featured", label: "Featured" },
    { value: "Newest", label: "Newest first" },
    { value: "Category", label: "Category A → Z" },
  ];

  const sortedProjects = useMemo(() => {
    const projectsToSort = [...filtered];
    if (sortMode === "Newest") {
      return projectsToSort.sort((a, b) => (b.year ?? "0").localeCompare(a.year ?? "0") || a.title.localeCompare(b.title));
    }
    if (sortMode === "Category") {
      return projectsToSort.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
    }
    return projectsToSort.sort((a, b) => {
      const scoreA = featuredSlugs.includes(a.slug) ? 0 : 1;
      const scoreB = featuredSlugs.includes(b.slug) ? 0 : 1;
      if (scoreA !== scoreB) return scoreA - scoreB;
      return (b.year ?? "0").localeCompare(a.year ?? "0") || a.title.localeCompare(b.title);
    });
  }, [filtered, sortMode]);

  useEffect(() => {
    if (!filtered.some((project) => project.slug === selectedSlug)) {
      setSelectedSlug(filtered[0]?.slug ?? projects[0]?.slug ?? "");
    }
  }, [filtered, selectedSlug]);

  const previewPlaceholderImages = [
    paulWorkPreview,
    paulHeroPreview,
  ];

  const getPlaceholderPreview = (index: number) => previewPlaceholderImages[index % previewPlaceholderImages.length];

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === selectedSlug) ?? projects[0],
    [selectedSlug]
  );

  const selectedPreview = previewPlaceholderImages[0];

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
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-elegant">
            <div className="mb-8 overflow-hidden rounded-[2rem] border border-border bg-muted/5">
              <img
                src={selectedPreview}
                alt={selectedProject.previewAlt ?? `${selectedProject.title} preview`}
                className="h-[360px] w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Featured case study</span>
                <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-foreground">
                  {selectedProject.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A hand-picked example chosen to show the range of systems, launch-ready work and measurable outcomes delivered for clients across brand, digital and media.
                </p>
              </div>
              <div className="space-y-3 text-left lg:text-right">
                {selectedProject.client ? (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Client</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">{selectedProject.client}</p>
                  </div>
                ) : null}
                {selectedProject.metric ? (
                  <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    {selectedProject.metric}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-border bg-muted/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Category</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{selectedProject.category}</p>
              </div>
              <div className="rounded-3xl border border-border bg-muted/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Year</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{selectedProject.year ?? "Ongoing"}</p>
              </div>
              <div className="rounded-3xl border border-border bg-muted/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Deliverable</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{selectedProject.liveUrl ? "Live site or app" : "Creative system"}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-muted/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why this is featured</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Clear business outcome, strong creative execution.</li>
                  <li>High-value systems, launch-ready assets and measurable impact.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-muted/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">How clients use it</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>As a benchmark for brand refreshes or product launches.</li>
                  <li>To evaluate craftsmanship, speed and launch thinking.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {selectedProject.liveUrl ? (
                <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10">
                  Visit live project <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                Book a discovery call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[2rem] border border-border bg-card p-5 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Curated highlights</div>
                  <p className="mt-2 text-sm text-foreground">Pick a case study to see why it matters.</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary">Featured</span>
              </div>
            </div>
            {featuredProjects.map((project) => {
              const isActive = project.slug === selectedSlug;
              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setSelectedSlug(project.slug)}
                  className={`w-full rounded-[2rem] border px-5 py-5 text-left transition ${
                    isActive ? "border-primary bg-primary/10 shadow-card" : "border-border bg-card hover:border-primary"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{project.client}</p>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{project.year}</div>
                  </div>
                  <div className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.desc}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Portfolio filters</div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-muted/80 px-4 py-2 text-sm font-semibold text-foreground">{sortedProjects.length} matching projects</span>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                  setActiveYear("All");
                  setSortMode("Featured");
                }}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <div className="rounded-3xl border border-border bg-card p-4">
              <label className="block text-sm font-semibold text-foreground">Search projects</label>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by client, category, outcome or title"
                className="mt-3 w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
            </div>
            <div className="rounded-3xl border border-border bg-card p-4">
              <label className="block text-sm font-semibold text-foreground">Sort by</label>
              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value)}
                className="mt-3 w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 overflow-x-auto pb-3 mb-10 -mx-2 px-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === c
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-card"
                  : "border-border hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {sortedProjects.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((p, index) => {
              const isSelected = p.slug === selectedSlug;
              const previewSrc = getPlaceholderPreview(index);
              return (
                <article key={p.slug} className={`group relative overflow-hidden rounded-2xl border bg-card shadow-card transition-transform ${isSelected ? "border-primary ring-1 ring-primary/20" : "border-border hover:-translate-y-1 hover:shadow-xl"}`}>
                  <div className="relative aspect-square overflow-hidden bg-muted/10">
                      <img
                        src={previewSrc}
                        alt={p.previewAlt ?? `${p.title} preview`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="rounded-3xl bg-gradient-warm p-4 text-white backdrop-blur-sm shadow-xl border border-white/15">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-white">{p.category}</p>
                        <p className="mt-2 text-lg font-semibold tracking-tight text-white">{p.title}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-cool p-4 text-white backdrop-blur-sm shadow-2xl border border-white/10">
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
                          <button type="button" onClick={() => setSelectedSlug(p.slug)} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:border-primary hover:text-primary">
                            Open case study <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                          {p.liveUrl ? (
                            <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:border-primary hover:text-primary">
                              Visit live <ExternalLink className="h-3.5 w-3.5" />
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
        ) : (
          <div className="rounded-[2rem] border border-border bg-card p-10 text-center text-sm text-muted-foreground shadow-elegant">
            <p className="font-semibold text-foreground">No matching projects found.</p>
            <p className="mt-3">Try a broader keyword, reset the year filter, or view all categories.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <a href={site.socials.pinterest.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-border px-6 py-3.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
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
