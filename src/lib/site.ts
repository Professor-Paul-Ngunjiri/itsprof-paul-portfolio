export const site = {
  name: "Paul Ngunjiri",
  brand: "ItsProf Paul",
  tagline: "Premium brand, web, content and growth systems for ambitious businesses.",
  location: "Nairobi, Kenya",
  email: "paul@pahwah.com",
  quoteEmail: "paul@pahwah.com",
  partner: {
    name: "Pahwah Digitech",
    url: "https://www.pahwah.com",
  },
  phone: "+254796219399",
  whatsapp: "254796219399",
  years: "4+",
  projects: "60+",
  clients: "50+",
  services: "15+",
  countries: "3+",
  socials: {
    linkedin: { url: "https://www.linkedin.com/in/paul-ngunjiri-wanjohi/", handle: "@itsprofpaul", count: "—" },
    instagram: { url: "https://instagram.com/itsprofpaul", handle: "@itsprofpaul", count: "—" },
    facebook: { url: "https://www.facebook.com/ItsProfPaul/", handle: "ItsProf Paul", count: "—" },
    tiktok: { url: "https://www.tiktok.com/@itsprofpaul", handle: "@itsprofpaul", count: "—" },
    pinterest: { url: "https://www.pinterest.com/PahwahDigitech/_created/", handle: "@itsprofpaul", count: "—" },
  },
  titles: [
    "Brand & Web Strategist",
    "Creative Technologist",
    "Digital Growth Partner",
    "Visual Content Director",
  ],
};

export const expertisePillars = [
  {
    title: "Brand & Digital Experience",
    desc: "Brand strategy, identity, UI/UX, web design and web development shaped into one clear digital presence.",
  },
  {
    title: "Visual Content & Media",
    desc: "Graphic design, visual systems, photography, videography, film, editing and motion content with one premium look.",
  },
  {
    title: "Growth & Editorial Systems",
    desc: "Digital marketing, social content, analytics, print, proposals, tenders and editorial documents built to win trust.",
  },
];

export const servicePillars = [
  {
    title: "Brand & Digital Experience",
    desc: "For clients who need a memorable identity, a polished interface and a fast website that converts.",
    services: ["brand-identity", "web-design", "web-development", "ui-ux-design"],
  },
  {
    title: "Visual Content & Media",
    desc: "For launches, campaigns and organisations that need premium visuals across design, packaging, photo, film and motion.",
    services: ["graphic-design", "visual-design", "packaging-design", "photography", "videography", "video-editing"],
  },
  {
    title: "Growth & Editorial Systems",
    desc: "For teams that need marketing, social content, analytics, print assets, proposals, RFPs and tender documents that persuade.",
    services: ["digital-marketing", "social-media", "analytics", "content-creation", "print-design", "document-design"],
  },
];

export type ClientBrand = {
  name: string;
  url: string;
  mark: string;
  logo?: string;
};

export const clientBrands: ClientBrand[] = [
  { name: "Savanna Coffee", url: "/portfolio", mark: "SC" },
  { name: "Kazi Fintech", url: "/portfolio", mark: "KZ" },
  { name: "Tamu Restaurants", url: "/portfolio", mark: "TR" },
  { name: "Asha Foundation", url: "/portfolio", mark: "AF" },
  { name: "Jamii Bank", url: "/portfolio", mark: "JB" },
  { name: "Safari Trust", url: "/portfolio", mark: "ST" },
  { name: "Mlima Learn", url: "/portfolio", mark: "ML" },
  { name: "Nuru Skincare", url: "/portfolio", mark: "NS" },
];

export const seoKeywords = [
  "brand strategist in Nairobi",
  "web designer in Kenya",
  "creative technologist Kenya",
  "premium portfolio designer",
  "digital marketing consultant Nairobi",
  "brand identity designer Kenya",
  "UI UX designer Nairobi",
  "full stack web developer Kenya",
  "commercial photographer Nairobi",
  "video production Kenya",
];

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
    startingAt: "KES 75,000",
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
    startingAt: "KES 15,000",
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
    startingAt: "KES 95,000",
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
    startingAt: "KES 150,000",
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
    startingAt: "KES 120,000",
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
    startingAt: "KES 35,000 / day",
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
    startingAt: "KES 180,000",
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
    startingAt: "KES 25,000",
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
    startingAt: "KES 60,000 / month",
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
    startingAt: "KES 80,000 / month",
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
    startingAt: "KES 45,000",
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
    startingAt: "KES 50,000",
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
    startingAt: "KES 40,000 / month",
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
    startingAt: "KES 60,000",
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
    startingAt: "KES 55,000",
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
    startingAt: "KES 45,000",
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
    service.category === "Digital" ? "KES 35,000" :
    service.category === "Media" ? "KES 25,000" :
    service.category === "Growth" ? "KES 30,000" :
    service.category === "Editorial" ? "KES 25,000" :
    "KES 25,000";

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

