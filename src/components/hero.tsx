"use client";

import dynamic from "next/dynamic";
import { EventClock } from "./event-clock";

const HeroModel = dynamic(
  () => import("./hero-model").then((m) => m.HeroModel),
  { ssr: false, loading: () => null },
);

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_280px] lg:min-h-[calc(100vh-5rem)]">
      {/* Title block */}
      <div
        className="hero-fade-in flex flex-col justify-center gap-5 px-8 py-16 lg:px-12"
        style={{ animationDelay: "100ms" }}
      >
        <p className="type-pre-title text-flame">Paphos</p>
        <div className="leading-none">
          <span className="block font-display text-base font-normal italic text-ink/80">
            Archaeological
          </span>
          <span className="block font-display text-base font-medium text-ink">
            Museum
          </span>
        </div>
        <div className="h-px w-12 bg-flame" />
        <h1 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-light leading-[0.95] tracking-[-0.02em] text-ink">
          Explore
          <br />
          Life in
          <br />
          Ancient
          <br />
          Cyprus
        </h1>
        <p className="max-w-md type-body text-ink/55">
          10,000 years of civilisation, from the island&apos;s first stone
          villages to a Roman metropolis.
        </p>
      </div>

      {/* 3D model — gets the dominant space, sits on the same surface */}
      <div
        className="hero-fade-in relative min-h-120"
        style={{ animationDelay: "300ms" }}
      >
        <HeroModel />
        <div className="pointer-events-none absolute inset-x-0 bottom-6 text-center">
          <span className="type-pre-title text-flame">
            Scroll to Explore ↓
          </span>
        </div>
      </div>

      {/* Events — arc on desktop, pills on mobile (component handles both) */}
      <div
        className="hero-fade-in"
        style={{ animationDelay: "500ms" }}
      >
        <EventClock />
      </div>
    </section>
  );
}
