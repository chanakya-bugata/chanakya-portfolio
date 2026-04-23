import Link from "next/link";

import { isBlogEnabled } from "@/lib/site-config";
import { navItems } from "@/lib/site-data";

type SiteHeaderProps = {
  current: string;
  ctaLabel?: string;
  ctaHref?: string;
  brand?: string;
};

export function SiteHeader({
  current,
  ctaLabel = "NamaCart ->",
  ctaHref = "/projects/namacart",
  brand = "Chanakya Bugata",
}: SiteHeaderProps) {
  const visibleNavItems = navItems.filter(
    (item) => item.key !== "blog" || isBlogEnabled,
  );

  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-display text-[2rem] font-bold tracking-[-0.04em]"
        >
          {brand}
        </Link>

        <nav className="hidden items-center gap-10 text-[1.05rem] text-[var(--muted)] md:flex">
          {visibleNavItems.map((item) => {
            const isActive = item.key === current;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative pb-2 transition-colors hover:text-[var(--accent)] ${
                  isActive ? "font-semibold text-[var(--accent)]" : ""
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[var(--accent)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href={ctaHref}
          className="rounded-2xl bg-[var(--accent)] px-6 py-4 text-lg font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}

