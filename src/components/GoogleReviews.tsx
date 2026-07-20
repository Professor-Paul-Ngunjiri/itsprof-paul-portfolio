import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Star } from "lucide-react";
import { googleProfileReviews, site, testimonials } from "@/lib/site";

type GoogleReview = {
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTimeDescription?: string;
  publishTime?: string;
  source?: "Google" | "Client";
};

type GoogleReviewPayload = {
  connected: boolean;
  placeName?: string;
  rating?: number;
  totalReviews?: number;
  reviews: GoogleReview[];
};

const fallbackReviews: GoogleReview[] = testimonials.map((item) => ({
  authorName: item.name,
  rating: 5,
  text: item.quote,
  relativeTimeDescription: `${item.role}, ${item.company}`,
  source: "Client",
}));

const googleFallbackReviews: GoogleReview[] = googleProfileReviews.map((review) => ({
  ...review,
  source: "Google",
}));

function uniqueReviews(reviews: GoogleReview[]) {
  const seen = new Set<string>();
  return reviews.filter((review) => {
    const key = `${review.authorName.toLowerCase()}-${review.text.toLowerCase().slice(0, 80)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < Math.round(rating) ? "fill-gold text-gold" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const [payload, setPayload] = useState<GoogleReviewPayload | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let active = true;

    fetch("/api/google-reviews")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: GoogleReviewPayload | null) => {
        if (active && data) setPayload(data);
      })
      .catch(() => {
        if (active) setPayload(null);
      });

    return () => {
      active = false;
    };
  }, []);

  const apiGoogleReviews = (payload?.reviews ?? []).map((review) => ({ ...review, source: "Google" as const }));
  const reviews = uniqueReviews([...apiGoogleReviews, ...googleFallbackReviews, ...fallbackReviews]);
  const connected = Boolean(payload?.connected && payload.reviews.length);
  const googleReviewCount = Math.max(payload?.totalReviews ?? 0, googleFallbackReviews.length);
  const averageRating = payload?.rating ?? 5;
  const totalReviews = googleReviewCount || payload?.totalReviews;
  const visibleReviews = reviews.length <= 4
    ? reviews
    : Array.from({ length: 4 }, (_, offset) => reviews[(activeIndex + offset) % reviews.length]);

  useEffect(() => {
    if (reviews.length <= 4) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [reviews.length]);

  const summary = useMemo(() => {
    if (totalReviews) return `${averageRating.toFixed(1)} rating from ${totalReviews} Google review${totalReviews === 1 ? "" : "s"}`;
    if (connected) return `${averageRating.toFixed(1)} Google rating`;
    return "Google reviews first, followed by client project feedback";
  }, [averageRating, connected, totalReviews]);

  const move = (direction: number) => {
    if (reviews.length <= 1) return;
    setActiveIndex((current) => (current + direction + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-muted/50">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">/ reviews</span>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight lg:text-5xl">What clients say.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Real project feedback matters because serious clients are not buying decoration. They are buying trust, clarity, speed and results they can feel in the business.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card lg:min-w-[280px]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-foreground">Google Business Profile</div>
                <div className="mt-1 text-xs text-muted-foreground">{summary}</div>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl font-bold text-primary">{averageRating.toFixed(1)}</div>
                <Stars rating={averageRating} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleReviews.map((review, index) => (
            <figure key={`${review.authorName}-${activeIndex}-${index}`} className="flex min-h-[260px] flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-500">
              <div className="flex items-center justify-between gap-4">
                <Stars rating={review.rating} />
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                  {review.source ?? "Client"}
                </span>
              </div>
              <blockquote className="mt-5 line-clamp-6 flex-1 text-sm leading-relaxed text-foreground">
                "{review.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                {review.authorPhotoUrl ? (
                  <img src={review.authorPhotoUrl} alt={`${review.authorName} profile photo`} loading="lazy" decoding="async" className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
                    {review.authorName.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-foreground">{review.authorName}</div>
                  <div className="truncate text-xs text-muted-foreground">{review.relativeTimeDescription ?? review.publishTime ?? "Verified client feedback"}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => move(-1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary" aria-label="Previous review">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => move(1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary" aria-label="Next review">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <a href={site.googleBusinessProfileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:shadow-glow">
            Read or leave a Google review <ExternalLink className="h-4 w-4" />
          </a>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
            Hire me now
          </a>
        </div>
      </div>
    </section>
  );
}
