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
                Nama<span className="text-[var(--accent)]">Cart</span> - Early
                Stage
              </h1>
              <p className="mt-8 text-xl leading-9 text-[#b9ab9f]">
                Digitizing local commerce through a simple, scalable hyperlocal
                system.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#b9ab9f]">
                Currently in research and initial build phase, focused on
                validating how local vendors and customers interact digitally
                before scaling operations.
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
                  Research + Product Design + V0 Build
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.15fr] lg:px-10">
          <div>
            <SectionLabel
              eyebrow="Market Context"
              title="Local Commerce Is Strong but Largely Unstructured"
              description="Most vendors lack digital presence, inventory visibility, and efficient order handling systems. This limits their reach and operational efficiency. NamaCart aims to simplify this by enabling local stores to operate through a lightweight digital layer."
            />

            <div className="space-y-4">
              <div className="rounded-[18px] border border-[var(--border)] bg-[#faece4] p-6">
                <h3 className="font-display text-2xl font-bold">
                  Vendor Disconnect
                </h3>
                <p className="mt-3 text-lg leading-8 text-[var(--muted)]">
                  Limited digital presence makes it harder for local stores to
                  reach customers consistently and manage orders smoothly.
                </p>
              </div>
              <div className="rounded-[18px] border border-[var(--border)] bg-[#e7f1eb] p-6">
                <h3 className="font-display text-2xl font-bold">
                  Operational Friction
                </h3>
                <p className="mt-3 text-lg leading-8 text-[var(--muted)]">
                  Manual inventory tracking and order handling reduce
                  efficiency and make day-to-day operations harder to scale.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[20px] bg-[#221b16] p-8 text-[#efe6dc]">
              <h3 className="font-display text-3xl font-bold text-[var(--accent)]">
                Solution Direction
              </h3>
              <p className="mt-4 text-xl leading-8 text-[#b7a99d]">
                NamaCart is being designed as a three-sided platform connecting
                customers, vendors, and delivery agents.
              </p>
              <ul className="mt-6 space-y-3 text-lg leading-8 text-[#efe6dc]">
                <li>- Customers discover and order from nearby stores</li>
                <li>- Vendors manage products and orders digitally</li>
                <li>- Delivery agents fulfill local deliveries</li>
              </ul>
              <p className="mt-6 text-lg leading-8 text-[#b7a99d]">
                The initial version focuses on a reserve-and-pickup model to
                validate user behavior before introducing delivery.
              </p>
            </div>

            <div className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-8">
              <h3 className="font-display text-3xl font-bold tracking-[-0.04em]">
                Current Progress
              </h3>
              <ul className="mt-6 space-y-3 text-lg leading-8 text-[var(--muted)]">
                <li>- Market research completed</li>
                <li>- Product flows designed</li>
                <li>- System architecture defined</li>
                <li>- V0 development in progress</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 pb-14 lg:px-10">
          <div className="rounded-[24px] bg-[#f2ede4] px-8 py-12 md:px-12 md:py-16">
            <SectionLabel
              eyebrow="Product Design"
              title="Product Modules"
              description="The platform is being shaped around simple interfaces for the people involved in local commerce, with the first version focused on clear everyday flows."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Customer Interface",
                  points: [
                    "Browse nearby stores",
                    "Reserve items",
                    "Track order status",
                  ],
                  accent: "accent" as const,
                },
                {
                  title: "Vendor Interface",
                  points: [
                    "Manage product listings",
                    "Receive and process orders",
                    "Handle store-side updates",
                  ],
                  accent: "forest" as const,
                },
                {
                  title: "Agent Flow (Planned)",
                  points: [
                    "Accept delivery requests",
                    "Track active deliveries",
                    "Mark fulfillment complete",
                  ],
                  accent: "blue" as const,
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)]"
                >
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
                        <li key={point}>- {point}</li>
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
              eyebrow="Technology"
              title="Tech Stack (Current)"
              description="The current stack is intentionally simple and practical for an early-stage build, with room to evolve as the product becomes clearer."
            />
            <div className="rounded-[20px] bg-[#221b16] p-8 text-[#f1e8df]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8e8074]">
                Current Build
              </p>
              <div className="mt-6 space-y-4 text-lg">
                <p>
                  <span className="mr-3 font-semibold text-[var(--accent)]">
                    Frontend:
                  </span>
                  React / Next.js
                </p>
                <p>
                  <span className="mr-3 font-semibold text-[var(--forest)]">
                    Backend:
                  </span>
                  Node.js
                </p>
                <p>
                  <span className="mr-3 font-semibold text-[#6e8dbf]">
                    Database:
                  </span>
                  PostgreSQL
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="space-y-5">
              <div className="rounded-xl border border-[var(--border)] bg-[#faece4] p-5">
                <p className="font-display text-2xl font-bold">
                  Planned Enhancements
                </p>
              </div>
              <div className="mx-auto h-8 w-px bg-[var(--border)]" />
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="font-display text-2xl font-bold">
                  Real-time Updates
                </p>
              </div>
              <div className="mx-auto h-8 w-px bg-[var(--border)]" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--border)] bg-[#e7f1eb] p-6">
                  <p className="font-display text-2xl font-bold">
                    Scalable API Layer
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[#e9eef8] p-6">
                  <p className="font-display text-2xl font-bold">
                    Mobile-First Interface
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
