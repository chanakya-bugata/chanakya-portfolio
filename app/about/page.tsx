import Image from "next/image";
import { Download, Mail, MapPin } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Pill, SectionLabel } from "@/components/ui";
import { experienceTimeline, technicalGroups } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="about" />

      <main className="mx-auto max-w-[1180px] px-6 py-10 lg:px-10 lg:py-18">
        <section className="grid gap-12 border-b border-[var(--border)] pb-14 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div className="relative">
            <div className="absolute inset-x-3 top-3 h-full border border-[var(--border)] bg-[#efe3d8]" />
            <div className="relative border border-[var(--border)] bg-[var(--surface)] p-2">
              <div className="overflow-hidden bg-[radial-gradient(circle_at_top,#2e2722,transparent_55%),linear-gradient(180deg,#1f1915,#15110f)]">
                <Image
                  src="/images/chanakya-founder.png"
                  alt="Chanakya Bugata founder portrait"
                  width={900}
                  height={1200}
                  className="h-[360px] w-full object-cover sm:h-[520px]"
                />
              </div>
            </div>
            <div className="absolute bottom-[-16px] right-[-4px] border border-[var(--accent)] bg-[var(--surface)] px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)] shadow-[4px_4px_0_var(--accent)] sm:right-[-12px] sm:px-5 sm:py-4 sm:text-sm sm:shadow-[6px_6px_0_var(--accent)]">
              Founder, NamaCart
            </div>
          </div>

          <div>
            <h1 className="font-display text-[2.8rem] font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-[4.7rem]">
              Engineer. Builder. <span className="text-[var(--accent)]">Scholar.</span>
            </h1>

            <div className="mt-8 space-y-6 text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              <p>
                I build robust, scalable systems that solve tangible problems.
                Rooted in strong theoretical foundations from SRM University and
                tempered by real-world friction at Infosys, my approach to
                engineering is practical yet meticulous.
              </p>
              <p>
                Currently, I&apos;m building <strong className="text-[var(--foreground)]">NamaCart</strong>,
                focusing on the intersection of intuitive user experiences and
                high-performance backend architecture. I believe in writing code
                that is as legible as a well-crafted document, purposeful, and
                free of unnecessary complexity.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)] sm:px-5 sm:py-4 sm:text-base">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="truncate">chanakya.in@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)] sm:px-5 sm:py-4 sm:text-base">
                <MapPin className="h-4 w-4 shrink-0" />
                India
              </div>
              <div className="flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)] sm:px-5 sm:py-4 sm:text-base">
                <Download className="h-4 w-4 shrink-0" />
                Curriculum Vitae
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border)] py-12 sm:py-14">
          <SectionLabel eyebrow="Capabilities" title="Technical Matrix" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technicalGroups.map((group) => (
              <article
                key={group.title}
                className="border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-display text-2xl font-bold tracking-[-0.03em]">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                  {group.items.map((item, index) => (
                    <Pill
                      key={item}
                      tone={
                        index === 0
                          ? group.accent === "forest"
                            ? "forest"
                            : "accent"
                          : "default"
                      }
                    >
                      {item}
                    </Pill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <SectionLabel eyebrow="Journey" title="Experience & Education" />

          <div className="relative mt-8 sm:mt-10">
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[var(--border)] lg:block" />
            <div className="space-y-8 sm:space-y-12">
              {experienceTimeline.map((item, index) => {
                const isRight = index % 2 === 0;
                const accentClass =
                  item.accent === "forest"
                    ? "border-l-[var(--forest)]"
                    : item.accent === "ink"
                      ? "border-l-[var(--foreground)]"
                      : "border-l-[var(--accent)]";
                const dotClass =
                  item.accent === "forest"
                    ? "bg-[var(--forest)]"
                    : item.accent === "ink"
                      ? "bg-[var(--foreground)]"
                      : "bg-[var(--accent)]";

                return (
                  <div
                    key={item.title}
                    className="grid gap-4 sm:gap-8 lg:grid-cols-2"
                  >
                    <div
                      className={`hidden lg:flex ${isRight ? "justify-end pr-8" : "order-2 pl-8"}`}
                    >
                      <p className="mt-12 font-mono text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                        {item.years}
                      </p>
                    </div>

                    <article
                      className={`relative border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 ${
                        isRight ? "lg:ml-8" : "lg:mr-8 lg:order-1"
                      } border-l-4 ${accentClass}`}
                    >
                      <span className={`absolute left-[-10px] top-12 hidden h-4 w-4 rounded-full ${dotClass} lg:block`} />
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm lg:hidden">
                        {item.years}
                      </p>
                      <h3 className="font-display mt-2 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base font-medium text-[var(--accent)] sm:text-lg">
                        {item.organization}
                      </p>
                      <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:mt-5 sm:text-lg sm:leading-8">
                        {item.description}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter inverted />
    </div>
  );
}
