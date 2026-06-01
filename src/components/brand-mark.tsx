/** Marca de Patitas: patita (blip) dentro de un círculo-radar, con anillo que late opcional.
    Fusiona el nombre (patita) con el producto (radar). Usada en header y footer. */
export function BrandMark({
  className = "",
  ping = false,
}: {
  className?: string;
  ping?: boolean;
}) {
  return (
    <span className={`relative grid place-items-center rounded-full bg-brand ${className}`}>
      <svg viewBox="0 0 32 32" className="size-[55%] fill-paper" aria-hidden>
        <ellipse cx="16" cy="20" rx="5" ry="4.2" />
        <circle cx="9.8" cy="15.5" r="2" />
        <circle cx="13.7" cy="11.8" r="2.2" />
        <circle cx="18.3" cy="11.8" r="2.2" />
        <circle cx="22.2" cy="15.5" r="2" />
      </svg>
      {ping && (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full ring-2 ring-brand/30 [animation:radarPing_2.6s_ease-out_infinite]"
        />
      )}
    </span>
  );
}
