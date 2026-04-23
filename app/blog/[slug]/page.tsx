import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Pill } from "@/components/ui";
import { blogPosts } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const articleBody = [
  "There is a quiet resilience in the architecture of a neighborhood kirana. It is not designed with the sterile precision of a modern supermarket, nor does it rely on algorithmic endcaps to drive conversion. Instead, it operates on a profound, localized knowledge graph, a mental ledger maintained by the owner over decades of micro-transactions.",
  "Yet, the prevailing narrative in tech assumes these ecosystems need to be disrupted or replaced by dark stores and 10-minute delivery nodes. When we set out to build NamaCart, we rejected this premise fundamentally. We are not building to replace the kirana; we are building to arm them with the same structural leverage enjoyed by the aggregators.",
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="blog" ctaLabel="Download CV" ctaHref="#" brand="CHANAKYA" />

      <main className="mx-auto max-w-[980px] px-6 pb-20 pt-14 lg:px-10">
        <Pill tone="accent">{post.category} · Vision</Pill>
        <h1 className="font-display mt-8 text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
          Why I&apos;m building NamaCart — a letter to India&apos;s kirana owners
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-[var(--border)] py-4 font-mono text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
          <span>Chanakya Dev</span>
          <span>•</span>
          <span>October 24, 2024</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        <div className="mt-10 overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
          <div className="flex h-[430px] items-center justify-center bg-[linear-gradient(135deg,#52361a,#c98119_45%,#624014)]">
            <div className="rounded-[20px] border border-white/10 bg-black/12 px-8 py-20 text-center text-white/85 backdrop-blur-sm">
              <p className="font-display text-5xl font-bold">Kirana Shelf</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.28em]">
                Hero Image Mock
              </p>
            </div>
          </div>
          <p className="py-4 text-center text-lg italic text-[var(--muted)]">
            The structural backbone of local commerce.
          </p>
        </div>

        <div className="mt-12 space-y-8 text-xl leading-10 text-[var(--muted)]">
          {articleBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            The Illusion of &apos;Digital Transformation&apos;
          </h2>
          <p className="mt-6 text-xl leading-10 text-[var(--muted)]">
            Most B2B SaaS aimed at this sector fails because it attempts to
            force a highly bespoke, chaotic physical reality into a rigid
            relational database. The tools demand too much structured input up
            front, taxing the very resource the owner has the least of: time
            during peak hours.
          </p>

          <div className="mt-8 border-l-4 border-[var(--accent)] bg-[#faece4] px-8 py-8">
            <h3 className="font-display text-3xl font-bold tracking-[-0.04em]">
              The Product Axiom
            </h3>
            <p className="mt-4 text-xl leading-9 text-[var(--muted)]">
              If a digital tool requires more cognitive load than a physical
              notebook to record a ledger entry, it has already failed. Software
              must bend to the merchant, not the other way around.
            </p>
          </div>

          <p className="mt-8 text-xl leading-10 text-[var(--muted)]">
            This led us to re-evaluate how data is ingested. Instead of complex
            forms, we started leaning into conversational interfaces and async
            processing.
          </p>
        </section>

        <section className="mt-12 overflow-hidden rounded-[18px] border border-white/6 bg-[#1e1915] text-[#f1e8df]">
          <div className="flex items-center gap-2 border-b border-white/8 px-6 py-4">
            <span className="h-3 w-3 rounded-full bg-[#d44435]" />
            <span className="h-3 w-3 rounded-full bg-[#d8a628]" />
            <span className="h-3 w-3 rounded-full bg-[#3a9449]" />
            <span className="ml-4 font-mono text-sm uppercase tracking-[0.2em] text-[#8d8177]">
              ledger_processor.py
            </span>
          </div>
          <pre className="overflow-x-auto p-8 font-mono text-sm leading-8 text-[#d6cdc2]">
{`# Instead of forcing manual SKU entry, we parse natural language
def process_entry(merchant_input: str) -> Transaction:
    """
    Parses inputs like: 'Ramesh 5kg rice 200rs pending'
    """

    context = ContextBuilder.get_merchant_history(merchant_id)

    try:
        intent = nlp_engine.extract_intent(merchant_input, context)
        return Transaction(
            entity=intent.customer,
            amount=intent.value,
            status=intent.ledger_state
        )
    except AmbiguityError as e:
        # Fallback to human verification queue
        return queue_for_review(merchant_input)
`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            Building the Infrastructure of Trust
          </h2>
          <div className="mt-6 space-y-8 text-xl leading-10 text-[var(--muted)]">
            <p>
              Credit in the informal economy is not a mathematical risk score;
              it is a measure of social capital. By digitizing this gracefully,
              NamaCart allows merchants to securitize this localized trust and
              eventually gain better negotiating power with upstream
              distributors.
            </p>
            <p>
              This is not just software. This is a structural reinforcement of
              India&apos;s most decentralized supply chain. To every kirana owner
              reading this: we are building this for the long haul, with
              precision, with respect for the heritage of the trade, and with an
              unwavering focus on your autonomy.
            </p>
          </div>
        </section>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--border)] pt-8">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Share this essay
            </span>
            <button className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
              ↗
            </button>
            <button className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
              ✉
            </button>
          </div>
          <span className="font-mono text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
            1.2k views
          </span>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
