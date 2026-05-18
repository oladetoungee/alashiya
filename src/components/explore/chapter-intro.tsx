import type { Chapter, Era } from "@/lib/explore";
import { withEmphasis } from "./emphasis";

// Subtitle + date-range tone per era (static strings so Tailwind keeps them).
// `period-prehistory` is a light stone swatch — unreadable as text — so the
// prehistory chapters borrow the readable Hellenistic blue, matching the Figma.
const ERA_TONE: Record<Era, { sub: string; date: string }> = {
  prehistory: {
    sub: "text-period-hellenistic",
    date: "text-period-hellenistic/80",
  },
  bronze: { sub: "text-period-bronze", date: "text-period-bronze/80" },
  hellenistic: {
    sub: "text-period-hellenistic",
    date: "text-period-hellenistic/80",
  },
  roman: { sub: "text-period-roman", date: "text-period-roman/80" },
};

export function ChapterIntro({ chapter }: { chapter: Chapter }) {
  const tone = ERA_TONE[chapter.era];

  return (
    <>
      <p className="type-pre-title text-flame">{chapter.number}</p>
      <h2 className="mt-4 font-hero text-2xl font-medium leading-snug tracking-[-0.01em] text-ink lg:text-3xl">
        {chapter.title}
      </h2>
      <p
        className={`mt-2 font-hero text-base font-medium lg:text-lg ${tone.sub}`}
      >
        {chapter.subtitle}
      </p>
      <p className={`mt-3 type-small font-medium ${tone.date}`}>
        Date range: {chapter.dateRange}
      </p>

      <div className="mt-5 space-y-4 type-body text-ink/65">
        {chapter.body.map((paragraph) => (
          <p key={paragraph}>{withEmphasis(paragraph, chapter.emphasis)}</p>
        ))}
      </div>
    </>
  );
}
