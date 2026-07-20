export type GoogleProfileReview = {
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTimeDescription?: string;
  source: "Google";
};

export const googleProfileReviews: GoogleProfileReview[] = [
  {
    authorName: "Millicent Kiragu",
    authorPhotoUrl: "/reviews/millicent-kiragu.png",
    rating: 5,
    text: "I'm impressed by how Pahwah opens all their clients ensuring customer satisfaction. Looking forward to working with you again.",
    relativeTimeDescription: "Google review",
    source: "Google",
  },
];
