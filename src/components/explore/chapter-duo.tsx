import type { Chapter } from "@/lib/explore";
import { Reveal } from "../reveal";
import { ChapterIntro } from "./chapter-intro";
import { KeyFinds } from "./key-finds";

function DuoColumn({ chapter }: { chapter: Chapter }) {
  return (
    <div className="flex flex-col">
      <ChapterIntro chapter={chapter} />
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
