import type { ImageKey } from "./images";

/*
  Single source of truth for the Permanent Collection page.
  Artefact photography is not on site yet — the team is still collecting it in
  Cyprus. Until it lands, cards fall back to a tinted placeholder (same pattern
  as news-section). When a photo arrives, register it in src/lib/images.ts and
  set `image` on the object below — no component change needed.
*/

// Chronological period buckets, in the order shown by the filter bar.
// "All Periods" is rendered by the filter component itself, not stored here.
export const COLLECTION_PERIODS = [
  "Paleolithic",
  "Neolithic",
  "Chalcolithic",
  "Bronze Age",
  "Iron Age",
  "Classical",
  "Hellenistic",
  "Roman",
  "Byzantine",
] as const;

export type CollectionPeriod = (typeof COLLECTION_PERIODS)[number];

export const ALL_PERIODS = "All Periods" as const;

// The catalogue is far larger than the sample below; the toolbar shows this
// representative total when no period filter is active (matches the design).
export const COLLECTION_TOTAL = 248;

export type CollectionObject = {
  id: string;
  name: string;
  category: string; // overlaid pill, e.g. "Terracotta Sculpture"
  period: CollectionPeriod; // bucket the filter pills key on
  era: string; // display line, e.g. "Archaic, 600–480 BC"
  sortYear: number; // signed year for ordering (BC negative, AD positive)
  href: string;
  image?: ImageKey; // photo, keyed into the image registry once it lands
};

export const COLLECTION_OBJECTS: CollectionObject[] = [
  {
    id: "enthroned-goddess",
    name: "Enthroned Goddess",
    category: "Terracotta Sculpture",
    period: "Iron Age",
    era: "Archaic, 600–480 BC",
    sortYear: -600,
    href: "/collection/enthroned-goddess",
  },
  {
    id: "amphoroid-krater",
    name: "Amphoroid Krater",
    category: "Mycenaean Pottery",
    period: "Bronze Age",
    era: "Late Bronze Age, c. 1300 BC",
    sortYear: -1300,
    href: "/collection/amphoroid-krater",
  },
  {
    id: "gold-diadem",
    name: "Gold Diadem",
    category: "Gold Jewelry",
    period: "Hellenistic",
    era: "Hellenistic, 300–50 BC",
    sortYear: -300,
    href: "/collection/gold-diadem",
  },
  {
    id: "mosaic-floor-panel",
    name: "Mosaic Floor Panel",
    category: "Floor Mosaic",
    period: "Roman",
    era: "Roman, 2nd century AD",
    sortYear: 150,
    href: "/collection/mosaic-floor-panel",
  },
  {
    id: "marble-aphrodite",
    name: "Marble Aphrodite",
    category: "Marble Sculpture",
    period: "Roman",
    era: "Roman, 1st century BC",
    sortYear: -50,
    href: "/collection/marble-aphrodite",
  },
  {
    id: "limestone-sarcophagus",
    name: "Limestone Sarcophagus",
    category: "Funerary Art",
    period: "Classical",
    era: "Classical, 500–325 BC",
    sortYear: -500,
    href: "/collection/limestone-sarcophagus",
  },
];

export type CollectionSort = "oldest" | "newest" | "name";

export const COLLECTION_SORTS: { value: CollectionSort; label: string }[] = [
  { value: "oldest", label: "Date (oldest)" },
  { value: "newest", label: "Date (newest)" },
  { value: "name", label: "Name (A–Z)" },
];

export function sortObjects(
  objects: CollectionObject[],
  sort: CollectionSort,
): CollectionObject[] {
  const next = [...objects];
  if (sort === "name") {
    return next.sort((a, b) => a.name.localeCompare(b.name));
  }
  return next.sort((a, b) =>
    sort === "oldest" ? a.sortYear - b.sortYear : b.sortYear - a.sortYear,
  );
}
