import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SubscriptionPreview } from "./subscription-preview";

export const metadata: Metadata = {
  title: "Subscription tab preview",
  robots: { index: false, follow: false },
};

export default function Test4Page() {
  return (
    <section className="px-6 py-12 sm:px-8 sm:py-16">
      <Container>
        <div className="mb-8 max-w-2xl">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Admin Panel → Subscription tab
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Design preview of the owner-only billing tab from the Shopify Connect Playbook, in the
            request-desk app&apos;s own styles. Use the switches to see each provider, status and
            the email-limit state.
          </p>
        </div>
        <SubscriptionPreview />
      </Container>
    </section>
  );
}
