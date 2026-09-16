import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { PlanCard } from "@/components/pricing/plan-card";
import { Faq } from "@/components/faq";
import { FAQS, PLANS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Simple, per-workspace pricing for ${SITE.name} — the Shopify helpdesk that turns support emails into tasks.`,
  alternates: { canonical: "/pricing" },
};

const pricingFaqs = FAQS.filter((f) =>
  ["over your plan's email-to-task limit", "invite my team"].some((needle) =>
    f.question.toLowerCase().includes(needle.toLowerCase()),
  ),
);

export default function PricingPage() {
  return (
    <>
      <section className="pt-20 pb-4 sm:pt-28">
        <Container className="text-center">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Pricing that scales with your ticket volume.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-muted">
              Every plan includes Shopify customer lookup, email-to-task, and
              full task history. Upgrade when you need more seats or more
              headroom on email volume.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {PLANS.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </Reveal>
          <p className="mt-8 text-center text-[13px] text-muted">
            Prices in USD, billed monthly. Need a custom plan for a large
            multi-brand operation?{" "}
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="font-medium text-foreground underline underline-offset-2"
            >
              Talk to us.
            </a>
          </p>
        </Container>
      </section>

      <Faq
        items={pricingFaqs.length ? pricingFaqs : FAQS.slice(0, 3)}
        title="Pricing questions"
      />
    </>
  );
}
