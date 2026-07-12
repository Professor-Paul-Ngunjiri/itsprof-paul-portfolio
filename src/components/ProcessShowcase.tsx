import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Clock3, FileCheck2, Lightbulb, Search, Settings2, Sparkles, UploadCloud, Target } from "lucide-react";

export type ProcessCaseStudy = {
  title: string;
  description: string;
  client?: string;
  industry?: string;
  href?: string;
};

export type ProcessStage = {
  step: string;
  title: string;
  desc: string;
  timeframe?: string;
  activities?: string[];
  deliverables?: string[];
  caseStudy?: ProcessCaseStudy;
};

type ProcessShowcaseProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  stages: ProcessStage[];
  variant?: "default" | "muted";
};

const tabs = ["Overview", "Details", "Case Study"] as const;
type ProcessTab = (typeof tabs)[number];

const stageIcons = [Search, Lightbulb, Sparkles, Settings2, FileCheck2, UploadCloud, CheckCircle2];

export function ProcessShowcase({ eyebrow = "/ process", title, intro, stages, variant = "default" }: ProcessShowcaseProps) {
  const [activeStage, setActiveStage] = useState(0);
  const [activeTab, setActiveTab] = useState<ProcessTab>("Overview");

  const stage = stages[activeStage] ?? stages[0];
  const progress = stages.length <= 1 ? 100 : Math.round((activeStage / (stages.length - 1)) * 100);
  const Icon = stageIcons[activeStage % stageIcons.length];

  const details = useMemo(() => {
    const activities = stage.activities?.length
      ? stage.activities
      : ["Clarify priorities", "Review current materials", "Confirm the next decision"];
    const deliverables = stage.deliverables?.length
      ? stage.deliverables
      : [`${stage.title} notes`, "Action checklist", "Next-step recommendation"];

    return { activities, deliverables };
  }, [stage]);

  if (!stage) return null;

  return (
    <section className={variant === "muted" ? "bg-muted/40" : ""}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span>Interactive Project Progress</span>
            <span className="font-mono text-foreground">{progress}% Complete</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-muted shadow-inner">
            <div className="h-full rounded-full bg-gradient-primary transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {stages.map((item, index) => {
            const StepIcon = stageIcons[index % stageIcons.length];
            const isActive = activeStage === index;
            const isDone = index < activeStage;
            return (
              <button
                key={`${item.step}-${item.title}`}
                type="button"
                onClick={() => {
                  setActiveStage(index);
                  setActiveTab("Overview");
                }}
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-primary bg-card shadow-elegant"
                    : "border-border bg-card/70 shadow-card hover:-translate-y-1 hover:border-primary/60"
                }`}
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity group-hover:opacity-10" />
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${isActive ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground group-hover:text-primary"}`}>
                  <StepIcon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-primary">{item.step}</span>
                  {isDone && <CheckCircle2 className="h-3.5 w-3.5 text-primary" />}
                </div>
                <h3 className="mt-1 font-display text-sm font-semibold leading-tight">{item.title}</h3>
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <div className="flex flex-col gap-5 border-b border-border p-5 sm:flex-row sm:items-start sm:justify-between lg:p-7">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-card">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary">Step {stage.step}</span>
                <h3 className="mt-1 font-display text-2xl font-bold">{stage.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{stage.desc}</p>
              </div>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              Hire me now <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="p-5 lg:p-7">
            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-muted p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-xl px-3 py-2 text-xs font-semibold transition-colors sm:text-sm ${activeTab === tab ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "Overview" && (
              <div className="mt-7 space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-background/70 p-5">
                    <div className="flex items-center gap-2 font-display font-semibold">
                      <Clock3 className="h-5 w-5 text-primary" />
                      Timeframe
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{stage.timeframe ?? "Confirmed after the brief"}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/70 p-5">
                    <div className="flex items-center gap-2 font-display font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Activities involved
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{details.activities.slice(0, 2).join(", ")}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/70 p-5">
                    <div className="flex items-center gap-2 font-display font-semibold">
                      <Target className="h-5 w-5 text-primary" />
                      Decision point
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">We confirm what moves forward before the next stage starts.</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-semibold">Key activities</h4>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {details.activities.map((activity) => (
                      <div key={activity} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Details" && (
              <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <h4 className="font-display font-semibold">Deliverables</h4>
                  <div className="mt-3 space-y-2">
                    {details.deliverables.map((deliverable) => (
                      <div key={deliverable} className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted-foreground">
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-muted p-5">
                    <h4 className="font-display font-semibold">Why this matters</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      This stage keeps the project clear, protects your investment and makes sure every decision is connected to the result you want.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-muted p-5">
                    <h4 className="font-display font-semibold">How we work together</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      You get simple updates, focused review points and a clear next action, so the project keeps moving without confusion.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Case Study" && (
              <div className="mt-7 rounded-2xl border border-border bg-background/70 p-6 shadow-card">
                {stage.caseStudy ? (
                  <>
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">Scenario proof</span>
                    <h4 className="font-display text-xl font-semibold">{stage.caseStudy.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.caseStudy.description}</p>
                    {(stage.caseStudy.client || stage.caseStudy.industry) && (
                      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                        {[stage.caseStudy.client, stage.caseStudy.industry].filter(Boolean).join(" / ")}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <h4 className="font-display text-xl font-semibold">Case study shared where relevant</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Not every stage needs a public case study. When a similar project helps you decide faster, I can share the closest example during the consultation.
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
