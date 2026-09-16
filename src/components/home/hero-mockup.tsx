export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div
        aria-hidden="true"
        className="absolute -inset-x-10 -top-24 -z-10 h-[420px] rounded-full bg-gradient-to-br from-[#0071e3]/25 via-[#7c3aed]/20 to-transparent blur-3xl"
      />

      <div className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-1.5 border-b border-border/70 bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-4 min-w-0 truncate text-[12px] text-muted">
            app.requestdeskhq.com/projects/support
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr]">
          <div className="border-b border-border/70 p-5 sm:border-r sm:border-b-0">
            <p className="mb-3 text-[11px] font-semibold tracking-wide text-muted uppercase">
              Support inbox
            </p>
            <div className="space-y-2">
              <TaskRow
                title="Order #10482 hasn't shipped yet"
                tag="Shipping"
                tagColor="bg-[#0071e3]/10 text-[#0071e3]"
                active
              />
              <TaskRow
                title="Wrong size sent — needs exchange"
                tag="Returns"
                tagColor="bg-[#7c3aed]/10 text-[#7c3aed]"
              />
              <TaskRow
                title="Discount code not applying at checkout"
                tag="Billing"
                tagColor="bg-[#f59e0b]/10 text-[#b45309]"
              />
            </div>
          </div>

          <div className="p-5">
            <p className="mb-3 text-[11px] font-semibold tracking-wide text-muted uppercase">
              Shopify customer
            </p>
            <div className="rounded-xl bg-surface p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0071e3] to-[#7c3aed] text-[13px] font-semibold text-white">
                  JM
                </div>
                <div>
                  <p className="text-[13px] font-medium text-foreground">
                    Jamie Morales
                  </p>
                  <p className="text-[12px] text-muted">jamie@customer.com</p>
                </div>
              </div>
              <dl className="mt-4 space-y-2 text-[12px]">
                <Row label="Order" value="#10482 · $86.00" />
                <Row label="Status" value="Fulfilled" />
                <Row label="Total orders" value="4" />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskRow({
  title,
  tag,
  tagColor,
  active = false,
}: {
  title: string;
  tag: string;
  tagColor: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 ${
        active ? "bg-surface" : ""
      }`}
    >
      <span className="min-w-0 flex-1 truncate text-[13px] text-foreground">
        {title}
      </span>
      <span
        className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${tagColor}`}
      >
        {tag}
      </span>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="min-w-0 truncate text-muted">{label}</dt>
      <dd className="shrink-0 font-medium text-foreground">{value}</dd>
    </div>
  );
}
