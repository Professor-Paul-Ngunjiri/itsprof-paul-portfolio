import { Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, ChevronDown, Menu, Moon, Send, Sun, Terminal, X } from "lucide-react";
import { useState } from "react";
import { servicePillars, services, site } from "@/lib/site";
import { useTheme } from "@/hooks/use-theme";
import logo from "/logo.svg?url";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const groupedServices = servicePillars.map((pillar) => ({
    group: pillar.title,
    desc: pillar.desc,
    items: pillar.services
      .map((slug) => services.find((service) => service.slug === slug))
      .filter(Boolean),
  }));
  const featuredServices = services.filter((service) => ["brand-identity", "web-development", "ui-ux-design", "digital-marketing"].includes(service.slug));

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/70 bg-background/88 shadow-card backdrop-blur-xl">
      <div className="hidden border-b border-border/50 bg-muted/35 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-[11px] font-medium text-muted-foreground lg:px-8">
          <span>
            Brand, web, content and growth partner. Connected to{" "}
            <a href={site.partner.url} target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">
              {site.partner.name}
            </a>
            .
          </span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp me now</a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="ItsProf Paul home">
          <img src={logo} alt="ItsProf Paul" className="h-12 w-auto object-contain md:h-14" />
          <div className="hidden leading-tight sm:block">
            <div className="font-display text-sm font-bold">ItsProf Paul</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Creative systems</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.slice(0, 3).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "text-primary bg-primary/10" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              to="/services"
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "text-primary bg-primary/10" }}
            >
              Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full w-[760px] max-w-[92vw] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background shadow-elegant">
                <div className="grid grid-cols-[0.9fr_1.6fr]">
                  <div className="bg-gradient-primary p-6 text-primary-foreground">
                    <div className="inline-flex rounded-2xl bg-white/10 p-3">
                      <BriefcaseBusiness className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold">Focused service pillars, one coordinated delivery system.</h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/85">
                      Choose the outcome you need and move quickly from interest to a clear, priced brief.
                    </p>
                    <Link to="/contact" search={{ service: "brand-identity" }} className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-gold-foreground">
                      Hire me now <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-3 p-4 max-h-[58vh] overflow-auto scrollbar-hide">
                    {groupedServices.map(({ group, desc, items }) => (
                      <div key={group} className="rounded-xl border border-border bg-card p-3">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-primary">{group}</div>
                        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{desc}</p>
                        <div className="mt-2 space-y-1.5">
                          {items.map((service) => (
                            <Link
                              key={service!.slug}
                              to="/services/$slug"
                              params={{ slug: service!.slug }}
                              className="block rounded-lg px-2 py-1.5 text-xs leading-tight text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              {service!.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-border bg-muted/35 px-5 py-3">
                  <span className="text-xs text-muted-foreground">Popular: {featuredServices.map((service) => service.name).join(" / ")}</span>
                  <Link to="/services" className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    View all services <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/terminal"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-mono hover:border-primary hover:text-primary transition-colors"
          >
            <Terminal className="h-3.5 w-3.5" /> terminal
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full border border-border p-2 hover:bg-muted transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-card transition-opacity hover:opacity-90 md:inline-flex"
          >
            <Send className="h-4 w-4" /> Hire me now
          </Link>
          <button
            className="rounded-full border border-border p-2 hover:bg-muted lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <details className="mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-card" open>
              <summary className="cursor-pointer list-none px-4 py-4">
                <span className="flex items-center justify-between gap-3">
                  <span>
                    <span className="block text-base font-semibold">Services</span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                      Browse by outcome, then choose the exact service you need.
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </span>
              </summary>
              <div className="border-t border-border bg-muted/25 p-3">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="mb-3 flex items-center justify-between rounded-xl bg-background px-3 py-3 text-sm font-semibold text-primary shadow-card"
                >
                  View all services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="space-y-3">
                  {groupedServices.map(({ group, desc, items }) => (
                    <details key={group} className="rounded-2xl border border-border bg-background p-3" defaultOpen={group === groupedServices[0]?.group}>
                      <summary className="cursor-pointer list-none rounded-xl px-2 py-2 font-display text-sm font-semibold">
                        <span className="flex items-center justify-between gap-3">
                          <span>
                            <span className="block">{group}</span>
                            <span className="mt-1 block font-sans text-[11px] font-normal leading-relaxed text-muted-foreground">
                              {items.length} services
                            </span>
                          </span>
                          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                        </span>
                      </summary>
                      <p className="px-2 pb-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                      <div className="grid gap-1">
                        {items.map((service) => (
                          <Link
                            key={service!.slug}
                            to="/services/$slug"
                            params={{ slug: service!.slug }}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-primary"
                          >
                            {service!.name}
                            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </details>
            <Link to="/terminal" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-mono hover:bg-muted">
              &gt; terminal
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground">
              Hire me now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
