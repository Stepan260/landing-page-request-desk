const SCOPES = [
  {
    scope: "read_customers",
    purpose: "Show the customer behind a task — name, email, order count.",
  },
  {
    scope: "read_orders",
    purpose: "Pull up the specific order a ticket is about, without leaving the task.",
  },
  {
    scope: "read_products",
    purpose: "Look up product details referenced in a customer's message.",
  },
];

export function ScopeCard() {
  return (
    <div className="rounded-2xl border border-border/70 bg-white p-6 sm:p-8">
      <p className="text-[13px] font-semibold text-accent">
        Access, in plain language
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
        Read-only. Nothing more.
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-muted">
        Request Desk never creates, edits, or deletes anything in your
        store. It asks Shopify for exactly three read permissions:
      </p>

      <div className="mt-6 divide-y divide-border border-y border-border">
        {SCOPES.map((s) => (
          <div key={s.scope} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-6">
            <code className="w-fit shrink-0 rounded-md bg-surface px-2.5 py-1 text-[13px] font-medium text-foreground sm:w-44">
              {s.scope}
            </code>
            <p className="text-[14px] text-muted">{s.purpose}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
