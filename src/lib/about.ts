// Single source of truth for the About page copy and structured data.
// Components read from here — no inline strings, mirroring lib/visit.ts etc.

export const ABOUT_INTRO =
  "From the first Epipalaeolithic settlements to the height of Roman Cyprus, the Pafos District Archaeological Museum traces 12,500 years of unbroken human presence across five rooms of extraordinary finds.";

export const ABOUT_HISTORY =
  'In 1964, shortly after the Independence of Cyprus, the Archaeological Museum of the Pafos District opened to the public, originally with two rooms. It was gradually extended in 1965, 1977 and 1987. The museum was entirely reorganised based on a new museological approach with co-funding from the European Regional Development Fund in the framework of the Operational Programme "Competitiveness and Sustainable Development" for the Programming Period 2014–2020.';

export type GlanceStat = {
  id: string;
  value: string;
  label: string;
};

export const GLANCE_STATS: GlanceStat[] = [
  { id: "years", value: "12,500+", label: "Years of history covered" },
  { id: "rooms", value: "05", label: "Exhibition rooms" },
  { id: "earliest", value: "10,500 BC", label: "Earliest exhibit date" },
  { id: "latest", value: "1700 AD", label: "Latest exhibit date" },
];

export const EXHIBITION_ROUTE = {
  heading: "The Exhibition contains objects from excavations in the District of Pafos",
  body: [
    "They are representative of the development of civilisation from the EpiPaleolithic period to the Roman period, that is from the prehistoric settlements to Nea Pafos becoming the metropolis of Cyprus.",
    "The visitor's route follows a chronological development; each period is marked by a different colour, whereas thematic entities highlight the characteristics of each period.",
  ],
};

// `swatch` maps to the --period-* color tokens in globals.css (no hex here).
export type RoutePeriod = {
  id: string;
  label: string;
  swatch: "prehistory" | "bronze" | "hellenistic" | "roman";
};

export const ROUTE_PERIODS: RoutePeriod[] = [
  { id: "prehistory", label: "Prehistory (Lithic periods)", swatch: "prehistory" },
  { id: "bronze", label: "Bronze Age – Iron Age", swatch: "bronze" },
  { id: "hellenistic", label: "Hellenistic Periods", swatch: "hellenistic" },
  { id: "roman", label: "Roman Period & Further", swatch: "roman" },
];

export const SITE_LOCATIONS = [
  "Nea Paphos",
  "Palaipafos (Kouklia)",
  "Marion–Arsinoe (Polis)",
  "Kissonerga",
  "Lempa",
  "Pegeia",
];

export const SITE_LOCATIONS_INTRO =
  "From the first Epipalaeolithic settlements to the height of Roman Cyprus, the Pafos District Archaeological Museum traces 12,500 years of unbroken human presence across five rooms of extraordinary finds.";
