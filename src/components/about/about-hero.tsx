import { ABOUT_INTRO } from "@/lib/about";
import { Reveal } from "../reveal";

export function AboutHero() {
  return (
    <section className="bg-surface px-6 pt-20 pb-12 lg:px-20 lg:pt-28 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="type-pre-title text-flame">At a Glance</p>
          <div className="mt-2 h-px w-12 bg-flame" />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h1 className="font-hero text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink lg:text-6xl">
              Twelve Thousand Years
              <br />
              of Cyprus
            </h1>
          </Reveal>
          <Reveal delay={120} className="flex items-end">
            <p className="type-body text-ink/65">{ABOUT_INTRO}</p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
            {/* Museum exterior — placeholder until photography lands */}
            <figure className="lg:col-span-1">
              <div className="h-0.5 w-16 bg-gold" />
              <div
                aria-hidden
                className="mt-4 aspect-4/5 w-full overflow-hidden rounded-sm bg-linear-to-br from-[#cdbf9e] via-[#b8a988] to-[#8d8163] lg:aspect-auto lg:h-[420px]"
              />
            </figure>

            {/* Gallery interiors — triptych placeholder until photography lands */}
            <figure className="lg:col-span-2">
              <div className="h-0.5 w-16 bg-gold" />
              <div className="mt-4 grid h-[260px] grid-cols-3 gap-0 overflow-hidden rounded-sm lg:h-[420px]">
                <div
                  aria-hidden
                  className="bg-linear-to-br from-[#1f3a63] via-[#274a78] to-[#16294a]"
                />
                <div
                  aria-hidden
                  className="bg-linear-to-br from-[#7a3320] via-[#8f3d22] to-[#5a2415]"
                />
                <div
                  aria-hidden
                  className="bg-linear-to-br from-[#cdbf9e] via-[#b8a988] to-[#8d8163]"
                />
              </div>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
