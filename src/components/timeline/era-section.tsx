import type { Era } from "@/lib/timeline";
import { Reveal } from "../reveal";
import { EraDetails } from "./era-details";
import { EraIllustration } from "./era-illustration";

export function EraSection({ era }: { era: Era }) {
  const textLeft = era.layout === "text-left";

  const description = (
    <p className="type-body leading-relaxed text-ink/65 lg:text-[0.95rem]">
      {era.description}
    </p>
  );
  const details = <EraDetails era={era} />;

  return (
    <section
      id={era.id}
      className="scroll-mt-24 px-6 py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="type-eyebrow text-flame">{era.eyebrow}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-3 lg:items-center lg:gap-16">
          {/* Center column first in the DOM so mobile leads with the artwork */}
          <Reveal className="lg:col-start-2 lg:row-start-1">
            <EraIllustration era={era} />
          </Reveal>

          <Reveal
            delay={120}
            className={`lg:row-start-1 ${
              textLeft ? "lg:col-start-1" : "lg:col-start-3"
            }`}
          >
            {description}
          </Reveal>

          <Reveal
            delay={120}
            className={`lg:row-start-1 ${
              textLeft ? "lg:col-start-3" : "lg:col-start-1"
            }`}
          >
            {details}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
