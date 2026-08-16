export type EngagementPackage = {
  slug: string;
  name: string;
  label: string;
  price: string;
  marketNote: string;
  idealFor: string;
  description: string;
  includes: string[];
  outcomes: string[];
  timeline: string;
  cta: string;
};

export const engagementPackages: EngagementPackage[] = [
  {
    slug: "diagnostic",
    name: "Diagnostic",
    label: "Clarity sprint",
    price: "From KES 25,000 / diagnostic project",
    marketNote: "Positioned above quick audits and below full build work, suitable for founders and teams that need direction before committing larger budgets.",
    idealFor: "Businesses that feel stuck, unsure what to build, or need a senior perspective before spending on design, marketing or technology.",
    description: "A focused strategy session and audit that clarifies the real problem, the opportunity, the recommended direction and the best next investment.",
    includes: [
      "Discovery call and business context review",
      "Digital presence, brand or funnel audit",
      "Problem diagnosis and opportunity map",
      "Prioritised recommendations",
      "Next-step scope and investment guidance",
    ],
    outcomes: [
      "Clearer direction before spending",
      "Reduced risk of building the wrong thing",
      "A practical roadmap for the next move",
    ],
    timeline: "3-7 working days",
    cta: "Book a Diagnostic",
  },
  {
    slug: "signature-build",
    name: "Signature Build",
    label: "Strategy + execution",
    price: "From KES 85,000 / project",
    marketNote: "Aligned with professional Kenyan brand, web and digital build ranges where serious business websites and identity systems commonly start from KES 75,000-150,000+.",
    idealFor: "Businesses ready to build a premium brand, website, campaign, content system or digital experience with clear strategic direction.",
    description: "The main project package where I move from strategy into creation and delivery, bringing together the thinking, design, build and handoff required to launch well.",
    includes: [
      "Strategy and creative direction",
      "Defined scope, milestones and delivery plan",
      "Design, content or digital production",
      "Implementation or launch-ready handoff",
      "Source files, documentation and support notes",
    ],
    outcomes: [
      "A stronger market-facing asset",
      "Better trust, clarity and conversion",
      "A polished system ready for real use",
    ],
    timeline: "2-6 weeks depending on scope",
    cta: "Start a Signature Build",
  },
  {
    slug: "growth-partner",
    name: "Growth Partner",
    label: "Ongoing strategic support",
    price: "Custom monthly retainer",
    marketNote: "Built for clients whose needs go beyond one deliverable. Kenyan growth retainers vary widely, with serious social, content and lead generation retainers often moving from KES 85,000 to KES 280,000+ monthly.",
    idealFor: "Businesses that need continuous digital strategy, marketing direction, content systems, optimisation, reporting and execution support.",
    description: "A longer-term partnership for businesses that need a strategic digital brain beside them, with execution support across brand, content, technology and growth.",
    includes: [
      "Monthly strategy and planning sessions",
      "Ongoing digital roadmap",
      "Priority execution across agreed capabilities",
      "Campaign, content or system optimisation",
      "Monthly reporting and recommendations",
    ],
    outcomes: [
      "Consistent strategic direction",
      "More coordinated digital activity",
      "Compounding improvement over time",
    ],
    timeline: "Monthly or quarterly engagement",
    cta: "Discuss a Growth Partnership",
  },
];

export const getEngagementPackage = (slug: string) =>
  engagementPackages.find((item) => item.slug === slug);
