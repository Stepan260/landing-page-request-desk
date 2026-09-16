export const SITE = {
  name: "Request Desk",
  domain: "requestdeskhq.com",
  url: "https://www.requestdeskhq.com",
  // The app./marketing domain split from the playbook hasn't shipped yet —
  // app.requestdeskhq.com doesn't resolve, and the real app is currently
  // served at the root domain. Point here until that split goes live, then
  // swap to "https://app.requestdeskhq.com".
  appUrl: "https://www.requestdeskhq.com",
  tagline: "The helpdesk that lives inside Shopify.",
  description:
    "Request Desk turns support emails and Shopify orders into tasks your team can't lose track of — customer and order lookup built right into every task.",
  supportEmail: "support@mg.requestdeskhq.com",
  twitter: "@requestdeskhq",
};

export const APP_SIGNUP_URL = `${SITE.appUrl}/signup`;
export const APP_LOGIN_URL = `${SITE.appUrl}/login`;

export const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/shopify", label: "Shopify" },
  { href: "/pricing", label: "Pricing" },
] as const;

export type Plan = {
  id: string;
  name: string;
  price: number;
  cadence: "mo";
  description: string;
  emailTaskLimit: string;
  seats: string;
  featured?: boolean;
  features: string[];
};

// Illustrative pricing — mirror whatever Products/Prices are actually created
// in the Stripe dashboard before this page goes live.
export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    cadence: "mo",
    description: "Try it with a small team on a single workspace.",
    emailTaskLimit: "50 email-to-task conversions / mo",
    seats: "Up to 2 seats",
    features: [
      "1 workspace, 1 project",
      "Shopify customer & order lookup",
      "Tags, comments, task history",
      "Email-to-task via Mailgun",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    cadence: "mo",
    description: "For growing support teams running on Shopify.",
    emailTaskLimit: "1,000 email-to-task conversions / mo",
    seats: "Up to 10 seats",
    featured: true,
    features: [
      "Unlimited projects",
      "Shopify customer & order lookup",
      "Real-time task updates across the team",
      "Role-based access (Owner / Team member)",
      "Priority email support",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: 79,
    cadence: "mo",
    description: "For multi-brand stores and larger support desks.",
    emailTaskLimit: "10,000 email-to-task conversions / mo",
    seats: "Unlimited seats",
    features: [
      "Everything in Pro",
      "Multiple workspaces",
      "Full audit log & activity export",
      "Onboarding assistance",
      "Priority support with SLA",
    ],
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQS: FaqItem[] = [
  {
    question: "Does Request Desk replace Shopify's own inbox?",
    answer:
      "No — it sits alongside it. Support emails and Shopify context flow into Request Desk as tasks, so your team works from one queue instead of switching between Gmail, the Shopify admin, and a spreadsheet.",
  },
  {
    question: "What Shopify data does it access?",
    answer:
      "Only what's needed to look up a customer or order from inside a task: read access to customers, orders, and products. Request Desk never creates, edits, or deletes anything in your store.",
  },
  {
    question: "How does email-to-task work?",
    answer:
      "Every project gets a dedicated inbound address. Emails sent there become tasks automatically, tagged to the right project, with the original message preserved as the first comment.",
  },
  {
    question: "Can I invite my team?",
    answer:
      "Yes. Workspaces support an Owner and any number of Team members, each scoped to the projects they need — invitations go out by email with a secure, time-limited link.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Every workspace is isolated at the database level, sessions use short-lived tokens with an httpOnly refresh cookie, and we support the GDPR data-request and deletion webhooks Shopify requires of every public app.",
  },
  {
    question: "What happens if I go over my plan's email-to-task limit?",
    answer:
      "Nothing gets silently dropped. The task is still created, and the workspace owner is notified to upgrade — a customer's email to your support team is never the place to lose data.",
  },
];
