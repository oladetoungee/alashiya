import { withEmphasis } from "./emphasis";

export function KeyFinds({
  finds,
  emphasis,
}: {
  finds: string[];
  emphasis?: string[];
}) {
  return (
    <div className="border border-ink/10 bg-surface p-6 lg:p-7">
      <p className="type-eyebrow text-flame">Key Finds</p>
      <div className="mt-3 h-px w-full bg-ink/10" />
      <ul className="mt-4 space-y-3">
        {finds.map((find) => (
          <li key={find} className="flex gap-3">
            <span
              aria-hidden
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
            />
            <span className="type-small text-ink/70">
              {withEmphasis(find, emphasis)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
