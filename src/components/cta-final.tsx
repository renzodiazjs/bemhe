import { MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site-config";

export function CtaFinal() {
  const { ctaFinal } = site;
  return (
    <section className="bg-deep relative overflow-hidden border-t border-ink-deep">
      {/* ornamento: radar de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
      >
        <div className="absolute inset-0 rounded-full border border-paper" />
        <div className="absolute inset-[16%] rounded-full border border-paper" />
        <div className="absolute inset-[33%] rounded-full border border-paper" />
        <div className="absolute inset-[46%] rounded-full border border-paper" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center text-paper">
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">{ctaFinal.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-paper/85">{ctaFinal.subtitle}</p>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-9 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-paper px-8 py-4 text-lg font-semibold text-ink shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
        >
          <MessageCircle className="size-5" aria-hidden />
          {ctaFinal.cta}
        </a>

        <p className="mt-5 text-sm text-paper/70">{ctaFinal.reassure}</p>
      </div>
    </section>
  );
}
