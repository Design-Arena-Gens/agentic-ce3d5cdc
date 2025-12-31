import { getBuybackUpdates } from "@/lib/buyback";
import Link from "next/link";

export default async function Home() {
  const { latest, context } = await getBuybackUpdates();

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-12">
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/50">
          <div className="absolute inset-y-0 right-[-25%] hidden w-[60%] rotate-6 bg-gradient-to-br from-sky-400/20 via-transparent to-indigo-500/20 blur-3xl lg:block" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_minmax(0,320px)] lg:gap-12">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                Latest Update
              </span>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  dYdX Buyback Initiative
                </h1>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                  Status as of {latest.dateLabel}
                </p>
              </div>
              {latest.highlights.length > 0 ? (
                <div className="space-y-6">
                  {latest.highlights.map((highlight) => (
                    <div
                      key={highlight.heading}
                      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-slate-950/40"
                    >
                      <h2 className="text-xl font-semibold text-sky-200">
                        {highlight.heading}
                      </h2>
                      <div className="mt-4 space-y-4 text-base text-slate-200">
                        {highlight.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                        {highlight.bullets.length > 0 && (
                          <ul className="space-y-2 text-sm text-slate-300">
                            {highlight.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex gap-2 rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-2"
                              >
                                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-sky-400" />
                                <span className="leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300">
                  No buyback-specific details were published in the most recent dYdX analyst call.
                </p>
              )}
            </div>
            <aside className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  Summary derived from the dYdX Foundation&apos;s December 2025 analyst call,
                  focusing on how protocol fees are now routed into the buyback flywheel.
                </p>
                <p>
                  The initiative has expanded materially in Q4, with a larger portion of net fees
                  directed to market purchases and staking of DYDX.
                </p>
              </div>
              <Link
                href={latest.url}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-sky-500/40 bg-sky-500/15 px-5 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-400 hover:bg-sky-500/20"
              >
                Read the source briefing ↗
              </Link>
            </aside>
          </div>
        </section>

        <section className="space-y-6">
          <header className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white">Program context</h2>
            <p className="text-sm text-slate-400">
              Earlier foundation memos outlining how the buyback loop was designed and funded.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {context.map((entry) => (
              <article
                key={entry.url}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      {entry.dateLabel}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{entry.title}</h3>
                  </div>
                  {entry.highlights.map((highlight) => (
                    <div key={highlight.heading} className="space-y-3">
                      <p className="text-sm font-semibold text-sky-200">{highlight.heading}</p>
                      {highlight.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-relaxed text-slate-300">
                          {paragraph}
                        </p>
                      ))}
                      {highlight.bullets.length > 0 && (
                        <ul className="space-y-2 text-sm text-slate-300">
                          {highlight.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href={entry.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200"
                  >
                    View source ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-lg font-semibold text-white">Verification steps</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            For real-time buyback execution data, reference the on-chain dashboard maintained by
            community contributors and monitor governance discussions in the dYdX forums. The
            foundation&apos;s public blog remains the canonical channel for policy changes.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="https://www.dydx.foundation/blog"
              target="_blank"
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-200 hover:border-slate-600"
            >
              dYdX Foundation Blog ↗
            </Link>
            <Link
              href="https://dydx.forum"
              target="_blank"
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-200 hover:border-slate-600"
            >
              Governance Forum ↗
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
