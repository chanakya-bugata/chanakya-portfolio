import Link from "next/link";
import { notFound } from "next/navigation";
import { Search } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isBlogEnabled } from "@/lib/site-config";
import { Pill } from "@/components/ui";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  if (!isBlogEnabled) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="blog" ctaLabel="Download CV" ctaHref="#" brand="CHANAKYA" />

      <main>
        <PageIntro
          title="Reflections & Build Logs"
          description="Documenting the journey of building in public. Technical deep dives, architectural decisions, and honest reflections on founder life, rooted in pragmatism and a desire for structural elegance."
        />

        <section className="mx-auto max-w-[1180px] px-6 pb-8 lg:px-10">
          <div className="flex flex-col gap-6 border-b border-[var(--border)] pb-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <Pill tone="accent">All</Pill>
              <Pill>NamaCart</Pill>
              <Pill>Tech</Pill>
              <Pill>Founder</Pill>
            </div>
            <div className="flex w-full items-center gap-3 border border-[var(--border)] bg-[var(--surface)] px-4 py-4 lg:w-[320px]">
              <Search className="h-4 w-4 text-[var(--muted)]" />
              <span className="text-lg text-[var(--muted)]">Search logs...</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 pb-20 pt-10 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)]"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-4">
                    <Pill tone={post.category === "NamaCart" ? "accent" : "default"}>
                      {post.category}
                    </Pill>
                    <span className="font-mono text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-display mt-7 text-5xl font-bold tracking-[-0.06em]">
                    {post.title}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-[var(--border)] bg-[#fbefe7] px-6 py-5">
                  <span className="font-mono text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
                    {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-3xl font-light text-[var(--accent)]"
                  >
                    →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-4">
            <button className="border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-lg text-[var(--muted)]">
              Prev
            </button>
            <span className="text-lg text-[var(--foreground)]">1 / 3</span>
            <button className="border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-lg text-[var(--foreground)]">
              Next
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
