import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund Policy for ${SITE.name} subscriptions.`,
  alternates: { canonical: "/legal/refund" },
  robots: { index: true, follow: true },
};

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" updated="[Date to be set at launch]">
      <LegalSection title="1. Free plan">
        <p>
          The Free plan requires no payment, so there is nothing to refund.
        </p>
      </LegalSection>

      <LegalSection title="2. Monthly subscriptions">
        <p>
          Paid plans are billed monthly in advance. You can cancel at any
          time from your workspace settings; your plan stays active until
          the end of the period you&rsquo;ve already paid for, and you
          won&rsquo;t be charged again after that.
        </p>
      </LegalSection>

      <LegalSection title="3. Requesting a refund">
        <p>
          If you believe you were charged in error, or cancel within{" "}
          <strong className="text-foreground">[X days, e.g. 7]</strong> of a
          charge, contact{" "}
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="text-foreground underline underline-offset-2"
          >
            {SITE.supportEmail}
          </a>{" "}
          and we&rsquo;ll review it. Approved refunds are returned to the
          original
          payment method.
        </p>
      </LegalSection>

      <LegalSection title="4. Subscriptions through Shopify Billing">
        <p>
          If your subscription was purchased through the Shopify App Store,
          refunds are processed according to{" "}
          <strong className="text-foreground">
            Shopify&rsquo;s billing terms
          </strong>{" "}
          in addition to this policy — contact us and we&rsquo;ll coordinate
          with
          Shopify where needed.
        </p>
      </LegalSection>

      <LegalSection title="5. Contact">
        <p>
          Billing questions:{" "}
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="text-foreground underline underline-offset-2"
          >
            {SITE.supportEmail}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
