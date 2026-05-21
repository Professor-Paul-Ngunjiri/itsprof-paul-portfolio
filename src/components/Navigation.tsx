import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import logo from "/logo.svg?url";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-card">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="ItsProf Paul" className="h-14 md:h-16 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
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
            className="rounded-full p-2 hover:bg-muted transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-card hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
          <button
            className="lg:hidden rounded-full p-2 hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-muted text-base font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/terminal" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-muted text-base font-mono">
              ▸ terminal
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground">
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
