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

export type SiteLocation = {
  name: string;
  // Decimal coordinates of the archaeological site (researched, WGS84).
  lat: number;
  lng: number;
};

export const SITE_LOCATIONS: SiteLocation[] = [
  // Paphos Archaeological Park, Kato Pafos
  { name: "Nea Paphos", lat: 34.7583, lng: 32.4056 },
  // Sanctuary of Aphrodite, Kouklia village
  { name: "Palaipafos (Kouklia)", lat: 34.7064, lng: 32.5829 },
  // Ancient Marion / Arsinoe, modern Polis Chrysochous
  { name: "Marion–Arsinoe (Polis)", lat: 35.035, lng: 32.4219 },
  // Kissonerga-Mosphilia / Mylouthkia, Kissonerga village
  { name: "Kissonerga", lat: 34.8282, lng: 32.4071 },
  // Lemba Chalcolithic site, Lempa (Lemba) village
  { name: "Lempa", lat: 34.8118, lng: 32.4061 },
  // Agios Georgios tis Pegeias, Cape Drepanon
  { name: "Pegeia", lat: 34.9, lng: 32.326 },
];

export const SITE_LOCATIONS_INTRO =
  "The museum's exhibits originate mainly from Palaipafos (Kouklia), Nea Pafos and Marion–Arsinoe (Polis), supplemented by finds from Pegeia, Kissonerga and Lempa, six sites across western Cyprus that together trace 12,500 years of unbroken human presence.";
