import type { Metadata } from "next";
import Link from "next/link";
import { type ReactNode } from "react";
import { Container } from "@/components/container";
import { APP_SIGNUP_URL, FAQS, PLANS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Design preview — ${SITE.name}`,
  robots: { index: false, follow: false },
};

/* Peepers.com-inspired: bold color blocks, cream ground, rounded-pill
   CTAs, uppercase promo headlines, a scrolling announcement strip,
   playful "NEW" tags. No icons — color and typography carry it. */
const NAVY = "#16213a";
const CREAM = "#faf6ee";
const TEAL = "#1c8c86";
const TEAL_DARK = "#136560";
const CORAL = "#ff8a65";
const GOLD = "#e3a53d";

export default function Test3Page() {
  return (
    <div style={{ backgroundColor: CREAM }}>
      <Hero />
      <Highlights />
      <ShopByGrid />
      <Testimonials />
      <IntegrationBand />
      <Pricing />
      <Faq />
      <CtaBand />
    </div>
  );
}

function CtaLink({
  href,
  children,
  className = "",
  style,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={style}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-[14px] font-bold transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}

function Badge({
  children,
  bg,
  fg,
}: {
  children: ReactNode;
  bg: string;
  fg: string;
}) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
      style={{ backgroundColor: bg, color: fg }}
    >
      {children}
    </span>
  );
}

/* ---------- Slow marquee strip (used inside Testimonials) ---------- */
function Marquee({
  text,
  bg,
  fg,
  duration = 70,
}: {
  text: string;
  bg: string;
  fg: string;
  duration?: number;
}) {
  return (
    <div className="overflow-hidden py-2.5" style={{ backgroundColor: bg }} aria-hidden>
      <style>{`
        @keyframes test3-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .test3-marquee-track {
          animation: test3-marquee ${duration}s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .test3-marquee-track { animation: none; }
        }
      `}</style>
      <div className="test3-marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="px-4 text-[12px] font-bold tracking-wide uppercase"
            style={{ color: fg }}
          >
            {text.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Testimonials (placeholder quotes — swap for real
   customer feedback before this ships) ---------- */
const REVIEWS = [
  {
    quote:
      "We used to lose emails in a shared inbox. Now every message becomes a task with the Shopify order already pulled up.",
    name: "Anya K.",
    role: "Owner, Acme Supply Co.",
  },
  {
    quote:
      "Tags sort themselves and I can see the whole history on a task without asking anyone. It's the calmest our queue has ever been.",
    name: "Priya R.",
    role: "Team member, Acme Supply Co.",
  },
  {
    quote:
      "Set up in an afternoon. My favorite part: nothing silently drops when we're over a limit — the owner just gets notified.",
    name: "Tom S.",
    role: "Team member, Acme Supply Co.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <h2
          className="text-center text-2xl font-black tracking-tight uppercase sm:text-3xl"
          style={{ color: NAVY }}
        >
          Loved by support teams
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white p-6">
              <span style={{ color: GOLD }}>★★★★★</span>
              <p className="mt-3 text-[14px] leading-relaxed" style={{ color: NAVY }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="mt-4 text-[13px] font-bold" style={{ color: NAVY }}>
                {r.name}
              </p>
              <p className="text-[12px]" style={{ color: `${NAVY}80` }}>
                {r.role}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <div className="mt-12">
        <Marquee
          text="★★★★★ CUT OUR REPLY TIME IN HALF  ·  ★★★★★ SET UP IN ONE AFTERNOON  ·  ★★★★★ NOTHING GETS LOST ANYMORE  ·  "
          bg={NAVY}
          fg={CREAM}
          duration={70}
        />
      </div>
    </section>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="px-6 py-16 sm:px-8 sm:py-24" style={{ backgroundColor: TEAL }}>
      <Container className="flex flex-col items-center text-center">
        <Badge bg={GOLD} fg={NAVY}>
          New · Shopify integration
        </Badge>
        <h1
          className="mt-6 max-w-3xl text-balance text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-6xl"
          style={{ color: CREAM }}
        >
          Every customer email, already a task
        </h1>
        <p
          className="mt-6 max-w-xl text-balance text-[16px] leading-relaxed sm:text-lg"
          style={{ color: `${CREAM}dd` }}
        >
          {SITE.description}
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <CtaLink
            href={APP_SIGNUP_URL}
            className="hover:opacity-90"
            style={{ backgroundColor: CORAL, color: NAVY }}
          >
            Start for free
          </CtaLink>
          <CtaLink
            href="/shopify"
            className="border-2 hover:bg-white/10"
            style={{ borderColor: CREAM, color: CREAM }}
          >
            See the integration
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Highlights row (bold color tiles) ---------- */
const HIGHLIGHTS = [
  {
    bg: CORAL,
    fg: NAVY,
    badge: "New",
    title: "Email-to-task",
    copy: "Every support email becomes a task, automatically — nothing sent to support gets missed.",
  },
  {
    bg: GOLD,
    fg: NAVY,
    title: "Shopify lookup",
    copy: "Customer and order context sits right inside every task, no tab-switching.",
  },
  {
    bg: TEAL_DARK,
    fg: CREAM,
    title: "Tags & history",
    copy: "Every reassignment, comment, and tag change is logged, timestamped, and searchable.",
  },
];

function Highlights() {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24">
      <Container>
        <h2
          className="text-center text-2xl font-black tracking-tight uppercase sm:text-3xl"
          style={{ color: NAVY }}
        >
          Just shipped
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl p-7"
              style={{ backgroundColor: item.bg, color: item.fg }}
            >
              {item.badge && (
                <Badge bg={item.fg} fg={item.bg}>
                  {item.badge}
                </Badge>
              )}
              <p className={`text-xl font-black ${item.badge ? "mt-4" : ""}`}>
                {item.title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed opacity-90">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Shop-by-need grid ---------- */
const SEGMENTS = [
  { title: "Solo founders", copy: "One inbox, zero chaos." },
  { title: "Growing teams", copy: "Shared queue, clear ownership." },
  { title: "Multi-brand stores", copy: "Separate workspaces, one login." },
  { title: "Support agencies", copy: "Client workspaces, kept isolated." },
];

function ShopByGrid() {
  return (
    <section className="px-6 pb-20 sm:px-8 sm:pb-24" style={{ backgroundColor: CREAM }}>
      <Container>
        <h2
          className="text-center text-2xl font-black tracking-tight uppercase sm:text-3xl"
          style={{ color: NAVY }}
        >
          Built for every kind of team
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SEGMENTS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border-2 p-5 text-center"
              style={{ borderColor: `${NAVY}20`, color: NAVY }}
            >
              <p className="text-[15px] font-bold">{s.title}</p>
              <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: `${NAVY}99` }}>
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Integration promo band ---------- */
function IntegrationBand() {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24" style={{ backgroundColor: NAVY }}>
      <Container className="flex flex-col items-center text-center">
        <Badge bg={TEAL} fg={CREAM}>
          Shopify integration
        </Badge>
        <h2
          className="mt-5 max-w-xl text-balance text-3xl font-black tracking-tight uppercase sm:text-4xl"
          style={{ color: CREAM }}
        >
          The order is already open before you ask for it
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: `${CREAM}b3` }}>
          Read-only access to customers, orders, and products — Request Desk
          never edits your store.
        </p>
        <CtaLink
          href="/shopify"
          className="mt-8 hover:opacity-90"
          style={{ backgroundColor: CORAL, color: NAVY }}
        >
          See how it works
        </CtaLink>
      </Container>
    </section>
  );
}

/* ---------- Pricing ---------- */
const PLAN_COLORS = [CREAM, CORAL, TEAL];

function Pricing() {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24">
      <Container>
        <h2
          className="text-center text-2xl font-black tracking-tight uppercase sm:text-3xl"
          style={{ color: NAVY }}
        >
          Simple pricing, per workspace
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {PLANS.map((plan, i) => {
            const bg = PLAN_COLORS[i % PLAN_COLORS.length];
            const light = bg === CREAM;
            return (
              <div
                key={plan.id}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: bg,
                  color: light ? NAVY : CREAM,
                  border: light ? `2px solid ${NAVY}20` : "none",
                }}
              >
                <p className="text-[12px] font-bold tracking-wide uppercase opacity-80">
                  {plan.name}
                </p>
                <p className="mt-2 text-4xl font-black">
                  {plan.price === 0 ? "Free" : `$${plan.price}`}
                  {plan.price !== 0 && (
                    <span className="text-[15px] font-medium opacity-70">
                      /{plan.cadence}
                    </span>
                  )}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed opacity-90">
                  {plan.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <CtaLink
            href="/pricing"
            className="border-2"
            style={{ borderColor: NAVY, color: NAVY }}
          >
            Compare all plans
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24" style={{ backgroundColor: `${TEAL}14` }}>
      <Container className="max-w-3xl">
        <h2
          className="text-center text-2xl font-black tracking-tight uppercase sm:text-3xl"
          style={{ color: NAVY }}
        >
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-white px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span className="text-[15px] font-bold" style={{ color: NAVY }}>
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className="shrink-0 text-xl font-black transition-transform duration-200 group-open:rotate-45"
                  style={{ color: CORAL }}
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed" style={{ color: `${NAVY}99` }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function CtaBand() {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24">
      <Container>
        <div
          className="rounded-3xl px-8 py-16 text-center sm:px-16"
          style={{ backgroundColor: CORAL }}
        >
          <h2
            className="mx-auto max-w-xl text-balance text-3xl font-black tracking-tight uppercase sm:text-4xl"
            style={{ color: NAVY }}
          >
            Stop losing emails in a shared inbox
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px]" style={{ color: `${NAVY}b3` }}>
            Set up your first project in under five minutes. Free plan included.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink
              href={APP_SIGNUP_URL}
              className="hover:opacity-90"
              style={{ backgroundColor: NAVY, color: CREAM }}
            >
              Start for free
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
