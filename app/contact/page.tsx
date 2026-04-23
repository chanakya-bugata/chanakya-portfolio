import { BriefcaseBusiness, CalendarDays, Download, WalletCards } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="contact" ctaLabel="Connect" ctaHref="#inquiry" brand="Chanakya Bugata" />

      <main className="mx-auto grid max-w-[1180px] gap-10 px-6 py-14 lg:grid-cols-[0.86fr_1.14fr] lg:px-10 lg:py-20">
        <section>
          <h1 className="font-display text-6xl font-black tracking-[-0.06em] sm:text-7xl">
            Let&apos;s build <span className="text-[var(--accent)]">together.</span>
          </h1>
          <p className="mt-8 max-w-[520px] text-xl leading-9 text-[var(--muted)]">
            Whether you are looking to scale an engineering team, discuss
            technical architecture, or explore investment opportunities, I am
            open to meaningful conversations.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <article className="border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <WalletCards className="h-5 w-5" />
                <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-[var(--foreground)]">
                  For Investors
                </h2>
              </div>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Explore thesis, traction, and structural models.
              </p>
              <div className="mt-8 space-y-3">
                <button className="flex w-full items-center justify-center gap-3 bg-[var(--accent)] px-5 py-4 text-lg font-medium text-white">
                  <CalendarDays className="h-4 w-4" />
                  Schedule Call
                </button>
                <button className="flex w-full items-center justify-center gap-3 border border-[var(--accent)] px-5 py-4 text-lg font-medium text-[var(--accent)]">
                  <Download className="h-4 w-4" />
                  Pitch Deck
                </button>
              </div>
            </article>

            <article className="border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex items-center gap-3 text-[var(--forest)]">
                <BriefcaseBusiness className="h-5 w-5" />
                <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-[var(--foreground)]">
                  For Recruiters
                </h2>
              </div>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Review technical depth and leadership history.
              </p>
              <div className="mt-8 space-y-3">
                <button className="flex w-full items-center justify-center gap-3 bg-[#211b17] px-5 py-4 text-lg font-medium text-white">
                  LinkedIn
                </button>
                <button className="flex w-full items-center justify-center gap-3 border border-[var(--forest)] px-5 py-4 text-lg font-medium text-[var(--forest)]">
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
                    defaultValue="Jane Doe"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    Email Address
                  </span>
                  <input
                    className="mt-3 w-full border border-[var(--border)] bg-[var(--background)] px-5 py-5 text-xl text-[var(--foreground)] outline-none"
                    defaultValue="jane@example.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  I am a...
                </span>
                <select className="mt-3 w-full border border-[var(--border)] bg-[var(--background)] px-5 py-5 text-xl text-[var(--foreground)] outline-none">
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
                  defaultValue="How can we align our goals?"
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

      <SiteFooter brand="Chanakya Bugata" note="© 2024 Scholar Foundation. Built with heritage and code." />
    </div>
  );
}
