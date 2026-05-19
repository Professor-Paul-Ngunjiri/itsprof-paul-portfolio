import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Check, Clock } from "lucide-react";
import { site, services } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Paul Ngunjiri · ItsProf Paul" },
      { name: "description", content: "Start a project with Paul Ngunjiri. WhatsApp, call, or send a structured project brief. Based in Nairobi, available worldwide." },
      { property: "og:title", content: "Contact — Paul Ngunjiri" },
      { property: "og:description", content: "Let's create something extraordinary together." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const faqs = [
    { q: "How do I start a project with you?", a: "WhatsApp me, email me, or fill the form below. We'll set up a free 30-minute discovery call within 24 hours." },
    { q: "Do you work with international clients?", a: "Yes — I currently work with clients across Kenya, East Africa, the UK and the US. Async-friendly." },
    { q: "What information do you need to give a quote?", a: "Project goals, rough scope, timeline and budget range. The more context, the more accurate the quote." },
    { q: "What payment methods do you accept?", a: "M-Pesa, bank transfer, PayPal and Wise. 50% deposit, 50% on delivery — or milestone-based for larger engagements." },
    { q: "Do you offer payment plans?", a: "Yes, for projects above KES 100,000 I offer 3-instalment plans at no extra cost." },
    { q: "How quickly can you start?", a: "Most projects start within 5–10 business days of brief confirmation. Rush slots are sometimes available." },
  ];

  return (
    <>
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 text-center">
          <span className="hero-eyebrow">/ contact</span>
          <h1 className="mt-3 font-display text-5xl lg:text-7xl font-bold tracking-tighter">
            Let's create something <span className="text-gradient-gold">extraordinary.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tell me about your project. I typically respond within 24 hours, weekdays 8am–6pm EAT.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-hero-primary">
              <MessageCircle className="h-4 w-4" /> WhatsApp Paul
            </a>
            <a href={`tel:${site.phone}`} className="btn-hero-outline">
              <Phone className="h-4 w-4" /> Call Paul
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-5 gap-10">
        {/* Contact panel */}
        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3"><Mail className="h-5 w-5 text-primary" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <a href={`mailto:${site.email}`} className="font-medium hover:text-primary break-all">{site.email}</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3"><Phone className="h-5 w-5 text-primary" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                <a href={`tel:${site.phone}`} className="font-medium hover:text-primary">{site.phone}</a>
                <div className="text-xs text-muted-foreground mt-0.5">Mon–Fri · 8am–6pm EAT</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3"><MapPin className="h-5 w-5 text-primary" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
                <div className="font-medium">{site.location}</div>
                <div className="text-xs text-muted-foreground mt-0.5">In-person in Nairobi · remote worldwide</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-90">
              <Clock className="h-3.5 w-3.5" /> Response time
            </div>
            <div className="mt-2 font-display text-2xl font-bold">Within 24 hours.</div>
            <p className="mt-2 text-sm opacity-90">Most enquiries get a reply same business day.</p>
          </div>
        </aside>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-border bg-card p-7 lg:p-9 shadow-card">
            {sent ? (
              <div className="text-center py-10">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">Got it — talk soon.</h3>
                <p className="mt-2 text-muted-foreground">I'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <h2 className="font-display text-2xl font-bold">Project enquiry</h2>
                  <p className="mt-1 text-sm text-muted-foreground">A few quick questions and we're off.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Your name</span>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</span>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Service interested in</span>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors">
                    <option value="">— select a service —</option>
                    {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Tell me about the project</span>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Goals, timeline, budget range, anything I should know…" />
                </label>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card hover:shadow-glow transition-shadow">
                  <Send className="h-4 w-4" /> Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ faq</span>
          <h2 className="mt-2 font-display text-4xl font-bold">Questions, answered.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <span className="font-display text-base font-semibold">{f.q}</span>
                <span className="text-primary group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
