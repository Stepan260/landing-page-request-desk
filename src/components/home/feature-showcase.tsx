import { type ReactNode } from "react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import {
  EmailToTaskMockup,
  TaskHistoryMockup,
  WorkspaceMockup,
} from "@/components/home/feature-mockups";

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: ReactNode;
  reverse?: boolean;
};

const FEATURES: Feature[] = [
  {
    eyebrow: "Email-to-task",
    title: "Nothing sent to support gets missed.",
    description:
      "Give your project a dedicated inbound address. Every email that lands there becomes a task automatically — subject, body, and sender preserved as the first comment.",
    bullets: [
      "Works with the inbox you already give customers",
      "Per-workspace volume so one busy store never starves another",
      "Owners are notified if a plan's monthly limit is reached — tasks still get created",
    ],
    mockup: <EmailToTaskMockup />,
  },
  {
    eyebrow: "Tags, comments & history",
    title: "Full context, every time you open a task.",
    description:
      "Filter and sort by status, tag, or assignee. Every change — reassignment, comment, tag — is written to an audit log you can always look back on.",
    bullets: [
      "Workspace-scoped tags with live task counts",
      "Threaded comments per task",
      "A complete, timestamped history log",
    ],
    mockup: <TaskHistoryMockup />,
    reverse: true,
  },
  {
    eyebrow: "Workspaces & roles",
    title: "Bring your whole team in, safely.",
    description:
      "Invite teammates by email with a secure, time-limited link. Owners manage members and access; everyone else sees only what their role allows.",
    bullets: [
      "Owner / Team member roles out of the box",
      "Multiple projects per workspace",
      "Every workspace's data is isolated at the database level",
    ],
    mockup: <WorkspaceMockup />,
  },
];

export function FeatureShowcase() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built around how support teams actually work.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-24 sm:space-y-32">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`grid items-center gap-10 sm:grid-cols-2 sm:gap-16 ${
                feature.reverse ? "sm:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <span className="text-[13px] font-semibold text-accent">
                  {feature.eyebrow}
                </span>
                <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[14px] text-foreground/90"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        fill="none"
                      >
                        <path
                          d="M4 10.5 8 14l8-8"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={100}>{feature.mockup}</Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
