import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { SiteFooter, SiteHeader, company } from "@/components/site-chrome";
import roomsImg from "@/assets/rooms.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nazneen Holidays — Bangalore Travel Agency" },
      {
        name: "description",
        content:
          "Talk to Nazneen Holidays in Bangalore for honeymoon packages, hotel bookings, air ticketing and travel allowances. Call +91 94441 55515.",
      },
      { property: "og:title", content: "Contact Nazneen Holidays — Bangalore" },
      {
        property: "og:description",
        content:
          "Office in Bangalore. Enquire about honeymoon packages, room bookings and travel assistance.",
      },
    ],
  }),
  component: ContactPage,
});

const interests = [
  "Honeymoon package",
  "Hotel / room booking",
  "Air ticketing",
  "Group or family tour",
  "Travel allowance & documents",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <p className="eyebrow">Enquiry</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Let’s plan your journey</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Share a few details and our travel desk will respond with a tailored
            itinerary and pricing — usually within one working day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          className="rounded-sm border border-border bg-card p-6 shadow-soft sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Enquiry noted — we'll call you shortly.");
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Your name" required />
            <Field label="Mobile" name="phone" placeholder="+91 ..." required />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="sm:col-span-2"
            />
            <label className="sm:col-span-2 block">
              <span className="eyebrow">Interested in</span>
              <select
                name="interest"
                className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              >
                {interests.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </label>
            <label className="sm:col-span-2 block">
              <span className="eyebrow">Details</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Travel dates, destination, number of travellers..."
                className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-sm bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {sent ? "Enquiry sent" : "Send enquiry"}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Prefer talking? Call {company.phone}
          </p>
        </form>

        <div className="space-y-6">
          <img
            src={roomsImg}
            alt="Comfortable hotel room arranged by Nazneen Holidays"
            loading="lazy"
            width={1200}
            height={900}
            className="h-56 w-full rounded-sm object-cover"
          />
          <div className="rounded-sm border border-border bg-card p-6">
            <p className="eyebrow">Visit our office</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {company.address}
            </p>
            <dl className="mt-5 space-y-3 text-sm">
              <Row label="Phone">
                <a href={company.phoneHref} className="hover:text-primary">
                  {company.phone}
                </a>
              </Row>
              <Row label="WhatsApp">
                <a href={company.whatsapp} className="hover:text-primary">
                  Chat with us
                </a>
              </Row>
              <Row label="Email">
                <a href={`mailto:${company.email}`} className="hover:text-primary">
                  {company.email}
                </a>
              </Row>
              <Row label="Hours">{company.hours}</Row>
            </dl>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="eyebrow">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
      />
    </label>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <dt className="w-24 shrink-0 text-muted-foreground">{label}</dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  );
}
