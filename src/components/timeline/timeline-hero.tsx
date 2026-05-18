import { TIMELINE_ERAS, TIMELINE_INTRO } from "@/lib/timeline";
import { Reveal } from "../reveal";

export function TimelineHero() {
  return (
    <section className="bg-surface px-6 pt-20 pb-12 lg:px-20 lg:pt-28 lg:pb-16">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="type-eyebrow text-flame">{TIMELINE_INTRO.eyebrow}</p>
        <h1 className="mt-5 font-hero text-5xl font-medium leading-[1.05] tracking-[-0.02em] text-ink lg:text-7xl">
          {TIMELINE_INTRO.heading}
        </h1>
        <p className="mx-auto mt-6 max-w-xl type-body text-ink/55">
          {TIMELINE_INTRO.subtitle}
        </p>
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-12 max-w-4xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {TIMELINE_ERAS.map((era) => (
            <a
              key={era.id}
              href={`#${era.id}`}
              className="group border border-gold/40 px-6 py-5 text-center transition-colors hover:border-gold hover:bg-nav"
            >
              <p className="type-eyebrow text-flame">{era.label}</p>
              <p className="mt-2 font-hero text-xl font-medium text-ink lg:text-2xl">
                {era.name}
              </p>
              <p className="mt-1.5 type-small font-medium text-flame/80">
                {era.range}
              </p>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160} className="mx-auto mt-12 max-w-7xl lg:mt-16">
        <div className="h-px w-full bg-gold/40" />
      </Reveal>
    </section>
  );
}
