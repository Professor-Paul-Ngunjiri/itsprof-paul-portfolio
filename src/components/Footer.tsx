import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { site, services } from "@/lib/site";
import logo from "/logo.svg?url";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-gradient-to-b from-background to-muted/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center">
            <img src={logo} alt="ItsProf Paul" className="h-20 w-auto object-contain" />
          </div>

          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            Multi-disciplinary creative based in {site.location}. Branding, web, film, marketing — engineered with the precision of a Mathematics & Computer Science degree.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { icon: Linkedin, href: site.socials.linkedin.url },
              { icon: Instagram, href: site.socials.instagram.url },
              { icon: Facebook, href: site.socials.facebook.url },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary transition-colors">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About Me</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/terminal" className="hover:text-primary font-mono">▸ /terminal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link to="/services" className="hover:text-primary">{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">Get In Touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> {site.location}</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> <a href={`mailto:${site.email}`} className="hover:text-primary break-all">{site.email}</a></li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> <a href={`tel:${site.phone}`} className="hover:text-primary">{site.phone}</a></li>
          </ul>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            WhatsApp Paul →
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Paul Ngunjiri — ItsProf Paul. All Rights Reserved.</div>
          <div className="font-mono">Built with mathematics in Nairobi 🇰🇪</div>
        </div>
      </div>
    </footer>
  );
}
