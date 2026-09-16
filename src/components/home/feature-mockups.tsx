export function EmailToTaskMockup() {
  return (
    <div className="relative rounded-2xl border border-border/70 bg-white p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-3 rounded-xl bg-surface p-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-muted">
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path
              d="M2.5 5.5h15v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9Z"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path
              d="M2.5 5.5 10 11l7.5-5.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-foreground">
            support@yourstore.com
          </p>
          <p className="truncate text-[12px] text-muted">
            &ldquo;My package arrived damaged&rdquo;
          </p>
        </div>
      </div>

      <div className="my-3 flex justify-center">
        <svg viewBox="0 0 16 24" className="h-6 w-4 text-border" fill="none">
          <path
            d="M8 1v20m0 0 5-5m-5 5-5-5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="rounded-xl border border-border/70 p-3">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[#0071e3]/10 px-2 py-0.5 text-[11px] font-medium text-[#0071e3]">
            New task
          </span>
          <span className="text-[11px] text-muted">via email</span>
        </div>
        <p className="mt-2 text-[13px] font-medium text-foreground">
          Package arrived damaged — order #10491
        </p>
      </div>
    </div>
  );
}

export function TaskHistoryMockup() {
  return (
    <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
      <div className="flex flex-wrap gap-2">
        {[
          ["Returns", "bg-[#7c3aed]/10 text-[#7c3aed]"],
          ["VIP", "bg-[#f59e0b]/10 text-[#b45309]"],
        ].map(([label, cls]) => (
          <span
            key={label}
            className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${cls}`}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="mt-4 space-y-3 border-t border-border/70 pt-4">
        {[
          { who: "Priya", action: "reassigned this task to herself", time: "2m ago" },
          { who: "System", action: "logged a reply from the customer", time: "18m ago" },
          { who: "Priya", action: "added the tag Returns", time: "1h ago" },
        ].map((event) => (
          <div key={event.action} className="flex gap-3 text-[13px]">
            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
            <p className="text-muted">
              <span className="font-medium text-foreground">{event.who}</span>{" "}
              {event.action}
              <span className="ml-2 text-[11px] text-muted/70">
                {event.time}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkspaceMockup() {
  const members = [
    { initials: "AK", name: "Anya K.", role: "Owner" },
    { initials: "PR", name: "Priya R.", role: "Team member" },
    { initials: "TS", name: "Tom S.", role: "Team member" },
  ];

  return (
    <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold text-foreground">
          Acme Supply Co.
        </p>
        <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-muted">
          3 members
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {members.map((m) => (
          <div key={m.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0071e3] to-[#7c3aed] text-[12px] font-semibold text-white">
                {m.initials}
              </div>
              <p className="text-[13px] text-foreground">{m.name}</p>
            </div>
            <span className="text-[12px] text-muted">{m.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
