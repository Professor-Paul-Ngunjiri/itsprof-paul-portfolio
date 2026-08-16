export type ClientBrand = {
  name: string;
  category: string;
  description: string;
  url: string;
  mark: string;
  logo?: string;
  logoScale?: number;
};

export type ClientBrandGroup = {
  category: string;
  brands: ClientBrand[];
};

const logoBase = "/brands-and -clients";

export const clientBrandGroups: ClientBrandGroup[] = [
  {
    category: "Technology & Digital",
    brands: [
      { name: "Ifinsta", category: "Technology & Digital", description: "Digital platform and technology brand.", url: "/portfolio", mark: "IF", logo: `${logoBase}/ifinsta.svg` },
      { name: "E-Digital Connect", category: "Technology & Digital", description: "Digital connectivity and online business solutions.", url: "/portfolio", mark: "ED", logo: `${logoBase}/e-digital-connect.jpg` },
      { name: "Surveillance Digital", category: "Technology & Digital", description: "Security, surveillance and digital systems brand.", url: "/portfolio", mark: "SD", logo: `${logoBase}/FINAL - Sullivex Digital-01.svg`, logoScale: 1.24 },
      { name: "Kwantabyte Technologies", category: "Technology & Digital", description: "Technology company building digital products and services.", url: "/portfolio", mark: "KT", logo: `${logoBase}/Kwantabyte-Technologies.jpg` },
      { name: "Peak Tech", category: "Technology & Digital", description: "Technology services and solutions brand.", url: "/portfolio", mark: "PK", logo: `${logoBase}/peak-tech-LOGOpeg.jpeg` },
      { name: "Eleso Solutions", category: "Technology & Digital", description: "Solutions-driven digital or business services brand.", url: "/portfolio", mark: "ES" },
      { name: "Wazi Internet", category: "Technology & Digital", description: "Internet and connectivity services brand.", url: "/portfolio", mark: "WI", logo: `${logoBase}/WAZI INTERNET logo 2-01.png`, logoScale: 1.28 },
      { name: "Africa Electronics", category: "Technology & Digital", description: "Electronics and technology product brand.", url: "/portfolio", mark: "AE", logo: `${logoBase}/Africa-Electronics.svg`, logoScale: 1.2 },
      { name: "MKSU HackFest", category: "Technology & Digital", description: "Student innovation, hackathon and technology event.", url: "/portfolio", mark: "MH" },
      { name: "Pahwah Digitech", category: "Technology & Digital", description: "Digital company for strategy, technology, creative and growth solutions.", url: "https://www.pahwah.com", mark: "PD", logo: `${logoBase}/Pahwah Digitech.svg`, logoScale: 1.22 },
    ],
  },
  {
    category: "Construction, Property & Outdoor",
    brands: [
      { name: "Gold Plant & Landscapes", category: "Construction, Property & Outdoor", description: "Landscape design, planting and outdoor environment services.", url: "/portfolio", mark: "GP", logo: `${logoBase}/GOLD LAND Plants & Landscape LOGO  ( T PRIMARY 1)-01.png`, logoScale: 1.38 },
      { name: "Fantasol Engineering", category: "Construction, Property & Outdoor", description: "Engineering and technical project services.", url: "/portfolio", mark: "FE", logo: `${logoBase}/Fantasol-engineering.jpeg`, logoScale: 1.18 },
      { name: "Ayaz Properties", category: "Construction, Property & Outdoor", description: "Real estate and property-focused brand.", url: "/portfolio", mark: "AP", logo: `${logoBase}/Ayaz-Properties.svg` },
      { name: "Emakea Construction", category: "Construction, Property & Outdoor", description: "Construction and built-environment services.", url: "/portfolio", mark: "EC" },
      { name: "Baystat Kilimani", category: "Construction, Property & Outdoor", description: "Hospitality, property or location-based service brand.", url: "/portfolio", mark: "BK" },
    ],
  },
  {
    category: "Travel, Lifestyle & Professional Services",
    brands: [
      { name: "Ecobana", category: "Travel, Lifestyle & Professional Services", description: "Sustainability-focused product or service brand.", url: "/portfolio", mark: "EB" },
      { name: "Pin Safaris", category: "Travel, Lifestyle & Professional Services", description: "Safari, travel and destination experience brand.", url: "/portfolio", mark: "PS", logo: `${logoBase}/pin-holidays-and-safaris-official-logo.svg`, logoScale: 1.18 },
      { name: "Primate Tours", category: "Travel, Lifestyle & Professional Services", description: "Tours, travel and adventure experiences.", url: "/portfolio", mark: "PT", logo: `${logoBase}/primate-tours.png` },
      { name: "Tandem", category: "Travel, Lifestyle & Professional Services", description: "Collaborative business, creative or advisory brand.", url: "/portfolio", mark: "TD" },
      { name: "The Therapist", category: "Travel, Lifestyle & Professional Services", description: "Wellness, therapy or personal support brand.", url: "/portfolio", mark: "TT" },
      { name: "Prinser Limited", category: "Travel, Lifestyle & Professional Services", description: "Business services and corporate brand.", url: "/portfolio", mark: "PL", logo: `${logoBase}/prinser-limited.jpg`, logoScale: 1.18 },
      { name: "Shalom Insights", category: "Travel, Lifestyle & Professional Services", description: "Insights, advisory or knowledge-led organisation.", url: "/portfolio", mark: "SI" },
    ],
  },
  {
    category: "Education, Faith & Impact",
    brands: [
      { name: "SAMU", category: "Education, Faith & Impact", description: "Community, student or ministry-led organisation.", url: "/portfolio", mark: "SA" },
      { name: "KWAMU", category: "Education, Faith & Impact", description: "Community and member-led organisation.", url: "/portfolio", mark: "KW" },
      { name: "MKSU CU", category: "Education, Faith & Impact", description: "Machakos University Christian Union.", url: "/portfolio", mark: "MC", logo: `${logoBase}/MKSU-CU LOGO.jpg`, logoScale: 1.18 },
      { name: "PCEA Ichuga", category: "Education, Faith & Impact", description: "Church and community ministry.", url: "/portfolio", mark: "PI", logo: `${logoBase}/PCEA-lOGO.png`, logoScale: 1.24 },
      { name: "KUESA", category: "Education, Faith & Impact", description: "Student association and community organisation.", url: "/portfolio", mark: "KU", logo: `${logoBase}/KUESA-LOGO.jpg`, logoScale: 1.16 },
      { name: "AIC Katse Girls", category: "Education, Faith & Impact", description: "Education and community institution.", url: "/portfolio", mark: "AK" },
      { name: "B2B Foundation", category: "Education, Faith & Impact", description: "Foundation and impact-led organisation.", url: "/portfolio", mark: "BF", logo: `${logoBase}/b2b-Foundation.svg` },
      { name: "Transform Nation", category: "Education, Faith & Impact", description: "Faith, leadership and community transformation platform.", url: "/portfolio", mark: "TN" },
      { name: "AIC Kenya", category: "Education, Faith & Impact", description: "Church and faith community organisation.", url: "/portfolio", mark: "AI" },
      { name: "King Jesus Ministries", category: "Education, Faith & Impact", description: "Church, ministry and faith-led community.", url: "/portfolio", mark: "KJ" },
      { name: "PEFA Church", category: "Education, Faith & Impact", description: "Church and community ministry.", url: "/portfolio", mark: "PF" },
      { name: "Red Cross", category: "Education, Faith & Impact", description: "Humanitarian and impact-focused organisation.", url: "/portfolio", mark: "RC" },
    ],
  },
];

export const clientBrands = clientBrandGroups.flatMap((group) => group.brands);
