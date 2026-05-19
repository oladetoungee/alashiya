import { SITE_LOCATIONS, SITE_LOCATIONS_INTRO } from "@/lib/about";
import { Reveal } from "../reveal";
import { SiteMapEmbed } from "./site-map-embed";

export function SiteLocations() {
  return (
    <section className="bg-surface px-6 py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="type-pre-title text-flame">Archaeological Sites</p>
            <div className="mt-2 h-px w-12 bg-flame" />
            <h2 className="mt-8 font-hero text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink lg:text-5xl">
              Our Site Locations
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex items-end">
            <p className="type-body text-ink/65">{SITE_LOCATIONS_INTRO}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <ul>
              {SITE_LOCATIONS.map((site) => (
                <li
                  key={site.name}
                  className="group flex items-center justify-between border-b border-gold py-5"
                >
                  <span className="font-hero text-2xl font-medium text-ink transition-colors group-hover:text-flame lg:text-[1.7rem]">
                    {site.name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <SiteMapEmbed />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
