import { Check, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Confianza() {
  const { confianza, founderName } = site;
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow={confianza.eyebrow} title={confianza.title} align="center" />

        {/* Tarjeta del fundador — la presencia humana es el arma anti-estafa */}
        <Reveal className="mx-auto mt-12 block max-w-3xl">
          <div className="bg-deep relative overflow-hidden rounded-[2rem] border border-ink-deep/50 p-8 text-paper shadow-[var(--shadow-lift)] md:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border border-paper/10" />
            <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 size-40 rounded-full border border-paper/10" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="grid size-20 shrink-0 place-items-center rounded-full bg-paper/15 font-heading text-3xl font-semibold ring-4 ring-paper/10">
                {founderName.charAt(0)}
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold">{confianza.founder.title}</h3>
                <p className="mt-2 leading-relaxed text-paper/85">
                  Soy {founderName}. {confianza.founder.text}
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-paper px-5 py-2.5 font-semibold text-ink shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper/90"
                >
                  <MessageCircle className="size-5" aria-hidden />
                  {confianza.founder.cta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Testimonios reales: se renderizan solo cuando existan (T-03 / B-04).
            Hasta entonces no se muestra nada — nunca prueba social falsa. */}
        {confianza.testimonios.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {confianza.testimonios.map((t, i) => (
              <Reveal key={i} delay={i * 100} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-paper p-6 shadow-[var(--shadow-card)]">
                  <blockquote className="flex-1 font-heading text-lg leading-snug text-brand">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-sm text-muted">
                    <span>
                      <span className="font-semibold text-ink">{t.name}</span> — {t.shop}, {t.city}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}

        <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {confianza.cues.map((cue) => (
            <li key={cue} className="flex items-center gap-2 text-sm font-semibold text-brand">
              <Check className="size-4 shrink-0" aria-hidden />
              {cue}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
