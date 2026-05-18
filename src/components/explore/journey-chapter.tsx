import type { Chapter } from "@/lib/explore";
import { Reveal } from "../reveal";
import { ChapterGallery } from "./chapter-gallery";
import { ChapterIntro } from "./chapter-intro";
import { KeyFinds } from "./key-finds";

export function JourneyChapter({ chapter }: { chapter: Chapter }) {
  const imagesLeft = chapter.layout === "text-right";

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={imagesLeft ? "lg:order-2" : "lg:order-1"}>
        <ChapterIntro chapter={chapter} />
        <div className="mt-7">
          <KeyFinds finds={chapter.keyFinds} emphasis={chapter.emphasis} />
        </div>
      </Reveal>

      <Reveal
        delay={120}
        className={imagesLeft ? "lg:order-1" : "lg:order-2"}
      >
        <ChapterGallery images={chapter.images} />
      </Reveal>
    </div>
  );
}
