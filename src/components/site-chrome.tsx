import { Link } from "@tanstack/react-router";

export const company = {
  name: "Nazneen Holidays",
  address: "18/1, Commercial Street, Shivajinagar, Bangalore – 560001",
  phone: "+91 94441 55515",
  phoneHref: "tel:+919444155515",
  whatsapp: "https://wa.me/919444155515",
  email: "info@nazneenholidays.in",
  hours: "Mon – Sat, 10:00 AM – 8:00 PM",
};

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="leading-none">
          <span className="block font-display text-2xl tracking-tight text-primary">
            Nazneen <span className="text-accent">Holidays</span>
          </span>
          <span className="eyebrow mt-1 block">Travel &amp; Stays · Bangalore</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
            className="hidden text-muted-foreground transition-colors hover:text-primary sm:inline"
          >
            Home
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-primary" }}
            className="hidden text-muted-foreground transition-colors hover:text-primary sm:inline"
          >
            Contact
          </Link>
          <a
            href={company.phoneHref}
            className="rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-primary">{company.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Honeymoon escapes, hotel bookings, air ticketing and complete travel
            assistance — handled with honesty and care.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow mb-3">Office</p>
          <p className="leading-relaxed">{company.address}</p>
          <p className="mt-2">{company.hours}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow mb-3">Reach us</p>
          <a href={company.phoneHref} className="block hover:text-primary">
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="block hover:text-primary">
            {company.email}
          </a>
          <Link to="/contact" className="mt-2 inline-block text-primary underline-offset-4 hover:underline">
            Enquiry form
          </Link>
        </div>
      </div>
      <div className="border-t border-border/70 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
