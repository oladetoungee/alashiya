"use client";

import { useState } from "react";
import { SITE_LOCATIONS, SITE_LOCATIONS_INTRO } from "@/lib/about";
import { Reveal } from "../reveal";
import { SiteMapEmbed } from "./site-map-embed";

export function SiteLocations() {
  // Single-select: click a site to open, click it again to close. Map pins
  // and list rows share this state so they stay in sync.
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setSelectedId((current) => (current === id ? null : id));

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
              {SITE_LOCATIONS.map((site) => {
                const open = site.id === selectedId;
                return (
                  <li
                    key={site.id}
                    className="border-b border-gold"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(site.id)}
                      aria-expanded={open}
                      aria-controls={`site-${site.id}-detail`}
                      className="flex w-full items-center justify-between py-5 text-left"
                    >
                      <span
                        className={`font-hero text-2xl font-medium transition-colors lg:text-[1.7rem] ${
                          open
                            ? "text-ink"
                            : "text-ink hover:text-flame"
                        }`}
                      >
                        {site.name}
                      </span>
                    </button>
                    {open && (
                      <div
                        id={`site-${site.id}-detail`}
                        className="pb-6 animate-[hero-fade-in_320ms_ease-out]"
                      >
                        <p className="type-body text-flame">{site.location}</p>
                        <p className="mt-4 type-body text-ink/80">
                          <span className="font-bold text-ink">Periods:</span>{" "}
                          {site.periods.join(" → ")}
                        </p>
                        <p className="mt-4 type-body text-ink/65">{site.body}</p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <SiteMapEmbed selectedId={selectedId} onSelect={toggle} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
