import { site, whatsappUrl } from "@/lib/site-config";
import { BrandMark } from "@/components/brand-mark";
import { MessageCircle } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="/" className="flex items-center gap-2.5">
          <BrandMark className="size-8" ping />
          <span className="font-heading text-2xl font-semibold tracking-tight text-brand">{site.brand}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
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
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full bg-accent px-5 py-2.5 font-semibold text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <span className="inline-flex items-center gap-2">
            <MessageCircle className="size-4" aria-hidden />
            {site.hero.ctaShort}
          </span>
        </a>
      </div>
    </header>
  );
}
