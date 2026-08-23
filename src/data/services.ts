export type Service = {
  slug: string;
  name: string;
  icon: string;
  desc: string;
  category: string;
  tagline: string;
  hero: string;
  features: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  startingAt: string;
  timeline: string;
};

export type ServiceSubService = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  outcomes: string[];
  packages: string[];
  proof: string;
  idealFor: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const subServiceName = (feature: string) =>
  feature
    .replace(/\([^)]*\)/g, "")
    .replace(/[:+/]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .slice(0, 7)
    .join(" ");

export const services: Service[] = [
  {
    slug: "brand-identity",
    name: "Brand Design & Identity",
    icon: "Palette",
    desc: "Logos, brand systems and identities engineered for recognition and longevity.",
    category: "Creative",
    tagline: "Identities people remember — and competitors can't copy.",
    hero: "A complete visual identity system: logo, marks, palette, typography, voice, applications and brand book — engineered for a decade of use.",
    features: [
      "Naming, tagline & positioning workshop",
      "Primary logo + responsive logo system",
      "Colour palette tuned in OKLCH for screen + print",
      "Typography hierarchy with mathematical scale",
      "Iconography & illustration direction",
      "Brand voice & messaging framework",
      "Full brand guidelines PDF (40+ pages)",
      "Launch-ready social, email & deck templates",
    ],
    deliverables: [
      "Logo suite (SVG, PNG, PDF, EPS)",
      "Brand book PDF",
      "Stationery: business card, letterhead, email signature",
      "Social media starter kit",
      "Source files (Figma + Illustrator)",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Deep brand audit, audience mapping, competitor scan." },
      { step: "02", title: "Strategy", desc: "Positioning, archetype, voice, key messages." },
      { step: "03", title: "Concept", desc: "Three distinct directions, each with a defensible rationale." },
      { step: "04", title: "Design", desc: "Refinement of the chosen path into a full visual system." },
      { step: "05", title: "Application", desc: "Stationery, social, decks, launch assets." },
      { step: "06", title: "Handoff", desc: "Brand book, source files, training call." },
    ],
    faqs: [
      { q: "How long does a brand identity take?", a: "Typical timeline is 4–6 weeks from kickoff to handoff. Rush 3-week timelines are sometimes possible." },
      { q: "Do you do logos only?", a: "Yes — see the Spark tier on the pricing page. Logo-only engagements are 7–10 days." },
      { q: "Do I own the final files?", a: "Fully. You receive editable source files and full IP transfer on final payment." },
    ],
    startingAt: "From KES 75,000 / project",
    timeline: "4–6 weeks",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    icon: "Shapes",
    desc: "Posters, social graphics and marketing collateral with mathematical precision.",
    category: "Creative",
    tagline: "Marketing assets that stop the scroll and earn the click.",
    hero: "On-brand graphics for campaigns, social, events and ads — designed on a strict grid system so every piece looks like it belongs.",
    features: [
      "Campaign-ready social packs (10–30 assets)",
      "Posters, flyers, billboards, banners",
      "Pitch decks & investor presentations",
      "Editorial layouts & infographics",
      "Event signage & wayfinding",
      "Templated systems for in-house teams",
    ],
    deliverables: ["Print-ready PDFs", "Web-ready PNG/JPG/WebP", "Editable Figma & Illustrator source", "Brand-locked Canva templates (optional)"],
    process: [
      { step: "01", title: "Brief", desc: "Goals, audience, channels, deadline." },
      { step: "02", title: "Direction", desc: "Mood, layout and visual references." },
      { step: "03", title: "Design", desc: "Initial drafts on a master grid." },
      { step: "04", title: "Iterate", desc: "Two rounds of structured refinement." },
      { step: "05", title: "Deliver", desc: "Export, package, hand off in every format you need." },
    ],
    faqs: [
      { q: "Can you work to my existing brand?", a: "Absolutely. Share the brand book and I'll design strictly within it." },
      { q: "How fast can you turn a social pack around?", a: "Most 10-asset packs ship within 3–5 working days." },
    ],
    startingAt: "From KES 15,000 / project",
    timeline: "3–10 days",
  },
  {
    slug: "web-design",
    name: "Web Design",
    icon: "Layout",
    desc: "Beautifully composed websites where every grid, gap and ratio is intentional.",
    category: "Digital",
    tagline: "Sites that look expensive — because every pixel earned its place.",
    hero: "End-to-end web design from sitemap and wireframe to high-fidelity Figma — engineered with mathematical grid systems, accessible contrast and responsive logic for every breakpoint.",
    features: [
      "User research & sitemap",
      "Wireframes (low → mid → high fidelity)",
      "Design system: tokens, components, states",
      "Responsive layouts: 4 breakpoints",
      "Accessibility audit (WCAG AA)",
      "Motion & micro-interaction spec",
      "Handoff-ready Figma file with build guidance",
    ],
    deliverables: ["Sitemap & user flows", "Full Figma design file", "Component library", "Style guide & a11y notes"],
    process: [
      { step: "01", title: "Research", desc: "Audit, audience, competitive scan." },
      { step: "02", title: "Architecture", desc: "Sitemap, user flows, content plan." },
      { step: "03", title: "Wireframes", desc: "Low-fidelity skeletons for every key page." },
      { step: "04", title: "Visual design", desc: "Design system + high-fidelity comps." },
      { step: "05", title: "Prototype", desc: "Clickable Figma prototype for review." },
      { step: "06", title: "Handoff", desc: "Dev-ready file, tokens, motion spec." },
    ],
    faqs: [
      { q: "Do you also build the site?", a: "Yes — see Web Development. Or hand off cleanly to your dev team." },
      { q: "How many pages does a typical project include?", a: "5–8 unique templates covers most marketing sites." },
    ],
    startingAt: "From KES 95,000 / project",
    timeline: "3–5 weeks",
  },
  {
    slug: "web-development",
    name: "Web Development",
    icon: "Code2",
    desc: "Fast, accessible, production-grade sites built with modern frameworks.",
    category: "Digital",
    tagline: "Lighthouse 95+ scores, ship-day analytics, zero technical debt.",
    hero: "Production-grade React / TanStack / Next.js builds with SSR, type-safety, animations and analytics — coded by someone with a CS degree, not a no-code drag-and-drop habit.",
    features: [
      "React + TanStack Start / Next.js stacks",
      "Type-safe with TypeScript end-to-end",
      "CMS integration (Sanity, Contentful, Strapi)",
      "Authentication, payments, dashboards",
      "Lighthouse 95+ performance budgets",
      "SEO + structured data + OG/social",
      "Analytics & event tracking (GA4, Plausible)",
      "CI/CD pipeline + monitoring",
    ],
    deliverables: ["Production-deployed site", "Git repository (your ownership)", "Admin training video", "30-day post-launch support"],
    process: [
      { step: "01", title: "Architect", desc: "Stack, hosting, data model, integrations." },
      { step: "02", title: "Scaffold", desc: "Repo, CI/CD, design tokens, base components." },
      { step: "03", title: "Build", desc: "Pages, components, integrations, animations." },
      { step: "04", title: "QA", desc: "Lighthouse, a11y, cross-browser, edge cases." },
      { step: "05", title: "Launch", desc: "Domain, SSL, analytics, monitoring." },
      { step: "06", title: "Iterate", desc: "Weekly improvements based on real user data." },
    ],
    faqs: [
      { q: "Do you do WordPress?", a: "Only when there's a real reason. My default stack is React-based for performance, type-safety and DX." },
      { q: "Can you take over an existing codebase?", a: "Yes — I do code audits and rescue projects regularly." },
    ],
    startingAt: "From KES 150,000 / project",
    timeline: "4–8 weeks",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    icon: "MousePointer2",
    desc: "Interfaces and flows grounded in research, math and clean visual systems.",
    category: "Digital",
    tagline: "Interfaces that feel inevitable — because the maths checks out.",
    hero: "Product UI/UX for SaaS, mobile and dashboards — research-led, system-driven, accessibility-first.",
    features: [
      "User interviews & journey mapping",
      "Information architecture",
      "Wireframes & interactive prototypes",
      "Design systems with tokens & components",
      "Usability testing rounds",
      "Accessibility WCAG AA compliance",
      "Mobile-first responsive thinking",
    ],
    deliverables: ["Research report", "Wireframes & flows", "High-fidelity UI", "Interactive prototype", "Design system documentation"],
    process: [
      { step: "01", title: "Research", desc: "Users, competitors, jobs-to-be-done." },
      { step: "02", title: "Define", desc: "Personas, journeys, key flows." },
      { step: "03", title: "Wireframe", desc: "Low-fi structure for every screen." },
      { step: "04", title: "Design", desc: "Visual system + high-fidelity screens." },
      { step: "05", title: "Test", desc: "5-user usability test rounds." },
      { step: "06", title: "Iterate & ship", desc: "Final design with dev handoff." },
    ],
    faqs: [
      { q: "Do you specialise in a sector?", a: "Fintech, edtech and creative SaaS are most of my work — but the process applies anywhere." },
    ],
    startingAt: "From KES 120,000 / project",
    timeline: "4–8 weeks",
  },
  {
    slug: "photography",
    name: "Photography",
    icon: "Camera",
    desc: "Commercial, portrait and editorial photography with a premium finish.",
    category: "Media",
    tagline: "Images that hold up next to global brands' campaigns.",
    hero: "Commercial, product, lifestyle, portrait and event photography — shot, lit and retouched to a magazine-grade standard.",
    features: [
      "Pre-production: mood, shot list, locations",
      "Studio + on-location lighting",
      "Product, lifestyle, portrait, food, fashion",
      "Tethered capture & on-set review",
      "Professional colour grading & retouching",
      "Web + print-ready exports",
    ],
    deliverables: ["High-res master files", "Web-optimised exports", "Retouched hero selects", "Usage licence document"],
    process: [
      { step: "01", title: "Brief", desc: "Goals, references, deliverables." },
      { step: "02", title: "Pre-pro", desc: "Shot list, locations, talent, logistics." },
      { step: "03", title: "Shoot", desc: "Full-day or half-day production." },
      { step: "04", title: "Select", desc: "Contact sheet review & selects." },
      { step: "05", title: "Edit", desc: "Colour, retouch, master files." },
      { step: "06", title: "Deliver", desc: "Galleries + final exports." },
    ],
    faqs: [
      { q: "Do you travel for shoots?", a: "Across East Africa regularly, and internationally for the right brief." },
    ],
    startingAt: "From KES 35,000 / day",
    timeline: "1–3 weeks",
  },
  {
    slug: "videography",
    name: "Videography & Film",
    icon: "Video",
    desc: "Cinematic brand films, ads and storytelling content shot end-to-end.",
    category: "Media",
    tagline: "Films that make the brand the story.",
    hero: "Brand films, commercials, documentaries and product films — directed, shot and finished to cinema-grade standard.",
    features: [
      "Concept & treatment development",
      "Scriptwriting & storyboarding",
      "Full production crew & equipment",
      "Cinema cameras, prime lenses, sound kit",
      "Drone & gimbal coverage where needed",
      "Director-led on-set workflow",
    ],
    deliverables: ["Master film (multiple cuts)", "Social cutdowns (9:16, 1:1, 16:9)", "BTS reel", "Raw footage handover (optional)"],
    process: [
      { step: "01", title: "Concept", desc: "Idea, treatment, mood." },
      { step: "02", title: "Pre-pro", desc: "Script, storyboard, casting, locations." },
      { step: "03", title: "Production", desc: "Multi-day shoot with full crew." },
      { step: "04", title: "Post", desc: "Edit, colour, sound, motion graphics." },
      { step: "05", title: "Delivery", desc: "Master + every aspect-ratio cutdown." },
    ],
    faqs: [
      { q: "Do you handle paid distribution too?", a: "Yes, via my Digital Marketing service." },
    ],
    startingAt: "From KES 180,000 / project",
    timeline: "3–6 weeks",
  },
  {
    slug: "video-editing",
    name: "Video Editing & Motion",
    icon: "Film",
    desc: "Edits, color, sound and motion graphics that hold attention to the last frame.",
    category: "Media",
    tagline: "Edits that keep eyes glued to frame 1,800.",
    hero: "Premiere / DaVinci editing, motion graphics, colour grading and sound design — the post-production engine for your brand.",
    features: [
      "Multi-cam editing",
      "Motion graphics & lower-thirds",
      "Colour grading (DaVinci Resolve)",
      "Sound design & mix",
      "Subtitle & multi-language packs",
      "Social-platform aspect-ratio versions",
    ],
    deliverables: ["Master cut", "Platform-specific cutdowns", "Project file handover (optional)"],
    process: [
      { step: "01", title: "Review", desc: "Footage review and edit plan." },
      { step: "02", title: "Assembly", desc: "Rough cut for narrative." },
      { step: "03", title: "Refine", desc: "Pacing, b-roll, music." },
      { step: "04", title: "Finish", desc: "Colour, sound, motion graphics." },
      { step: "05", title: "Deliver", desc: "All formats, all aspect ratios." },
    ],
    faqs: [
      { q: "Per-minute or per-project pricing?", a: "Per project — depends on footage volume and complexity." },
    ],
    startingAt: "From KES 25,000 / project",
    timeline: "5–14 days",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: "Megaphone",
    desc: "Campaigns engineered with data — paid, organic, email and beyond.",
    category: "Growth",
    tagline: "Marketing measured like an engineer, executed like a creative.",
    hero: "Paid media, SEO, email, content and lifecycle — strategy through execution, measured weekly.",
    features: [
      "Google, Meta, TikTok ad management",
      "SEO: technical, on-page, content, links",
      "Email marketing & automation",
      "Conversion rate optimisation",
      "Landing pages & A/B testing",
      "Weekly performance reports",
    ],
    deliverables: ["Strategy doc", "Campaign builds in each platform", "Weekly + monthly performance reports", "Optimisation roadmap"],
    process: [
      { step: "01", title: "Audit", desc: "Current state across all channels." },
      { step: "02", title: "Strategy", desc: "Goals, KPIs, channel mix, budget." },
      { step: "03", title: "Setup", desc: "Pixels, GA4, conversions, attribution." },
      { step: "04", title: "Launch", desc: "Campaigns live, tracking confirmed." },
      { step: "05", title: "Optimise", desc: "Weekly review, A/B tests, scaling." },
      { step: "06", title: "Report", desc: "Plain-English monthly reports." },
    ],
    faqs: [
      { q: "Minimum monthly ad spend?", a: "I take clients from KES 50k/month upwards." },
    ],
    startingAt: "From KES 60,000 / month",
    timeline: "3-month minimum",
  },
  {
    slug: "social-media",
    name: "Social Media Marketing",
    icon: "Hash",
    desc: "Content systems and community building for African brands going global.",
    category: "Growth",
    tagline: "Content systems that compound — not random posts.",
    hero: "Content strategy, calendar, production and community management for Instagram, TikTok, LinkedIn and X.",
    features: [
      "Monthly content calendar",
      "Static & video content production",
      "Community management",
      "Influencer collaborations",
      "Hashtag & growth strategy",
      "Monthly analytics reports",
    ],
    deliverables: ["Content calendar", "20–40 monthly assets", "Performance report"],
    process: [
      { step: "01", title: "Strategy", desc: "Tone, pillars, posting cadence." },
      { step: "02", title: "Production", desc: "Shoot, design, write, edit." },
      { step: "03", title: "Publish", desc: "Schedule, post, engage." },
      { step: "04", title: "Analyse", desc: "Weekly metrics, monthly deep-dive." },
    ],
    faqs: [
      { q: "Do you also shoot the content?", a: "Yes — full production is built into the retainer." },
    ],
    startingAt: "From KES 80,000 / month",
    timeline: "Ongoing retainer",
  },
  {
    slug: "analytics",
    name: "Marketing Analytics",
    icon: "LineChart",
    desc: "Dashboards and reports that turn raw numbers into decisions.",
    category: "Growth",
    tagline: "Decisions backed by maths, not vibes.",
    hero: "GA4 setup, dashboard builds, attribution, cohort analysis and weekly insight reports — for teams that want to act on data, not stare at it.",
    features: [
      "GA4 / Plausible / Mixpanel setup",
      "Custom Looker Studio dashboards",
      "Funnel & cohort analysis",
      "Attribution modelling",
      "Weekly executive summaries",
      "Quarterly strategy reviews",
    ],
    deliverables: ["Tracking implementation", "Live dashboards", "Insight reports"],
    process: [
      { step: "01", title: "Audit", desc: "Current tracking and gaps." },
      { step: "02", title: "Plan", desc: "Events, conversions, KPIs." },
      { step: "03", title: "Implement", desc: "Tag manager, pixels, server-side." },
      { step: "04", title: "Dashboard", desc: "Built in Looker Studio." },
      { step: "05", title: "Report", desc: "Weekly insight emails." },
    ],
    faqs: [
      { q: "GA4 only?", a: "Anything with an API — Mixpanel, Amplitude, Plausible, custom." },
    ],
    startingAt: "From KES 45,000 / project",
    timeline: "2–3 weeks setup",
  },
  {
    slug: "packaging-design",
    name: "Packaging Design",
    icon: "Package",
    desc: "Packaging that earns shelf time and survives the camera test.",
    category: "Creative",
    tagline: "Packaging that wins the shelf and the Instagram feed.",
    hero: "Dieline-accurate packaging design — from FMCG to specialty coffee to premium spirits.",
    features: [
      "Structural & dieline design",
      "Material & finish guidance",
      "Pre-press setup",
      "Mockups & shelf simulations",
      "Print supervision",
    ],
    deliverables: ["Print-ready dielines (AI/PDF)", "3D mockups", "Brand-locked label system"],
    process: [
      { step: "01", title: "Brief", desc: "Product, market, shelf context." },
      { step: "02", title: "Structure", desc: "Dielines and material plan." },
      { step: "03", title: "Design", desc: "Visual system on dieline." },
      { step: "04", title: "Proof", desc: "Print-shop ready files + proofs." },
    ],
    faqs: [
      { q: "Do you work with our printer?", a: "Yes — I'll liaise directly to spec everything." },
    ],
    startingAt: "From KES 50,000 / project",
    timeline: "3–5 weeks",
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    icon: "PenTool",
    desc: "Copy, scripts and short-form video built for each platform's algorithm.",
    category: "Growth",
    tagline: "Words and clips engineered for the feed — and the click-through.",
    hero: "Long-form articles, short-form scripts, ad copy, newsletters and reels — written and produced for performance.",
    features: [
      "SEO-optimised articles",
      "Reels / TikTok / Shorts scripts + shoots",
      "Email newsletters & sequences",
      "Ad copy variants for A/B testing",
      "Brand voice guidelines",
    ],
    deliverables: ["Editorial calendar", "Finished assets per cycle", "Performance notes"],
    process: [
      { step: "01", title: "Voice", desc: "Tone of voice document." },
      { step: "02", title: "Calendar", desc: "Monthly topic plan." },
      { step: "03", title: "Produce", desc: "Write, shoot, edit, design." },
      { step: "04", title: "Publish", desc: "Across channels, on schedule." },
    ],
    faqs: [
      { q: "Do you write in Swahili too?", a: "Yes — and translation is built in for East African campaigns." },
    ],
    startingAt: "From KES 40,000 / month",
    timeline: "Monthly retainer",
  },
  {
    slug: "print-design",
    name: "Print Design",
    icon: "Printer",
    desc: "Books, magazines, brochures and stationery built for the press.",
    category: "Creative",
    tagline: "Print that respects the paper — and the press.",
    hero: "Magazine, book, brochure, annual report and stationery design — typographically rigorous, print-shop ready.",
    features: [
      "InDesign-mastered layout",
      "Typography & grid systems",
      "Pre-press & print supervision",
      "Paper stock & finish advice",
      "Multi-page document mastery",
    ],
    deliverables: ["Print-ready PDFs (X-1a)", "Source InDesign files", "Print specifications"],
    process: [
      { step: "01", title: "Brief", desc: "Format, page count, distribution." },
      { step: "02", title: "Grid", desc: "Master grid + type system." },
      { step: "03", title: "Layout", desc: "Pages built to the grid." },
      { step: "04", title: "Pre-press", desc: "Print-shop ready files." },
    ],
    faqs: [
      { q: "Can you handle 200+ page books?", a: "Yes — annual reports and books are some of my favourite work." },
    ],
    startingAt: "From KES 60,000 / project",
    timeline: "3–6 weeks",
  },
  {
    slug: "visual-design",
    name: "Visual Design",
    icon: "Sparkles",
    desc: "Illustration, iconography and visual systems that unify every touchpoint.",
    category: "Creative",
    tagline: "Custom visual languages — not stock-photo first-aid.",
    hero: "Custom illustration, iconography, pattern systems and visual languages that make a brand instantly recognisable.",
    features: [
      "Custom icon sets (50–200 icons)",
      "Illustration systems",
      "Pattern & texture libraries",
      "Spot illustrations for marketing",
      "Brand pattern systems",
    ],
    deliverables: ["SVG icon set", "Illustration library", "Source files (Figma + Illustrator)"],
    process: [
      { step: "01", title: "Audit", desc: "Existing visual language gaps." },
      { step: "02", title: "Direction", desc: "Style references & mood." },
      { step: "03", title: "Build", desc: "Full system on a master grid." },
      { step: "04", title: "Deliver", desc: "All formats, source files, usage notes." },
    ],
    faqs: [
      { q: "Can you match an existing illustration style?", a: "Yes — both extending and rebuilding existing visual systems." },
    ],
    startingAt: "From KES 55,000 / project",
    timeline: "3–5 weeks",
  },
  {
    slug: "document-design",
    name: "Tenders, Proposals & Long Documents",
    icon: "FileText",
    desc: "Tender bids, proposals, RFPs, white papers and impact reports — engineered to win.",
    category: "Editorial",
    tagline: "Documents that win the contract before page 3.",
    hero: "Tender response design, investor proposals, RFP submissions, white papers, impact reports and government bids — typographically rigorous, on-message, and tuned to the evaluator's checklist.",
    features: [
      "Tender & RFP response design",
      "Investor pitch documents",
      "White papers & research reports",
      "Annual & impact reports",
      "Government & NGO submissions",
      "Editable Word/InDesign masters for in-house reuse",
      "Compliance-formatted (page limits, fonts, margins)",
    ],
    deliverables: ["Print-ready PDF", "Editable master (Word + InDesign)", "Document style guide", "Re-usable template system"],
    process: [
      { step: "01", title: "Read the RFP", desc: "Strict review of evaluator criteria, page limits and required sections." },
      { step: "02", title: "Architecture", desc: "Section-by-section outline mapped to scoring." },
      { step: "03", title: "Design system", desc: "Cover, dividers, type, callouts, charts." },
      { step: "04", title: "Layout", desc: "Full document built on a master grid." },
      { step: "05", title: "QA", desc: "Compliance check, proof, signature pages." },
      { step: "06", title: "Submit", desc: "Final PDF + editable master + filing checklist." },
    ],
    faqs: [
      { q: "How fast can you turn a tender around?", a: "Standard turnaround is 5–10 days; rush 48-hour turnarounds are possible with surcharge." },
      { q: "Do you write the content too?", a: "I can co-write key sections with your subject-matter experts, or design from your draft." },
    ],
    startingAt: "From KES 45,000 / project",
    timeline: "5–14 days",
  },
];

export function getSubServices(serviceSlug: string): ServiceSubService[] {
  const service = services.find((item) => item.slug === serviceSlug);
  if (!service) return [];

  return service.features.slice(0, 3).map((feature, index) => {
    const name = subServiceName(feature);
    const deliverable = service.deliverables[index] ?? service.deliverables[0] ?? "Delivery-ready assets";
    const process = service.process[index]?.title ?? "Delivery";

    return {
      slug: slugify(name),
      name,
      kicker: `${service.category} specialist lane ${String(index + 1).padStart(2, "0")}.`,
      summary: `${feature} delivered as a focused ${service.name.toLowerCase()} engagement with strategy, production discipline and clean handoff.`,
      outcomes: [
        `A sharper ${name.toLowerCase()} outcome tied to the wider ${service.name.toLowerCase()} system.`,
        `A practical scope that moves from ${process.toLowerCase()} to delivery without wasted steps.`,
        `Assets and guidance your team can keep using after launch.`,
      ],
      packages: [
        `${process} workshop and scope definition`,
        deliverable,
        "Final files, usage notes and implementation guidance",
      ],
      proof: `${service.tagline} This sub-service narrows the work into a clear, premium package without losing the full strategic context.`,
      idealFor: `Brands and teams that need ${name.toLowerCase()} as a specific deliverable inside a larger ${service.category.toLowerCase()} roadmap.`,
    };
  });
}

export function getSubService(serviceSlug: string, subSlug: string) {
  return getSubServices(serviceSlug).find((item) => item.slug === subSlug);
}

export function getServicePackages(serviceSlug: string) {
  const service = services.find((item) => item.slug === serviceSlug);
  if (!service) return [];

  const baseName = service.name.replace(/ & .*/, "").replace(/ Design$/, "");
  const diagnosticPrice =
    service.category === "Digital" ? "From KES 35,000 / diagnostic project" :
    service.category === "Media" ? "From KES 25,000 / diagnostic project" :
    service.category === "Growth" ? "From KES 30,000 / diagnostic project" :
    service.category === "Editorial" ? "From KES 25,000 / diagnostic project" :
    "From KES 25,000 / diagnostic project";

  return [
    {
      slug: "diagnostic",
      name: `${baseName} Diagnostic`,
      price: diagnosticPrice,
      desc: "A focused expert review, clarity session and action roadmap before you commit to a larger investment.",
      idealFor: "Founders and teams that need direction, pricing clarity or a second opinion before production starts.",
      includes: ["Audit or discovery call", "Priority recommendations", "Scope and next-step roadmap"],
    },
    {
      slug: "signature",
      name: `${baseName} Signature Build`,
      price: service.startingAt,
      desc: "The recommended package: strategy, execution, launch assets and a polished handoff for a premium client-facing result.",
      idealFor: "Serious clients who want the complete professional outcome delivered with strategy, craft and handoff.",
      includes: ["Strategy and creative direction", "Core production work", "Launch-ready handoff"],
      recommended: true,
    },
    {
      slug: "growth-partner",
      name: `${baseName} Growth Partner`,
      price: "Custom budget",
      desc: "A deeper retainer or multi-phase engagement for brands that want strategy, production, iteration and ROI reporting.",
      idealFor: "Brands, organisations and international teams that need ongoing support, iteration and measurable growth.",
      includes: ["Monthly or multi-phase delivery", "Priority support", "Performance review and improvement plan"],
      customBudget: true,
    },
    {
      slug: "custom",
      name: "Custom Package",
      price: "Your budget range",
      desc: "A flexible request for clients who already know what they want to invest or need a tailored scope.",
      idealFor: "Clients with unusual requirements, mixed services, procurement limits or a defined internal budget.",
      includes: ["Custom scope", "Budget-aligned recommendation", "Timeline and milestone advice"],
      customBudget: true,
    },
  ];
}
