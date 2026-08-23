import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { capabilityGroups, capabilityLines, clientBrands, engagementPackages, processSteps, site, projects, testimonials, thinkingPrinciples } from "@/lib/site";

export const Route = createFileRoute("/terminal")({
  head: () => ({
    meta: [
      { title: "Terminal - ItsProf Paul OS v3.0" },
      { name: "description", content: "Explore Paul Ngunjiri's positioning, philosophy, capabilities, pricing logic, proof and hiring flow through an interactive command-line interface." },
      { property: "og:title", content: "Terminal - ItsProf Paul" },
    ],
    links: [{ rel: "canonical", href: "/terminal" }],
  }),
  component: Terminal,
});

const BANNER = `
  --------------------------------------------------
  ItsProf Paul OS v3.0
  Digital Strategist, Creator & Consultant.
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
          "What does he do? I think, teach, create, build and advise at the intersection of strategy, branding, technology and digital marketing.",
          "Who does he help? Individuals, founders, companies, churches, NGOs, schools, government teams and international organisations.",
          "What problems does he solve? Unclear positioning, weak visuals, slow websites, scattered content, poor trust signals and low conversion.",
          "Why trust him? 4+ years, 60+ projects, 50+ clients, a Mathematics & Computer Science background and a structured delivery process.",
          "How do I hire him? Type 'hire', WhatsApp me, call me or send a brief through the contact form.",
        ].join("\n");
        break;
      case "about":
        out = "I am Paul Ngunjiri, popularly known as ItsProf Paul. I am a Digital Strategist, Creator & Consultant helping people and organisations think clearly, create with intention and build digital systems that support real business value.";
        break;
      case "whoami":
        out = `name     : Paul Ngunjiri\nknown as : ItsProf Paul\nlocation : ${site.location}\nemail    : ${site.email}\nphone    : ${site.phone}\nyears    : ${site.years}\nprojects : ${site.projects}`;
        break;
      case "serve":
        out = "I serve individuals, founders, startups, established companies, churches, NGOs, schools, government teams, international organisations, product teams and campaign teams that need clarity, trust, digital capability and premium execution.";
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
        out = "Run: service <capability or service name> for detail, or visit /capabilities/<slug> for focused landing pages.\n\n" + capabilityGroups.map((group) => `/${group.number} ${group.title}\n  ${group.lines.map((line) => line.name).join(", ")}`).join("\n\n");
        break;
      case "pillars":
        out = capabilityGroups.map((pillar) => {
          const names = pillar.lines.map((line) => line.name).join(", ");
          return `/${pillar.number} ${pillar.title}\n  ${pillar.desc}\n  Lines: ${names}`;
        }).join("\n\n");
        break;
      case "service": {
        const s = findCapability(query);
        out = s
          ? `${s.name}\n${"-".repeat(s.name.length)}\n${s.desc}\n\nStarting investment: ${s.price}\nEstimated delivery: ${s.timeline}\n\nIncluded:\n${s.includes.map((d) => `  - ${d}`).join("\n")}\n\nOutcomes:\n${s.outcomes.map((d) => `  - ${d}`).join("\n")}\n\nOpen: /capabilities/${s.slug}`
          : `No capability matching "${query}". Try: services`;
        break;
      }
      case "process": {
        const s = findCapability(query);
        out = s
          ? `${s.name} process:\n` + processSteps.map((p) => `  ${p.n}. ${p.title} - ${p.desc}`).join("\n") + `\n\nFocus for this service:\n${s.includes.map((item) => `  - ${item}`).join("\n")}`
          : `Overall process:\n` + processSteps.map((p) => `  ${p.n}. ${p.title} - ${p.desc}`).join("\n");
        break;
      }
      case "packages": {
        out = `Ways to work:\n` + engagementPackages.map((p) => `  - ${p.name}: ${p.price}\n    ${p.description}`).join("\n\n");
        break;
      }
      case "deliverables": {
        const s = findCapability(query);
        out = s
          ? `${s.name} deliverables:\n` + s.includes.map((d) => `  - ${d}`).join("\n")
          : "Type deliverables <service>. Example: deliverables logo-design";
        break;
      }
      case "faqs": {
        const s = findCapability(query);
        out = s
          ? `${s.name} FAQs:\n  Q: What does the price mean?\n  A: ${s.price} is the starting investment for this specific service. Final cost depends on scope, complexity and timeline.\n\n  Q: How long does it take?\n  A: ${s.timeline}.\n\n  Q: How do I start?\n  A: Type hire or open /contact and send a short brief.`
          : "Type faqs <service>. Example: faqs meta-ads";
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
        out = thinkingPrinciples.map((v, i) => `  ${(i + 1).toString().padStart(2, "0")}. ${v.title}\n     ${v.desc}`).join("\n\n");
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
        out = `Paul Ngunjiri / Digital Strategist, Creator & Consultant\n  ${site.years} years, ${site.projects} projects, ${site.clients} clients.\n  I think, teach, create, build and advise across strategy, branding, technology and digital growth.\n  Pahwah Digitech is part of my wider ecosystem, not a replacement for working with Paul.`;
        break;
      case "tools":
        out = "Design: Figma, Adobe Suite, Affinity\nCode: React, TanStack, Next.js, TypeScript, Tailwind\nMedia: Premiere, After Effects, DaVinci Resolve\nGrowth: GA4, Meta Ads, Google Ads, Looker Studio";
        break;
      case "pricing":
        out = [
          "Pricing hierarchy:",
          "  Capability price = entry point into a solution area.",
          "  Service price = authoritative starting investment for that specific service.",
          "",
          ...capabilityGroups.map((group) => `/${group.number} ${group.title}: ${group.startingAt} | ${group.engagement}`),
          "",
          "Examples:",
          ...capabilityLines.slice(0, 12).map((line) => `  - ${line.name}: ${line.price} (${line.timeline})`),
          "  Run: service meta-ads or service website-development for detail.",
        ].join("\n");
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
    <section id="terminal" className="min-h-[calc(100vh-4rem)] scroll-mt-28 bg-[oklch(0.14_0.012_264)] p-3 font-mono text-xs text-[oklch(0.85_0.05_140)] sm:p-4 sm:text-sm lg:p-8" onClick={() => inputRef.current?.focus()}>
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
        {["brief", "services", "pricing", "philosophy", "brands", "testimonials", "hire", "clear"].map((c) => (
          <button key={c} onClick={() => { run(c); inputRef.current?.focus(); }} className="rounded-full border border-primary/40 px-3 py-1 text-xs transition-colors hover:bg-primary/20">
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}

function findCapability(query: string) {
  if (!query) return undefined;
  return capabilityLines.find((service) =>
    service.slug.includes(query) ||
    service.name.toLowerCase().includes(query) ||
    service.group.toLowerCase().includes(query)
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
    services: "list current capabilities",
    pillars: "capabilities grouped by outcome",
    service: "service detail: service website-development",
    process: "overall or service process: process brand-identity",
    packages: "ways to work",
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
    pricing: "pricing hierarchy and examples",
    socials: "social media links",
    quote: "open the quote form",
    hire: "open the contact page",
    clear: "clear the screen",
    exit: "return to homepage",
  };
  return map[c] ?? "";
}
