"use client";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const isNamaCartCta = ctaLabel === "NamaCart ->";

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
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[var(--accent)]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href={ctaHref}
          className={`rounded-2xl px-6 py-4 text-lg font-medium transition-transform hover:-translate-y-0.5 ${
            isNamaCartCta
              ? "font-display bg-[#2c211b] text-[#f7efe6] hover:bg-[#241a15]"
              : "bg-[var(--accent)] text-white"
          }`}
        >
          {isNamaCartCta ? (
            <>
              <span className="text-[#f4ede5]">
                Nama
              </span>
              <span className="text-[var(--accent)]">Cart</span> {"->"}
            </>
          ) : (
            ctaLabel
          )}
        </Link>
      </div>
    </header>
  );
}

