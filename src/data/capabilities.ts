export type CapabilityLine = {
  slug: string;
  name: string;
  desc: string;
  price: string;
  timeline: string;
  includes: string[];
  outcomes: string[];
  relatedServiceSlug?: string;
};

export type CapabilityGroup = {
  slug: string;
  number: string;
  title: string;
  desc: string;
  heroImage: string;
  startingAt: string;
  engagement: string;
  estimatedTimeline: string;
  bestFor: string;
  lines: CapabilityLine[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    slug: "strategy-consulting",
    number: "01",
    title: "Strategy & Consulting",
    desc: "Clarity, direction and decision support before a business invests in brand, marketing, websites, automation or technology.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    startingAt: "Entry point from KES 25,000",
    engagement: "Projects, sessions & custom advisory",
    estimatedTimeline: "1 day to 3 weeks",
    bestFor: "Founders, companies, institutions and teams that need better digital decisions before spending on execution.",
    lines: [
      { slug: "digital-strategy", name: "Digital strategy", desc: "A clear roadmap for using digital channels, content, technology and systems to create business value.", price: "From KES 35,000 / project", timeline: "1-2 weeks", includes: ["Discovery and context review", "Digital opportunity map", "Priority roadmap"], outcomes: ["Clear direction", "Better investment decisions", "Aligned digital execution"], relatedServiceSlug: "digital-marketing" },
      { slug: "brand-strategy", name: "Brand strategy", desc: "Positioning, messaging and perception work that makes your business easier to understand, trust and choose.", price: "From KES 45,000 / project", timeline: "1-3 weeks", includes: ["Audience and competitor review", "Positioning direction", "Messaging framework"], outcomes: ["Sharper differentiation", "More confident communication", "Stronger market perception"], relatedServiceSlug: "brand-identity" },
      { slug: "digital-transformation", name: "Digital transformation", desc: "Advisory for organisations modernising operations, customer experience, marketing and internal systems.", price: "Custom quote", timeline: "2-8 weeks", includes: ["Current-state assessment", "Transformation roadmap", "Implementation priorities"], outcomes: ["Operational clarity", "Modernised workflows", "Better digital adoption"], relatedServiceSlug: "web-development" },
      { slug: "digital-audits", name: "Digital audits", desc: "A practical review of your brand, website, content, funnel, analytics and digital presence.", price: "From KES 25,000 / project", timeline: "3-7 days", includes: ["Brand and website review", "Conversion issues", "Priority fixes"], outcomes: ["Visible gaps identified", "Faster next steps", "Reduced wasted spend"], relatedServiceSlug: "analytics" },
      { slug: "marketing-strategy", name: "Marketing strategy", desc: "A practical plan for reaching the right audience with the right message, channel and conversion path.", price: "From KES 40,000 / project", timeline: "1-2 weeks", includes: ["Audience and offer review", "Channel plan", "Campaign priorities"], outcomes: ["Focused marketing", "Better lead quality", "Clear campaign direction"], relatedServiceSlug: "digital-marketing" },
      { slug: "ai-automation-consulting", name: "AI automation consulting", desc: "Identify where AI and automation can reduce repetitive work, improve customer journeys and support growth.", price: "From KES 45,000 / project", timeline: "1-3 weeks", includes: ["Workflow review", "AI use-case map", "Automation recommendations"], outcomes: ["Reduced manual work", "Smarter operations", "Practical AI adoption"], relatedServiceSlug: "web-development" },
    ],
  },
  {
    slug: "branding-creative",
    number: "02",
    title: "Branding & Creative",
    desc: "Identity, creative direction and visual systems that make a business look credible, premium and consistent.",
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
    startingAt: "Entry point from KES 15,000",
    engagement: "Project, deliverable & retainer work",
    estimatedTimeline: "1 day to 4 weeks",
    bestFor: "Brands that need stronger perception, clearer identity and creative assets that feel professional everywhere.",
    lines: [
      { slug: "visual-identity", name: "Visual identity", desc: "A coherent visual system for how your brand appears across digital, print and campaigns.", price: "From KES 65,000 / project", timeline: "2-4 weeks", includes: ["Identity direction", "Colour and type system", "Application examples"], outcomes: ["Consistent look", "Premium perception", "Stronger recognition"], relatedServiceSlug: "brand-identity" },
      { slug: "logo-design", name: "Logo design", desc: "A professional logo mark and usage system designed around positioning, audience and longevity.", price: "From KES 30,000 / project", timeline: "1-5 working days", includes: ["Concept exploration", "Final logo files", "Usage notes"], outcomes: ["Recognisable mark", "Cleaner brand presence", "Professional handoff"], relatedServiceSlug: "brand-identity" },
      { slug: "brand-guidelines", name: "Brand guidelines", desc: "Rules that help your team use the brand consistently across content, documents and digital channels.", price: "From KES 45,000 / project", timeline: "1-2 weeks", includes: ["Logo rules", "Colour/type rules", "Do and don't examples"], outcomes: ["Team consistency", "Less design confusion", "Stronger trust signals"], relatedServiceSlug: "brand-identity" },
      { slug: "creative-direction", name: "Creative direction", desc: "A high-level creative system for campaigns, launches, photoshoots, content or brand experiences.", price: "From KES 50,000 / engagement", timeline: "1-3 weeks", includes: ["Creative concept", "Mood and visual direction", "Production guidance"], outcomes: ["Clear creative taste", "Better campaign consistency", "Reduced guesswork"], relatedServiceSlug: "visual-design" },
      { slug: "graphic-design", name: "Graphic design", desc: "Professional digital and print designs for campaigns, launches, events, social media and business communication.", price: "From KES 15,000 / project", timeline: "2-7 days", includes: ["Design concepts", "Final exports", "Source files when scoped"], outcomes: ["Sharper communication", "Better presentation", "Campaign-ready assets"], relatedServiceSlug: "graphic-design" },
      { slug: "motion-graphics", name: "Motion graphics", desc: "Animated visuals for brand intros, explainers, social content, product showcases and campaign moments.", price: "From KES 25,000 / project", timeline: "1-2 weeks", includes: ["Storyboard or concept", "Motion design", "Final video exports"], outcomes: ["More engaging content", "Premium movement", "Better attention"], relatedServiceSlug: "video-editing" },
    ],
  },
  {
    slug: "websites-digital-experiences",
    number: "03",
    title: "Websites & Digital Experiences",
    desc: "Web strategy, UX, design, development and search foundations for sites that explain, persuade and convert.",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    startingAt: "Entry point from KES 35,000",
    engagement: "Strategy, design & build projects",
    estimatedTimeline: "1 week to 8 weeks",
    bestFor: "Businesses that need websites, landing pages, portals or product interfaces that are clear, fast and conversion-aware.",
    lines: [
      { slug: "website-strategy", name: "Website strategy", desc: "Plan the role, structure, message and conversion path of a website before design begins.", price: "From KES 35,000 / project", timeline: "1 week", includes: ["Site goals", "Page strategy", "Conversion plan"], outcomes: ["Clear structure", "Better content flow", "Stronger conversion path"], relatedServiceSlug: "web-design" },
      { slug: "ui-ux", name: "UI/UX", desc: "Interface and experience design for websites, apps, dashboards and digital products.", price: "From KES 55,000 / project", timeline: "2-4 weeks", includes: ["User flow", "Wireframes", "High-fidelity screens"], outcomes: ["Better usability", "Cleaner journeys", "Reduced friction"], relatedServiceSlug: "ui-ux-design" },
      { slug: "website-design", name: "Website design", desc: "Premium visual design for websites that need credibility, clarity and brand consistency.", price: "From KES 65,000 / project", timeline: "2-4 weeks", includes: ["Homepage and inner pages", "Responsive design", "Design handoff"], outcomes: ["Premium presence", "Clearer communication", "More trust"], relatedServiceSlug: "web-design" },
      { slug: "website-development", name: "Website development", desc: "Fast, responsive and SEO-aware websites built for real business use.", price: "From KES 85,000 / project", timeline: "2-6 weeks", includes: ["Responsive build", "Performance basics", "Launch support"], outcomes: ["Live digital asset", "Better speed", "Stronger lead capture"], relatedServiceSlug: "web-development" },
      { slug: "landing-pages", name: "Landing pages", desc: "Focused campaign pages for offers, launches, lead generation and paid traffic.", price: "From KES 45,000 / project", timeline: "1-2 weeks", includes: ["Offer structure", "Page design/build", "Conversion sections"], outcomes: ["Focused action", "Better campaign conversion", "Clearer offer"], relatedServiceSlug: "web-design" },
      { slug: "seo-foundations", name: "SEO foundations", desc: "Technical and content foundations that help search engines understand and rank your website better.", price: "From KES 35,000 / project", timeline: "1-2 weeks", includes: ["Metadata review", "Content structure", "Technical basics"], outcomes: ["Better indexability", "Cleaner search signals", "Stronger organic base"], relatedServiceSlug: "analytics" },
    ],
  },
  {
    slug: "digital-marketing-growth",
    number: "04",
    title: "Digital Marketing & Growth",
    desc: "Content, campaigns, search, ads, conversion and analytics shaped around measurable growth.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    startingAt: "Entry point from KES 25,000",
    engagement: "Projects & ongoing retainers",
    estimatedTimeline: "2 weeks to ongoing",
    bestFor: "Businesses that need consistent visibility, better leads, clearer content and campaigns that can be measured.",
    lines: [
      { slug: "content-strategy", name: "Content strategy", desc: "A plan for what to say, where to say it and how content supports trust and conversion.", price: "From KES 25,000 / project", timeline: "1-2 weeks", includes: ["Content pillars", "Channel plan", "Publishing priorities"], outcomes: ["Less random posting", "Clearer messaging", "Better audience trust"], relatedServiceSlug: "content-creation" },
      { slug: "social-media-management", name: "Social media management", desc: "Structured social media planning, content and publishing support for consistent brand presence.", price: "From KES 45,000 / month", timeline: "Monthly", includes: ["Content calendar", "Design/caption support", "Performance review"], outcomes: ["Consistent presence", "Better engagement", "Improved brand recall"], relatedServiceSlug: "social-media" },
      { slug: "seo", name: "SEO", desc: "Search strategy, content improvements and optimisation for businesses that want stronger organic discovery.", price: "From KES 45,000 / month", timeline: "Monthly", includes: ["Keyword direction", "On-page improvements", "Reporting"], outcomes: ["Better visibility", "Higher-quality traffic", "Long-term search growth"], relatedServiceSlug: "analytics" },
      { slug: "meta-ads", name: "Meta Ads", desc: "Campaign strategy and optimisation for Facebook and Instagram lead generation, awareness or sales.", price: "From KES 35,000 / month + ad spend", timeline: "Monthly", includes: ["Campaign setup", "Creative direction", "Performance review"], outcomes: ["Targeted reach", "Lead generation", "Better campaign learning"], relatedServiceSlug: "digital-marketing" },
      { slug: "google-ads", name: "Google Ads", desc: "Search-led campaigns for high-intent traffic, enquiries and measurable acquisition.", price: "From KES 40,000 / month + ad spend", timeline: "Monthly", includes: ["Keyword plan", "Campaign setup", "Conversion review"], outcomes: ["High-intent leads", "Measurable spend", "Sharper acquisition"], relatedServiceSlug: "digital-marketing" },
      { slug: "conversion-optimization", name: "Conversion optimization", desc: "Improve pages, offers, messages and funnels so more visitors become serious enquiries or customers.", price: "From KES 45,000 / project", timeline: "2-3 weeks", includes: ["Conversion audit", "Funnel recommendations", "Test ideas"], outcomes: ["Better lead quality", "Less traffic waste", "Stronger sales path"], relatedServiceSlug: "analytics" },
    ],
  },
  {
    slug: "technology-systems",
    number: "05",
    title: "Technology & Systems",
    desc: "Software, automation, integrations and digital systems that make organisations more capable.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    startingAt: "Projects from KES 55,000",
    engagement: "Custom projects, sessions & support",
    estimatedTimeline: "1 week to 12+ weeks",
    bestFor: "Teams that need better workflows, connected tools, automation, custom systems or practical technology advice.",
    lines: [
      { slug: "custom-software", name: "Custom software", desc: "Purpose-built digital tools for workflows, teams, customers or internal operations.", price: "Custom quote", timeline: "4-12+ weeks", includes: ["Requirements mapping", "Product build", "Testing and handoff"], outcomes: ["Better operations", "Owned digital system", "Scalable workflows"], relatedServiceSlug: "web-development" },
      { slug: "business-systems", name: "Business systems", desc: "Structure the digital tools, processes and information flows a business needs to operate better.", price: "From KES 75,000 / project", timeline: "2-6 weeks", includes: ["Workflow mapping", "System design", "Implementation guidance"], outcomes: ["Operational clarity", "Less manual confusion", "Better team alignment"], relatedServiceSlug: "web-development" },
      { slug: "ai-automation", name: "AI automation", desc: "Practical automation using AI and no-code/low-code systems where it creates real operational value.", price: "From KES 65,000 / project", timeline: "2-6 weeks", includes: ["Use-case selection", "Automation setup", "Training notes"], outcomes: ["Time saved", "Fewer repetitive tasks", "Smarter workflows"], relatedServiceSlug: "web-development" },
      { slug: "workflow-automation", name: "Workflow automation", desc: "Connect tasks, forms, notifications and data flows so repeated work becomes easier to manage.", price: "From KES 55,000 / project", timeline: "2-4 weeks", includes: ["Workflow review", "Automation build", "Testing"], outcomes: ["Less manual work", "Faster response times", "Cleaner operations"], relatedServiceSlug: "web-development" },
      { slug: "api-integrations", name: "API integrations", desc: "Connect websites, tools, forms, CRMs, payment systems and business platforms.", price: "From KES 65,000 / project", timeline: "2-6 weeks", includes: ["Integration planning", "API connection", "Testing and documentation"], outcomes: ["Connected tools", "Cleaner data flow", "Reduced double entry"], relatedServiceSlug: "web-development" },
      { slug: "it-consultancy", name: "IT consultancy", desc: "Technology guidance for businesses making decisions about platforms, systems, vendors or digital operations.", price: "From KES 30,000 / session", timeline: "Flexible", includes: ["Consultation session", "Recommendations", "Decision support"], outcomes: ["Better technical decisions", "Reduced vendor confusion", "Clearer next steps"], relatedServiceSlug: "analytics" },
    ],
  },
  {
    slug: "content-production",
    number: "06",
    title: "Content Production",
    desc: "Photography, video and content assets that make brands feel more human, premium and persuasive.",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
    startingAt: "Entry point from KES 18,000",
    engagement: "Project, shoot & content packages",
    estimatedTimeline: "1 day to 4 weeks",
    bestFor: "Brands that need photography, video, edited content and professional documents that communicate trust quickly.",
    lines: [
      { slug: "photography", name: "Photography", desc: "Professional images for brands, teams, products, events, campaigns and digital platforms.", price: "From KES 25,000 / shoot", timeline: "1-7 days", includes: ["Shoot planning", "Photography session", "Edited images"], outcomes: ["Better visual trust", "Content library", "Premium presentation"], relatedServiceSlug: "photography" },
      { slug: "videography", name: "Videography", desc: "Video production for brands, events, products, campaigns and organisational storytelling.", price: "From KES 45,000 / project", timeline: "1-3 weeks", includes: ["Production planning", "Filming", "Edited final video"], outcomes: ["Stronger storytelling", "More engaging campaigns", "Professional brand presence"], relatedServiceSlug: "videography" },
      { slug: "corporate-videos", name: "Corporate videos", desc: "Professional company videos for profiles, launches, internal communication and stakeholder trust.", price: "From KES 75,000 / project", timeline: "2-4 weeks", includes: ["Concept and script direction", "Production", "Editing and delivery"], outcomes: ["Clearer company story", "Stakeholder confidence", "Reusable brand asset"], relatedServiceSlug: "videography" },
      { slug: "product-photography", name: "Product photography", desc: "Clean product visuals for e-commerce, catalogues, ads, social media and brand assets.", price: "From KES 20,000 / shoot", timeline: "2-7 days", includes: ["Product shoot", "Editing", "Exported image set"], outcomes: ["Better product trust", "Improved sales presentation", "Consistent visuals"], relatedServiceSlug: "photography" },
      { slug: "video-editing", name: "Video editing", desc: "Editing, pacing, colour, sound and motion support for campaign, social or corporate video content.", price: "From KES 18,000 / project", timeline: "3-10 days", includes: ["Footage review", "Edited cut", "Final exports"], outcomes: ["Cleaner story", "Better retention", "Platform-ready content"], relatedServiceSlug: "video-editing" },
      { slug: "social-media-content", name: "Social media content", desc: "Campaign-ready visual and video content designed for consistent digital communication.", price: "From KES 35,000 / content package", timeline: "Weekly or monthly", includes: ["Content concepts", "Design or edit assets", "Caption/message support"], outcomes: ["Consistent posting", "Better engagement", "Stronger brand memory"], relatedServiceSlug: "content-creation" },
      { slug: "tenders-proposals-documents", name: "Tenders, proposals & long documents", desc: "Credible proposal, tender, RFP, report and long-form document design for high-stakes communication.", price: "From KES 25,000 / project", timeline: "3-10 days", includes: ["Document structure", "Professional layout", "PDF/export files"], outcomes: ["More credible submissions", "Clearer information", "Professional presentation"], relatedServiceSlug: "document-design" },
    ],
  },
];

