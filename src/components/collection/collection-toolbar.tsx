import { ChevronDown } from "lucide-react";
import { COLLECTION_SORTS, type CollectionSort } from "@/lib/collection";

export function CollectionToolbar({
  count,
  sort,
  onSortChange,
}: {
  count: number;
  sort: CollectionSort;
  onSortChange: (next: CollectionSort) => void;
}) {
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-20">
      <p className="type-body text-ink/55">
        Showing {count} object{count === 1 ? "" : "s"}
      </p>

      <label className="flex items-center gap-3">
        <span className="type-body text-ink/55">Sort:</span>
        <span className="relative">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as CollectionSort)}
            className="cursor-none appearance-none bg-transparent py-1 pr-7 font-ui text-sm font-medium text-ink focus:outline-none"
          >
            {COLLECTION_SORTS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/55"
          />
        </span>
      </label>
    </div>
  );
}
