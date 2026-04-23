import Image from "next/image";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Pill, SectionLabel } from "@/components/ui";

export default function NamaCartPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="projects" />

      <main>
        <section className="bg-[#221b16] text-[#f5eee6]">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-14 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-20">
            <div className="max-w-[620px]">
              <Pill tone="accent">Fintech / E-Commerce</Pill>
              <h1 className="font-display mt-8 text-6xl font-black tracking-[-0.06em] sm:text-7xl">
                NamaCart: Digitizing India&apos;s Local Commerce.
              </h1>
              <p className="mt-8 text-xl leading-9 text-[#b9ab9f]">
                A full-stack ecosystem transforming unorganized local retail
                into structured, transparent digital economies. Empowering
                vendors, optimizing logistics, and unlocking credit access for
                millions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-[var(--accent)] px-7 py-4 text-lg font-medium text-white"
                >
                  Schedule a Call
                </a>
                <a
                  href="#"
                  className="rounded-2xl border border-white/16 px-7 py-4 text-lg font-medium text-[#efe6dc]"
                >
                  Download Pitch Deck
                </a>
              </div>
            </div>

            <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-[20px] border border-white/8 bg-[radial-gradient(circle_at_top,#4a2618,transparent_35%),linear-gradient(135deg,#2a1e18,#17141d_55%,#132128)] p-10">
              <div className="space-y-8 text-center">
                <Image
                  src="/images/namacart-logo-light.svg"
                  alt="NamaCart logo"
                  width={300}
                  height={68}
                  className="mx-auto h-auto w-[240px] sm:w-[300px]"
                  priority
                />
                <div className="mx-auto h-px w-40 bg-white/12" />
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#b9ab9f]">
                  Structured Commerce Layer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.15fr] lg:px-10">
          <div>
            <SectionLabel
              eyebrow="Market Context"
              title="The $500B Unorganized Retail Paradox"
              description="Local commerce thrives on trust but suffocates in operational inefficiency. Vendors lack digital storefronts, cash flow is opaque, and supply chains are fragmented. NamaCart bridges this gap with structural precision."
            />

            <div className="space-y-4">
              <div className="rounded-[18px] border border-[var(--border)] bg-[#faece4] p-6">
                <h3 className="font-display text-2xl font-bold">Vendor Disconnect</h3>
                <p className="mt-3 text-lg leading-8 text-[var(--muted)]">
                  Zero digital footprint restricts market reach and limits
                  creditworthiness.
                </p>
              </div>
              <div className="rounded-[18px] border border-[var(--border)] bg-[#e7f1eb] p-6">
                <h3 className="font-display text-2xl font-bold">Supply Chain Friction</h3>
                <p className="mt-3 text-lg leading-8 text-[var(--muted)]">
                  Manual inventory management leads to measurable stock loss and
                  fragmented visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex min-h-[220px] items-center justify-center border border-[var(--border)] bg-[var(--surface)]">
              <div className="text-center">
                <p className="font-display text-6xl font-black text-[var(--accent)]">$500B</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  Market Size
                </p>
              </div>
            </div>
            <div className="flex min-h-[220px] items-center justify-center border border-[var(--border)] bg-[var(--surface)]">
              <div className="text-center">
                <p className="font-display text-6xl font-black text-[var(--forest)]">12M+</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  Target MSMEs
                </p>
              </div>
            </div>
            <div className="sm:col-span-2 rounded-[20px] bg-[#221b16] p-8 text-[#efe6dc]">
              <h3 className="font-display text-3xl font-bold text-[var(--accent)]">
                Our Solution
              </h3>
              <p className="mt-4 text-xl leading-8 text-[#b7a99d]">
                A unified tripartite app ecosystem: Customer, Vendor, and
                Agent.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 pb-14 lg:px-10">
          <div className="rounded-[24px] bg-[#f2ede4] px-8 py-12 md:px-12 md:py-16">
            <SectionLabel
              eyebrow="Product Design"
              title="The Tripartite Ecosystem"
              description="Distinct, purpose-built interfaces ensuring seamless interaction across the entire commerce lifecycle."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Customer App",
                  points: ["Hyper-local discovery", "1-click native checkout", "Live order tracking"],
                  accent: "accent" as const,
                },
                {
                  title: "Vendor Dashboard",
                  points: ["Catalog management", "Ledger & settlement", "Working capital access"],
                  accent: "forest" as const,
                },
                {
                  title: "Agent App",
                  points: ["Route optimization", "Proof of delivery", "Earnings tracking"],
                  accent: "blue" as const,
                },
              ].map((card) => (
                <article key={card.title} className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)]">
                  <div className="p-6">
                    <div
                      className={`flex h-[220px] items-center justify-center rounded-[20px] border border-[var(--border)] ${
                        card.accent === "forest"
                          ? "bg-[#e8f3ed]"
                          : card.accent === "blue"
                            ? "bg-[#e9f0fb]"
                            : "bg-[#faece4]"
                      }`}
                    >
                      <div className="rounded-[18px] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_16px_40px_rgba(39,28,22,0.08)]">
                        <Image
                          src="/images/namacart-mark.svg"
                          alt="NamaCart mark"
                          width={78}
                          height={78}
                          className="h-[78px] w-[78px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[var(--border)] p-6">
                    <h3 className="font-display text-3xl font-bold tracking-[-0.04em]">
                      {card.title}
                    </h3>
                    <ul className="mt-5 space-y-3 text-lg leading-8 text-[var(--muted)]">
                      {card.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-8 px-6 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <SectionLabel
              eyebrow="Architecture"
              title="Built for Scale & Resilience"
              description="Our architecture is designed to handle high transaction volumes with low latency, even in areas with poor connectivity."
            />
            <div className="rounded-[20px] bg-[#221b16] p-8 text-[#f1e8df]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8e8074]">
                Tech Stack Overview
              </p>
              <div className="mt-6 space-y-4 text-lg">
                <p>
                  <span className="mr-3 font-semibold text-[var(--accent)]">Frontend:</span>
                  React Native, Next.js
                </p>
                <p>
                  <span className="mr-3 font-semibold text-[var(--forest)]">Backend:</span>
                  Node.js, Go (Microservices)
                </p>
                <p>
                  <span className="mr-3 font-semibold text-[#6e8dbf]">Database:</span>
                  PostgreSQL, Redis, MongoDB
                </p>
                <p>
                  <span className="mr-3 font-semibold text-[#d4a24f]">Infra:</span>
                  AWS (EKS, RDS), Cloudflare
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="space-y-5">
              <div className="rounded-xl border border-[var(--border)] bg-[#faece4] p-5">
                <p className="font-display text-2xl font-bold">Client Apps</p>
              </div>
              <div className="mx-auto h-8 w-px bg-[var(--border)]" />
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="font-display text-2xl font-bold">API Gateway & Load Balancer</p>
              </div>
              <div className="mx-auto h-8 w-px bg-[var(--border)]" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--border)] bg-[#e7f1eb] p-6">
                  <p className="font-display text-2xl font-bold">Order Service</p>
                  <p className="mt-2 font-mono text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
                    Go / gRPC
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[#e9eef8] p-6">
                  <p className="font-display text-2xl font-bold">Ledger Service</p>
                  <p className="mt-2 font-mono text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
                    Node / Postgres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter inverted />
    </div>
  );
}
