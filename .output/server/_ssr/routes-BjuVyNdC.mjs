import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, r as company, t as SiteFooter } from "./site-chrome-I5XrGSoR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BjuVyNdC.js
var import_jsx_runtime = require_jsx_runtime();
var loc_ooty_default = "/assets/loc-ooty-BunB7cu4.jpg";
var loc_coorg_default = "/assets/loc-coorg-t0GRuQrB.jpg";
var loc_goa_default = "/assets/loc-goa-DorkcDZ8.jpg";
var loc_kerala_default = "/assets/loc-kerala-YqWJ1W3J.jpg";
var services = [
	{
		title: "Honeymoon Packages",
		body: "Unhurried itineraries with stays, sightseeing and transfers arranged end to end."
	},
	{
		title: "Hotel & Room Booking",
		body: "Verified stays from budget rooms to boutique suites, confirmed the same day."
	},
	{
		title: "Air Ticketing",
		body: "Domestic and international tickets, reissues and group fares handled for you."
	},
	{
		title: "Travel Allowance & Forex",
		body: "Guidance on travel allowance, forex cards and currency before you fly."
	},
	{
		title: "Passport & Visa Assistance",
		body: "Document checks, appointments and filing support for families and groups."
	},
	{
		title: "Group & Corporate Tours",
		body: "Buses, guides, meals and coordination for family trips, weddings and offsites."
	}
];
var destinations = [
	{
		name: "Coorg & Chikmagalur",
		body: "Coffee estates, misty hills and quiet homestays — a short drive from Bangalore.",
		image: loc_coorg_default
	},
	{
		name: "Goa",
		body: "Beach stays, north–south sightseeing and easy flights or overnight coaches.",
		image: loc_goa_default
	},
	{
		name: "Kerala",
		body: "Munnar, Alleppey houseboats and Kochi, planned as one smooth circuit.",
		image: loc_kerala_default
	}
];
var moreLocations = [
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
	"Thailand"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: loc_ooty_default,
						alt: "Green tea gardens and blue mountains, a popular getaway from Bangalore",
						width: 1600,
						height: 900,
						className: "h-[62vh] min-h-[420px] w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-dusk" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-6xl px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-secondary",
									children: "Bangalore travel desk"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 max-w-2xl text-4xl leading-[1.05] text-secondary sm:text-5xl",
									children: "Honeymoons, holidays and hotel bookings — planned in Bangalore."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-lg text-sm leading-relaxed text-secondary/85",
									children: "We arrange stays, flights, visas and travel allowances so your trip feels effortless from the first call."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "rounded-sm bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground transition-opacity hover:opacity-90",
										children: "Plan my trip"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: company.phoneHref,
										className: "rounded-sm border border-secondary/50 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-secondary transition-colors hover:bg-secondary/10",
										children: company.phone
									})]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "What we do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl sm:text-4xl",
						children: "Everything your journey needs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-card p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl text-primary",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: s.body
							})]
						}, s.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/50 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Where we send you"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl sm:text-4xl",
							children: "Popular getaways from Bangalore"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-3",
							children: destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "overflow-hidden rounded-sm border border-border bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.image,
									alt: d.name,
									width: 1200,
									height: 800,
									loading: "lazy",
									className: "h-48 w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl text-primary",
										children: d.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: d.body
									})]
								})]
							}, d.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 rounded-sm border border-border bg-card p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg text-primary",
									children: "Other locations we plan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground",
									children: moreLocations.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-sm border border-border px-3 py-1.5",
										children: l
									}, l))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "mt-6 inline-block rounded-sm bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90",
									children: "Ask for an itinerary"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-5 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2 md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Why Nazneen Holidays"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl sm:text-4xl",
							children: "Honest service, personal attention"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "We are a Bangalore-based travel desk that treats every trip like our own. You get one point of contact, clear options and support on WhatsApp while you travel."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Same-day hotel and flight confirmations" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Flexible itineraries built around your dates" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• WhatsApp support during your trip" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Help with travel allowance, visa and documents" })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-border bg-card p-7 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Visit us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed",
								children: company.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3",
								children: company.hours
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.phoneHref,
								className: "mt-4 inline-block text-primary underline-offset-4 hover:underline",
								children: company.phone
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
