import { Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Music2, Phone, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { investmentReasons, servicePillars, services, site } from "@/lib/site";
import logo from "/logo.svg?url";

export function Footer() {
  const serviceColumns = servicePillars.map((pillar) => ({
    ...pillar,
    items: pillar.services.map((slug) => services.find((service) => service.slug === slug)).filter(Boolean),
  }));

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border bg-gradient-to-b from-background via-muted/35 to-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,oklch(0.55_0.22_25/0.08),transparent_32%),radial-gradient(circle_at_85%_30%,oklch(0.83_0.16_87/0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1.35fr]">
            <div className="bg-gradient-blue p-8 text-secondary-foreground lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold">
                <TrendingUp className="h-3.5 w-3.5 text-gold" /> Built for serious ROI
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight lg:text-4xl">
                Invest in the creative system your next level deserves.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Premium clients do not buy files. They buy clarity, trust, stronger positioning, better conversion and a partner who can carry the work from idea to launch.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground">
                  Hire me now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                  See services now
                </Link>
              </div>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-3 lg:p-8">
              {investmentReasons.map((reason, index) => {
                const Icon = index === 0 ? ShieldCheck : index === 1 ? TrendingUp : Sparkles;
                return (
                  <article key={reason.title} className="rounded-2xl border border-border bg-background p-5">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-4 font-display text-base font-semibold">{reason.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{reason.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_2fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center">
              <img src={logo} alt="ItsProf Paul" className="h-24 w-auto object-contain" />
            </Link>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              {site.tagline} A Nairobi-based creative technologist helping ambitious African and international brands look premium, communicate clearly and convert better.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Linkedin, href: site.socials.linkedin.url, label: "LinkedIn" },
                { icon: Instagram, href: site.socials.instagram.url, label: "Instagram" },
                { icon: Facebook, href: site.socials.facebook.url, label: "Facebook" },
                { icon: Music2, href: site.socials.tiktok.url, label: "TikTok" },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="rounded-full border border-border p-2 hover:border-primary hover:text-primary transition-colors">
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {serviceColumns.map((column) => (
              <div key={column.title}>
                <h4 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {column.title}
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{column.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {column.items.map((service) => (
                    <li key={service!.slug}>
                      <Link to="/services/$slug" params={{ slug: service!.slug }} className="hover:text-primary">
                        {service!.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">Start here</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> {site.location}; remote worldwide</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> <a href={`mailto:${site.email}`} className="hover:text-primary break-all">{site.email}</a></li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> <a href={`tel:${site.phone}`} className="hover:text-primary">Call me now: {site.phone}</a></li>
            </ul>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-gold-foreground hover:opacity-90 transition-opacity"
            >
              WhatsApp me now <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Paul Ngunjiri - ItsProf Paul. All rights reserved.</div>
          <div className="font-mono">
            Designed with love and passion by Paul Ngunjiri -{" "}
            <a href={site.partner.url} target="_blank" rel="noreferrer" className="text-primary hover:underline">
              {site.partner.name}
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