export const investmentReasons = [
  {
    title: "One accountable expert",
    desc: "Strategy, design, content, code and campaign thinking stay connected, reducing vendor friction and protecting the quality bar.",
  },
  {
    title: "Built for measurable return",
    desc: "Every engagement defines what success should move: leads, trust, sales velocity, conversion, retention, authority or operational clarity.",
  },
  {
    title: "International delivery standard",
    desc: "Clean communication, documented scope, professional handoff, source-file ownership and async-friendly collaboration for global clients.",
  },
];

export const values = [
  { title: "Clarity First", desc: "Every project begins by making the offer, audience and next action easier to understand." },
  { title: "Premium Craft", desc: "Design, content and code are polished enough to represent serious brands in serious rooms." },
  { title: "Measurable Value", desc: "The work is tied to trust, leads, sales conversations, visibility, efficiency or authority." },
  { title: "Reliable Delivery", desc: "Timelines, scope, communication and handoff stay clear so clients never feel lost." },
  { title: "Human Collaboration", desc: "I listen carefully, explain plainly and build with the people who will actually use the work." },
];

export const processSteps = [
  { n: "01", title: "Discovery & Brief", desc: "We unpack your goals, audience and constraints in a structured kickoff.", features: ["Brand audit", "Stakeholder interviews", "Goals & KPIs"] },
  { n: "02", title: "Research & Strategy", desc: "Competitive scans, audience signals and a clear positioning statement.", features: ["Competitor analysis", "Audience personas", "Positioning doc"] },
  { n: "03", title: "Concept & Design", desc: "Multiple directions, each grounded in a defensible creative rationale.", features: ["3 concept directions", "Mood boards", "Design rationale"] },
  { n: "04", title: "Development & Production", desc: "Builds, shoots, edits — execution at the same standard as the concept.", features: ["Production-grade output", "Quality checkpoints", "Daily progress logs"] },
  { n: "05", title: "Review & Refinement", desc: "Structured rounds of feedback with versioned, traceable changes.", features: ["Versioned files", "Structured feedback", "Change log"] },
  { n: "06", title: "Delivery & Launch", desc: "Final files, source assets and a launch checklist that leaves nothing loose.", features: ["All source files", "Launch checklist", "Training call"] },
  { n: "07", title: "Post-Launch Support", desc: "Performance reviews and iteration — the work doesn't stop at handoff.", features: ["30-day support", "Performance review", "Iteration roadmap"] },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  year?: string;
  client?: string;
  hue?: number; // for cover gradient
  liveUrl?: string;
  metric?: string;
  preview?: string;
  previewAlt?: string;
};

