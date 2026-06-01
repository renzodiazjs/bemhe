import { Check, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Precio() {
  const { precio } = site;
  return (
    <section id="precio" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow={precio.eyebrow}
          title={precio.title}
          subtitle={precio.subtitle}
          align="center"
        />

        <Reveal className="mx-auto mt-12 block max-w-md">
          <div className="bg-deep relative overflow-hidden rounded-[2rem] border border-ink-deep/50 p-8 text-paper shadow-[var(--shadow-lift)] md:p-10">
            <span className="inline-flex rounded-full bg-paper/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-paper">
              Plan único
            </span>

            <div className="mt-4 flex items-end gap-1">
              <span className="font-heading text-6xl font-semibold text-paper">{precio.amount}</span>
              <span className="pb-2 text-lg font-medium text-paper/70">{precio.period}</span>
            </div>

            <ul className="mt-7 flex flex-col gap-3">
              {precio.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-paper/90">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-paper/15 text-paper">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-paper px-7 py-3.5 text-lg font-semibold text-ink shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper/90 hover:shadow-[var(--shadow-lift)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              <MessageCircle className="size-5" aria-hidden />
              {precio.cta}
            </a>

            <p className="mt-4 text-center text-sm text-paper/70">{precio.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
