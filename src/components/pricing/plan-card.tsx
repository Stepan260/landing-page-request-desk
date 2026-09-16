import { ButtonLink } from "@/components/button-link";
import { APP_SIGNUP_URL, type Plan } from "@/lib/site";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 ${
        plan.featured
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-white"
      }`}
    >
      {plan.featured && (
        <span className="mb-4 inline-flex w-fit rounded-full bg-background/15 px-3 py-1 text-[12px] font-medium">
          Most popular
        </span>
      )}

      <h3
        className={`text-[15px] font-semibold ${
          plan.featured ? "text-background" : "text-foreground"
        }`}
      >
        {plan.name}
      </h3>

      <p className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight">
          {plan.price === 0 ? "Free" : `$${plan.price}`}
        </span>
        {plan.price !== 0 && (
          <span
            className={`text-[14px] ${plan.featured ? "text-background/70" : "text-muted"}`}
          >
            /{plan.cadence}
          </span>
        )}
      </p>

      <p
        className={`mt-3 text-[14px] leading-relaxed ${
          plan.featured ? "text-background/75" : "text-muted"
        }`}
      >
        {plan.description}
      </p>

      <div
        className={`mt-6 space-y-1.5 border-t pt-5 text-[13px] ${
          plan.featured ? "border-background/20 text-background/80" : "border-border text-muted"
        }`}
      >
        <p>{plan.seats}</p>
        <p>{plan.emailTaskLimit}</p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-2.5 text-[14px] ${
              plan.featured ? "text-background/90" : "text-foreground/90"
            }`}
          >
            <svg
              viewBox="0 0 20 20"
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                plan.featured ? "text-background" : "text-accent"
              }`}
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
            {feature}
          </li>
        ))}
      </ul>

      <ButtonLink
        href={APP_SIGNUP_URL}
        variant={plan.featured ? "secondary" : "primary"}
        className={`mt-8 w-full ${
          plan.featured ? "!bg-background !text-foreground" : ""
        }`}
      >
        {plan.price === 0 ? "Start for free" : `Choose ${plan.name}`}
      </ButtonLink>
    </div>
  );
}