const cover = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=960&q=80`;

export const projects: Project[] = [
  { slug: "Savanna Coffee", title: "Savanna Coffee - Brand System", category: "Branding", desc: "Identity, packaging and launch campaign for a Nairobi specialty roaster.", year: "2024", client: "Savanna Coffee", hue: 25, metric: "+38% first-quarter sales lift", preview: cover("photo-1495474472287-4d71bcdd2085"), previewAlt: "Coffee brand and packaging preview" },
  { slug: "kazi-fintech", title: "Kazi - Fintech App UI", category: "UI/UX", desc: "Mobile-first banking experience for SMEs across East Africa.", year: "2024", client: "Kazi", hue: 250, metric: "42 core screens designed", preview: cover("photo-1551288049-bebda4e38f71"), previewAlt: "Fintech dashboard interface preview" },
  { slug: "msafiri-travel", title: "Msafiri - Travel Platform", category: "Web Dev", desc: "Full-stack booking platform built with React and a typed API.", year: "2024", client: "Msafiri", hue: 200, metric: "95+ performance target", preview: cover("photo-1507525428034-b723cf961d3e"), previewAlt: "Travel platform destination preview" },
  { slug: "tamu-restaurant", title: "Tamu - Restaurant Campaign", category: "Photography", desc: "Editorial food photography and a 360 campaign for a flagship opening.", year: "2023", client: "Tamu", hue: 35, metric: "120 launch assets", preview: cover("photo-1504674900247-0877df9cc836"), previewAlt: "Restaurant food photography preview" },
  { slug: "echo-records", title: "Echo Records - Brand Film", category: "Video", desc: "Cinematic 90-second hero film for an indie record label.", year: "2024", client: "Echo Records", hue: 290, metric: "9 platform cutdowns", preview: cover("photo-1516280440614-37939bbacd81"), previewAlt: "Music brand film preview" },
  { slug: "asha-foundation", title: "Asha Foundation - Donor Campaign", category: "Marketing", desc: "Donor acquisition site plus a 3-month performance marketing engine.", year: "2023", client: "Asha Foundation", hue: 145, metric: "3-month growth engine", preview: cover("photo-1559027615-cd4628902d4a"), previewAlt: "Foundation campaign preview" },
  { slug: "harambee-tender", title: "Harambee Health - Government Tender", category: "Editorial", desc: "120-page tender response designed to score against strict RFP criteria.", year: "2024", client: "Harambee Health", hue: 215, metric: "120-page submission", preview: cover("photo-1450101499163-c8848c66ca85"), previewAlt: "Tender document design preview" },
  { slug: "nuru-packaging", title: "Nuru Skincare - Packaging Line", category: "Packaging", desc: "Six-SKU packaging system for a clean-beauty launch.", year: "2024", client: "Nuru", hue: 320, metric: "6-SKU system", preview: cover("photo-1556228578-8c89e6adf883"), previewAlt: "Skincare packaging preview" },
  { slug: "swahili-magazine", title: "Swahili Quarterly - Print Magazine", category: "Print", desc: "Editorial design for a 96-page quarterly arts magazine.", year: "2023", client: "Swahili Quarterly", hue: 12, metric: "96 pages", preview: cover("photo-1516321318423-f06f85e504b3"), previewAlt: "Magazine editorial design preview" },
  { slug: "jamii-social", title: "Jamii Bank - Social Content Engine", category: "Social", desc: "Monthly content system: 40 assets, 4 reels, 1 hero campaign.", year: "2024", client: "Jamii Bank", hue: 195, metric: "40 assets/month", preview: cover("photo-1611162617474-5b21e879e113"), previewAlt: "Social content production preview" },
  { slug: "pamoja-icons", title: "Pamoja - Custom Icon System", category: "Branding", desc: "180-icon system for a pan-African logistics SaaS.", year: "2023", client: "Pamoja", hue: 50, metric: "180 custom icons", preview: cover("photo-1586528116311-ad8dd3c8310d"), previewAlt: "Logistics visual system preview" },
  { slug: "safari-impact-report", title: "Safari Trust - Impact Report", category: "Editorial", desc: "64-page annual impact report for a wildlife conservation NGO.", year: "2024", client: "Safari Trust", hue: 110, metric: "64-page report", preview: cover("photo-1547471080-7cc2caa01a7e"), previewAlt: "Conservation impact report preview" },
  { slug: "mlima-uiux", title: "Mlima Learn - EdTech Product", category: "UI/UX", desc: "Web + mobile design system for an African e-learning platform.", year: "2024", client: "Mlima Learn", hue: 265, metric: "Cross-platform design system", preview: cover("photo-1509062522246-3755977927d7"), previewAlt: "Education technology platform preview" },
  { slug: "zawadi-launch", title: "Zawadi Gifts - E-commerce Launch", category: "Web Dev", desc: "Headless commerce store with M-Pesa, analytics and content engine.", year: "2024", client: "Zawadi", hue: 340, metric: "M-Pesa checkout", preview: cover("photo-1513201099705-a9746e1e201f"), previewAlt: "E-commerce gift store preview" },
  { slug: "rangi-poster-series", title: "Rangi - Poster Series", category: "Print", desc: "12-poster typographic series exhibited in Nairobi gallery week.", year: "2023", client: "Rangi", hue: 0, metric: "12-poster series", preview: cover("photo-1513475382585-d06e58bcb0e0"), previewAlt: "Poster and print design preview" },
  { slug: "lulu-portrait", title: "Lulu Mwangi - Portrait Series", category: "Photography", desc: "Editorial portrait series for a feature on East African musicians.", year: "2023", client: "Lulu Mwangi", hue: 80, metric: "Editorial feature set", preview: cover("photo-1508214751196-bcfd4ca60f91"), previewAlt: "Editorial portrait photography preview" },
];

export const testimonials = [
  { name: "Wanjiku Mwangi", role: "Founder", company: "Savanna Coffee", quote: "Paul rebuilt our brand from the ground up. Sales lifted 38% in the first quarter after launch — the work pays for itself." },
  { name: "David Otieno", role: "CEO", company: "Kazi Fintech", quote: "He thinks like an engineer and ships like a designer. Our app feels twice as expensive as it cost to build." },
  { name: "Amina Hassan", role: "Marketing Lead", company: "Tamu Restaurants", quote: "The photography brief was tight and the results were better than the briefs we've paid 4x for. Easy hire." },
  { name: "Brian Kiprono", role: "Director", company: "Asha Foundation", quote: "Paul cares. He answers fast, explains tradeoffs in plain English, and the metrics back up the work." },
];
