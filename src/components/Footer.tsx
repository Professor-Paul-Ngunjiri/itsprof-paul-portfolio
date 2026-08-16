import { Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Globe2, Instagram, Linkedin, Mail, MapPin, Music2, Phone, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { capabilityGroups, site } from "@/lib/site";
import logo from "/logo.svg?url";

const footerValueProof = [
  {
    icon: ShieldCheck,
    title: "One accountable expert",
    desc: "Strategy, branding, content, technology and growth thinking stay connected, reducing vendor friction and protecting the quality bar.",
  },
  {
    icon: TrendingUp,
    title: "Built for measurable return",
    desc: "Every engagement defines what success should move: leads, trust, sales velocity, conversion, retention, authority or operational clarity.",
  },
  {
    icon: Globe2,
    title: "International delivery standard",
    desc: "Clean communication, documented scope, professional handoff, source-file ownership and async-friendly collaboration for global clients.",
  },
];

export function Footer() {
  const capabilityColumns = capabilityGroups;

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1.25fr]">
            <div className="bg-gradient-blue p-8 text-secondary-foreground lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5 text-gold" /> Built for serious ROI
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight lg:text-4xl">
                Let’s clarify the problem, define the opportunity and build the right solution.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/82">
                Premium clients do not buy random files or isolated tasks. They invest in clarity, trust, stronger positioning, better conversion and a strategic partner who can carry the work from idea to execution.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground">
                  Start a Conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                  Explore Capabilities
                </Link>
              </div>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-3 lg:p-8">
              {footerValueProof.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border bg-background p-5">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-12 py-16 lg:grid-cols-[1.1fr_1.8fr_0.95fr]">
          <div>
            <Link to="/" className="inline-flex items-center">
              <img src={logo} alt="ItsProf Paul" className="h-24 w-auto object-contain" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Paul Ngunjiri, popularly known as ItsProf Paul, is a Digital Strategist, Creator & Consultant helping people and organisations think clearly, create with intention and build digital systems that support real business value.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              <a href={site.partner.url} target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">{site.partner.name}</a> is part of my wider ecosystem: the company I founded to bring strategy, creativity, technology and digital marketing capability together when a brief needs a larger multidisciplinary team.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Linkedin, href: site.socials.linkedin.url, label: "LinkedIn" },
                { icon: Instagram, href: site.socials.instagram.url, label: "Instagram" },
                { icon: Facebook, href: site.socials.facebook.url, label: "Facebook" },
                { icon: Music2, href: site.socials.tiktok.url, label: "TikTok" },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="rounded-full border border-border p-2 transition-colors hover:border-primary hover:text-primary">
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">Capabilities</h4>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {capabilityColumns.map((column) => (
                <div key={column.title}>
                  <Link to="/capabilities/$slug" params={{ slug: column.slug }} className="font-display text-sm font-semibold text-foreground hover:text-primary">
                    /{column.number} {column.title}
                  </Link>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {column.lines.slice(0, 4).map((line) => (
                      <li key={line.slug}>
                        <Link to="/capabilities/$slug" params={{ slug: line.slug }} className="hover:text-primary">
                          {line.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">Start here</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {site.location}; remote worldwide</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> <a href={`mailto:${site.email}`} className="break-all hover:text-primary">{site.email}</a></li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> <a href={`tel:${site.phone}`} className="hover:text-primary">Call me now: {site.phone}</a></li>
            </ul>
            <div className="mt-6 grid gap-2">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-gold-foreground">
                WhatsApp me now <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link to="/terminal" className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-xs font-semibold hover:border-primary hover:text-primary">
                Open terminal
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row lg:px-8">
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
