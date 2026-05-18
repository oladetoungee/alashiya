"use client";

import dynamic from "next/dynamic";
import { EventClock } from "./event-clock";

const HeroModel = dynamic(
  () => import("./hero-model").then((m) => m.HeroModel),
  { ssr: false, loading: () => null },
);

export function Hero() {
  return (
    <section className="grid grid-cols-1 bg-nav lg:grid-cols-[1fr_2fr_280px] lg:min-h-[calc(100vh-8rem)]">
      {/* Title block */}
      <div
        className="hero-fade-in flex flex-col justify-center gap-5 px-8 py-16 lg:px-20"
        style={{ animationDelay: "100ms" }}
      >
        <p className="type-pre-title text-ink">Paphos</p>
        <div className="leading-none">
          <span className="block type-hero-italic text-hero-green">
            Archaeological
          </span>
          <span className="block type-hero-strong text-hero-green">Museum</span>
        </div>
        <div className="h-px w-12 bg-hero-gold" />
        <h1 className="font-hero text-[clamp(2.75rem,6vw,4.25rem)] font-medium leading-[1.06] text-ink">
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

      {/* 3D model — cycles through the artifact pool */}
      <div
        className="hero-fade-in relative min-h-120"
        style={{ animationDelay: "300ms" }}
      >
        <HeroModel />
        <div className="pointer-events-none absolute inset-x-0 bottom-6 text-center">
          <span className="type-scroll text-ink/50">Scroll to Explore ↓</span>
        </div>
      </div>

      {/* Events — arc on desktop, pills on mobile (component handles both) */}
      <div className="hero-fade-in" style={{ animationDelay: "500ms" }}>
        <EventClock />
      </div>
    </section>
  );
}
