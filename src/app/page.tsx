import {
  ShoppingBag,
  MessageCircle,
  GraduationCap,
  CalendarCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import { pack, packWhatsapp } from "@/lib/pack-config";
import { BrandMark } from "@/components/brand-mark";
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
        <Planes />
        <Riesgo />
        <CierreCta />
        <PatitasBand />
      </main>
      <PackFooter />
    </>
  );
}

function PackHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="/" className="flex items-center gap-2.5">
          <BrandMark className="size-8" ping />
          <span className="font-heading text-2xl font-semibold tracking-tight text-brand">{pack.brand}</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {pack.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-ink/75 transition-colors hover:text-brand"
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
        className="pointer-events-none absolute inset-x-0 -top-24 h-80"
        style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(37,99,235,0.13), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">{hero.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-heading text-4xl font-semibold leading-[1.05] text-ink md:text-6xl">
            {hero.title} <span className="text-brand">{hero.titleAccent}</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/75">{hero.subtitle}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href={packWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-paper shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[var(--shadow-lift)]"
            >
              <MessageCircle className="size-5" aria-hidden /> {hero.cta}
            </a>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-muted">
              {hero.trust.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="size-4 text-accent" aria-hidden /> {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Problema() {
  const { problema } = pack;
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal>
          <SectionHeading eyebrow={problema.eyebrow} title={problema.title} />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{problema.body}</p>
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
                <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-[var(--shadow-card)]">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
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
                    ? "bg-deep border border-ink-deep/50 text-paper shadow-[var(--shadow-lift)] lg:-translate-y-3"
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
                <div className="mt-5 flex items-end gap-1">
                  <span className={`font-heading text-4xl font-semibold ${plan.featured ? "text-paper" : "text-ink"}`}>
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
                  <MessageCircle className="size-5" aria-hidden /> Lo quiero
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-deep mt-8 rounded-[1.75rem] border border-ink-deep/50 px-7 py-8 text-center text-paper shadow-[var(--shadow-lift)]">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
              Comprado suelto, todo esto te saldría{" "}
              <span className="text-paper/55 line-through decoration-accent decoration-2">más de $330.000</span> al mes. En el
              pack mensual, <span className="font-semibold text-brand-soft">desde $80.000.</span>
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
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink shadow-[var(--shadow-card)]"
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
        className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
      >
        <div className="absolute inset-0 rounded-full border border-paper" />
        <div className="absolute inset-[16%] rounded-full border border-paper" />
        <div className="absolute inset-[33%] rounded-full border border-paper" />
        <div className="absolute inset-[46%] rounded-full border border-paper" />
      </div>
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
            <MessageCircle className="size-5" aria-hidden /> {ctaFinal.cta}
          </a>
          <p className="mt-5 text-sm text-paper/70">{ctaFinal.reassure}</p>
        </Reveal>
      </div>
    </section>
  );
}

function PatitasBand() {
  const { patitasLink } = pack;
  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-accent">{patitasLink.eyebrow}</p>
          <p className="mt-2 max-w-2xl text-lg text-ink/80">{patitasLink.text}</p>
        </div>
        <a
          href={patitasLink.href}
          className="group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-line bg-paper px-6 py-3 font-semibold text-brand transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-card)]"
        >
          {patitasLink.cta}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </section>
  );
}

function PackFooter() {
  return (
    <footer className="border-t border-line bg-paper-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-12 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2.5">
          <BrandMark className="size-7" />
          <span className="font-heading text-lg font-semibold text-brand">{pack.brand}</span>
        </div>
        <p>© {new Date().getFullYear()} {pack.brand} · Contenido para petshops</p>
        <a
          href={packWhatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer font-semibold text-brand transition-colors hover:text-accent"
        >
          Escribime por WhatsApp →
        </a>
      </div>
    </footer>
  );
}
