import Link from "next/link";
import { EXPLORE_MODES } from "@/lib/explore-modes";
import { Reveal } from "./reveal";

export function ExploreModes() {
  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="type-pre-title text-flame">
          How would you like to explore?
        </p>
        <p className="mt-5 font-display text-xl font-normal italic text-ink lg:text-2xl">
          Choose your journey through 10,000 years of Cypriot history
        </p>
      </Reveal>

      <div className="mx-auto mt-10 h-px max-w-6xl bg-ink/10" />

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
        {EXPLORE_MODES.map((mode, i) => (
          <Reveal key={mode.id} delay={i * 120} className="h-full">
            <Link
              href={mode.href}
              className="group flex h-full flex-col gap-5 border border-ink/10 bg-surface/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-surface hover:shadow-2xl"
              style={{ borderTopWidth: "3px", borderTopColor: mode.accent }}
            >
              <div>
                <p className="type-pre-title text-ink/60">{mode.category}</p>
                <p className="mt-1 font-display text-3xl font-medium text-ink/25">
                  {mode.number}
                </p>
              </div>
              <h3 className="font-display text-2xl font-medium leading-[1.1] tracking-[-0.01em] text-ink lg:text-3xl">
                {mode.title}
              </h3>
              <p className="type-body text-ink/60">{mode.description}</p>
              <div className="mt-auto border-t border-ink/10 pt-4">
                <span className="type-pre-title inline-block text-flame transition-transform group-hover:translate-x-1">
                  {mode.cta} →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
