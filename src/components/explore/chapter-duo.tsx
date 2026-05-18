import type { Chapter } from "@/lib/explore";
import { Reveal } from "../reveal";
import { withEmphasis } from "./emphasis";
import { KeyFinds } from "./key-finds";

function DuoColumn({ chapter }: { chapter: Chapter }) {
  return (
    <div className="flex flex-col">
      <p className="type-pre-title text-flame">{chapter.number}</p>
      <h2 className="mt-4 font-hero text-2xl font-medium leading-snug tracking-[-0.01em] text-ink lg:text-3xl">
        {chapter.title}
      </h2>
      <p className="mt-2 font-hero text-base font-medium text-period-hellenistic lg:text-lg">
        {chapter.subtitle}
      </p>
      <p className="mt-3 type-small font-medium text-period-hellenistic/80">
        Date range: {chapter.dateRange}
      </p>

      <div className="mt-5 space-y-4 type-body text-ink/65">
        {chapter.body.map((paragraph) => (
          <p key={paragraph}>{withEmphasis(paragraph, chapter.emphasis)}</p>
        ))}
      </div>

      <div className="mt-auto pt-7">
        <KeyFinds finds={chapter.keyFinds} emphasis={chapter.emphasis} />
      </div>
    </div>
  );
}

export function ChapterDuo({ chapters }: { chapters: Chapter[] }) {
  return (
    <Reveal className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
      {chapters.map((chapter, i) => (
        <div
          key={chapter.id}
          className={
            i === 0
              ? "lg:pr-12 xl:pr-16"
              : "lg:border-l lg:border-gold/40 lg:pl-12 xl:pl-16"
          }
        >
          <DuoColumn chapter={chapter} />
        </div>
      ))}
    </Reveal>
  );
}
