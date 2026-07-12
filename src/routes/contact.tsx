import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, BriefcaseBusiness, Check, Clock, FileUp, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { getServicePackages, services, site } from "@/lib/site";

type ContactSearch = {
  service?: string;
  package?: string;
  sub?: string;
  sent?: string;
};

type StoredBrief = {
  name?: string;
  serviceSlug?: string;
  serviceName?: string;
  packageName?: string;
};

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
    package: typeof search.package === "string" ? search.package : undefined,
    sub: typeof search.sub === "string" ? search.sub : undefined,
    sent: typeof search.sent === "string" ? search.sent : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Request a Quote - Paul Ngunjiri | Premium Creative, Web & Growth Partner" },
      { name: "description", content: "Submit a professional project brief to Paul Ngunjiri. Upload documents, choose a service package, define budget and receive a strategic response within 24 hours." },
      { property: "og:title", content: "Request a Quote - ItsProf Paul" },
      { property: "og:description", content: "Brief Paul Ngunjiri for brand identity, web development, UI/UX, photography, film, content and growth campaigns." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const timelines = ["Rush: 48 hours - 7 days", "Standard: 2 - 6 weeks", "Strategic: 6 - 12 weeks", "Long-term retainer"];
const budgetRanges = ["Under KES 50,000", "KES 50,000 - 150,000", "KES 150,000 - 350,000", "KES 350,000 - 750,000", "KES 750,000+ / international scope"];
const contactMethods = ["Email", "WhatsApp", "Phone call", "Google Meet / Zoom"];
const domain = "https://paul.pahwah.com";

function Contact() {
  const search = Route.useSearch();
  const initialService = services.some((service) => service.slug === search.service) ? search.service ?? "" : "";
  const [serviceSlug, setServiceSlug] = useState(initialService);
  const [selectedPackage, setSelectedPackage] = useState(search.package ?? "");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [submittedBrief, setSubmittedBrief] = useState<StoredBrief | null>(null);
  const [storedBrief] = useState<StoredBrief>(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(window.sessionStorage.getItem("itsprof-last-brief") ?? "{}") as StoredBrief;
    } catch {
      return {};
    }
  });

  const selectedService = useMemo(() => services.find((service) => service.slug === serviceSlug), [serviceSlug]);
  const serviceIsOther = serviceSlug === "other";
  const packageOptions = useMemo(() => (selectedService ? getServicePackages(selectedService.slug) : []), [selectedService]);
  const selectedPackageDetails = packageOptions.find((option) => option.slug === selectedPackage);
  const needsBudget = serviceIsOther || selectedPackage === "growth-partner" || selectedPackage === "custom" || (!!selectedService && !selectedPackage);
  const needsTimeline = serviceIsOther || selectedPackage === "growth-partner" || selectedPackage === "custom";
  const sent = search.sent === "1";
  const redirectUrl = typeof window === "undefined" ? `${domain}/contact?sent=1` : `${window.location.origin}/contact?sent=1`;
  const totalUploadSize = uploadedFiles.reduce((sum, file) => sum + file.size, 0);
  const totalUploadSizeMb = totalUploadSize ? (totalUploadSize / 1024 / 1024).toFixed(1) : "0";

  const saveBriefSnapshot = (event: React.FormEvent<HTMLFormElement>) => {
    if (typeof window === "undefined") return;
    const data = new FormData(event.currentTarget);
    const serviceValue = String(data.get("service") ?? "");
    const packageValue = String(data.get("package") ?? "");
    const service = services.find((item) => item.slug === serviceValue);
    const packageName = packageOptions.find((item) => `${item.name} - ${item.price}` === packageValue)?.name ?? packageValue;
    const snapshot: StoredBrief = {
      name: String(data.get("name") ?? ""),
      serviceSlug: serviceValue,
      serviceName: service?.name ?? String(data.get("other_service") ?? "your custom service"),
      packageName,
    };
    window.sessionStorage.setItem("itsprof-last-brief", JSON.stringify(snapshot));
    setSubmittedBrief(snapshot);
  };

  const confirmationBrief = submittedBrief ?? storedBrief;
  const confirmationService = services.find((item) => item.slug === confirmationBrief.serviceSlug);
  const canViewConfirmationService = !!confirmationService && confirmationBrief.serviceSlug !== "other";

  if (sent) {
    const service = services.find((item) => item.slug === storedBrief.serviceSlug);
    const canViewService = !!service && storedBrief.serviceSlug !== "other";
    return (
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center px-5 py-20 lg:px-8">
          <div className="w-full rounded-[2rem] border border-white/20 bg-white/10 p-7 text-center shadow-elegant backdrop-blur lg:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-card">
              <Check className="h-8 w-8" />
            </div>
            <span className="mt-6 block font-mono text-xs uppercase tracking-widest text-gold">Brief submitted</span>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Thank you{storedBrief.name ? `, ${storedBrief.name}` : ""}.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/82">
              Your request{storedBrief.serviceName ? ` regarding ${storedBrief.serviceName}` : ""} has been received. I am Paul Ngunjiri, also known as ItsProf Paul, and I will review the brief, attachments and package context before replying with the smartest next step.
            </p>
            {storedBrief.packageName && (
              <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white/85">
                Selected package: <span className="font-semibold text-white">{storedBrief.packageName}</span>
              </div>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground">
                Return home <ArrowRight className="h-4 w-4" />
              </Link>
              {canViewService && (
                <Link to="/services/$slug" params={{ slug: service.slug }} className="inline-flex items-center gap-2 rounded-xl border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  View selected service
                </Link>
              )}
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                WhatsApp me now
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <span className="hero-eyebrow">/ request a quote</span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Hire Paul Ngunjiri <span className="text-gradient-gold">with a clear brief.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 lg:text-lg">
            Choose the service, pick the right engagement level, attach any useful documents and send. No long questionnaire, no guesswork.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">
        <div className="mb-5 grid gap-3 md:grid-cols-4">
          {[
            { icon: Mail, label: "Project email", value: site.email, href: `mailto:${site.email}` },
            { icon: Phone, label: "Call / WhatsApp", value: site.phone, href: `tel:${site.phone}` },
            { icon: MapPin, label: "Location", value: "Nairobi + remote", href: "" },
          ].map((item) => (
            <a key={item.label} href={item.href || undefined} className="rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:border-primary">
              <item.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">{item.label}</div>
              <div className="mt-1 text-sm font-semibold">{item.value}</div>
            </a>
          ))}
        </div>

        <div className="mb-5 overflow-hidden rounded-3xl bg-gradient-blue p-5 text-secondary-foreground shadow-elegant lg:p-6">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                <TrendingUp className="h-4 w-4" /> ROI lens
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold">The quote is built around outcomes.</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                I look at what the work should unlock: premium trust, stronger conversion, faster sales, operational clarity, better retention or a sharper campaign engine.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Scope clarity before spend", "Professional handoff and source files", "Launch and post-launch thinking"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-medium text-white/90">
                  <Check className="mb-3 h-5 w-5 text-gold" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-5 shadow-elegant lg:p-7">
          <form
            action={`https://formsubmit.co/${site.email}`}
            method="POST"
            encType="multipart/form-data"
            onSubmit={saveBriefSnapshot}
            target="itsprof-formsubmit-frame"
            className="grid gap-5 lg:grid-cols-12"
          >
            <input type="hidden" name="_subject" value={`New ItsProf Paul quote request${selectedService ? ` - ${selectedService.name}` : ""}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={redirectUrl} />
            <input type="hidden" name="_autoresponse" value="Thank you for briefing Paul Ngunjiri, also known as ItsProf Paul. I have received your request and will review the project details before replying with the smartest next step." />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="source_page_sub_service" value={search.sub ?? ""} />

            <div className="lg:col-span-12">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold">Professional project brief</h2>
                  <p className="mt-1 text-sm text-muted-foreground">A compact form for serious enquiries. Fixed packages keep the form short; custom requests ask only for the extra context needed.</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-4 w-4" /> Sent to {site.email}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4 lg:col-span-12">
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Name</span>
                <input required name="name" autoComplete="name" minLength={2} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</span>
                <input required name="email" type="email" autoComplete="email" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Phone / WhatsApp</span>
                <input required name="phone" type="tel" autoComplete="tel" inputMode="tel" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Preferred contact</span>
                <select required name="preferred_contact" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
                  <option value="">Choose</option>
                  {contactMethods.map((method) => <option key={method} value={method}>{method}</option>)}
                </select>
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:col-span-5">
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Company / organisation</span>
                <input name="company" autoComplete="organization" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Website / social</span>
                <input name="website" type="url" inputMode="url" placeholder="https://" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:col-span-7">
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Service</span>
                <select
                  required
                  name="service"
                  value={serviceSlug}
                  onChange={(event) => {
                    setServiceSlug(event.target.value);
                    setSelectedPackage("");
                  }}
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => <option key={service.slug} value={service.slug}>{service.name}</option>)}
                  <option value="other">Other / not listed</option>
                </select>
              </label>
              {serviceIsOther ? (
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Describe service</span>
                  <input required name="other_service" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" placeholder="Example: podcast launch, church campaign..." />
                </label>
              ) : (
                <input type="hidden" name="other_service" value="" />
              )}
            </div>

            {selectedService && !serviceIsOther && (
              <details className="rounded-2xl border border-border bg-background p-4 lg:col-span-12" open>
                <summary className="cursor-pointer list-none">
                  <span className="flex items-center justify-between gap-3">
                    <span>
                      <span className="font-display text-base font-semibold">Choose your engagement package</span>
                      <span className="mt-1 block text-xs text-muted-foreground">Diagnostic and Signature use fixed starting prices. Growth Partner and Custom ask for your budget.</span>
                    </span>
                    <Sparkles className="h-5 w-5 text-primary" />
                  </span>
                </summary>
                <div className="mt-4 grid gap-3 md:grid-cols-4">
                  {packageOptions.map((option) => (
                    <label key={option.slug} className={`relative cursor-pointer rounded-2xl border p-4 transition-all ${selectedPackage === option.slug ? "border-primary bg-primary/5 shadow-card" : "border-border hover:border-primary/60"} ${option.recommended ? "bg-gradient-to-br from-primary/10 to-gold/10" : "bg-card"}`}>
                      {option.recommended && <span className="absolute right-3 top-3 rounded-full bg-gold px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-foreground">Recommended</span>}
                      <input
                        required
                        type="radio"
                        name="package"
                        value={`${option.name} - ${option.price}`}
                        checked={selectedPackage === option.slug}
                        onChange={() => setSelectedPackage(option.slug)}
                        className="sr-only"
                      />
                      <div className="pr-16 font-display text-base font-semibold">{option.name}</div>
                      <div className="mt-2 text-sm font-bold text-primary">{option.price}</div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{option.desc}</p>
                      <div className="mt-3 border-t border-border pt-3">
                        <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Best for</div>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{option.idealFor}</p>
                      </div>
                      <ul className="mt-3 space-y-1">
                        {option.includes.map((item) => (
                          <li key={item} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {item}
                          </li>
                        ))}
                      </ul>
                    </label>
                  ))}
                </div>
              </details>
            )}

            {(needsBudget || needsTimeline) && (
              <div className="grid gap-4 md:grid-cols-2 lg:col-span-12">
                {needsBudget && (
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Budget / budget range</span>
                    <input required name="budget_range" list="budget-ranges" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" placeholder="Example: KES 250,000 or KES 150k - 350k" />
                    <datalist id="budget-ranges">
                      {budgetRanges.map((range) => <option key={range} value={range} />)}
                    </datalist>
                  </label>
                )}
                {needsTimeline && (
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Timeline</span>
                    <select required name="timeline" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
                    </select>
                  </label>
                )}
              </div>
            )}

            {!needsBudget && <input type="hidden" name="budget_range" value={selectedPackageDetails?.price ?? ""} />}
            {!needsTimeline && <input type="hidden" name="timeline" value="To be confirmed during scoping" />}

            <div className="grid gap-4 lg:col-span-12 lg:grid-cols-[1fr_0.9fr]">
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Desired result (optional)</span>
                <textarea name="roi_goal" rows={3} className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" placeholder="Example: better leads, stronger brand trust, launch a premium product, win a tender..." />
              </label>
              <label className="block rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  <FileUp className="h-4 w-4 text-primary" /> Attach files
                </span>
                <input
                  name="attachment"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg,.webp,.zip,.mp4,.mov"
                  onChange={(event) => setUploadedFiles(Array.from(event.currentTarget.files ?? []))}
                  className="mt-3 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                />
                <span className="mt-2 block text-xs text-muted-foreground">Attach more than one brief, RFP, image, deck, logo, video or ZIP file.</span>
                {uploadedFiles.length > 0 && (
                  <div className="mt-3 rounded-xl bg-background p-3 text-xs text-muted-foreground">
                    <div className="font-semibold text-foreground">{uploadedFiles.length} file{uploadedFiles.length === 1 ? "" : "s"} selected - {totalUploadSizeMb} MB total</div>
                    <ul className="mt-2 space-y-1">
                      {uploadedFiles.slice(0, 4).map((file) => <li key={`${file.name}-${file.size}`} className="truncate">{file.name}</li>)}
                    </ul>
                    {uploadedFiles.length > 4 && <div className="mt-1">+ {uploadedFiles.length - 4} more</div>}
                  </div>
                )}
              </label>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/35 p-4 sm:flex-row sm:items-center sm:justify-between lg:col-span-12">
              <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
                You receive a professional response from Paul Ngunjiri, a.k.a ItsProf Paul. FormSubmit may still show its sending address unless a custom email provider is connected, but the brief content, subject and autoresponse are branded for ItsProf Paul.
              </p>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-shadow hover:shadow-glow">
                <Send className="h-4 w-4" /> Submit brief
              </button>
            </div>
          </form>
          <iframe name="itsprof-formsubmit-frame" title="Secure brief submission" className="hidden" />
        </div>
      </section>
      {submittedBrief && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/70 px-5 py-8 backdrop-blur">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/20 bg-hero p-7 text-center text-white shadow-elegant lg:p-10">
            <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden />
            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-card">
                <Check className="h-8 w-8" />
              </div>
              <span className="mt-6 block font-mono text-xs uppercase tracking-widest text-gold">Brief submitted</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Thank you{submittedBrief.name ? `, ${submittedBrief.name}` : ""}.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/82 sm:text-base">
                Your request{submittedBrief.serviceName ? ` regarding ${submittedBrief.serviceName}` : ""} has been submitted. I will review the brief, attachments and package context, then reply through your preferred contact channel.
              </p>
              {submittedBrief.packageName && (
                <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white/85">
                  Selected package: <span className="font-semibold text-white">{submittedBrief.packageName}</span>
                </div>
              )}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground">
                  Return home <ArrowRight className="h-4 w-4" />
                </Link>
                {canViewConfirmationService && (
                  <Link to="/services/$slug" params={{ slug: confirmationService.slug }} className="inline-flex items-center gap-2 rounded-xl border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                    View selected service
                  </Link>
                )}
                <button type="button" onClick={() => setSubmittedBrief(null)} className="inline-flex items-center gap-2 rounded-xl border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Close message
                </button>
              </div>
              <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-white/65">
                If your browser or FormSubmit asks for verification, please complete it once. This branded confirmation means the website has captured your submission action.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
