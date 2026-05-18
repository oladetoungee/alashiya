import { TIMELINE_ERAS, TIMELINE_INTRO } from "@/lib/timeline";
import { Reveal } from "../reveal";

export function TimelineHero() {
  return (
    <section className="bg-surface px-6 pt-20 pb-12 lg:px-20 lg:pt-28 lg:pb-16">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="type-eyebrow text-hero-gold">{TIMELINE_INTRO.eyebrow}</p>
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
              className="group relative border border-gold/40 px-8 py-9 text-center transition-colors hover:border-gold"
            >
              {/* Label straddles the top border like a fieldset legend —
                  bg-surface masks the rule behind it. */}
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-surface px-3 type-eyebrow text-hero-gold">
                {era.label}
              </span>
              <p className="font-hero text-2xl font-medium text-ink lg:text-3xl">
                {era.name}
              </p>
              <p className="mt-2 type-small font-medium text-hero-gold/85">
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
