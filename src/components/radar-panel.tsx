const atRisk = [
  { initials: "MJ", name: "María José", days: 34, product: "Royal Canin 15kg" },
  { initials: "RB", name: "Rubén B.", days: 28, product: "Pro Plan Adult 15kg" },
];

/** Mockup del producto: el Radar de Recurrentes. Pieza visual decorativa. */
export function RadarPanel() {
  return (
    <div className="relative animate-float">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_center,var(--color-sand),transparent_70%)]"
      />
      <div className="rounded-[2rem] border border-line bg-paper p-5 shadow-[var(--shadow-lift)] sm:p-6">
        <div className="flex items-center justify-between">
          <span className="font-heading text-lg font-semibold text-brand">Radar de Recurrentes</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="size-2 rounded-full bg-brand [animation:radarPing_2.6s_ease-out_infinite]" />
            En vivo
          </span>
        </div>

        {/* Scope del radar */}
        <div className="relative mx-auto my-6 grid aspect-square w-full max-w-[260px] place-items-center">
          <div className="absolute size-full rounded-full border border-brand/15" />
          <div className="absolute size-[66%] rounded-full border border-brand/15" />
          <div className="absolute size-[33%] rounded-full border border-brand/15" />
          {/* barrido */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, color-mix(in srgb, var(--color-brand) 24%, transparent) 55deg, transparent 95deg)",
              animation: "sweep 4.5s linear infinite",
            }}
          />
          {/* blips */}
          <span className="absolute left-[62%] top-[34%]">
            <span className="block size-2.5 rounded-full bg-accent" />
            <span className="absolute inset-0 rounded-full bg-accent/60 [animation:radarPing_2.6s_ease-out_infinite]" />
          </span>
          <span className="absolute left-[33%] top-[60%]">
            <span className="block size-2 rounded-full bg-accent" />
            <span className="absolute inset-0 rounded-full bg-accent/60 [animation:radarPing_2.6s_ease-out_infinite_0.9s]" />
          </span>
          {/* centro */}
          <span className="absolute size-3 rounded-full bg-brand shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-brand)_18%,transparent)]" />
        </div>

        {/* Clientes en riesgo */}
        <div className="space-y-2">
          {atRisk.map((c) => (
            <div key={c.name} className="flex items-center gap-3 rounded-2xl border border-line bg-sand/70 p-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 font-heading text-sm font-bold text-brand">
                {c.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-ink">{c.name}</p>
                <p className="truncate text-sm text-muted">
                  Hace {c.days} días sin comprar{" "}
                  <span className="font-semibold text-ink/80">{c.product}</span>
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-sm font-semibold text-paper">
                Avisar
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
