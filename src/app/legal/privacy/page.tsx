import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}, including how we handle data read from a connected Shopify store.`,
  alternates: { canonical: "/legal/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="[Date to be set at launch]">
      <p className="text-muted">
        This policy explains what data{" "}
        <strong className="text-foreground">
          [Legal company name, e.g. Request Desk, Inc.]
        </strong>{" "}
        collects through {SITE.name} (the &ldquo;Service&rdquo;), why, and
        how it&rsquo;s protected.
      </p>

      <LegalSection title="1. Data we collect">
        <p>Account data: name, email address, and password hash.</p>
        <p>
          Workspace data: tasks, comments, tags, and history you or your team
          create in the Service, including content of emails sent to a
          project&rsquo;s inbound address.
        </p>
        <p>
          Shopify data (only if you connect a store): customer name and
          email, order details, and product details — read-only, and only
          when displayed inside a task. See our{" "}
          <a href="/shopify" className="text-foreground underline underline-offset-2">
            Shopify integration page
          </a>{" "}
          for the exact scopes requested.
        </p>
      </LegalSection>

      <LegalSection title="2. How we use data">
        <p>
          To operate the Service (creating tasks, showing Shopify context,
          sending notifications), to provide support, to process payments,
          and to meet legal obligations.
        </p>
      </LegalSection>

      <LegalSection title="3. Data isolation">
        <p>
          Each workspace&rsquo;s data is isolated at the database level. Team
          members only ever see data belonging to workspaces they&rsquo;ve
          been invited to.
        </p>
      </LegalSection>

      <LegalSection title="4. Third parties we use">
        <p>
          Infrastructure and processing: [PostgreSQL hosting provider],
          Mailgun (inbound/outbound email), Shopify (only for connected
          stores), and a payment processor ([Stripe] and/or Shopify
          Billing) for paid plans. We do not sell personal data.
        </p>
      </LegalSection>

      <LegalSection title="5. GDPR and data subject requests">
        <p>
          If you are located in the EU/EEA/UK, you have rights to access,
          correct, or delete your personal data. For data connected through
          Shopify, we support Shopify&rsquo;s mandatory compliance webhooks:
          a customer&rsquo;s request for their data, a customer&rsquo;s
          request for deletion, and full store data deletion after an app is
          uninstalled.
        </p>
        <p>
          To exercise these rights directly, contact{" "}
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="text-foreground underline underline-offset-2"
          >
            {SITE.supportEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Data retention">
        <p>
          We retain workspace data for as long as the workspace is active.
          If a Shopify store disconnects the app, related store data is
          deleted within the timeframe required by Shopify (currently 48
          hours of a confirmed uninstall).
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          Access tokens are kept in memory on the client and never in
          persistent browser storage; session refresh uses an httpOnly
          cookie. Passwords are hashed, not stored in plain text.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to this policy">
        <p>
          We&rsquo;ll update the date at the top of this page when this policy
          changes and, for material changes, notify workspace owners by
          email.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          Privacy questions or data requests:{" "}
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
