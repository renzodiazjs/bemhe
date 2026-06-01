import { Check, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site-config";
import { RadarPanel } from "@/components/radar-panel";

export function Hero() {
  const { hero } = site;
  const [line1, line2] = hero.title.split("\n");
  const [l2Before, l2After] = (line2 ?? "").split("cuido");

  return (
    <section className="relative overflow-hidden">
      {/* atmósfera cálida con profundidad */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 size-[40rem] rounded-full bg-[radial-gradient(circle,var(--color-sand),transparent_65%)]" />
        <div className="absolute -left-48 top-48 size-[32rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-brand)_9%,transparent),transparent_70%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        {/* Copy */}
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-1.5 text-sm font-semibold text-muted shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.04] text-ink sm:text-5xl md:text-6xl">
            {line1}
            <span className="mt-1 block text-brand">
              {l2Before}
              {l2After !== undefined && <em className="font-normal italic">cuido</em>}
              {l2After}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer overflow-hidden rounded-full bg-accent px-7 py-3.5 text-lg font-semibold text-paper shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[var(--shadow-lift)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span className="relative inline-flex items-center gap-2">
                <MessageCircle className="size-5" aria-hidden />
                {hero.ctaPrimary}
              </span>
            </a>
            <a
              href="#como-funciona"
              className="group cursor-pointer rounded-full px-5 py-3.5 text-lg font-semibold text-brand"
            >
              {hero.ctaSecondary}
              <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
            </a>
          </div>

          <ul className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-2">
            {hero.trust.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-sand/60 px-3.5 py-1.5 text-sm font-medium text-muted"
              >
                <Check className="size-4 shrink-0 text-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="animate-fade-up [animation-delay:160ms]">
          <RadarPanel />
        </div>
      </div>
    </section>
  );
}
