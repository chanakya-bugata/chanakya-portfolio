import Link from "next/link";

import { footerLinks } from "@/lib/site-data";

type SiteFooterProps = {
  inverted?: boolean;
  brand?: string;
  note?: string;
};

export function SiteFooter({
  inverted = false,
  brand = "Chanakya Bugata",
  note = "© 2026 Chanakya Bugata. Built and shipped...",
}: SiteFooterProps) {
  const wrapper = inverted
    ? "bg-[var(--surface-strong)] text-[#efe5db]"
    : "border-t border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]";

  const linkColor = inverted ? "text-[#8f8377] hover:text-white" : "text-[var(--muted)] hover:text-[var(--foreground)]";
  const noteColor = inverted ? "text-[#8f8377]" : "text-[var(--muted)]";

  return (
    <footer className={wrapper}>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p className="font-display text-2xl font-bold tracking-[-0.04em]">
          {brand}
        </p>

        <div className={`flex flex-wrap gap-8 font-mono text-[0.8rem] uppercase tracking-[0.22em] ${noteColor}`}>
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`transition-colors ${linkColor}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className={`font-mono text-[0.76rem] uppercase tracking-[0.22em] ${noteColor}`}>
          {note}
        </p>
      </div>
    </footer>
  );
}