export const capabilityLines = capabilityGroups.flatMap((group) =>
  group.lines.map((line) => ({ ...line, group: group.title, groupNumber: group.number })),
);

export const getCapabilityLine = (slug: string) =>
  capabilityLines.find((line) => line.slug === slug);

export const getCapabilityGroup = (slug: string) =>
  capabilityGroups.find((group) => group.slug === slug);

export const capabilityImageBySlug: Record<string, string> = {
  "digital-strategy": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  "brand-strategy": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=80",
  "digital-transformation": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  "digital-audits": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  "marketing-strategy": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=80",
  "ai-automation-consulting": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
  "visual-identity": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
  "logo-design": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80",
  "brand-guidelines": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=80",
  "creative-direction": "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
  "graphic-design": "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1400&q=80",
  "motion-graphics": "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=1400&q=80",
  "website-strategy": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
  "ui-ux": "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&w=1400&q=80",
  "website-design": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  "website-development": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
  "landing-pages": "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1400&q=80",
  "seo-foundations": "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=1400&q=80",
  "content-strategy": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  "social-media-management": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=80",
  seo: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1400&q=80",
  "meta-ads": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1400&q=80",
  "google-ads": "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=1400&q=80",
  "conversion-optimization": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  "custom-software": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
  "business-systems": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  "ai-automation": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
  "workflow-automation": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
  "api-integrations": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  "it-consultancy": "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  photography: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
  videography: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80",
  "corporate-videos": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  "product-photography": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
  "video-editing": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80",
  "social-media-content": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1400&q=80",
  "tenders-proposals-documents": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
};

export const getCapabilityImage = (slug: string, groupNumber?: string) => {
  if (capabilityImageBySlug[slug]) return capabilityImageBySlug[slug];
  const group = groupNumber ? capabilityGroups.find((item) => item.number === groupNumber) : getCapabilityGroup(slug);
  return group?.heroImage ?? capabilityGroups[0].heroImage;
};
