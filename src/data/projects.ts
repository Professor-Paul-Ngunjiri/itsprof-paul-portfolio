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
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=720&q=60`;

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
