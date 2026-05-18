import type { Era } from "@/lib/timeline";

// Short rule · LABEL · long rule to the column edge (per the Figma).
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden className="h-px w-6 shrink-0 bg-gold/60" />
      <p className="type-eyebrow shrink-0 text-hero-gold">{children}</p>
      <span aria-hidden className="h-px flex-1 bg-gold/40" />
    </div>
  );
}

export function EraDetails({ era }: { era: Era }) {
  return (
    <div>
      <SectionLabel>Key Events</SectionLabel>
      <ul className="mt-5 space-y-3">
        {era.keyEvents.map((event) => (
          <li key={event} className="flex gap-3">
            <span aria-hidden className="mt-px font-hero text-hero-gold">
              +
            </span>
            <span className="type-body text-ink/70">{event}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <SectionLabel>Featured Artifacts</SectionLabel>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {era.artifacts.map((artifact) => (
            <li
              key={artifact}
              className="rounded-md border border-gold/50 bg-gold/10 px-3.5 py-1.5 type-small text-hero-gold"
            >
              {artifact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
