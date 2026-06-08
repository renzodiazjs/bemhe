export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-semibold leading-tight text-balance text-ink md:text-4xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-lg leading-relaxed text-ink/75 ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
