import type { Metadata } from "next";
import Link from "next/link";
import { type ReactNode } from "react";
import { Container } from "@/components/container";
import { APP_SIGNUP_URL, FAQS, PLANS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Design preview — ${SITE.name}`,
  robots: { index: false, follow: false },
};

const INK = "#2b2420";
const CREAM = "#f6f1ea";
const RUST = "#a9765f";
const MUTED = "#6b6155";

export default function Test2Page() {
  return (
    <div style={{ backgroundColor: CREAM }}>
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
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
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-[12px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className="text-[11px] font-semibold tracking-[0.25em] uppercase"
      style={{ color: RUST }}
    >
      {children}
    </span>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="px-6 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-28" style={{ color: INK }}>
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Eyebrow>Support desk, refined</Eyebrow>
        <h1 className="mt-5 text-balance text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
          Every customer email, already a{" "}
          <span style={{ color: RUST }}>task</span>.
        </h1>
        <p className="mt-6 max-w-md text-balance text-[15px] leading-relaxed sm:text-base" style={{ color: MUTED }}>
          {SITE.description}
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <CtaLink
            href={APP_SIGNUP_URL}
            className="hover:opacity-85"
            style={{ backgroundColor: INK, color: CREAM }}
          >
            Start for free
          </CtaLink>
          <CtaLink
            href="/shopify"
            className="border hover:bg-black/5"
            style={{ borderColor: `${INK}40`, color: INK }}
          >
            See the integration
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust bar ---------- */
const TRUST_ITEMS = [
  { label: "Workspace-isolated", detail: "Row-level security per tenant" },
  { label: "GDPR-ready", detail: "Data request & deletion webhooks" },
  { label: "Real-time by default", detail: "Live task updates, team-wide" },
  { label: "Read-only Shopify", detail: "We never touch your store data" },
];

function TrustBar() {
  return (
    <section
      className="border-y py-10"
      style={{ borderColor: `${INK}14`, color: INK }}
    >
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="text-center sm:text-left">
              <p className="text-[14px] font-semibold">{item.label}</p>
              <p className="mt-1 text-[13px]" style={{ color: MUTED }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Features ---------- */
const FEATURES = [
  {
    swatch: "linear-gradient(160deg,#e7c9bb 0%,#c88f78 100%)",
    eyebrow: "Email-to-task",
    title: "Nothing sent to support gets missed.",
    description:
      "Give your project a dedicated inbound address. Every email that lands there becomes a task automatically — subject, body, and sender preserved as the first comment.",
    bullets: [
      "Works with the inbox you already give customers",
      "Per-workspace volume so one busy store never starves another",
      "Owners are notified if a plan's limit is reached — tasks still get created",
    ],
    card: <EmailCard />,
  },
  {
    swatch: "linear-gradient(160deg,#e3ded0 0%,#b6a67f 100%)",
    eyebrow: "Tags, comments & history",
    title: "Full context, every time you open a task.",
    description:
      "Filter and sort by status, tag, or assignee. Every change — reassignment, comment, tag — is written to an audit log you can always look back on.",
    bullets: [
      "Workspace-scoped tags with live task counts",
      "Threaded comments per task",
      "A complete, timestamped history log",
    ],
    reverse: true,
    card: <HistoryCard />,
  },
  {
    swatch: "linear-gradient(160deg,#d7dee0 0%,#9fb0b6 100%)",
    eyebrow: "Workspaces & roles",
    title: "Bring your whole team in, safely.",
    description:
      "Invite teammates by email with a secure, time-limited link. Owners manage members and access; everyone else sees only what their role allows.",
    bullets: [
      "Owner / Team member roles out of the box",
      "Multiple projects per workspace",
      "Every workspace's data is isolated at the database level",
    ],
    card: <TeamCard />,
  },
];

/* Small "product on a backdrop" cards — typographic only, no icons. */
function FeatureVisual({ swatch, children }: { swatch: string; children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="relative flex aspect-[4/3] w-full items-center justify-center rounded-2xl p-8"
      style={{ background: swatch }}
    >
      <div
        className="w-full max-w-xs rounded-xl p-4 shadow-[0_20px_45px_-20px_rgba(43,36,32,0.35)]"
        style={{ backgroundColor: CREAM }}
      >
        {children}
      </div>
    </div>
  );
}

function EmailCard() {
  return (
    <>
      <p className="truncate text-[11px]" style={{ color: MUTED }}>
        support@mg.requestdeskhq.com
      </p>
      <p className="mt-1 truncate text-[13px] font-medium" style={{ color: INK }}>
        &ldquo;Package arrived damaged&rdquo;
      </p>
      <div className="my-3 h-px w-full" style={{ backgroundColor: `${INK}14` }} />
      <div className="flex items-center justify-between">
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase"
          style={{ backgroundColor: `${RUST}1f`, color: RUST }}
        >
          New task
        </span>
        <span className="text-[11px]" style={{ color: MUTED }}>
          order #10491
        </span>
      </div>
    </>
  );
}

function HistoryCard() {
  const events = [
    { who: "Priya", action: "reassigned this task", time: "2m" },
    { who: "System", action: "logged a customer reply", time: "18m" },
    { who: "Priya", action: "added the tag Returns", time: "1h" },
  ];
  return (
    <>
      <div className="flex gap-2">
        {["Returns", "VIP"].map((tag) => (
          <span
            key={tag}
            className="rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase"
            style={{ backgroundColor: `${RUST}1f`, color: RUST }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3 space-y-2.5 border-t pt-3" style={{ borderColor: `${INK}14` }}>
        {events.map((e) => (
          <p key={e.action} className="text-[12px] leading-relaxed" style={{ color: MUTED }}>
            <span className="font-medium" style={{ color: INK }}>
              {e.who}
            </span>{" "}
            {e.action} · {e.time}
          </p>
        ))}
      </div>
    </>
  );
}

function TeamCard() {
  const members = [
    { initials: "AK", name: "Anya K.", role: "Owner" },
    { initials: "PR", name: "Priya R.", role: "Team member" },
    { initials: "TS", name: "Tom S.", role: "Team member" },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold" style={{ color: INK }}>
          Acme Supply Co.
        </p>
        <span className="text-[11px]" style={{ color: MUTED }}>
          3 members
        </span>
      </div>
      <div className="mt-3 space-y-2.5 border-t pt-3" style={{ borderColor: `${INK}14` }}>
        {members.map((m) => (
          <div key={m.name} className="flex items-center justify-between text-[12px]">
            <span style={{ color: INK }}>
              <span
                className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold"
                style={{ backgroundColor: RUST, color: CREAM }}
              >
                {m.initials}
              </span>
              {m.name}
            </span>
            <span style={{ color: MUTED }}>{m.role}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function Features() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32" style={{ color: INK }}>
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Built around how support teams actually work.
          </h2>
        </div>

        <div className="mt-20 space-y-24 sm:space-y-32">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`grid items-center gap-10 sm:grid-cols-2 sm:gap-16 ${
                feature.reverse ? "sm:[&>*:first-child]:order-2" : ""
              }`}
            >
              <FeatureVisual swatch={feature.swatch}>{feature.card}</FeatureVisual>
              <div>
                <Eyebrow>{feature.eyebrow}</Eyebrow>
                <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: MUTED }}>
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-[14px]">
                      <span
                        aria-hidden
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: RUST }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- How it works ---------- */
const STEPS = [
  {
    number: "01",
    title: "Connect Shopify",
    description:
      "Install Request Desk from your Shopify admin. One click, no API keys to copy and paste.",
  },
  {
    number: "02",
    title: "Emails become tasks",
    description:
      "Point your support address at Request Desk. Every inbound email creates a task in the right project automatically.",
  },
  {
    number: "03",
    title: "Resolve with context",
    description:
      "Open a task and see the customer's orders right there. Tag it, comment, reassign — every change is logged.",
  },
];

function HowItWorks() {
  return (
    <section
      className="border-y px-6 py-24 sm:px-8 sm:py-32"
      style={{ borderColor: `${INK}14`, color: INK }}
    >
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From inbox to resolved, in three steps.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
          {STEPS.map((step) => (
            <div key={step.number} className="border-t pt-6" style={{ borderColor: `${INK}20` }}>
              <span className="text-[13px] font-semibold tracking-[0.2em]" style={{ color: RUST }}>
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: MUTED }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  return (
    <section className="px-6 py-24 text-center sm:px-8 sm:py-32" style={{ color: INK }}>
      <Container className="max-w-3xl">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Simple pricing, per workspace.
        </h2>
        <p className="mt-4 text-[15px]" style={{ color: MUTED }}>
          Start free. Upgrade when your team — or your ticket volume — outgrows it.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div key={plan.id} className="border-t pt-6" style={{ borderColor: `${INK}20` }}>
              <p className="text-[12px] font-semibold tracking-[0.2em] uppercase" style={{ color: RUST }}>
                {plan.name}
              </p>
              <p className="mt-2 text-3xl font-semibold">
                {plan.price === 0 ? "Free" : `$${plan.price}`}
                {plan.price !== 0 && (
                  <span className="text-[14px] font-normal" style={{ color: MUTED }}>
                    /{plan.cadence}
                  </span>
                )}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: MUTED }}>
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <CtaLink
          href="/pricing"
          className="mt-12 border hover:bg-black/5"
          style={{ borderColor: `${INK}40`, color: INK }}
        >
          Compare all plans
        </CtaLink>
      </Container>
    </section>
  );
}

/* ---------- FAQ (native <details>, no JS needed) ---------- */
function Faq() {
  return (
    <section
      className="border-y px-6 py-24 sm:px-8 sm:py-32"
      style={{ borderColor: `${INK}14`, color: INK }}
    >
      <Container className="max-w-3xl">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-12 divide-y" style={{ borderColor: `${INK}14` }}>
          {FAQS.map((item) => (
            <details
              key={item.question}
              className="group py-5"
              style={{ borderColor: `${INK}14` }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span className="text-[15px] font-medium">{item.question}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-xl font-light transition-transform duration-200 group-open:rotate-45"
                  style={{ color: RUST }}
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed" style={{ color: MUTED }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- CTA band ---------- */
function CtaBand() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32">
      <Container>
        <div
          className="rounded-3xl px-8 py-16 text-center sm:px-16"
          style={{ backgroundColor: INK, color: CREAM }}
        >
          <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Stop losing customer emails in a shared inbox.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px]" style={{ color: `${CREAM}b3` }}>
            Set up your first project in under five minutes. Free plan included.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink
              href={APP_SIGNUP_URL}
              className="hover:opacity-90"
              style={{ backgroundColor: CREAM, color: INK }}
            >
              Start for free
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

