import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/motion-check")({
  head: () => ({
    meta: [
      { title: "Motion Check — Reduced-Motion Verification" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MotionCheck,
});

function MotionCheck() {
  const [reduced, setReduced] = useState(false);
  const [beforeAnim, setBeforeAnim] = useState<string>("…");
  const [afterAnim, setAfterAnim] = useState<string>("…");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(mq.matches);
      const el = document.getElementById("hero-probe");
      if (el) {
        const b = getComputedStyle(el, "::before").animationName;
        const a = getComputedStyle(el, "::after").animationName;
        setBeforeAnim(b || "none");
        setAfterAnim(a || "none");
      }
    };
    update();
    mq.addEventListener("change", update);
    const t = setInterval(update, 600);
    return () => {
      mq.removeEventListener("change", update);
      clearInterval(t);
    };
  }, []);

  const animationsOff =
    (beforeAnim === "none" || beforeAnim === "") &&
    (afterAnim === "none" || afterAnim === "");
  const status = reduced
    ? animationsOff
      ? { label: "PASS · animations stopped", ok: true }
      : { label: "FAIL · animations still running", ok: false }
    : animationsOff
      ? { label: "Animations off (no reduced-motion flag)", ok: true }
      : { label: "Animations running (default)", ok: true };

  return (
    <>
      <section id="hero-probe" className="bg-hero relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 text-center">
          <span className="hero-eyebrow">/ qa</span>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold tracking-tighter">
            Hero motion <span className="text-gradient-gold">reduced-motion check</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Toggle "Reduce motion" in your OS or DevTools (Rendering → Emulate
            CSS media feature prefers-reduced-motion) and watch the status below
            flip to PASS while the drifting glows freeze.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#status" className="btn-hero-primary">Jump to status</a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"
              target="_blank"
              rel="noreferrer"
              className="btn-hero-outline"
            >
              MDN docs
            </a>
          </div>
        </div>
      </section>

      <section id="status" className="mx-auto max-w-3xl px-5 lg:px-8 py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">live status</div>
              <div className={`mt-2 font-display text-2xl font-bold ${status.ok ? "text-foreground" : "text-destructive"}`}>
                {status.label}
              </div>
            </div>
            <span
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest ${
                status.ok
                  ? "bg-green-500/15 text-green-600 dark:text-green-400"
                  : "bg-destructive/15 text-destructive"
              }`}
            >
              {status.ok ? "OK" : "FAIL"}
            </span>
          </div>
          <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-border p-4">
              <dt className="text-muted-foreground">prefers-reduced-motion</dt>
              <dd className="mt-1 font-mono font-semibold">{reduced ? "reduce" : "no-preference"}</dd>
            </div>
            <div className="rounded-xl border border-border p-4">
              <dt className="text-muted-foreground">.bg-hero::before animation</dt>
              <dd className="mt-1 font-mono font-semibold">{beforeAnim}</dd>
            </div>
            <div className="rounded-xl border border-border p-4">
              <dt className="text-muted-foreground">.bg-hero::after animation</dt>
              <dd className="mt-1 font-mono font-semibold">{afterAnim}</dd>
            </div>
            <div className="rounded-xl border border-border p-4">
              <dt className="text-muted-foreground">Expected when reduce is on</dt>
              <dd className="mt-1 font-mono font-semibold">both → none</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
