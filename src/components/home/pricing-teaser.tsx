import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { PLANS } from "@/lib/site";

export function PricingTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple pricing, per workspace.
          </h2>
          <p className="mt-4 text-[16px] text-muted">
            Start free. Upgrade when your team — or your ticket volume —
            outgrows it.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-baseline justify-center gap-x-10 gap-y-4">
            {PLANS.map((plan) => (
              <div key={plan.id}>
                <p className="text-[13px] font-medium text-muted">
                  {plan.name}
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  {plan.price === 0 ? "Free" : `$${plan.price}`}
                  {plan.price !== 0 && (
                    <span className="text-[14px] font-normal text-muted">
                      /{plan.cadence}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <ButtonLink href="/pricing" variant="secondary" className="mt-10">
            Compare all plans
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
