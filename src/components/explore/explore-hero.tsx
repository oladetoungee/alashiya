import Image from "next/image";
import Link from "next/link";
import {
  EXPLORE_INTRO,
  EXPLORE_MODE_CARDS,
  type ExploreModeCard,
} from "@/lib/explore";
import { IMAGES } from "@/lib/images";
import { Reveal } from "../reveal";

// Static class strings (no dynamic concatenation) so Tailwind keeps them.
const ACCENT: Record<
  ExploreModeCard["accent"],
  { card: string; arrow: string }
> = {
  era: { card: "border-gold bg-explore-timeline-bg", arrow: "text-flame" },
  stories: {
    card: "border-explore-stories bg-explore-stories-bg",
    arrow: "text-explore-stories",
  },
};

export function ExploreHero() {
  const floorPlan = IMAGES.museumArchitecture;

  return (
    <section className="bg-surface px-6 pt-20 pb-20 lg:px-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="type-pre-title text-flame">
              {EXPLORE_INTRO.eyebrow}
            </p>
            <div className="mt-2 h-px w-12 bg-flame" />
            <h1 className="mt-7 font-hero text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink lg:text-6xl">
              {EXPLORE_INTRO.heading[0]}
              <br />
              {EXPLORE_INTRO.heading[1]}
            </h1>
            <p className="mt-6 max-w-md type-body text-ink/65">
              {EXPLORE_INTRO.subtitle}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-10 font-accent text-lg italic text-ink lg:text-xl">
              {EXPLORE_INTRO.prompt}
            </p>

            <div className="mt-5 flex flex-col gap-4">
              {EXPLORE_MODE_CARDS.map((mode) => {
                const a = ACCENT[mode.accent];
                return (
                  <Link
                    key={mode.id}
                    href={mode.href}
                    className={`group flex items-center justify-between gap-6 border-t-2 p-6 text-card-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${a.card}`}
                  >
                    <div>
                      <h3 className="font-hero text-xl font-medium leading-tight text-card-ink">
                        {mode.title}
                      </h3>
                      <p className="mt-1.5 type-small text-card-ink/60">
                        {mode.description}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className={`shrink-0 text-xl transition-transform group-hover:translate-x-1 ${a.arrow}`}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <Image
            src={floorPlan.src}
            alt={floorPlan.alt}
            width={floorPlan.width}
            height={floorPlan.height}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
