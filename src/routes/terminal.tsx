import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { site, services, values, projects } from "@/lib/site";

export const Route = createFileRoute("/terminal")({
  head: () => ({
    meta: [
      { title: "Terminal — ItsProf Paul OS v1.0" },
      { name: "description", content: "Explore Paul Ngunjiri's portfolio through a fully interactive command-line interface." },
      { property: "og:title", content: "Terminal — ItsProf Paul" },
    ],
    links: [{ rel: "canonical", href: "/terminal" }],
  }),
  component: Terminal,
});

const BANNER = `
  ╔═══════════════════════════════════════════════╗
  ║                                               ║
  ║       ItsProf Paul OS  v1.0                   ║
  ║       Where Mathematics Meets Creativity      ║
  ║                                               ║
  ╚═══════════════════════════════════════════════╝
  Type 'help' to see what I can do for you.
`;

const COMMANDS = [
  "help", "about", "whoami", "skills", "services", "portfolio", "contact",
  "education", "certifications", "experience", "blog", "tools", "values",
  "pricing", "socials", "quote", "hire", "clear", "exit", "easter"
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

    let out = "";
    switch (cmd.split(" ")[0]) {
      case "help":
        out = `Available commands:\n` + COMMANDS.map((c) => `  ${c.padEnd(16)}— ${describe(c)}`).join("\n");
        break;
      case "about":
        out = "Paul Ngunjiri (ItsProf Paul) — multi-disciplinary creative based in Nairobi.\nBSc Mathematics & Computer Science. 4+ years professional experience.\nBranding · web · film · marketing — engineered with precision.";
        break;
      case "whoami":
        out = `name      : Paul Ngunjiri\nbrand     : ItsProf Paul\nlocation  : ${site.location}\nemail     : ${site.email}\nphone     : ${site.phone}\nyears     : ${site.years}\nprojects  : ${site.projects}`;
        break;
      case "skills":
        out = services.map((s) => `  ▸ ${s.name.padEnd(28)} [${s.category}]`).join("\n");
        break;
      case "services":
        out = "Run: `service <name>` for detail.\n\n" + services.map((s, i) => `  ${(i+1).toString().padStart(2,"0")}. ${s.name}`).join("\n");
        break;
      case "service": {
        const q = cmd.split(" ").slice(1).join(" ");
        const s = services.find((x) => x.name.toLowerCase().includes(q));
        out = s ? `${s.name}\n${"-".repeat(s.name.length)}\n${s.desc}\nCategory: ${s.category}\n→ /services` : `No service matching "${q}". Try: services`;
        break;
      }
      case "portfolio":
        out = projects.map((p) => `  ▸ ${p.title.padEnd(36)} [${p.category}]\n    ${p.desc}`).join("\n\n");
        break;
      case "contact":
        out = `Email    : ${site.email}\nPhone    : ${site.phone}\nWhatsApp : https://wa.me/${site.whatsapp}\nLocation : ${site.location}`;
        break;
      case "education":
        out = "2017–2021  BSc Mathematics & Computer Science\n           Modules: algorithms, data structures,\n           probability & statistics, computational maths,\n           systems programming.";
        break;
      case "certifications":
        out = "  • Google Analytics (2024)\n  • Google Ads (2024)\n  • Meta Blueprint (2023)\n  • HubSpot Content Marketing (2023)\n  • Adobe Creative Suite (2022)";
        break;
      case "experience":
        out = "2021 → now  ItsProf Paul (Freelance / Studio)\n            15 disciplines · 100+ projects · 50+ clients\n2019–2021   Various student creative projects + internships";
        break;
      case "blog":
        out = "Coming soon — 10 articles in the pipeline:\n  • Why my Maths degree makes me a better designer\n  • 7 branding mistakes Nairobi businesses make\n  • How to brief a creative professional\n  • Web design vs web development\n  • The business case for professional design";
        break;
      case "tools":
        out = "Design   : Figma · Adobe Suite · Affinity\nCode     : React · TanStack · Next.js · TS · Tailwind\nVideo    : Premiere · After Effects · DaVinci\nMarketing: GA4 · Meta Ads · HubSpot · Mailchimp";
        break;
      case "values":
        out = values.map((v, i) => `  ${(i+1).toString().padStart(2,"0")}. ${v.title}`).join("\n");
        break;
      case "pricing":
        out = "Spark      → from KES 25,000  (single deliverable)\nIlluminate → from KES 75,000  (full package · most popular)\nLegacy     → custom quote     (full system, multi-channel)\n→ /services";
        break;
      case "socials":
        out = Object.entries(site.socials).map(([k, v]) => `  ${k.padEnd(12)} ${v.url}`).join("\n");
        break;
      case "quote":
      case "hire":
        out = "Opening contact page...";
        setTimeout(() => navigate({ to: "/contact" }), 600);
        break;
      case "clear":
        setHistory([{ type: "out", text: BANNER }]);
        return;
      case "exit":
        out = "Goodbye. ✦";
        setTimeout(() => navigate({ to: "/" }), 800);
        break;
      case "easter":
        out = "    ✦ Fun fact: a perfect logo grid follows the same golden-ratio\n      math that grows sunflower seeds. Beauty isn't decoration — it's\n      structure you can see. — Paul";
        break;
      default:
        out = `command not found: ${cmd}\nDid you mean one of: ${COMMANDS.slice(0, 6).join(", ")} …  (type 'help')`;
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
    <section className="min-h-[calc(100vh-4rem)] bg-[oklch(0.14_0.012_264)] text-[oklch(0.85_0.05_140)] font-mono text-sm p-4 lg:p-8" onClick={() => inputRef.current?.focus()}>
      <div className="mx-auto max-w-4xl rounded-2xl border border-primary/40 bg-black/40 backdrop-blur shadow-elegant overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-primary/30 bg-black/40">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-white/50">paul@itsprofpaul:~$</span>
        </div>
        <div className="p-5 lg:p-7 min-h-[60vh] max-h-[70vh] overflow-y-auto whitespace-pre-wrap leading-relaxed">
          {history.map((h, i) => (
            <div key={i} className={h.type === "in" ? "text-primary" : "text-[oklch(0.92_0.04_140)]"}>
              {h.type === "in" ? <><span className="text-gold">paul@itsprofpaul</span>:<span className="text-secondary">~</span>$ {h.text}</> : h.text}
            </div>
          ))}
          <div className="flex items-center mt-2">
            <span className="text-gold">paul@itsprofpaul</span>:<span className="text-secondary">~</span>$&nbsp;
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              className="flex-1 bg-transparent outline-none border-none text-[oklch(0.92_0.04_140)] caret-primary"
              autoFocus
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
            />
          </div>
          <div ref={endRef} />
        </div>
      </div>
      <div className="mx-auto max-w-4xl mt-4 flex flex-wrap gap-2">
        {["help", "whoami", "services", "portfolio", "contact", "easter", "clear"].map((c) => (
          <button key={c} onClick={() => { run(c); inputRef.current?.focus(); }} className="rounded-full border border-primary/40 px-3 py-1 text-xs hover:bg-primary/20 transition-colors">
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}

function describe(c: string): string {
  const map: Record<string, string> = {
    help: "show this list",
    about: "short bio",
    whoami: "identity card",
    skills: "all skills by category",
    services: "list 15 services",
    portfolio: "recent projects",
    contact: "how to reach me",
    education: "academic timeline",
    certifications: "credentials",
    experience: "work history",
    blog: "latest writing",
    tools: "tools I use",
    values: "professional values",
    pricing: "package overview",
    socials: "social media links",
    quote: "request a quote (opens form)",
    hire: "start a hiring flow",
    clear: "clear the screen",
    exit: "return to homepage",
    easter: "a fun surprise ✦",
  };
  return map[c] ?? "";
}
