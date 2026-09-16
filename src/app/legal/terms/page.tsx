import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name}.`,
  alternates: { canonical: "/legal/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="[Date to be set at launch]">
      <p className="text-muted">
        These Terms of Service (&ldquo;Terms&rdquo;) govern access to and use
        of {SITE.name} (the &ldquo;Service&rdquo;), provided by{" "}
        <strong className="text-foreground">
          [Legal company name, e.g. Request Desk, Inc.]
        </strong>{" "}
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By creating an account or using
        the Service, you agree to these Terms.
      </p>

      <LegalSection title="1. The Service">
        <p>
          {SITE.name} lets a workspace owner and their invited team members
          manage support tasks, including tasks created from inbound email
          and tasks enriched with data read from a connected Shopify store.
        </p>
      </LegalSection>

      <LegalSection title="2. Accounts and workspaces">
        <p>
          You must provide accurate information to create an account. The
          person who creates a workspace is its Owner and is responsible for
          the team members they invite and the plan they choose. You are
          responsible for keeping your login credentials confidential.
        </p>
      </LegalSection>

      <LegalSection title="3. Acceptable use">
        <p>
          You agree not to use the Service to store or transmit unlawful
          content, to attempt to disrupt or reverse-engineer the Service, or
          to exceed the usage limits of your plan in bad faith. We may
          suspend accounts that violate this section.
        </p>
      </LegalSection>

      <LegalSection title="4. Shopify connection">
        <p>
          If you connect a Shopify store, you authorize {SITE.name} to read
          store data strictly as described on our{" "}
          <a href="/shopify" className="text-foreground underline underline-offset-2">
            Shopify integration page
          </a>
          . You can disconnect the store at any time from your workspace
          settings; doing so does not automatically delete previously
          created tasks.
        </p>
      </LegalSection>

      <LegalSection title="5. Plans, billing, and cancellation">
        <p>
          Paid plans are billed in advance on a recurring basis as described
          on our{" "}
          <a href="/pricing" className="text-foreground underline underline-offset-2">
            Pricing
          </a>{" "}
          page, through either [Stripe / Shopify Billing]. You may cancel at
          any time; access continues until the end of the current billing
          period. See our{" "}
          <a href="/legal/refund" className="text-foreground underline underline-offset-2">
            Refund Policy
          </a>{" "}
          for details on refunds.
        </p>
      </LegalSection>

      <LegalSection title="6. Data ownership">
        <p>
          You own the content of your tasks, comments, and tags. We process
          it only to provide the Service, as described in our{" "}
          <a href="/legal/privacy" className="text-foreground underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Service availability">
        <p>
          We aim for high availability but do not guarantee the Service will
          be uninterrupted or error-free. We may modify or discontinue
          features with reasonable notice where practical.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of liability">
        <p>
          To the maximum extent permitted by law, {SITE.name} is provided
          &ldquo;as is&rdquo; and we are not liable for indirect,
          incidental, or consequential damages arising from use of the
          Service.{" "}
          <span className="italic">
            [To be finalized with counsel before launch.]
          </span>
        </p>
      </LegalSection>

      <LegalSection title="9. Governing law">
        <p>
          These Terms are governed by the laws of{" "}
          <strong className="text-foreground">
            [Governing jurisdiction to be set]
          </strong>
          , without regard to conflict-of-law principles.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          Questions about these Terms can be sent to{" "}
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="text-foreground underline underline-offset-2"
          >
            {SITE.supportEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
