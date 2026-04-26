import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Pill } from "@/components/ui";
import { homeStats, projects } from "@/lib/site-data";

export default function Home() {
  const featured =
    projects.find((project) => project.slug === "namacart") ?? projects[0];
  const sideProjects = projects
    .filter((project) => project.slug !== featured.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="" />

      <main>
        <section className="mx-auto max-w-[1180px] px-6 pb-12 pt-10 lg:px-10 lg:pb-18 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-[640px]">
              <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[0.76rem] sm:tracking-[0.24em]">
                Accenture Intern & Building NamaCart
              </div>

              <h1 className="font-display mt-6 text-[2.8rem] leading-[0.95] font-black tracking-[-0.05em] text-[var(--foreground)] sm:mt-8 sm:text-6xl lg:text-[5.2rem]">
                Engineering{" "}
                <span className="text-[var(--accent)]">Real products.</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-[var(--muted)] sm:mt-8 sm:text-xl sm:leading-9">
                I engineer sophisticated digital experiences bridging
                Indian heritage with modern technological precision. Founder of
                NamaCart.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
                <Link
                  href="/projects"
                  className="flex justify-center rounded-2xl bg-[var(--accent)] px-7 py-4 text-lg font-medium text-white transition-colors hover:bg-[var(--accent-strong)] sm:py-5 sm:text-xl"
                >
                  View Projects {"->"}
                </Link>
                <Link
                  href="/contact"
                  className="flex justify-center rounded-2xl border border-[var(--accent)] px-7 py-4 text-lg font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)] sm:py-5 sm:text-xl"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-4 top-8 h-[90%] w-[92%] rounded-[32px] bg-[var(--accent)]/18 blur-3xl" />
              <div className="absolute -left-6 top-14 h-24 w-24 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 blur-[2px]" />
              <div className="absolute -right-5 bottom-16 h-32 w-32 rounded-full border border-[#2f2822]/10 bg-[#2f2822]/6" />
              <div className="absolute left-2 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,var(--accent),transparent)] lg:block" />
              <div className="absolute -left-3 top-20 hidden rounded-full border border-[var(--accent)] bg-white/80 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--accent)] backdrop-blur md:block">
                Founder
              </div>
          
              <div className="relative overflow-hidden rounded-[32px] border border-[#2f2822] bg-[#17141d] p-3 sm:p-5 shadow-[0_28px_80px_rgba(39,28,22,0.22)]">
                <div className="overflow-hidden rounded-[26px] border border-white/8 bg-[radial-gradient(circle_at_top,#3d3645,transparent_32%),linear-gradient(180deg,#25202b,#15111b)]">
                  <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-[var(--accent)]" />
                      <span className="h-3 w-3 rounded-full bg-[#f0c48d]" />
                      <span className="h-3 w-3 rounded-full bg-[#8a7f76]" />
                    </div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[#b9ab9f]">
                      Chanakya Bugata
                    </p>
                  </div>
                  <Image
                    src="/images/chanakya.png"
                    alt="Chanakya Bugata portrait"
                    width={900}
                    height={900}
                    className="h-[400px] w-full object-cover object-top sm:h-[560px]"
                    priority
                  />
                  <div className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(23,17,27,0.96),rgba(23,17,27,0.92))] px-6 py-5">
                    <p className="font-display text-xl font-bold tracking-[-0.04em] text-[#f6ede5] sm:text-2xl">
                      Systems thinker with a bias for shipping.
                    </p>
                    <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#b9ab9f] sm:text-[0.72rem]">
                      From idea to working product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-y border-[var(--border)] py-6 sm:mt-18">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {homeStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-4 py-4 sm:px-6 ${
                    index !== homeStats.length - 1
                      ? "xl:border-r xl:border-[var(--border)]"
                      : ""
                  } ${
                    index % 2 === 0 && index !== homeStats.length - 1
                      ? "sm:border-r sm:border-[var(--border)] xl:border-r"
                      : ""
                  }`}
                >
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[0.78rem] sm:tracking-[0.24em]">
                    {stat.label}
                  </p>
                  <p
                    className={`font-display mt-2 text-xl font-bold tracking-[-0.04em] sm:mt-3 sm:text-2xl md:text-[2.1rem] ${
                      "accent" in stat && stat.accent ? "text-[var(--foreground)]" : ""
                    }`}
                  >
                    {"accent" in stat && stat.accent ? (
                      <>
                        Nama<span className="text-[var(--accent)]">Cart</span>
                      </>
                    ) : (
                      stat.value
                    )}
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
