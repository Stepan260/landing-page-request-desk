import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    number: "01",
    title: "Connect Shopify",
    description:
      "Install Request Desk from your Shopify admin. One click, no API keys to copy and paste.",
  },
  {
    number: "02",
    title: "Emails become tasks",
    description:
      "Point your support address at Request Desk. Every inbound email creates a task in the right project automatically.",
  },
  {
    number: "03",
    title: "Resolve with context",
    description:
      "Open a task and see the customer's orders right there. Tag it, comment, reassign — every change is logged.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From inbox to resolved, in three steps.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="relative pl-0">
                <span className="text-5xl font-semibold text-border">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
