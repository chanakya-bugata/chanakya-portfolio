import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Pill } from "@/components/ui";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  const featured =
    projects.find((project) => project.slug === "namacart") ?? projects[0];
  const others = projects.filter((project) => project.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="projects" />

      <main>
        <PageIntro
          title="Selected Works"
          description="A curated collection of scalable architectures, commercial platforms, and technical explorations built with precision."
          actions={
            <div className="rounded-full bg-[var(--accent)] px-5 py-3 font-mono text-sm uppercase tracking-[0.18em] text-white">
              {projects.length.toString().padStart(2, "0")} Entities Found
            </div>
          }
        />

        <section className="mx-auto max-w-[1180px] px-6 pb-12 lg:px-10">
          <article className="overflow-hidden rounded-[24px] border border-[var(--accent)] bg-[#201a16] text-[#f4ede5] shadow-[6px_6px_0_var(--accent)] sm:shadow-[10px_10px_0_var(--accent)]">
            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              <div className="p-6 sm:p-10 md:p-14">
                <div className="flex flex-wrap gap-2">
                  <Pill tone="accent">Featured Platform</Pill>
                  <Pill> B2B Commerce </Pill>
                </div>
                <Image
                  src="/images/namacart-mark.svg"
                  alt="NamaCart mark"
                  width={64}
                  height={64}
                  className="mt-6 h-10 w-10 sm:mt-10 sm:h-14 sm:w-14"
                />
                <h2 className="font-display mt-6 text-[2.6rem] font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl">
                  Nama<span className="text-[var(--accent)]">Cart</span>{" "}
                  <span className="text-[#f4ede5] text-2xl sm:text-4xl">(Early Stage)</span>
                </h2>
                <p className="mt-6 max-w-[560px] text-lg leading-8 text-[#bbaea1] sm:mt-8 sm:text-xl sm:leading-9">
                  {featured.description}
                </p>

                <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:flex-wrap">
                  <Link
                    href={`/projects/${featured.slug}`}
                    className="flex justify-center rounded-2xl bg-[var(--accent)] px-7 py-4 text-lg font-medium text-white"
                  >
                    View Case Study
                  </Link>
                  <Link
                    href="https://namacart.in"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center rounded-2xl border border-white/14 bg-white/5 px-7 py-4 text-lg font-medium text-[#f4ede5] transition-colors hover:bg-white/10"
                  >
                    Visit NamaCart.in
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/8 lg:border-l lg:border-t-0 p-6 sm:p-8 md:p-10">
                <div className="relative h-full min-h-[300px] sm:min-h-[520px] overflow-hidden rounded-[20px] border border-white/8 bg-[radial-gradient(circle_at_top,#31261f,transparent_50%),linear-gradient(180deg,#1f1814,#181410)] p-4">
                  <Image
                    src="/images/phone-mock.png"
                    alt="NamaCart mobile product preview"
                    fill
                    className="object-contain object-center p-4"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </article>
        </section>


        <section className="mx-auto max-w-[1180px] px-6 pb-24 lg:px-10">
          <div className="mb-8 flex items-end justify-between border-b border-[var(--border)] pb-4">
            <h2 className="font-display text-4xl font-bold tracking-[-0.05em]">
              Supporting Capabilities
            </h2>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              {others.length.toString().padStart(2, "0")} Entities Found
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {others.map((project, index) => (
              <article
                key={project.slug}
                className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="flex items-center justify-between">
                  <Pill tone={index === 0 ? "accent" : index === 1 ? "forest" : "default"}>
                    {project.tags[0]}
                  </Pill>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {"</>"}
                  </span>
                </div>

                <h3 className="font-display mt-8 text-4xl font-bold tracking-[-0.05em]">
                  {project.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  {project.summary}
                </p>
                <div className="mt-10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter inverted />
    </div>
  );
}
