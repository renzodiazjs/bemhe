import { Fragment } from "react";
import { Check, X } from "lucide-react";
import { site } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Comparativa() {
  const { comparativa } = site;
  return (
    <section className="relative border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow={comparativa.eyebrow} title={comparativa.title} align="center" />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-[1.25fr_1fr_1fr]">
              {/* header */}
              <div className="bg-paper-deep px-5 py-5" />
              <div className="bg-paper-deep px-5 py-5 text-center font-heading text-base font-semibold text-muted sm:text-lg">
                Sin Patitas
              </div>
              <div className="bg-brand px-5 py-5 text-center font-heading text-base font-semibold text-paper sm:text-lg">
                Con Patitas
              </div>

              {/* rows */}
              {comparativa.rows.map((row) => (
                <Fragment key={row.dim}>
                  <div className="border-t border-line bg-paper px-5 py-4 text-sm font-semibold text-brand sm:text-base">
                    {row.dim}
                  </div>
                  <div className="flex items-start gap-2 border-t border-line bg-paper px-5 py-4 text-ink/65">
                    <X className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                    <span className="text-sm">{row.sin}</span>
                  </div>
                  <div className="flex items-start gap-2 border-t border-line bg-brand/[0.06] px-5 py-4 text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                    <span className="text-sm font-semibold">{row.con}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
