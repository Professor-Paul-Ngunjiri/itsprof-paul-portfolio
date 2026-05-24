import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, BriefcaseBusiness, Check, Clock, FileUp, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck, TrendingUp } from "lucide-react";
import { getServicePackages, services, site } from "@/lib/site";

type ContactSearch = {
  service?: string;
  package?: string;
  sub?: string;
  sent?: string;
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
const budgetRanges = ["KES 25k - 75k", "KES 75k - 150k", "KES 150k - 350k", "KES 350k - 750k", "KES 750k+ / international scope"];

function Contact() {
  const search = Route.useSearch();
  const initialService = services.some((service) => service.slug === search.service) ? search.service ?? "" : "";
  const [serviceSlug, setServiceSlug] = useState(initialService);
  const selectedService = useMemo(() => services.find((service) => service.slug === serviceSlug), [serviceSlug]);
  const packageOptions = useMemo(() => (selectedService ? getServicePackages(selectedService.slug) : []), [selectedService]);
  const [selectedPackage, setSelectedPackage] = useState(search.package ?? packageOptions[1]?.slug ?? "");
  const sent = search.sent === "1";

  const faqs = [
    { q: "Can international clients work with you remotely?", a: "Yes. I work async with clear milestones, shared workspaces, recorded walkthroughs and scheduled review calls across All time zones." },
    { q: "What makes a good brief?", a: "Clear goals, audience, timeline, budget range, existing assets and what success should improve: leads, sales, trust, speed, conversion or authority." },
    { q: "Can I upload a tender, brand guide or reference deck?", a: "Yes. Attach PDFs, documents, images or ZIP files directly in the brief form so I can understand the project faster." },
    { q: "Do you work on premium retainers?", a: "Yes. The Growth Partner package is designed for serious brands that need ongoing creative, web, content and campaign support." },
    { q: "Will I receive a fixed quote?", a: "You receive a scoped recommendation first. Once deliverables, timeline and decision-makers are clear, I send a formal quote and milestone plan." },
    { q: "Why should I invest more with one expert?", a: "Because strategy, design, development and launch quality stay aligned. That reduces rework, improves speed and protects the premium perception of your brand." },
  ];

  return (
    <>
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 text-center">
          <span className="hero-eyebrow">/ request a quote</span>
          <h1 className="mt-3 font-display text-5xl lg:text-7xl font-bold tracking-tighter">
            Bring the brief. <span className="text-gradient-gold">I’ll bring the system.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/85">
            Submit your project details, upload reference files and choose the investment lane that matches your ambition. Serious briefs get a strategic response within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-hero-primary">
              <MessageCircle className="h-4 w-4" /> WhatsApp Paul
            </a>
            <a href={`mailto:${site.quoteEmail}`} className="btn-hero-outline">
              <Mail className="h-4 w-4" /> Email directly
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-5 gap-10">
        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3"><Mail className="h-5 w-5 text-primary" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Project email</div>
                <a href={`mailto:${site.quoteEmail}`} className="font-medium hover:text-primary break-all">{site.quoteEmail}</a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3"><Phone className="h-5 w-5 text-primary" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call / WhatsApp</div>
                <a href={`tel:${site.phone}`} className="font-medium hover:text-primary">{site.phone}</a>
                <div className="text-xs text-muted-foreground mt-0.5">Weekdays, 8am - 6pm EAT</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3"><MapPin className="h-5 w-5 text-primary" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                <div className="font-medium">{site.location}</div>
                <div className="text-xs text-muted-foreground mt-0.5">Remote worldwide; in-person in Nairobi</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-blue text-secondary-foreground p-6 shadow-elegant">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
              <TrendingUp className="h-3.5 w-3.5" /> ROI lens
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold">The quote is built around outcomes.</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              I look at what the work should unlock: premium trust, stronger conversion, faster sales, operational clarity, better retention or a sharper campaign engine.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Scope clarity before spend", "Professional handoff and source files", "Launch and post-launch thinking"].map((item) => (
                <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-gold" /> {item}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-border bg-card p-7 lg:p-9 shadow-elegant">
            {sent ? (
              <div className="text-center py-10">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">Brief received.</h3>
                <p className="mt-2 text-muted-foreground">I’ll review it and reply with the smartest next step.</p>
              </div>
            ) : (
              <form
                action={`https://formsubmit.co/${site.quoteEmail}`}
                method="POST"
                encType="multipart/form-data"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value={`New portfolio brief${selectedService ? ` - ${selectedService.name}` : ""}`} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="source_page_service" value={selectedService?.name ?? "Not preselected"} />
                <input type="hidden" name="source_page_sub_service" value={search.sub ?? ""} />

                <div>
                  <h2 className="font-display text-3xl font-bold">Professional project brief</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Designed for serious clients. The more context you provide, the sharper the quote.</p>
                </div>

                {selectedService && (
                  <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                    <div className="flex items-start gap-3">
                      <BriefcaseBusiness className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Selected from page</div>
                        <h3 className="mt-1 font-display text-xl font-semibold">{selectedService.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{selectedService.tagline}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Your name</span>
                    <input required name="name" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Work email</span>
                    <input required name="email" type="email" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Company / brand</span>
                    <input name="company" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Website or social link</span>
                    <input name="website" type="url" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Service interested in</span>
                  <select
                    required
                    name="service"
                    value={serviceSlug}
                    onChange={(e) => {
                      setServiceSlug(e.target.value);
                      const nextPackages = getServicePackages(e.target.value);
                      setSelectedPackage(nextPackages[1]?.slug ?? "");
                    }}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => <option key={service.slug} value={service.slug}>{service.name}</option>)}
                  </select>
                </label>

                {packageOptions.length > 0 && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Investment package</span>
                    <div className="mt-2 grid gap-3">
                      {packageOptions.map((option) => (
                        <label key={option.slug} className={`cursor-pointer rounded-2xl border p-4 transition-colors ${selectedPackage === option.slug ? "border-primary bg-primary/5" : "border-border bg-background hover:border-primary/60"}`}>
                          <div className="flex items-start gap-3">
                            <input
                              required
                              type="radio"
                              name="package"
                              value={`${option.name} - ${option.price}`}
                              checked={selectedPackage === option.slug}
                              onChange={() => setSelectedPackage(option.slug)}
                              className="mt-1"
                            />
                            <div>
                              <div className="font-display text-base font-semibold">{option.name}</div>
                              <div className="mt-1 text-sm font-semibold text-primary">{option.price}</div>
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{option.desc}</p>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Budget range</span>
                    <select required name="budget_range" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors">
                      <option value="">Select range</option>
                      {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Timeline</span>
                    <select required name="timeline" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors">
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">What result should this investment create?</span>
                  <textarea required name="roi_goal" rows={3} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Example: generate better leads, raise brand trust, launch a premium product, win a tender, improve conversion..." />
                </label>

                <details className="group rounded-2xl border border-border bg-background p-4">
                  <summary className="cursor-pointer text-sm font-semibold">More project details (optional)</summary>
                  <div className="mt-3 space-y-3">
                    <label className="block">
                      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Project brief</span>
                      <textarea name="message" rows={4} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Goals, audience, deliverables, references, competitors, decision-makers and anything I should know..." />
                    </label>

                    <label className="block rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5">
                      <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        <FileUp className="h-4 w-4 text-primary" /> Upload brief, RFP, logo files or references
                      </span>
                      <input name="attachment" type="file" multiple className="mt-3 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" />
                      <span className="mt-2 block text-xs text-muted-foreground">PDF, DOCX, images, ZIP files or brand assets. Keep uploads concise for faster review.</span>
                    </label>
                  </div>
                </details>

                <div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/35 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Your brief goes to {site.quoteEmail}. First submission through the secure form service may require email confirmation for anti-spam protection.
                    </p>
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card hover:shadow-glow transition-shadow">
                    <Send className="h-4 w-4" /> Send brief
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { n: "24h", l: "strategic response window", icon: Clock },
            { n: "3", l: "investment lanes per service", icon: BriefcaseBusiness },
            { n: "100+", l: "projects informing the process", icon: TrendingUp },
          ].map((item) => (
            <article key={item.l} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
              <item.icon className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-3 font-display text-4xl font-bold text-gradient-primary">{item.n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{item.l}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ faq</span>
          <h2 className="mt-2 font-display text-4xl font-bold">Questions, answered.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <span className="font-display text-base font-semibold">{faq.q}</span>
                <span className="text-primary group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:border-primary hover:text-primary">
            Compare services first <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
