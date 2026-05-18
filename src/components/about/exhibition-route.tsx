import {
  EXHIBITION_ROUTE,
  ROUTE_PERIODS,
  type RoutePeriod,
} from "@/lib/about";
import { Reveal } from "../reveal";

// Static class strings (no dynamic concatenation) so Tailwind keeps them.
const SWATCH: Record<RoutePeriod["swatch"], string> = {
  prehistory: "bg-period-prehistory",
  bronze: "bg-period-bronze",
  hellenistic: "bg-period-hellenistic",
  roman: "bg-period-roman",
};

// Tonal placeholders evoking the four gallery photos — until photography lands.
const TILES = [
  "bg-linear-to-br from-[#c9a44e] via-[#b08a3c] to-[#7c5f25]",
  "bg-linear-to-br from-[#a5471f] via-[#8f3d22] to-[#5f2814]",
  "bg-linear-to-br from-[#5b5b56] via-[#46463f] to-[#2c2c27]",
  "bg-linear-to-br from-[#2a4a73] via-[#234063] to-[#152a47]",
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
    <section className="bg-bg px-6 py-24 lg:px-20 lg:py-32">
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
            {TILES.map((tile, i) => (
              <div
                key={i}
                aria-hidden
                className={`aspect-4/3 w-full overflow-hidden rounded-sm ${tile}`}
              />
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
                    className={`h-5 w-5 shrink-0 rounded-[2px] ${SWATCH[period.swatch]}`}
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
