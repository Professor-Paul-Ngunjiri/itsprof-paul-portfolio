export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Wanjiku Mwangi",
    role: "Founder",
    company: "Savanna Coffee",
    quote: "Paul rebuilt our brand from the ground up. Sales lifted 38% in the first quarter after launch - the work pays for itself.",
  },
  {
    name: "David Otieno",
    role: "CEO",
    company: "Kazi Fintech",
    quote: "He thinks like an engineer and ships like a designer. Our app feels twice as expensive as it cost to build.",
  },
  {
    name: "Amina Hassan",
    role: "Marketing Lead",
    company: "Tamu Restaurants",
    quote: "The photography brief was tight and the results were better than the briefs we've paid 4x for. Easy hire.",
  },
  {
    name: "Brian Kiprono",
    role: "Director",
    company: "Asha Foundation",
    quote: "Paul cares. He answers fast, explains tradeoffs in plain English, and the metrics back up the work.",
  },
];
