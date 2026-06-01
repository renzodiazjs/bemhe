import { Plus } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Faq() {
  const { faq } = site;
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} align="center" />

        <div className="mt-10 flex flex-col gap-3">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60} className="block">
              <details className="group rounded-2xl border border-line bg-paper px-6 shadow-sm transition-shadow duration-300 open:shadow-[var(--shadow-card)] [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-heading text-lg font-semibold text-brand">
                  {item.q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                    <Plus className="size-4 transition-transform duration-300 group-open:rotate-45" aria-hidden />
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-ink/75">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-muted">
          ¿Te quedó otra duda?{" "}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-semibold text-brand underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Escribime por WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
