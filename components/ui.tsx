import type { ReactNode } from "react";

export function SectionLabel({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="font-mono text-[0.74rem] uppercase tracking-[0.24em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-[720px] text-lg leading-8 text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Pill({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "forest";
}) {
  const styles =
    tone === "accent"
      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
      : tone === "forest"
        ? "border-[var(--forest)] bg-[var(--forest-soft)] text-[var(--forest)]"
        : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]";

  return (
    <span
      className={`inline-flex rounded-md border px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] ${styles}`}
    >
      {children}
    </span>
  );
}

export function MockFrame({
  title,
  subtitle,
  dark = false,
  accent = "accent",
  heightClass = "h-[320px]",
}: {
  title: string;
  subtitle: string;
  dark?: boolean;
  accent?: "accent" | "forest" | "blue";
  heightClass?: string;
}) {
  const accentClass =
    accent === "forest"
      ? "text-[var(--forest)]"
      : accent === "blue"
        ? "text-[#4b6ea8]"
        : "text-[var(--accent)]";

  return (
    <div
      className={`overflow-hidden rounded-[20px] border ${
        dark
          ? "border-white/8 bg-[#201a16]"
          : "border-[var(--border)] bg-[var(--surface)]"
      } ${heightClass}`}
    >
      <div
        className={`flex h-full items-center justify-center ${
          dark
            ? "bg-[radial-gradient(circle_at_top,#31261f,transparent_50%),linear-gradient(180deg,#1f1814,#181410)]"
            : "bg-[linear-gradient(180deg,#f5efe7,#fdfbf7)]"
        }`}
      >
        <div className="rounded-[18px] border border-[var(--border)] bg-white/70 px-10 py-14 text-center shadow-[0_16px_50px_rgba(39,28,22,0.08)]">
          <p className={`font-display text-5xl font-bold tracking-[-0.05em] ${accentClass}`}>
            {title}
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
