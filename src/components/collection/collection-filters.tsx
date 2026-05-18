import {
  ALL_PERIODS,
  COLLECTION_PERIODS,
  type CollectionPeriod,
} from "@/lib/collection";

type Selection = typeof ALL_PERIODS | CollectionPeriod;

export function CollectionFilters({
  active,
  onSelect,
}: {
  active: Selection;
  onSelect: (next: Selection) => void;
}) {
  const options: Selection[] = [ALL_PERIODS, ...COLLECTION_PERIODS];

  return (
    <div className="border-b border-gold/40">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-5 lg:px-20">
        {options.map((option) => {
          const selected = option === active;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(option)}
              className={`rounded-full px-5 py-2 font-ui text-sm transition-colors ${
                selected
                  ? "bg-gold text-card-ink"
                  : "border border-gold/70 text-ink/70 hover:border-flame hover:text-ink"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
