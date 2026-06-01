import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Problema } from "@/components/problema";
import { ComoFunciona } from "@/components/como-funciona";
// TODO(T-07): reactivar cuando haya capturas con datos DEMO (las reales tienen PII, están gitignoreadas).
// import { PorDentro } from "@/components/por-dentro";
import { Comparativa } from "@/components/comparativa";
import { Confianza } from "@/components/confianza";
import { Precio } from "@/components/precio";
import { Faq } from "@/components/faq";
import { CtaFinal } from "@/components/cta-final";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problema />
        <ComoFunciona />
        {/* <PorDentro /> oculto hasta tener capturas DEMO (T-07) */}
        <Comparativa />
        <Confianza />
        <Precio />
        <Faq />
        <CtaFinal />
      </main>
      <SiteFooter />
    </>
  );
}
