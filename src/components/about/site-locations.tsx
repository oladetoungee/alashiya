import { SITE_LOCATIONS, SITE_LOCATIONS_INTRO } from "@/lib/about";
import { Reveal } from "../reveal";

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
                  key={site}
                  className="group flex items-center justify-between border-b border-gold py-5"
                >
                  <span className="font-hero text-2xl font-medium text-ink transition-colors group-hover:text-flame lg:text-[1.7rem]">
                    {site}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Stylised Pafos District map — placeholder until cartography lands */}
          <Reveal delay={120}>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm bg-[#efe6d2]">
              {/* road network */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(28deg, transparent 0 22px, rgba(213,120,0,0.28) 22px 23px), repeating-linear-gradient(-54deg, transparent 0 34px, rgba(213,120,0,0.18) 34px 35px)",
                }}
              />
              {/* sea / coastline (south-west) */}
              <div
                aria-hidden
                className="absolute -bottom-16 -left-16 h-2/3 w-2/3 rounded-[50%] bg-[#9fc2c0]"
              />
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-1/3 w-full bg-linear-to-t from-[#9fc2c0]/70 to-transparent"
              />
              {/* site markers */}
              <span className="absolute left-[26%] top-[32%] h-2.5 w-2.5 rounded-full bg-flame ring-2 ring-[#efe6d2]" />
              <span className="absolute left-[44%] top-[58%] h-2.5 w-2.5 rounded-full bg-flame ring-2 ring-[#efe6d2]" />
              <span className="absolute left-[63%] top-[44%] h-2.5 w-2.5 rounded-full bg-flame ring-2 ring-[#efe6d2]" />
              <span className="absolute left-[72%] top-[70%] h-2.5 w-2.5 rounded-full bg-flame ring-2 ring-[#efe6d2]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
