"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BriefcaseBusiness, CalendarDays, Download, WalletCards, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [links, setLinks] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchLinks() {
      try {
        const response = await fetch("/api/links");
        if (response.ok) {
          const data = await response.json();
          setLinks(data);
        }
      } catch (error) {
        console.error("Failed to fetch links:", error);
      }
    }
    fetchLinks();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", role: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader current="contact" ctaLabel="Connect" ctaHref="#inquiry" brand="Chanakya Bugata" />

      <main className="mx-auto grid max-w-[1320px] gap-10 px-6 py-10 lg:px-10 lg:py-20 xl:grid-cols-[1.08fr_0.92fr]">
        <section>
          <h1 className="font-display text-[2.8rem] font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            Let&apos;s build <span className="text-[var(--accent)]">together.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-lg leading-8 text-[var(--muted)] sm:mt-8 sm:text-xl sm:leading-9">
            Whether you are looking to scale an engineering team, discuss
            technical architecture, or explore investment opportunities, I am
            open to meaningful conversations.
          </p>

          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2">
            <article className="group flex min-h-[300px] flex-col overflow-hidden rounded-[26px] border border-[var(--border)] bg-[linear-gradient(180deg,#fffaf4,#f7efe6)] p-6 sm:min-h-[340px] sm:p-8 shadow-[0_18px_40px_rgba(39,28,22,0.06)] transition-transform duration-200 hover:-translate-y-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3 text-[var(--accent)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/10 sm:h-11 sm:w-11">
                    <WalletCards className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h2 className="font-display text-2xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.2rem]">
                    For Investors
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--accent)]/20 bg-white/70 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--accent)] sm:px-3 sm:py-1 sm:text-[0.68rem]">
                  Capital
                </span>
              </div>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)] sm:mt-7 sm:text-xl sm:leading-9">
                Explore thesis, traction, and structural models.
              </p>
              <div className="mt-auto space-y-3 pt-8 sm:pt-10">
                <Link 
                  href={links.schedule_call || "#"} 
                  target="_blank"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--accent)] px-6 py-3.5 text-lg font-medium !text-white shadow-[0_12px_24px_rgba(229,119,29,0.22)] transition-colors hover:bg-[var(--accent-strong)] sm:py-4 sm:text-xl"
                >
                  <CalendarDays className="h-4 w-4" />
                  Connect
                </Link>
                <Link 
                  href={links.pitch_deck || "#"} 
                  target="_blank"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[var(--accent)]/30 bg-white/70 px-6 py-3.5 text-lg font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)] sm:py-4 sm:text-xl"
                >
                  <Download className="h-4 w-4" />
                  Pitch Deck
                </Link>
              </div>
            </article>

            <article className="group flex min-h-[300px] flex-col overflow-hidden rounded-[26px] border border-[var(--border)] bg-[linear-gradient(180deg,#fbfbf7,#eef3ea)] p-6 sm:min-h-[340px] sm:p-8 shadow-[0_18px_40px_rgba(39,28,22,0.06)] transition-transform duration-200 hover:-translate-y-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3 text-[var(--forest)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[var(--forest)]/20 bg-[var(--forest)]/10 sm:h-11 sm:w-11">
                    <BriefcaseBusiness className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h2 className="font-display text-2xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.2rem]">
                    For Recruiters
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--forest)]/20 bg-white/70 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--forest)] sm:px-3 sm:py-1 sm:text-[0.68rem]">
                  Hiring
                </span>
              </div>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)] sm:mt-7 sm:text-xl sm:leading-9">
                Review technical depth and leadership history.
              </p>
              <div className="mt-auto space-y-3 pt-8 sm:pt-10">
                <Link
                  href="https://www.linkedin.com/in/chanakya-bugata/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#211b17] px-6 py-3.5 text-lg font-medium !text-[#f8f2ea] shadow-[0_12px_24px_rgba(39,28,22,0.16)] transition-colors hover:bg-[#17120f] hover:!text-white visited:!text-[#f8f2ea] sm:py-4 sm:text-xl"
                >
                  LinkedIn
                </Link>
                <Link 
                  href={links.resume || "#"} 
                  target="_blank"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[var(--forest)]/35 bg-white/70 px-6 py-3.5 text-lg font-medium text-[var(--forest)] transition-colors hover:bg-[#e6efe8] sm:py-4 sm:text-xl"
                >
                  Resume
                </Link>
              </div>
            </article>
          </div>
        </section>
        
        <section id="inquiry" className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-[0_0_0_1px_rgba(223,211,196,0.35)]">
          <div className="border-t-4 border-[var(--accent)] pt-8 sm:pt-10">
            <h2 className="font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
              Direct Inquiry
            </h2>

            {status === "success" ? (
              <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-6 text-center sm:mt-10 sm:p-10">
                <CheckCircle2 className="h-12 w-12 text-green-600 sm:h-16 sm:w-16" />
                <h3 className="mt-4 text-2xl font-bold text-green-900 sm:mt-6 sm:text-3xl">Message Received!</h3>
                <p className="mt-3 text-lg text-green-700 sm:mt-4 sm:text-xl">
                  Thank you for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-xl bg-green-600 px-6 py-2.5 text-lg font-medium text-white transition-colors hover:bg-green-700 sm:mt-8 sm:px-8 sm:py-3 sm:text-xl"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                      Full Name
                    </span>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full border border-[var(--border)] bg-[var(--background)] px-4 py-4 text-lg text-[var(--foreground)] outline-none transition-focus focus:border-[var(--accent)] sm:mt-3 sm:px-5 sm:py-5 sm:text-xl"
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                      Email Address
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full border border-[var(--border)] bg-[var(--background)] px-4 py-4 text-lg text-[var(--foreground)] outline-none transition-focus focus:border-[var(--accent)] sm:mt-3 sm:px-5 sm:py-5 sm:text-xl"
                      placeholder="jane@example.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                    I am a...
                  </span>
                  <select 
                    required
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-2 w-full border border-[var(--border)] bg-[var(--background)] px-4 py-4 text-lg text-[var(--foreground)] outline-none transition-focus focus:border-[var(--accent)] sm:mt-3 sm:px-5 sm:py-5 sm:text-xl"
                  >
                    <option value="" disabled>Choose your role...</option>
                    <option value="Investor looking to connect">Investor looking to connect</option>
                    <option value="Recruiter evaluating fit">Recruiter evaluating fit</option>
                    <option value="Founder seeking collaboration">Founder seeking collaboration</option>
                  </select>
                </label>

                <label className="block">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 h-[150px] w-full resize-none border border-[var(--border)] bg-[var(--background)] px-4 py-4 text-lg text-[var(--foreground)] outline-none transition-focus focus:border-[var(--accent)] sm:mt-3 sm:h-[180px] sm:px-5 sm:py-5 sm:text-xl"
                    placeholder="How can we align our goals?"
                  />
                </label>

                {status === "error" && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p className="text-base sm:text-lg">{errorMessage}</p>
                  </div>
                )}

                <div className="flex justify-end border-t border-[var(--border)] pt-6 sm:pt-8">
                  <button 
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-3 bg-[#211b17] px-6 py-4 text-xl font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto sm:px-10 sm:py-5 sm:text-2xl"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-6 w-6 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit →"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <SiteFooter brand="Chanakya Bugata" note="© 2026 Chanakya Bugata. Built and shipped." />
    </div>
  );
}
