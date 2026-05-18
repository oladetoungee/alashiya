import { TIMELINE_OUTRO } from "@/lib/timeline";
import { Reveal } from "../reveal";
import { TimelineOrnament } from "./timeline-ornament";

export function TimelineOutro() {
  return (
    <section className="bg-surface px-6 pb-28 lg:px-20 lg:pb-36">
      <Reveal className="mx-auto max-w-2xl text-center">
        <TimelineOrnament />
        <h2 className="mt-10 font-hero text-3xl font-medium leading-tight tracking-[-0.02em] text-ink lg:text-4xl">
          {TIMELINE_OUTRO.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl type-body text-ink/55">
          {TIMELINE_OUTRO.body}
        </p>
      </Reveal>
    </section>
  );
}
