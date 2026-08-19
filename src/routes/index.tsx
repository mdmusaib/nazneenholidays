import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteFooter, SiteHeader, company } from "@/components/site-chrome";
import heroImg from "@/assets/loc-ooty.jpg";
import coorgImg from "@/assets/loc-coorg.jpg";
import goaImg from "@/assets/loc-goa.jpg";
import keralaImg from "@/assets/loc-kerala.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nazneen Holidays — Honeymoon & Travel Bookings, Bangalore",
      },
      {
        name: "description",
        content:
          "Nazneen Holidays in Bangalore plans honeymoons, hotel and room bookings, air ticketing, visa help and travel allowances. Call +91 94441 55515.",
      },
      {
        property: "og:title",
        content: "Nazneen Holidays — Honeymoon & Travel Bookings, Bangalore",
      },
      {
        property: "og:description",
        content:
          "Honeymoon packages, hotel bookings and complete travel assistance from our Bangalore travel desk.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    title: "Honeymoon Packages",
    body: "Unhurried itineraries with stays, sightseeing and transfers arranged end to end.",
  },
  {
    title: "Hotel & Room Booking",
    body: "Verified stays from budget rooms to boutique suites, confirmed the same day.",
  },
  {
    title: "Air Ticketing",
    body: "Domestic and international tickets, reissues and group fares handled for you.",
  },
  {
    title: "Travel Allowance & Forex",
    body: "Guidance on travel allowance, forex cards and currency before you fly.",
  },
  {
    title: "Passport & Visa Assistance",
    body: "Document checks, appointments and filing support for families and groups.",
  },
  {
    title: "Group & Corporate Tours",
    body: "Buses, guides, meals and coordination for family trips, weddings and offsites.",
  },
];

const destinations = [
  {
    name: "Coorg & Chikmagalur",
    body: "Coffee estates, misty hills and quiet homestays — a short drive from Bangalore.",
    image: coorgImg,
  },
  {
    name: "Goa",
    body: "Beach stays, north–south sightseeing and easy flights or overnight coaches.",
    image: goaImg,
  },
  {
    name: "Kerala",
    body: "Munnar, Alleppey houseboats and Kochi, planned as one smooth circuit.",
    image: keralaImg,
  },
];

const moreLocations = [
  "Ooty",
  "Mysore",
  "Wayanad",
  "Hampi",
  "Gokarna",
  "Andaman",
  "Kashmir",
  "Dubai",
  "Maldives",
  "Bali",
  "Singapore",
  "Thailand",
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Green tea gardens and blue mountains, a popular getaway from Bangalore"
          width={1600}
          height={900}
          className="h-[62vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-dusk" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5">
            <p className="eyebrow text-secondary">Bangalore travel desk</p>
            <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] text-secondary sm:text-5xl">
              Honeymoons, holidays and hotel bookings — planned in Bangalore.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-secondary/85">
              We arrange stays, flights, visas and travel allowances so your trip
              feels effortless from the first call.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-sm bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                Plan my trip
              </Link>
              <a
                href={company.phoneHref}
                className="rounded-sm border border-secondary/50 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-secondary transition-colors hover:bg-secondary/10"
              >
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Everything your journey needs</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="bg-card p-7">
              <h3 className="text-xl text-primary">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Where we send you</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Popular getaways from Bangalore</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destinations.map((d) => (
              <article
                key={d.name}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-primary">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-sm border border-border bg-card p-7">
            <h3 className="text-lg text-primary">Other locations we plan</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
              {moreLocations.map((l) => (
                <li
                  key={l}
                  className="rounded-sm border border-border px-3 py-1.5"
                >
                  {l}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-sm bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ask for an itinerary
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Why Nazneen Holidays</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Honest service, personal attention</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We are a Bangalore-based travel desk that treats every trip like our
              own. You get one point of contact, clear options and support on
              WhatsApp while you travel.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>• Same-day hotel and flight confirmations</li>
              <li>• Flexible itineraries built around your dates</li>
              <li>• WhatsApp support during your trip</li>
              <li>• Help with travel allowance, visa and documents</li>
            </ul>
          </div>
          <div className="rounded-sm border border-border bg-card p-7 text-sm text-muted-foreground">
            <p className="eyebrow">Visit us</p>
            <p className="mt-3 leading-relaxed">{company.address}</p>
            <p className="mt-3">{company.hours}</p>
            <a
              href={company.phoneHref}
              className="mt-4 inline-block text-primary underline-offset-4 hover:underline"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
