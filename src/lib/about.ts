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
  id: string;
  name: string;
  // Short locational descriptor shown in the expanded card (orange line).
  location: string;
  // Chronological periods, rendered with "→" separators.
  periods: string[];
  // The descriptive paragraph shown when the site is selected.
  body: string;
  // Decimal coordinates of the archaeological site (researched, WGS84).
  lat: number;
  lng: number;
};

export const SITE_LOCATIONS: SiteLocation[] = [
  {
    id: "nea-paphos",
    name: "Nea Paphos",
    location: "Coastal, present-day Pafos city centre",
    periods: ["Hellenistic", "Roman", "Early Christian"],
    body: "The site of ancient Cyprus's metropolitan capital, yielding some of the museum's most celebrated pieces from the Hellenistic and Roman periods. Key finds include a rare marble bust of Aphrodite and a marble statue of Asklepios, both displayed in Room 3.",
    // Paphos Archaeological Park, Kato Pafos
    lat: 34.7583,
    lng: 32.4056,
  },
  {
    id: "palaipafos",
    name: "Palaipafos (Kouklia)",
    location: "~16km east of Pafos town",
    periods: ["Late Bronze Age", "Classical", "Hellenistic"],
    body: "The primary source of exhibits for the museum, representing the ancient city that grew into a major centre of Cypriot civilisation. Finds span multiple periods from prehistoric times through the Classical era, including coins cut from the mint of Pafos.",
    // Sanctuary of Aphrodite, Kouklia village
    lat: 34.7064,
    lng: 32.5829,
  },
  {
    id: "marion-arsinoe",
    name: "Marion–Arsinoe (Polis)",
    location: "~35km north of Pafos, on the north coast",
    periods: [
      "Neolithic",
      "Classical",
      "Hellenistic",
      "Roman",
      "Byzantine",
      "Medieval",
    ],
    body: "One of the three principal excavation sources for the museum's collection, contributing finds across a wide chronological range. Its most significant exhibit is a tombstone bearing the Cypro-syllabic script, displayed in the Iron Age and Classical room.",
    // Ancient Marion / Arsinoe, modern Polis Chrysochous
    lat: 35.035,
    lng: 32.4219,
  },
  {
    id: "kissonerga",
    name: "Kissonerga",
    location: "~8km north of Pafos town, coastal",
    periods: [
      "Pre-Pottery Neolithic (c. 7000 BCE)",
      "Chalcolithic",
      "Early Bronze Age",
    ],
    body: "A site in the Pafos district whose excavations have contributed supplementary finds to the museum's holdings. Its objects form part of the broader collection representing the development of civilisation across the district.",
    // Kissonerga-Mosphilia / Mylouthkia, Kissonerga village
    lat: 34.8282,
    lng: 32.4071,
  },
  {
    id: "lempa",
    name: "Lempa",
    location: "~7km north of Pafos town, inland from Kissonerga",
    periods: ["Chalcolithic (c. 3800–2500 BCE)", "Medieval"],
    body: "An excavation site within the Pafos region that has yielded finds supplementing the main collection. Its contributions sit alongside those from Kissonerga and Pegeia in representing the wider district's archaeological record.",
    // Lemba Chalcolithic site, Lempa (Lemba) village
    lat: 34.8118,
    lng: 32.4061,
  },
  {
    id: "pegeia",
    name: "Pegeia",
    location: "~18km northwest of Pafos, coastal cliffs area",
    periods: ["Chalcolithic", "Bronze Age", "Classical"],
    body: "A supplementary excavation site in the Pafos district contributing finds to the museum's broader collection. Specific objects from Pegeia complement the primary site finds across the five exhibition rooms.",
    // Agios Georgios tis Pegeias, Cape Drepanon
    lat: 34.9,
    lng: 32.326,
  },
];

export const SITE_LOCATIONS_INTRO =
  "The museum's exhibits originate mainly from Palaipafos (Kouklia), Nea Pafos and Marion–Arsinoe (Polis), supplemented by finds from Pegeia, Kissonerga and Lempa, six sites across western Cyprus that together trace 12,500 years of unbroken human presence.";
