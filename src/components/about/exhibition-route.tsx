import Image from "next/image";
import {
  EXHIBITION_ROUTE,
  ROUTE_PERIODS,
  type RoutePeriod,
} from "@/lib/about";
import { IMAGES } from "@/lib/images";
import { Reveal } from "../reveal";

// Static class strings (no dynamic concatenation) so Tailwind keeps them.
const SWATCH: Record<RoutePeriod["swatch"], string> = {
  prehistory: "bg-period-prehistory",
  bronze: "bg-period-bronze",
  hellenistic: "bg-period-hellenistic",
  roman: "bg-period-roman",
};

const JOURNEY_IMAGES = [
  IMAGES.aboutJourney1,
  IMAGES.aboutJourney2,
  IMAGES.aboutJourney3,
  IMAGES.aboutJourney4,
];

// Phrases the Figma sets in bold within the second paragraph.
const EMPHASIS = ["marked by a different colour", "characteristics of each period"];

function withEmphasis(text: string) {
  const pattern = new RegExp(`(${EMPHASIS.join("|")})`, "g");
  return text.split(pattern).map((part, i) =>
    EMPHASIS.includes(part) ? (
      <strong key={i} className="font-semibold text-ink/80">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function ExhibitionRoute() {
  return (
    <section className="bg-nav px-6 py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="type-pre-title text-flame">The Exhibition Route</p>
          <div className="mt-2 h-px w-12 bg-flame" />
          <h2 className="mt-8 font-hero text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink lg:text-5xl">
            A Journey Through Time
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="grid grid-cols-2 gap-4">
            {JOURNEY_IMAGES.map((img) => (
              <div
                key={img.src}
                className="relative aspect-368/248 w-full overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </Reveal>

          <Reveal delay={120} className="flex flex-col">
            <h3 className="font-hero text-2xl font-medium leading-snug tracking-[-0.01em] text-ink lg:text-3xl">
              {EXHIBITION_ROUTE.heading}
            </h3>

            <div className="mt-6 space-y-4 type-body text-ink/60">
              <p>{EXHIBITION_ROUTE.body[0]}</p>
              <p>{withEmphasis(EXHIBITION_ROUTE.body[1])}</p>
            </div>

            <ul className="mt-10 space-y-4">
              {ROUTE_PERIODS.map((period) => (
                <li key={period.id} className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className={`h-4 w-8 shrink-0 rounded-xs ${SWATCH[period.swatch]}`}
                  />
                  <span className="type-bold text-ink">{period.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
