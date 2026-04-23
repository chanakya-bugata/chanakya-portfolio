type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
}: PageIntroProps) {
  return (
    <section className="mx-auto max-w-[1180px] px-6 pb-10 pt-14 lg:px-10 lg:pb-14 lg:pt-18">
      {eyebrow ? (
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.24em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <div className="mt-4 flex flex-col gap-8 border-b border-[var(--border)] pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[760px]">
          <h1 className="font-display text-5xl font-black tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-[5.4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-[820px] text-xl leading-9 text-[var(--muted)]">
            {description}
          </p>
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </section>
  );
}

