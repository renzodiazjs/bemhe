import { site, whatsappUrl } from "@/lib/site-config";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-12 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2.5">
          <BrandMark className="size-7" />
          <span className="font-heading text-lg font-semibold text-brand">{site.brand}</span>
        </div>

        <p>© {new Date().getFullYear()} Patitas</p>

        <a
          href={whatsappUrl()}
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
