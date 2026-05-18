"use client";

import { useMemo, useState } from "react";
import {
  ALL_PERIODS,
  COLLECTION_OBJECTS,
  COLLECTION_TOTAL,
  type CollectionPeriod,
  type CollectionSort,
  sortObjects,
} from "@/lib/collection";
import { CollectionCard } from "./collection-card";
import { CollectionFilters } from "./collection-filters";
import { CollectionToolbar } from "./collection-toolbar";

type Selection = typeof ALL_PERIODS | CollectionPeriod;

export function CollectionExplorer() {
  const [period, setPeriod] = useState<Selection>(ALL_PERIODS);
  const [sort, setSort] = useState<CollectionSort>("oldest");

  const objects = useMemo(() => {
    const filtered =
      period === ALL_PERIODS
        ? COLLECTION_OBJECTS
        : COLLECTION_OBJECTS.filter((o) => o.period === period);
    return sortObjects(filtered, sort);
  }, [period, sort]);

  // The full catalogue total stands in when nothing is filtered (per design);
  // a specific period reports its actual matches.
  const count = period === ALL_PERIODS ? COLLECTION_TOTAL : objects.length;

  return (
    <section>
      <CollectionFilters active={period} onSelect={setPeriod} />
      <CollectionToolbar count={count} sort={sort} onSortChange={setSort} />

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-20 lg:pb-32">
        {objects.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {objects.map((object, i) => (
              <CollectionCard key={object.id} object={object} index={i} />
            ))}
          </div>
        ) : (
          <p className="py-24 text-center type-body text-ink/50">
            No objects from this period are on display yet.
          </p>
        )}
      </div>
    </section>
  );
}
