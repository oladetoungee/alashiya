import { EXPLORE_CHAPTERS } from "@/lib/explore";
import { ChapterDuo } from "./chapter-duo";
import { GalleryBand } from "./gallery-band";
import { JourneyChapter } from "./journey-chapter";

const byId = (id: string) => {
  const chapter = EXPLORE_CHAPTERS.find((c) => c.id === id);
  if (!chapter) throw new Error(`Unknown explore chapter: ${id}`);
  return chapter;
};

export function ExploreTimeline() {
  const duo = EXPLORE_CHAPTERS.filter((c) => c.layout === "duo");

  return (
    <>
      {/* Chapters 1 & 2 — two-up on white, divided by a gold rule */}
      <section className="bg-surface px-6 py-24 lg:px-20 lg:py-32">
        <ChapterDuo chapters={duo} />
      </section>

      {/* Bronze & Iron Age — warm blush region with the full-bleed panorama */}
      <section className="bg-era-bronze-bg py-24 lg:py-32">
        <div className="px-6 lg:px-20">
          <JourneyChapter chapter={byId("bronze")} />
        </div>
        <GalleryBand />
        <div className="mt-16 px-6 lg:mt-20 lg:px-20">
          <JourneyChapter chapter={byId("iron")} />
        </div>
      </section>

      {/* Hellenistic — cool blue region, gallery collage on the left */}
      <section className="bg-era-hellenistic-bg px-6 py-24 lg:px-20 lg:py-32">
        <JourneyChapter chapter={byId("hellenistic")} />
      </section>

      {/* Roman — back to white, the visitor route's final stop */}
      <section className="bg-surface px-6 py-24 lg:px-20 lg:py-32">
        <JourneyChapter chapter={byId("roman")} />
      </section>
    </>
  );
}
