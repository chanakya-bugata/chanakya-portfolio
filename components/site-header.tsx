"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const visibleNavItems = navItems.filter(
    (item) => item.key !== "blog" || isBlogEnabled,
  );
  const isNamaCartCta = ctaLabel === "NamaCart ->";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        <Link
          href="/"
          className="font-display relative z-50 text-[1.4rem] font-bold tracking-[-0.04em] sm:text-[1.8rem] md:text-[2rem]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {brand}
        </Link>

        {/* Desktop Nav */}
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

        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <Link
            href={ctaHref}
            className={`hidden rounded-2xl px-6 py-3.5 text-lg font-medium transition-transform hover:-translate-y-0.5 sm:flex ${
              isNamaCartCta
                ? "font-display bg-[#2c211b] text-[#f7efe6] hover:bg-[#241a15]"
                : "bg-[var(--accent)] text-white"
            }`}
          >
            {isNamaCartCta ? (
              <>
                <span className="text-[#f4ede5]">Nama</span>
                <span className="text-[var(--accent)]">Cart</span> {"->"}
              </>
            ) : (
              ctaLabel
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--background)] md:hidden"
          >
            <div className="flex h-full flex-col px-6 pt-24 pb-12">
              <nav className="flex flex-col gap-8">
                {visibleNavItems.map((item, index) => {
                  const isActive = item.key === current;
                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`font-display text-5xl font-bold tracking-tight transition-colors ${
                          isActive ? "text-[var(--accent)]" : "text-[var(--foreground)] active:text-[var(--accent)]"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-auto"
              >
                <div className="mb-6 h-px bg-[var(--border)]" />
                <Link
                  href={ctaHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex w-full items-center justify-center rounded-3xl py-6 text-2xl font-bold shadow-xl transition-transform active:scale-[0.98] ${
                    isNamaCartCta
                      ? "font-display bg-[#2c211b] text-[#f7efe6]"
                      : "bg-[var(--accent)] text-white"
                  }`}
                >
                  {isNamaCartCta ? (
                    <>
                      <span className="text-[#f4ede5]">Nama</span>
                      <span className="text-[var(--accent)]">Cart</span> {"->"}
                    </>
                  ) : (
                    ctaLabel
                  )}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

