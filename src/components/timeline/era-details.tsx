import type { Era } from "@/lib/timeline";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden className="h-px w-6 bg-flame/50" />
      <p className="type-eyebrow text-flame">{children}</p>
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
            <span aria-hidden className="mt-px font-hero text-flame">
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
              className="rounded-full border border-gold/40 px-3.5 py-1.5 type-small text-ink/65"
            >
              {artifact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
