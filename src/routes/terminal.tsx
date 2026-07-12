import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { clientBrands, getServicePackages, processSteps, servicePillars, site, services, values, projects, testimonials } from "@/lib/site";

export const Route = createFileRoute("/terminal")({
  head: () => ({
    meta: [
      { title: "Terminal - ItsProf Paul OS v2.0" },
      { name: "description", content: "Explore Paul Ngunjiri's services, proof, process and hiring flow through an interactive command-line interface." },
      { property: "og:title", content: "Terminal - ItsProf Paul" },
    ],
    links: [{ rel: "canonical", href: "/terminal" }],
  }),
  component: Terminal,
});

const BANNER = `
  --------------------------------------------------
  ItsProf Paul OS v2.0
  Premium brand, web, content and growth systems.
  Type 'brief' for the 5-second client summary.
  Type 'help' to see every command.
  --------------------------------------------------
`;

const COMMANDS = [
  "help", "brief", "about", "whoami", "serve", "problems", "trust", "results",
  "services", "pillars", "service", "process", "philosophy", "portfolio", "contact",
  "packages", "deliverables", "faqs", "brands", "testimonials", "education",
  "certifications", "experience", "tools", "values", "pricing", "socials",
  "quote", "hire", "clear", "exit",
];

function Terminal() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<{ type: "in" | "out"; text: string }[]>([
    { type: "out", text: BANNER },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setCmdHistory((h) => [...h, raw]);
    setCursor(-1);
    setHistory((h) => [...h, { type: "in", text: raw }]);

    const [base, ...parts] = cmd.split(" ");
    const query = parts.join(" ");
    let out = "";

    switch (base) {
      case "help":
        out = `Available commands:\n` + COMMANDS.map((c) => `  ${c.padEnd(14)} - ${describe(c)}`).join("\n");
        break;
      case "brief":
        out = [
          "Who is Paul? Paul Ngunjiri, popularly known as ItsProf Paul.",
          "What does he do? I create premium brand, web, visual content and growth systems.",
          "Who does he help? Individuals, founders, companies, churches, NGOs, schools, government teams and international organisations.",
          "What problems does he solve? Unclear positioning, weak visuals, slow websites, scattered content, poor trust signals and low conversion.",
          "Why trust him? 4+ years, 100+ projects, 50+ clients, a Mathematics & Computer Science background and a structured delivery process.",
          "How do I hire him? Type 'hire', WhatsApp me, call me or send a brief through the contact form.",
        ].join("\n");
        break;
      case "about":
        out = "I am Paul Ngunjiri, popularly known as ItsProf Paul. I help serious clients look premium, explain their value clearly and launch digital experiences that create trust and enquiries.";
        break;
      case "whoami":
        out = `name     : Paul Ngunjiri\nknown as : ItsProf Paul\nlocation : ${site.location}\nemail    : ${site.email}\nphone    : ${site.phone}\nyears    : ${site.years}\nprojects : ${site.projects}`;
        break;
      case "serve":
        out = "I serve individuals, startups, established companies, churches, NGOs, schools, government teams, international organisations, product teams and campaign teams that need premium execution.";
        break;
      case "problems":
        out = "Problems I solve:\n  01. Brands that look unclear, cheap or inconsistent\n  02. Websites that load slowly, confuse visitors or fail to convert\n  03. Content that feels random instead of strategic\n  04. Campaigns without measurement or follow-up\n  05. Proposals, tenders and reports that need to look credible fast";
        break;
      case "trust":
        out = `${site.years} years experience, ${site.projects} delivered projects and ${site.clients} clients. My work combines strategy, design taste, technical execution, clear communication and measurable business thinking.`;
        break;
      case "results":
        out = projects.slice(0, 6).map((p) => `  - ${p.title}: ${p.metric}`).join("\n");
        break;
      case "services":
        out = "Run: service <service name> for detail. Example: service web development\n\n" + services.map((s, i) => `  ${(i + 1).toString().padStart(2, "0")}. ${s.name}`).join("\n");
        break;
      case "pillars":
        out = servicePillars.map((pillar) => {
          const names = pillar.services
            .map((slug) => services.find((service) => service.slug === slug)?.name)
            .filter(Boolean)
            .join(", ");
          return `${pillar.title}\n  ${pillar.desc}\n  Services: ${names}`;
        }).join("\n\n");
        break;
      case "service": {
        const s = findService(query);
        out = s
          ? `${s.name}\n${"-".repeat(s.name.length)}\n${s.tagline}\n\n${s.hero}\n\nStarting at: ${s.startingAt}\nTimeline: ${s.timeline}\n\nTop deliverables:\n${s.deliverables.map((d) => `  - ${d}`).join("\n")}\n\nType: process ${s.slug}`
          : `No service matching "${query}". Try: services`;
        break;
      }
      case "process": {
        const s = findService(query);
        out = s
          ? `${s.name} process:\n` + s.process.map((p) => `  ${p.step}. ${p.title} - ${p.desc}`).join("\n")
          : `Overall process:\n` + processSteps.map((p) => `  ${p.n}. ${p.title} - ${p.desc}`).join("\n");
        break;
      }
      case "packages": {
        const s = findService(query) ?? services[0];
        out = `${s.name} packages:\n` + getServicePackages(s.slug).map((p) => `  - ${p.name}: ${p.price}\n    ${p.desc}`).join("\n");
        break;
      }
      case "deliverables": {
        const s = findService(query);
        out = s
          ? `${s.name} deliverables:\n` + s.deliverables.map((d) => `  - ${d}`).join("\n")
          : "Type deliverables <service>. Example: deliverables document-design";
        break;
      }
      case "faqs": {
        const s = findService(query);
        out = s
          ? `${s.name} FAQs:\n` + s.faqs.map((faq) => `  Q: ${faq.q}\n  A: ${faq.a}`).join("\n\n")
          : "Type faqs <service>. Example: faqs web design";
        break;
      }
      case "brands":
        out = clientBrands.map((brand) => `  - ${brand.name}: ${brand.url}`).join("\n");
        break;
      case "testimonials":
        out = testimonials.map((t) => `  - ${t.name}, ${t.role} at ${t.company}\n    "${t.quote}"`).join("\n\n");
        break;
      case "philosophy":
      case "values":
        out = values.map((v, i) => `  ${(i + 1).toString().padStart(2, "0")}. ${v.title} - ${v.desc}`).join("\n");
        break;
      case "portfolio":
        out = projects.slice(0, 10).map((p) => `  - ${p.title} [${p.category}]\n    ${p.desc}\n    Result: ${p.metric}`).join("\n\n");
        break;
      case "contact":
        out = `Email    : ${site.email}\nPhone    : ${site.phone}\nWhatsApp : https://wa.me/${site.whatsapp}\nLocation : ${site.location}`;
        break;
      case "education":
        out = "BSc Mathematics & Computer Science. I use that training to structure creative decisions, build faster websites, interpret campaign data and explain tradeoffs clearly.";
        break;
      case "certifications":
        out = "Google Analytics, Google Ads, Meta Blueprint, HubSpot Content Marketing and Adobe Creative Suite experience.";
        break;
      case "experience":
        out = `ItsProf Paul / creative systems practice\n  ${site.years} years, ${site.projects} projects, ${site.clients} clients.\n  Services span brand, web, visual media, growth and editorial systems.`;
        break;
      case "tools":
        out = "Design: Figma, Adobe Suite, Affinity\nCode: React, TanStack, Next.js, TypeScript, Tailwind\nMedia: Premiere, After Effects, DaVinci Resolve\nGrowth: GA4, Meta Ads, Google Ads, Looker Studio";
        break;
      case "pricing":
        out = services.map((s) => `  - ${s.name}: from ${s.startingAt} (${s.timeline})`).join("\n");
        break;
      case "socials":
        out = Object.entries(site.socials).map(([k, v]) => `  ${k.padEnd(12)} ${v.url}`).join("\n");
        break;
      case "quote":
      case "hire":
        out = "Opening the contact page so you can send a brief, upload documents and choose the right service.";
        setTimeout(() => navigate({ to: "/contact" }), 600);
        break;
      case "clear":
        setHistory([{ type: "out", text: BANNER }]);
        return;
      case "exit":
        out = "Taking you back to the homepage.";
        setTimeout(() => navigate({ to: "/" }), 800);
        break;
      default:
        out = `command not found: ${cmd}\nTry: brief, services, pillars, process, philosophy, portfolio, hire`;
    }
    setHistory((h) => [...h, { type: "out", text: out }]);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const next = Math.min(cursor + 1, cmdHistory.length - 1);
      setCursor(next);
      setInput(cmdHistory[cmdHistory.length - 1 - next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(cursor - 1, -1);
      setCursor(next);
      setInput(next === -1 ? "" : cmdHistory[cmdHistory.length - 1 - next]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-[oklch(0.14_0.012_264)] p-3 font-mono text-xs text-[oklch(0.85_0.05_140)] sm:p-4 sm:text-sm lg:p-8" onClick={() => inputRef.current?.focus()}>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/40 bg-black/40 shadow-elegant backdrop-blur">
        <div className="flex items-center gap-2 border-b border-primary/30 bg-black/40 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate text-xs text-white/50">paul@itsprofpaul:~$</span>
        </div>
        <div className="min-h-[62vh] max-h-[72vh] overflow-y-auto whitespace-pre-wrap break-words p-4 leading-relaxed sm:p-5 lg:p-7">
          {history.map((h, i) => (
            <div key={i} className={h.type === "in" ? "text-primary" : "text-[oklch(0.92_0.04_140)]"}>
              {h.type === "in" ? <><span className="text-gold">paul@itsprofpaul</span>:<span className="text-secondary">~</span>$ {h.text}</> : h.text}
            </div>
          ))}
          <div className="mt-2 flex items-center">
            <span className="text-gold">paul@itsprofpaul</span>:<span className="text-secondary">~</span>$&nbsp;
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              className="min-w-0 flex-1 border-none bg-transparent text-[oklch(0.92_0.04_140)] caret-primary outline-none"
              autoFocus
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
            />
          </div>
          <div ref={endRef} />
        </div>
      </div>
      <div className="mx-auto mt-4 flex max-w-5xl flex-wrap gap-2">
        {["brief", "services", "pillars", "process", "packages", "brands", "testimonials", "hire", "clear"].map((c) => (
          <button key={c} onClick={() => { run(c); inputRef.current?.focus(); }} className="rounded-full border border-primary/40 px-3 py-1 text-xs transition-colors hover:bg-primary/20">
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}

function findService(query: string) {
  if (!query) return undefined;
  return services.find((service) =>
    service.slug.includes(query) ||
    service.name.toLowerCase().includes(query) ||
    service.category.toLowerCase().includes(query)
  );
}

function describe(c: string): string {
  const map: Record<string, string> = {
    help: "show this list",
    brief: "5-second client summary",
    about: "human bio",
    whoami: "identity card",
    serve: "who I help",
    problems: "business problems I solve",
    trust: "why clients trust me",
    results: "selected proof and outcomes",
    services: "list every service",
    pillars: "services grouped into pillars",
    service: "service detail: service web development",
    process: "overall or service process: process brand-identity",
    packages: "package options for a service",
    deliverables: "deliverables for a service",
    faqs: "FAQs for a service",
    brands: "brands and teams showcase",
    testimonials: "client words",
    philosophy: "work principles",
    portfolio: "selected projects",
    contact: "how to reach me",
    education: "academic background",
    certifications: "credentials",
    experience: "work history",
    tools: "tools I use",
    values: "professional values",
    pricing: "investment ranges",
    socials: "social media links",
    quote: "open the quote form",
    hire: "open the contact page",
    clear: "clear the screen",
    exit: "return to homepage",
  };
  return map[c] ?? "";
}
