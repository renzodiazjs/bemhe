import Image from "next/image";
import { site } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function PorDentro() {
  const { porDentro } = site;
  return (
    <section className="border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow={porDentro.eyebrow}
          title={porDentro.title}
          subtitle={porDentro.subtitle}
          align="center"
        />

        <div className="mt-14 flex flex-col gap-16 md:mt-20 md:gap-24">
          {porDentro.screens.map((screen, i) => (
            <Reveal key={screen.src}>
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                {/* Texto */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                    {screen.tag}
                  </span>
                  <p className="mt-4 text-lg leading-relaxed text-ink/80 md:text-xl">
                    {screen.caption}
                  </p>
                </div>

                {/* Captura enmarcada como ventana de navegador */}
                <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[var(--shadow-lift)]">
                  <div className="flex items-center gap-1.5 border-b border-line bg-sand/60 px-4 py-3">
                    <span className="size-2.5 rounded-full bg-line" />
                    <span className="size-2.5 rounded-full bg-line" />
                    <span className="size-2.5 rounded-full bg-line" />
                  </div>
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.w}
                    height={screen.h}
                    className="h-auto w-full"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
