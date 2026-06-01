import { Bell, Radar, Store } from "lucide-react";
import { site } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const icons = { Store, Radar, Bell } as const;

export function ComoFunciona() {
  const { comoFunciona } = site;
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow={comoFunciona.eyebrow}
          title={comoFunciona.title}
          subtitle={comoFunciona.subtitle}
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {comoFunciona.steps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <Reveal key={step.n} delay={i * 120} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-paper p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-7 font-heading text-[7rem] font-semibold leading-none text-brand/[0.06]"
                  >
                    {step.n}
                  </span>
                  <span className="relative grid size-14 place-items-center rounded-2xl bg-brand text-paper shadow-md">
                    <Icon className="size-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="relative mt-5 font-heading text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="relative mt-2 leading-relaxed text-ink/75">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
