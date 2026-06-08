import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Problema } from "@/components/problema";
import { ComoFunciona } from "@/components/como-funciona";
// TODO(T-07): reactivar PorDentro cuando haya capturas con datos DEMO (las reales tienen PII).
import { Comparativa } from "@/components/comparativa";
import { Confianza } from "@/components/confianza";
import { Precio } from "@/components/precio";
import { Faq } from "@/components/faq";
import { CtaFinal } from "@/components/cta-final";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Patitas — Vos atendé tu local, yo cuido a tus clientes",
  description:
    "El radar que detecta a tu cliente recurrente cuando deja de comprar y te avisa a tiempo para retenerlo. Hecho en Argentina para dueños de petshop.",
};

export default function PatitasPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problema />
        <ComoFunciona />
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
