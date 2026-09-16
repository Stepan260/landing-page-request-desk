import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const ITEMS = [
  { label: "Workspace-isolated data", detail: "Row-level security per tenant" },
  { label: "GDPR-ready", detail: "Data request & deletion webhooks built in" },
  { label: "Real-time by default", detail: "Live task updates across the team" },
  { label: "Read-only Shopify access", detail: "We never touch your store data" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border/70 bg-surface/60 py-10">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {ITEMS.map((item) => (
              <div key={item.label} className="text-center sm:text-left">
                <p className="text-[14px] font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-[13px] text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
