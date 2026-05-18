import { TIMELINE_ERAS } from "@/lib/timeline";
import { EraSection } from "./era-section";

export function TimelineEras() {
  return (
    <div className="bg-surface">
      {TIMELINE_ERAS.map((era) => (
        <EraSection key={era.id} era={era} />
      ))}
    </div>
  );
}
