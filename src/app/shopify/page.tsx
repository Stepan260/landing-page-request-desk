import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { HeroMockup } from "@/components/home/hero-mockup";
import { ScopeCard } from "@/components/shopify/scope-card";
import { Faq } from "@/components/faq";
import { APP_SIGNUP_URL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shopify customer support tool",
  description:
    "Request Desk connects to your Shopify store and shows customer and order details right inside every support task — no tab-switching required.",
  alternates: { canonical: "/shopify" },
};

const shopifyFaqs = [
  {
    question: "Is Request Desk a Shopify app?",
    answer:
      "Yes. Request Desk connects to your store through Shopify's standard OAuth install flow — click connect, approve access, and you're in your Request Desk workspace.",
  },
  {
    question: "Will this slow down my store?",
    answer:
      "No. Request Desk runs entirely on its own servers and only calls the Shopify API to fetch data for your support team — it never touches your storefront or checkout.",
  },
  {
    question: "What if I disconnect the app?",
    answer:
      "You can disconnect at any time from your workspace settings. In line with Shopify's requirements, store data is deleted from Request Desk shortly after uninstall.",
  },
];

export default function ShopifyPage() {
  return (
    <>
      <section className="pt-20 pb-4 sm:pt-28">
        <Container className="flex flex-col items-center text-center">
          <span className="rounded-full border border-border bg-surface px-4 py-1.5 text-[13px] font-medium text-muted">
            Shopify integration
          </span>
          <h1 className="mt-6 w-full max-w-2xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Your Shopify orders, right inside the ticket.
          </h1>
          <p className="mt-5 w-full max-w-xl text-balance text-lg text-muted">
            Connect your store once. From then on, every task shows the
            customer and order it&rsquo;s about — no switching to the Shopify
            admin to look anything up.
          </p>
          <div className="mt-8">
            <ButtonLink href={APP_SIGNUP_URL} className="px-7 py-3 text-base">
              Connect your store
            </ButtonLink>
          </div>

          <div className="mt-16 w-full">
            <Reveal>
              <HeroMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 sm:grid-cols-2 sm:items-start sm:gap-16">
          <Reveal>
            <span className="text-[13px] font-semibold text-accent">
              How the connection works
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              One OAuth install, no API keys to manage.
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                "Click “Connect your store” and approve the install screen in Shopify.",
                "Request Desk creates your workspace and signs you in — no separate password to set up.",
                "Invite your team; every teammate who accepts sees the same connected store.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4 text-[15px] text-foreground/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-[12px] font-semibold text-muted">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <ScopeCard />
          </Reveal>
        </Container>
      </section>

      <Faq items={shopifyFaqs} title="Shopify integration FAQ" />

      <section className="pb-20 sm:pb-28">
        <Container className="text-center">
          <ButtonLink href={APP_SIGNUP_URL} className="px-7 py-3 text-base">
            Connect your store
          </ButtonLink>
          <p className="mt-4 text-[13px] text-muted">
            {SITE.name} is an independent application and is not affiliated
            with or endorsed by Shopify Inc.
          </p>
        </Container>
      </section>
    </>
  );
}
