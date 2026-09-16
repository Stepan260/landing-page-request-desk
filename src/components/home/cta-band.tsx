import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { APP_SIGNUP_URL } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden="true"
              className="absolute -inset-x-20 -top-32 -z-0 h-[360px] rounded-full bg-gradient-to-br from-[#0071e3]/40 via-[#7c3aed]/30 to-transparent blur-3xl"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tight text-background sm:text-4xl">
                Stop losing customer emails in a shared inbox.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[16px] text-background/70">
                Set up your first project in under five minutes. Free plan
                included.
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink
                  href={APP_SIGNUP_URL}
                  className="!bg-background !text-foreground px-7 py-3 text-base hover:!bg-background/90"
                >
                  Start for free
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
