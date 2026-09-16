import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/85 shadow-[0_1px_0_rgba(255,255,255,0.15)_inset]",
  secondary: "bg-surface text-foreground hover:bg-border/70",
  ghost: "text-foreground hover:bg-surface",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
