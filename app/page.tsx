import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Pill } from "@/components/ui";
import { homeStats, projects } from "@/lib/site-data";

export default function Home() {
  const featured = projects[0];
  const sideProjects = projects.slice(1, 3);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="about" />

      <main>
        <section className="mx-auto max-w-[1180px] px-6 pb-12 pt-14 lg:px-10 lg:pb-18 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-[640px]">
              <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                CS Student & NamaCart Founder
              </div>

              <h1 className="font-display mt-8 text-5xl leading-[0.95] font-black tracking-[-0.05em] text-[var(--foreground)] sm:text-6xl lg:text-[5.2rem]">
                Build a portfolio that{" "}
                <span className="text-[var(--accent)]">converts investors.</span>
              </h1>

              <p className="mt-8 max-w-[620px] text-xl leading-9 text-[var(--muted)]">
                I engineer sophisticated digital experiences bridging
                Indian heritage with modern technological precision. Founder of
                NamaCart.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-2xl bg-[var(--accent)] px-7 py-5 text-xl font-medium text-white transition-colors hover:bg-[var(--accent-strong)]"
                >
                  View Projects {"->"}
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-[var(--accent)] px-7 py-5 text-xl font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[460px]">
              <div className="absolute inset-x-4 top-4 h-full rounded-[22px] border border-[var(--border)] bg-[#f2e3d8]" />
              <div className="relative overflow-hidden rounded-[20px] border border-[#2f2822] bg-[#17141d] p-8 shadow-[0_20px_60px_rgba(39,28,22,0.14)]">
                <div className="flex aspect-square items-center justify-center rounded-[18px] border border-white/8 bg-[radial-gradient(circle_at_top,#2f2a34,transparent_55%),linear-gradient(180deg,#17141d,#131017)] text-center">
                  <div className="space-y-6">
                    <Image
                      src="/images/namacart-logo-light.svg"
                      alt="NamaCart logo"
                      width={260}
                      height={60}
                      className="mx-auto h-auto w-[220px] sm:w-[260px]"
                      priority
                    />
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#bbab9b]">
                      Founder Portrait Will Be Added Here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-18 border-y border-[var(--border)] py-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {homeStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-6 py-4 ${
                    index !== homeStats.length - 1
                      ? "xl:border-r xl:border-[var(--border)]"
                      : ""
                  }`}
                >
                  <p className="font-mono text-[0.78rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                    {stat.label}
                  </p>
                  <p
                    className={`font-display mt-3 text-2xl font-bold tracking-[-0.04em] sm:text-[2.1rem] ${
                      "accent" in stat && stat.accent ? "text-[var(--forest)]" : ""
                    }`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 pb-24 pt-10 lg:px-10">
          <div className="mb-10">
            <h2 className="font-display text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Selected Works
            </h2>
            <p className="font-mono mt-4 text-[0.78rem] uppercase tracking-[0.24em] text-[var(--muted)]">
              Technical Artifacts & Case Studies
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[2.1fr_1fr]">
            <article className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)]">
              <div className="border-b border-[var(--border)] bg-[#e7f2ee] p-8 md:p-10">
                <div className="flex h-[300px] items-center justify-center rounded-[20px] border border-[var(--border)] bg-[linear-gradient(180deg,#edf7f2,#f8f4ec)]">
                  <div className="rounded-[20px] border border-[var(--border)] bg-white px-10 py-14 shadow-[0_18px_50px_rgba(39,28,22,0.08)]">
                    <Image
                      src="/images/namacart-logo.svg"
                      alt="NamaCart logo"
                      width={300}
                      height={68}
                      className="h-auto w-[220px] sm:w-[300px]"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag, index) => (
                    <Pill
                      key={tag}
                      tone={index === 0 ? "forest" : "default"}
                    >
                      {tag}
                    </Pill>
                  ))}
                </div>

                <h3 className="font-display mt-5 text-4xl font-bold tracking-[-0.05em]">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-[760px] text-lg leading-8 text-[var(--muted)]">
                  {featured.summary}
                </p>

                <Link
                  href="/projects/namacart"
                  className="mt-16 inline-flex text-lg font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
                >
                  Read Case Study {"->"}
                </Link>
              </div>
            </article>

            <div className="grid gap-4">
              {sideProjects.map((project, index) => (
                <article
                  key={project.slug}
                  className={`rounded-[22px] border p-6 md:p-8 ${
                    index === 0
                      ? "border-[#2c241d] bg-[#221d19] text-[#f3ede6]"
                      : "border-[var(--border)] bg-[#faede4]"
                  }`}
                >
                  <Pill tone={index === 0 ? "default" : "accent"}>
                    {project.tags[0]}
                  </Pill>

                  <h3
                    className={`font-display mt-7 text-4xl font-bold tracking-[-0.05em] ${
                      index === 0 ? "text-[#fff6ef]" : "text-[var(--foreground)]"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mt-4 text-lg leading-8 ${
                      index === 0 ? "text-[#ab9d91]" : "text-[var(--muted)]"
                    }`}
                  >
                    {project.summary}
                  </p>

                  <p
                    className={`mt-16 font-mono text-[0.76rem] uppercase tracking-[0.22em] ${
                      index === 0 ? "text-[#8d7e73]" : "text-[var(--accent)]"
                    }`}
                  >
                    {project.meta}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter inverted />
    </div>
  );
}
