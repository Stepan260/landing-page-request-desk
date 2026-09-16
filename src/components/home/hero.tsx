import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { APP_SIGNUP_URL } from "@/lib/site";
import { HeroMockup } from "@/components/home/hero-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
      <Container className="flex flex-col items-center text-center">
        <span className="rounded-full border border-border bg-surface px-4 py-1.5 text-[13px] font-medium text-muted">
          Built for Shopify support teams
        </span>

        <h1 className="mt-6 w-full max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Every customer email,{" "}
          <span className="gradient-text">already a task.</span>
        </h1>

        <p className="mt-6 w-full max-w-xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
          Request Desk turns support emails into tasks automatically and
          shows the Shopify order behind them — so your team stops
          tab-switching and starts closing tickets.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <ButtonLink href={APP_SIGNUP_URL} className="px-7 py-3 text-base">
            Start for free
          </ButtonLink>
          <ButtonLink
            href="/shopify"
            variant="secondary"
            className="px-7 py-3 text-base"
          >
            See the Shopify integration
          </ButtonLink>
        </div>

        <p className="mt-4 text-[13px] text-muted">
          Free plan available · No credit card required
        </p>

        <div className="mt-16 w-full sm:mt-20">
          <HeroMockup />
        </div>
      </Container>
    </section>
  );
}
