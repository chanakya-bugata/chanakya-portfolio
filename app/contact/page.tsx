import Link from "next/link";

import { BriefcaseBusiness, CalendarDays, Download, WalletCards } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="contact" ctaLabel="Connect" ctaHref="#inquiry" brand="Chanakya Bugata" />

      <main className="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 lg:px-10 lg:py-20 xl:grid-cols-[1.08fr_0.92fr]">
        <section>
          <h1 className="font-display text-6xl font-black tracking-[-0.06em] sm:text-7xl">
            Let&apos;s build <span className="text-[var(--accent)]">together.</span>
          </h1>
          <p className="mt-8 max-w-[520px] text-xl leading-9 text-[var(--muted)]">
            Whether you are looking to scale an engineering team, discuss
            technical architecture, or explore investment opportunities, I am
            open to meaningful conversations.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="group flex min-h-[340px] flex-col overflow-hidden rounded-[26px] border border-[var(--border)] bg-[linear-gradient(180deg,#fffaf4,#f7efe6)] p-8 shadow-[0_18px_40px_rgba(39,28,22,0.06)] transition-transform duration-200 hover:-translate-y-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3 text-[var(--accent)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/10">
                    <WalletCards className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-[1.95rem] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.2rem]">
                    For Investors
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--accent)]/20 bg-white/70 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                  Capital
                </span>
              </div>
              <p className="mt-7 max-w-[32ch] text-xl leading-9 text-[var(--muted)]">
                Explore thesis, traction, and structural models.
              </p>
              <div className="mt-auto space-y-3 pt-10">
                <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--accent)] px-6 py-4 text-xl font-medium text-white shadow-[0_12px_24px_rgba(229,119,29,0.22)] transition-colors hover:bg-[var(--accent-strong)]">
                  <CalendarDays className="h-4 w-4" />
                  Schedule Call
                </button>
                <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[var(--accent)]/30 bg-white/70 px-6 py-4 text-xl font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]">
                  <Download className="h-4 w-4" />
                  Pitch Deck
                </button>
              </div>
            </article>

            <article className="group flex min-h-[340px] flex-col overflow-hidden rounded-[26px] border border-[var(--border)] bg-[linear-gradient(180deg,#fbfbf7,#eef3ea)] p-8 shadow-[0_18px_40px_rgba(39,28,22,0.06)] transition-transform duration-200 hover:-translate-y-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3 text-[var(--forest)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--forest)]/20 bg-[var(--forest)]/10">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-[1.95rem] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.2rem]">
                    For Recruiters
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--forest)]/20 bg-white/70 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--forest)]">
                  Hiring
                </span>
              </div>
              <p className="mt-7 max-w-[32ch] text-xl leading-9 text-[var(--muted)]">
                Review technical depth and leadership history.
              </p>
              <div className="mt-auto space-y-3 pt-10">
                <Link
                  href="https://www.linkedin.com/in/chanakya-bugata/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#211b17] px-6 py-4 text-xl font-medium !text-[#f8f2ea] shadow-[0_12px_24px_rgba(39,28,22,0.16)] transition-colors hover:bg-[#17120f] hover:!text-white visited:!text-[#f8f2ea]"
                >
                  LinkedIn
                </Link>
                <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[var(--forest)]/35 bg-white/70 px-6 py-4 text-xl font-medium text-[var(--forest)] transition-colors hover:bg-[#e6efe8]">
                  Resume
                </button>
              </div>
            </article>
          </div>
        </section>
        <section id="inquiry" className="border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_0_0_1px_rgba(223,211,196,0.35)]">
          <div className="border-t-4 border-[var(--accent)] pt-10">
            <h2 className="font-display text-5xl font-bold tracking-[-0.05em]">
              Direct Inquiry
            </h2>

            <form className="mt-10 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    Full Name
                  </span>
                  <input
                    className="mt-3 w-full border border-[var(--border)] bg-[var(--background)] px-5 py-5 text-xl text-[var(--foreground)] outline-none"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    Email Address
                  </span>
                  <input
                    className="mt-3 w-full border border-[var(--border)] bg-[var(--background)] px-5 py-5 text-xl text-[var(--foreground)] outline-none"
                    placeholder="jane@example.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  I am a...
                </span>
                <select 
                  className="mt-3 w-full border border-[var(--border)] bg-[var(--background)] px-5 py-5 text-xl text-[var(--foreground)] outline-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Choose your role...</option>
                  <option>Investor looking to connect</option>
                  <option>Recruiter evaluating fit</option>
                  <option>Founder seeking collaboration</option>
                </select>
              </label>

              <label className="block">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  Message
                </span>
                <textarea
                  className="mt-3 h-[180px] w-full resize-none border border-[var(--border)] bg-[var(--background)] px-5 py-5 text-xl text-[var(--foreground)] outline-none"
                  placeholder="How can we align our goals?"
                />
              </label>

              <div className="flex justify-end border-t border-[var(--border)] pt-8">
                <button className="bg-[#211b17] px-10 py-5 text-2xl font-medium text-white">
                  Submit →
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter brand="Chanakya Bugata" note="© 2026 Chanakya Bugata. Built and shipped." />
    </div>
  );
}
