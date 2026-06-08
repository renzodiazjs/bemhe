import {
  ShoppingBag,
  MessageCircle,
  GraduationCap,
  CalendarCheck,
  Check,
} from "lucide-react";
import Image from "next/image";
import { pack, packWhatsapp } from "@/lib/pack-config";
import { BemheMark } from "@/components/bemhe-mark";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const icons = { ShoppingBag, MessageCircle, GraduationCap, CalendarCheck } as const;

export default function Home() {
  return (
    <>
      <PackHeader />
      <main className="flex-1">
        <Hero />
        <Problema />
        <Hace />
        <SemanaMuestra />
        <Planes />
        <Riesgo />
        <CierreCta />
      </main>
      <PackFooter />
    </>
  );
}

function PackHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="/" className="flex items-center">
          <BemheMark className="h-10 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {pack.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-base font-medium text-ink/75 transition-colors after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-brand after:transition-[width] after:duration-300 hover:text-brand hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={packWhatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full bg-accent px-5 py-2.5 font-semibold text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-md"
        >
          <span className="inline-flex items-center gap-2">
            <MessageCircle className="size-4" aria-hidden /> Escribime
          </span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const { hero } = pack;
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-[28rem]"
        style={{
          background:
            "radial-gradient(50% 55% at 28% 0%, rgba(115,200,169,0.26), transparent 70%), radial-gradient(45% 50% at 92% 4%, rgba(225,184,102,0.18), transparent 72%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">{hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading text-4xl font-semibold leading-[1.05] text-balance text-ink md:text-6xl">
              {hero.title} <span className="italic text-brand">{hero.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/75 lg:mx-0">{hero.subtitle}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
              <a
                href={packWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-paper shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[var(--shadow-lift)]"
              >
                <MessageCircle className="size-5 transition-transform duration-200 group-hover:scale-110" aria-hidden /> {hero.cta}
              </a>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-muted lg:justify-start">
                {hero.trust.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <Check className="size-4 text-accent" aria-hidden /> {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

/** Cluster de piezas reales flotando + notificación de pedido. Muestra el producto en el hero. */
function HeroVisual() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-sm sm:h-[430px] sm:max-w-md">
      <div className="absolute left-0 top-12 w-32 -rotate-6 sm:w-40">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-paper shadow-[var(--shadow-card)]">
          <Image src="/muestra/EstadoW-Producto01-Lunes.png" alt="Ejemplo de post de producto" fill sizes="160px" className="object-cover" />
        </div>
      </div>
      <div className="absolute right-0 top-8 w-32 rotate-6 sm:w-40">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-paper shadow-[var(--shadow-card)]">
          <Image src="/muestra/Carrusel01-.png" alt="Ejemplo de carrusel educativo" fill sizes="160px" className="object-cover" />
        </div>
      </div>
      <div className="absolute left-1/2 top-0 z-20 w-36 -translate-x-1/2 rotate-1 sm:w-44">
        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-line bg-paper shadow-[var(--shadow-lift)]">
          <Image src="/muestra/Historia-Producto01-Lunes.png" alt="Ejemplo de historia" fill sizes="176px" className="object-cover" />
        </div>
      </div>
      <div className="animate-float absolute bottom-2 left-1 z-30 flex items-center gap-2 rounded-2xl border border-line bg-paper px-3.5 py-2 shadow-[var(--shadow-lift)] sm:bottom-6">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-whatsapp opacity-60" />
          <span className="relative inline-flex size-2.5 rounded-full bg-whatsapp" />
        </span>
        <span className="text-sm font-semibold text-ink">Nuevo pedido</span>
      </div>
    </div>
  );
}

function Problema() {
  const { problema } = pack;
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-4xl px-5 py-24 md:py-28">
        <Reveal>
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-accent">{problema.eyebrow}</p>
          <h2 className="font-heading text-3xl font-medium leading-[1.15] text-balance text-ink md:text-[2.7rem]">
            {problema.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl">{problema.body}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Hace() {
  const { hace } = pack;
  return (
    <section className="border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal>
          <SectionHeading eyebrow={hace.eyebrow} title={hace.title} align="center" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hace.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-line bg-paper p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SemanaMuestra() {
  const { muestra } = pack;
  return (
    <section id="muestra" className="scroll-mt-24 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={muestra.eyebrow}
            title={muestra.title}
            subtitle={muestra.subtitle}
            align="center"
          />
        </Reveal>
        <div className="mt-12 flex flex-col gap-12">
          {muestra.semana.map((dia, i) => (
            <Reveal key={dia.dia} delay={i * 60}>
              <div>
                <div className="mb-4 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                  <h3 className="font-heading text-xl font-semibold text-ink">{dia.dia}</h3>
                  <p className="text-sm text-muted">{dia.foco}</p>
                </div>
                <div className="scroll-strip -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
                  {dia.piezas.map((pieza) => (
                    <div
                      key={pieza.src}
                      className={`group relative h-72 shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-paper shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] md:h-80 ${
                        pieza.formato === "historia" ? "aspect-[9/16]" : "aspect-[3/4]"
                      }`}
                    >
                      <Image
                        src={pieza.src}
                        alt={pieza.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 18rem"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">{muestra.nota}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Planes() {
  const { planes } = pack;
  return (
    <section id="planes" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <SectionHeading eyebrow={planes.eyebrow} title={planes.title} subtitle={planes.subtitle} align="center" />
        </Reveal>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {planes.items.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-[1.75rem] p-7 md:p-8 ${
                  plan.featured
                    ? "bg-deep border border-ink-deep/50 text-paper shadow-[var(--shadow-lift)] ring-1 ring-amber/30 lg:-translate-y-3"
                    : "border border-line bg-paper text-ink shadow-[var(--shadow-card)]"
                }`}
              >
                {plan.featured && plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                    {plan.badge}
                  </span>
                )}
                <h3 className={`font-heading text-xl font-semibold ${plan.featured ? "text-paper" : "text-ink"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.featured ? "text-paper/70" : "text-muted"}`}>{plan.desc}</p>
                {plan.featured && (
                  <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-paper/10 px-3 py-1 text-xs font-semibold text-amber">
                    Mejor relación precio–resultado
                  </span>
                )}
                <div className="mt-5 flex items-end gap-1">
                  <span className={`font-heading text-4xl font-semibold tabular-nums ${plan.featured ? "text-paper" : "text-ink"}`}>
                    {plan.price}
                  </span>
                  <span className={`pb-1.5 text-sm ${plan.featured ? "text-paper/70" : "text-muted"}`}>{plan.period}</span>
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-[15px] ${plan.featured ? "text-paper/90" : "text-ink/80"}`}
                    >
                      <span
                        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                          plan.featured ? "bg-paper/15 text-paper" : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Check className="size-3.5" aria-hidden />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={packWhatsapp(`Hola! Me interesa el plan ${plan.name} del Pack Tienda.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.featured ? "bg-paper text-ink hover:bg-paper/90" : "bg-accent text-paper hover:bg-accent-dark"
                  }`}
                >
                  <MessageCircle className="size-5" aria-hidden /> {plan.featured ? "Lo necesito" : "Lo quiero"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-deep mt-8 rounded-[1.75rem] border border-ink-deep/50 px-7 py-8 text-center text-paper shadow-[var(--shadow-lift)]">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
              Un <span className="font-semibold text-paper">community manager</span> propio te sale varias veces más —y encima
              lo tenés que dirigir vos. Con bemhe tenés el resultado, sin contratar a nadie:{" "}
              <span className="font-semibold text-brand-soft tabular-nums">desde $80.000.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Riesgo() {
  const { riesgo } = pack;
  return (
    <section className="border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center">
        <Reveal>
          <p className="mb-6 text-sm font-bold uppercase tracking-wider text-accent">{riesgo.eyebrow}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {riesgo.items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                <Check className="size-4 text-accent" aria-hidden /> {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CierreCta() {
  const { ctaFinal } = pack;
  return (
    <section className="bg-deep relative overflow-hidden border-t border-ink-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 50% at 82% 12%, rgba(225,184,102,0.18), transparent 70%), radial-gradient(45% 55% at 12% 92%, rgba(115,200,169,0.16), transparent 72%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-paper">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold leading-tight md:text-5xl">{ctaFinal.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-paper/85">{ctaFinal.subtitle}</p>
          <a
            href={packWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-paper px-8 py-4 text-lg font-semibold text-ink shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper/90"
          >
            <MessageCircle className="size-5 transition-transform duration-200 group-hover:scale-110" aria-hidden /> {ctaFinal.cta}
          </a>
          <p className="mt-5 text-sm text-paper/70">{ctaFinal.reassure}</p>
        </Reveal>
      </div>
    </section>
  );
}

function PackFooter() {
  return (
    <footer className="border-t border-line bg-paper-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-12 text-sm text-muted sm:flex-row">
        <div className="flex items-center">
          <BemheMark className="h-8 w-auto" />
        </div>
        <p>© {new Date().getFullYear()} {pack.brand} · Contenido para petshops</p>
        <a
          href={packWhatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand/25 px-5 py-2.5 font-semibold text-brand transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-paper"
        >
          <MessageCircle className="size-4 transition-transform duration-200 group-hover:scale-110" aria-hidden />
          Escribime por WhatsApp
        </a>
      </div>
    </footer>
  );
}
