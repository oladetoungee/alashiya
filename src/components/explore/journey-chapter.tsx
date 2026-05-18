import type { Chapter } from "@/lib/explore";
import { Reveal } from "../reveal";
import { ChapterGallery } from "./chapter-gallery";
import { withEmphasis } from "./emphasis";
import { KeyFinds } from "./key-finds";

export function JourneyChapter({ chapter }: { chapter: Chapter }) {
  const imagesLeft = chapter.layout === "text-right";

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={imagesLeft ? "lg:order-2" : "lg:order-1"}>
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
            <p key={paragraph}>
              {withEmphasis(paragraph, chapter.emphasis)}
            </p>
          ))}
        </div>

        <div className="mt-7">
          <KeyFinds finds={chapter.keyFinds} emphasis={chapter.emphasis} />
        </div>
      </Reveal>

      <Reveal
        delay={120}
        className={imagesLeft ? "lg:order-1" : "lg:order-2"}
      >
        <ChapterGallery era={chapter.era} count={chapter.gallery} />
      </Reveal>
    </div>
  );
}
