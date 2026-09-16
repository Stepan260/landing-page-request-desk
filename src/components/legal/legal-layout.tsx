import { type ReactNode } from "react";
import { Container } from "@/components/container";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-[14px] text-muted">Last updated: {updated}</p>

        <div className="prose-legal mt-12 space-y-8 text-[15px] leading-relaxed text-foreground/90">
          {children}
        </div>
      </Container>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-muted">{children}</div>
    </div>
  );
}
