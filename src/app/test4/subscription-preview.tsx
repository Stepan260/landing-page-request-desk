"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { PLANS } from "@/lib/site";

type Provider = "stripe" | "shopify";
type Status = "trialing" | "active" | "past_due" | "canceled" | "frozen";

/* Tokens from request-desk-fe/src/index.css, scoped to this preview by
   overriding the landing theme variables on the wrapper element.
   Here `accent` stands in for the app's `primary` (indigo). */
const THEME = {
  "--background": "oklch(1 0 0)",
  "--foreground": "oklch(0.18 0.03 265)",
  "--muted": "oklch(0.97 0.01 264)",
  "--border": "oklch(0.92 0.01 256)",
  "--accent": "oklch(0.52 0.20 277)",
  "--a-muted-fg": "oklch(0.52 0.03 257)",
} as CSSProperties;

const MFG = "text-[color:var(--a-muted-fg)]";

const ICONS = {
  lock: (
    <>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  card: (
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </>
  ),
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </>
  ),
  external: (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
  alert: (
    <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </>
  ),
};

function Icon({
  name,
  className = "size-4",
}: {
  name: keyof typeof ICONS;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {ICONS[name]}
    </svg>
  );
}

const BTN =
  "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border text-sm font-medium whitespace-nowrap transition-all active:translate-y-px disabled:pointer-events-none disabled:opacity-50";
const BTN_SIZE = {
  default: "h-8 px-2.5",
  sm: "h-7 px-2.5 text-[0.8rem]",
  xs: "h-6 px-2 text-xs",
};
const BTN_VARIANT = {
  default: "border-transparent bg-accent text-white hover:bg-accent/80",
  outline: "border-border bg-background hover:bg-muted",
  ghost: "border-transparent hover:bg-muted",
};

function Button({
  variant = "default",
  size = "default",
  disabled,
  children,
}: {
  variant?: keyof typeof BTN_VARIANT;
  size?: keyof typeof BTN_SIZE;
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${BTN} ${BTN_SIZE[size]} ${BTN_VARIANT[variant]}`}
    >
      {children}
    </button>
  );
}

const STATUS_META: Record<Status, { label: string; badge: string; dot: string }> = {
  trialing: {
    label: "Trialing",
    badge: "bg-accent/10 text-accent ring-accent/20",
    dot: "bg-accent",
  },
  active: {
    label: "Active",
    badge: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20",
    dot: "bg-emerald-500",
  },
  past_due: {
    label: "Past due",
    badge: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    dot: "bg-amber-500",
  },
  canceled: {
    label: "Canceled",
    badge: "bg-muted text-[color:var(--a-muted-fg)] ring-border",
    dot: "bg-slate-400",
  },
  frozen: {
    label: "Frozen",
    badge: "bg-rose-500/10 text-rose-600 ring-rose-500/20",
    dot: "bg-rose-500",
  },
};

function Pill({ badge, dot, children }: { badge: string; dot: string; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${badge}`}
    >
      <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}

const TONES = {
  info: { box: "bg-accent/5 ring-accent/20", icon: "text-accent" },
  warn: { box: "bg-amber-500/5 ring-amber-500/25", icon: "text-amber-600" },
  danger: { box: "bg-rose-500/5 ring-rose-500/25", icon: "text-rose-600" },
  neutral: { box: "bg-muted ring-border", icon: "text-[color:var(--a-muted-fg)]" },
};

function Banner({
  tone,
  icon,
  title,
  action,
  children,
}: {
  tone: keyof typeof TONES;
  icon: keyof typeof ICONS;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex flex-wrap items-start gap-3 rounded-lg p-3 ring-1 ring-inset ${TONES[tone].box}`}
    >
      <Icon name={icon} className={`mt-0.5 size-4 shrink-0 ${TONES[tone].icon}`} />
      <div className="min-w-0 flex-1">
        <p className="font-medium">{title}</p>
        <p className={`mt-0.5 text-xs ${MFG}`}>{children}</p>
      </div>
      {action}
    </div>
  );
}

function statusBanner(status: Status, shopify: boolean): ReactNode {
  switch (status) {
    case "trialing":
      return (
        <Banner
          tone="info"
          icon="clock"
          title="Trial ends Sep 28, 2026 — 7 days left"
          action={shopify ? undefined : <Button size="sm">Add payment method</Button>}
        >
          {shopify
            ? "Shopify starts billing your store automatically when the trial ends."
            : "Add a card before the trial ends to keep Pro. Without one, the workspace moves to Free."}
        </Banner>
      );
    case "past_due":
      return (
        <Banner
          tone="warn"
          icon="alert"
          title="Payment failed"
          action={
            <Button variant="outline" size="sm">
              {shopify ? "Open Shopify billing" : "Update payment method"}
              <Icon name="external" className="size-3.5" />
            </Button>
          }
        >
          {shopify
            ? "Shopify couldn't charge your store. Check your billing details in the Shopify admin — access stays on until Sep 28, 2026."
            : "We couldn't charge your card. Update it by Sep 28, 2026 to keep access — we'll retry automatically."}
        </Banner>
      );
    case "canceled":
      return (
        <Banner
          tone="neutral"
          icon="info"
          title="Subscription canceled"
          action={<Button size="sm">Resume subscription</Button>}
        >
          You keep Pro until Oct 21, 2026, then the workspace moves to the Free plan.
        </Banner>
      );
    case "frozen":
      return (
        <Banner
          tone="danger"
          icon="alert"
          title="Subscription frozen by Shopify"
          action={
            <Button variant="outline" size="sm">
              Open Shopify billing
              <Icon name="external" className="size-3.5" />
            </Button>
          }
        >
          Your store has an unpaid Shopify bill. Access resumes automatically once it&apos;s paid.
        </Banner>
      );
    default:
      return null;
  }
}

function Meter({ value, max, warn }: { value: number; max: number; warn?: boolean }) {
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={Math.min(value, max)}
      className="h-2 w-full overflow-hidden rounded-full bg-muted"
    >
      <div
        className={`h-full rounded-full ${warn ? "bg-amber-500" : "bg-accent"}`}
        style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
      />
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className={`text-xs ${MFG}`}>{label}</dt>
      <dd className="mt-1 font-medium">{children}</dd>
    </div>
  );
}

const CARD = "flex flex-col gap-4 rounded-xl bg-background p-5 text-sm ring-1 ring-foreground/10";

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string; disabled?: boolean }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={`text-xs font-medium ${MFG}`}>{label}</span>
      <div className="inline-flex h-8 items-center rounded-lg bg-muted p-[3px]">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            disabled={o.disabled}
            aria-pressed={o.value === value}
            onClick={() => onChange(o.value)}
            className={`h-full rounded-md px-2.5 text-sm font-medium transition-all disabled:opacity-40 ${
              o.value === value
                ? "bg-background text-foreground shadow-sm"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const TABS = ["Workspace", "Members", "Statuses", "Keyword", "Email Rules", "Subscription"];

export function SubscriptionPreview() {
  const [provider, setProvider] = useState<Provider>("stripe");
  const [status, setStatus] = useState<Status>("active");
  const [overLimit, setOverLimit] = useState(false);

  const shopify = provider === "shopify";
  const currentIndex = Math.max(
    0,
    PLANS.findIndex((p) => p.id === "pro"),
  );
  const current = PLANS[currentIndex];

  const date: Record<Status, [string, string]> = {
    trialing: ["Trial ends", "Sep 28, 2026"],
    active: ["Renews on", "Oct 21, 2026"],
    past_due: ["Retry scheduled", "Sep 24, 2026"],
    canceled: ["Access until", "Oct 21, 2026"],
    frozen: ["Paused since", "Sep 18, 2026"],
  };
  const [dateLabel, dateValue] = date[status];

  const emailLimit = 1000;
  const emailsUsed = overLimit ? 1037 : 412;
  const seatsUsed = 6;
  const seatsLimit = 10;

  const invoices =
    status === "trialing"
      ? []
      : [
          { date: "Sep 21, 2026", failed: status === "past_due" },
          { date: "Aug 21, 2026", failed: false },
          { date: "Jul 21, 2026", failed: false },
        ];

  const changeProvider = (next: Provider) => {
    setProvider(next);
    if (next === "stripe" && status === "frozen") setStatus("active");
  };

  return (
    <div style={THEME} className="text-foreground">
      <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Segmented
          label="Provider"
          value={provider}
          onChange={changeProvider}
          options={[
            { value: "stripe", label: "Stripe" },
            { value: "shopify", label: "Shopify" },
          ]}
        />
        <Segmented
          label="Status"
          value={status}
          onChange={setStatus}
          options={[
            { value: "trialing", label: "Trialing" },
            { value: "active", label: "Active" },
            { value: "past_due", label: "Past due" },
            { value: "canceled", label: "Canceled" },
            { value: "frozen", label: "Frozen", disabled: !shopify },
          ]}
        />
        <Segmented
          label="Email limit"
          value={overLimit ? "over" : "ok"}
          onChange={(v) => setOverLimit(v === "over")}
          options={[
            { value: "ok", label: "Normal" },
            { value: "over", label: "Exceeded" },
          ]}
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-background">
        <div className="mx-auto max-w-4xl p-3 sm:p-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Admin Panel</h1>
            <p className={`text-sm ${MFG}`}>
              Manage your workspace, members, and project statuses.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <div
              role="tablist"
              className={`inline-flex h-8 w-fit max-w-full items-center overflow-x-auto rounded-lg bg-muted p-[3px] ${MFG}`}
            >
              {TABS.map((tab) => {
                const active = tab === "Subscription";
                return (
                  <span
                    key={tab}
                    role="tab"
                    aria-selected={active}
                    className={`inline-flex h-[calc(100%-1px)] items-center justify-center rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap ${
                      active
                        ? "bg-background text-foreground shadow-sm"
                        : "text-foreground/60"
                    }`}
                  >
                    {tab}
                  </span>
                );
              })}
            </div>

            <div className="mt-4 space-y-4 text-sm">
              {/* Current subscription */}
              <section className={CARD}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold">Subscription</h3>
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1 text-xs ${MFG}`}>
                      <Icon name="lock" className="size-3" />
                      Owners only
                    </span>
                    <Pill {...STATUS_META[status]}>{STATUS_META[status].label}</Pill>
                  </div>
                </div>

                {statusBanner(status, shopify)}

                <div>
                  <p className="text-2xl font-semibold tracking-tight">{current.name}</p>
                  <p className={`text-xs ${MFG}`}>${current.price} / month · per workspace</p>
                </div>

                <dl className="grid gap-4 sm:grid-cols-3">
                  <Field label="Billed via">{shopify ? "Shopify Billing" : "Stripe"}</Field>
                  <Field label={dateLabel}>{dateValue}</Field>
                  <Field label="Workspace">Acme Supply Co.</Field>
                </dl>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                  <p className={`text-xs ${MFG}`}>
                    {shopify
                      ? "Plan and billing changes are confirmed in Shopify by the store owner."
                      : "Card, cancellation and invoices are handled in the Stripe Customer Portal."}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      {shopify ? "Manage in Shopify" : "Manage billing"}
                      <Icon name="external" />
                    </Button>
                    <Button>{status === "canceled" ? "Resume subscription" : "Change plan"}</Button>
                  </div>
                </div>
              </section>

              {/* Usage */}
              <section className={CARD}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold">Usage this period</h3>
                  <span className={`text-xs ${MFG}`}>Resets Oct 21, 2026</span>
                </div>

                {overLimit && (
                  <Banner
                    tone="warn"
                    icon="alert"
                    title="Email-to-task limit reached"
                    action={<Button size="sm">Upgrade to Business</Button>}
                  >
                    37 emails over the Pro limit. They still became tasks — nothing was dropped —
                    and the owner was notified.
                  </Banner>
                )}

                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium">Email-to-task conversions</span>
                    <span className={`text-xs tabular-nums ${MFG}`}>
                      {emailsUsed.toLocaleString("en-US")} / {emailLimit.toLocaleString("en-US")}
                    </span>
                  </div>
                  <div className="mt-2">
                    <Meter value={emailsUsed} max={emailLimit} warn={overLimit} />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium">Seats</span>
                    <span className={`text-xs tabular-nums ${MFG}`}>
                      {seatsUsed} / {seatsLimit}
                    </span>
                  </div>
                  <div className="mt-2">
                    <Meter value={seatsUsed} max={seatsLimit} />
                  </div>
                </div>

                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-medium">Projects</span>
                  <span className={`text-xs ${MFG}`}>8 · unlimited on Pro</span>
                </div>

                <p className={`border-t border-border pt-4 text-xs ${MFG}`}>
                  When the monthly email limit is reached, tasks are still created and the owner is
                  notified to upgrade — a customer&apos;s email is never silently dropped.
                </p>
              </section>

              {/* Payment method */}
              <section className={CARD}>
                <h3 className="text-sm font-semibold">Payment method</h3>
                {shopify ? (
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                        <Icon name="card" />
                      </div>
                      <div>
                        <p className="font-medium">Billed through Shopify</p>
                        <p className={`text-xs ${MFG}`}>
                          Charges appear on the Shopify invoice for acme-supply.myshopify.com
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Open Shopify billing
                      <Icon name="external" className="size-3.5" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-12 items-center justify-center rounded-md border border-border bg-muted text-[11px] font-bold tracking-wide">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p
                          className={`text-xs ${
                            status === "past_due" ? "text-rose-600" : MFG
                          }`}
                        >
                          {status === "past_due" ? "Last payment failed" : "Expires 08/2028"}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Update card
                      <Icon name="external" className="size-3.5" />
                    </Button>
                  </div>
                )}
                <p className={`border-t border-border pt-4 text-xs ${MFG}`}>
                  {shopify
                    ? "No card needed here — the payment method already on your Shopify account is used."
                    : "Card details are handled by Stripe. Request Desk never stores them."}
                </p>
              </section>

              {/* Plans */}
              <section className={CARD}>
                <div>
                  <h3 className="text-sm font-semibold">Plans</h3>
                  <p className={`mt-1 text-xs ${MFG}`}>
                    Prices are per workspace. Change your plan at any time.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {PLANS.map((plan, i) => {
                    const isCurrent = i === currentIndex;
                    return (
                      <div
                        key={plan.id}
                        className={`flex flex-col gap-3 rounded-lg p-4 ${
                          isCurrent
                            ? "bg-accent/5 ring-2 ring-accent"
                            : "ring-1 ring-foreground/10"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold">{plan.name}</span>
                          {isCurrent && (
                            <Pill badge="bg-accent/10 text-accent ring-accent/20" dot="bg-accent">
                              Current
                            </Pill>
                          )}
                        </div>
                        <p className="text-2xl font-semibold tracking-tight">
                          {plan.price === 0 ? "Free" : `$${plan.price}`}
                          {plan.price !== 0 && (
                            <span className={`text-xs font-normal ${MFG}`}> / mo</span>
                          )}
                        </p>
                        <ul className={`space-y-1 text-xs ${MFG}`}>
                          <li>{plan.emailTaskLimit}</li>
                          <li>{plan.seats}</li>
                        </ul>
                        <div className="mt-auto">
                          {isCurrent ? (
                            <Button variant="outline" disabled>
                              Current plan
                            </Button>
                          ) : (
                            <Button variant={i > currentIndex ? "default" : "outline"}>
                              {i > currentIndex ? "Upgrade" : "Downgrade"}
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className={`text-xs ${MFG}`}>
                  {shopify
                    ? "Plan changes are confirmed in your Shopify admin by the store owner."
                    : "Upgrades open a secure Stripe Checkout."}
                </p>
              </section>

              {/* Billing history */}
              <section className={CARD}>
                <h3 className="text-sm font-semibold">Billing history</h3>
                {invoices.length === 0 ? (
                  <p className={`py-6 text-center text-sm ${MFG}`}>
                    No invoices yet — your first invoice is issued when the trial ends.
                  </p>
                ) : (
                  <div className="relative w-full overflow-x-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b [&_tr]:border-border">
                        <tr>
                          <th className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap">
                            Date
                          </th>
                          <th className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap">
                            Description
                          </th>
                          <th className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap">
                            Amount
                          </th>
                          <th className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap">
                            Status
                          </th>
                          <th className="h-10 px-2" />
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {invoices.map((inv) => (
                          <tr
                            key={inv.date}
                            className="border-b border-border transition-colors hover:bg-muted/50"
                          >
                            <td className="p-2 align-middle whitespace-nowrap">{inv.date}</td>
                            <td className={`p-2 align-middle whitespace-nowrap ${MFG}`}>
                              Pro plan · monthly
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap tabular-nums">
                              $29.00
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap">
                              {inv.failed ? (
                                <Pill
                                  badge="bg-rose-500/10 text-rose-600 ring-rose-500/20"
                                  dot="bg-rose-500"
                                >
                                  Failed
                                </Pill>
                              ) : (
                                <Pill
                                  badge="bg-emerald-500/10 text-emerald-600 ring-emerald-500/20"
                                  dot="bg-emerald-500"
                                >
                                  Paid
                                </Pill>
                              )}
                            </td>
                            <td className="p-2 text-right align-middle whitespace-nowrap">
                              {inv.failed ? (
                                <Button variant="outline" size="xs">
                                  {shopify ? "Open Shopify billing" : "Retry payment"}
                                </Button>
                              ) : (
                                <Button variant="ghost" size="xs">
                                  {shopify ? (
                                    <>
                                      View in Shopify
                                      <Icon name="external" className="size-3" />
                                    </>
                                  ) : (
                                    <>
                                      <Icon name="download" className="size-3" />
                                      Download
                                    </>
                                  )}
                                </Button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
