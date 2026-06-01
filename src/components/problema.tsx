import { Bell, Heart, TrendingDown } from "lucide-react";
import { site } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const icons = { TrendingDown, Bell, Heart } as const;

export function Problema() {
  const { problema } = site;
  return (
    <section className="relative border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionHeading eyebrow={problema.eyebrow} title={problema.title} />
          <p className="mt-6 text-xl leading-relaxed text-ink/80">{problema.body}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problema.points.map((point, i) => {
            const Icon = icons[point.icon];
            return (
              <Reveal key={point.title} delay={i * 100} className="h-full">
                <div className="group h-full rounded-3xl border border-line bg-paper p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/12 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper">
                    <Icon className="size-6" strokeWidth={1.9} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-brand">{point.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/75">{point.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
