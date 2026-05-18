// Single source of truth for the Explore page copy and structured data.
// Components read from here — no inline strings, mirroring lib/about.ts etc.

import type { ImageKey } from "./images";

export const EXPLORE_INTRO = {
  eyebrow: "Explore the Museum",
  heading: ["Follow the Route", "Through Time"],
  subtitle:
    "The visitor's route follows a chronological development, each period marked by a different colour.",
  prompt: "Or, Find a different way to explore the history of Cyprus:",
};

// `accent` maps to a static class in the component (no dynamic class names).
export type ExploreModeCard = {
  id: string;
  title: string;
  description: string;
  accent: "era" | "stories";
  href: string;
};

export const EXPLORE_MODE_CARDS: ExploreModeCard[] = [
  {
    id: "era",
    title: "Explore by Era",
    description: "Go through a historical period and dive deep.",
    accent: "era",
    href: "/timeline",
  },
  {
    id: "stories",
    title: "Explore by Stories",
    description: "Discover a Day in the Cypriot Life with Alashiya.",
    accent: "stories",
    href: "/stories",
  },
];

export type Era = "prehistory" | "bronze" | "hellenistic" | "roman";

export type Chapter = {
  id: string;
  number: string;
  era: Era;
  title: string;
  subtitle: string;
  dateRange: string;
  body: string[];
  // Phrases bolded inline within body/keyFinds, à la about/exhibition-route.
  emphasis?: string[];
  keyFinds: string[];
  // Gallery photos for this chapter, keyed into the image registry.
  // Empty for "duo" chapters (Ch1 + Ch2 are text-only two-up).
  images: ImageKey[];
  // "duo" chapters render two-up with a divider (Ch1 + Ch2 in the Figma).
  layout: "duo" | "text-left" | "text-right";
};

export const EXPLORE_CHAPTERS: Chapter[] = [
  {
    id: "epipalaeolithic",
    number: "Chapter 1",
    era: "prehistory",
    title: "Epipalaeolithic & Neolithic Age",
    subtitle: "The First Footprints on Cyprus",
    dateRange: "10,500 – 3,900 BC",
    body: [
      "Hunter-gatherer settlements at Agios Ioannis-Roudias (11th–10th millennium BC) and the world-class prehistoric wells at Kissonerga-Mylouthia (9th millennium BC), among the earliest known in the world.",
    ],
    keyFinds: [
      'Wells of Kissonerga-Mylouthia — "Among the earliest wells ever discovered worldwide"',
      "Evidence of hunter-gatherer mountain settlement at Agios Ioannis-Roudias",
    ],
    images: [],
    layout: "duo",
  },
  {
    id: "chalcolithic",
    number: "Chapter 2",
    era: "prehistory",
    title: "Chalcolithic Period",
    subtitle: "The Birth of Craft and Copper",
    dateRange: "3,900 – 2,500 BC",
    body: [
      "The earliest copper-based objects ever found in Cyprus. Distinctive picrolite cruciform figurines, the iconic art form of prehistoric Cyprus, and a unique figurine manufacturing workshop at Souskiou-Laona. The reconstructed House of Pithos from Kissonerga-Mosfilia reveals early social organisation and overseas contacts.",
    ],
    keyFinds: [
      "Earliest copper objects in Cyprus · Souskiou-Laona",
      "Picrolite cruciform figurines + manufacturing workshop",
      "Reconstructed House of Pithos · Kissonerga-Mosfilia",
    ],
    images: [],
    layout: "duo",
  },
  {
    id: "bronze",
    number: "Chapter 3",
    era: "bronze",
    title: "Bronze Age (Early, Middle & Late)",
    subtitle: "Copper, Trade, and the Rise of Palaipafos",
    // Mirrors the Figma copy exactly (content owned by lib/explore.ts).
    dateRange: "10,500 – 3,900 BC",
    body: [
      "Early/Middle: Settlements at Kissonerga-Skalia; pottery from cemeteries at Kissonerga-Ammoudia. Copper exploitation, agriculture, spinning and weaving.",
      "Late: Palaipafos (Kouklia) emerges as a major urban center, controlling copper production and trade. The sacred sanctuary of Aphrodite is established. The fortified settlement of Maa-Paliokastro marks the borders of the kingdom. Reconstructed Cypro-Geometric and Cypro-Archaic elite burials with luxury prestige objects.",
    ],
    emphasis: ["Early/Middle:", "Late:"],
    keyFinds: [
      "Palaipafos · Seat of the Aphrodite sanctuary and copper trade centre",
      'Maa-Paliokastro fortified settlement · "Period of crisis" in the Eastern Mediterranean',
      "Two reconstructed elite burials · Luxury goods echoing Homer's descriptions",
    ],
    images: ["exploreBronze1", "exploreBronze2"],
    layout: "text-left",
  },
  {
    id: "iron",
    number: "Chapter 4",
    era: "bronze",
    title: "Iron Age",
    subtitle: "The Age of City-Kingdoms",
    dateRange: "1,050 – 310 BC",
    body: [
      "The city-kingdoms are known from excavations, inscriptions, coins (from late 6th c. BC) and ancient texts. Palaipafos sits at the centre of its kingdom, represented by pottery, male statues, and votive figurines from rural sanctuaries. The Cypro-syllabic script, descended from Cypro-Minoan, is used for dedicatory inscriptions and to write Greek, lasting until the Hellenistic period.",
    ],
    emphasis: ["The Cypro-syllabic script"],
    keyFinds: [
      "Earliest coins from the Pafos mint · late 6th century BC",
      "Series of male statues · luxury dedications to the Aphrodite sanctuary",
      'Cypro-syllabic inscriptions · "A direct line of communication across millennia"',
    ],
    images: ["exploreIron1", "exploreIron2"],
    layout: "text-left",
  },
  {
    id: "hellenistic",
    number: "Chapter 5",
    era: "hellenistic",
    title: "Hellenistic Period",
    subtitle: "Nea Pafos: Capital of an Island",
    dateRange: "4th century BC – 1st century BC",
    body: [
      "Nea Pafos founded in the 4th century BC as the financial and administrative capital of Cyprus, one of the largest ports in the Eastern Mediterranean. Wealth visible in marble statues of Aphrodite and mythological figures, fine ceramics, glass vessels, jewellery, ivory, and precious metals. The Pafos mint issues coins in multiple metals. Burial customs mirror the broader Greek world like sarcophagi, stelae, and funerary statues.",
    ],
    keyFinds: [
      "Marble bust of Aphrodite found in public and private buildings of Nea Pafos",
      'Amphora collection · "evidence of Mediterranean-wide trade"',
      "Lead weights and scale, tools of the ancient Nea Pafos marketplace",
    ],
    images: ["exploreHellenistic1", "exploreHellenistic2", "exploreHellenistic3"],
    layout: "text-right",
  },
  {
    id: "roman",
    number: "Chapter 6",
    era: "roman",
    title: "Roman Period",
    subtitle: "Cyprus at the Height of Empire",
    dateRange: "1st century BC – 4th century AD",
    body: [
      "Wall-paintings of the Muses from the House of Aion (4th c. AD) evoke the opulent interiors of Roman villas. A reconstructed Hellenistic/Roman kitchen shows daily domestic life. Metal medical instruments and ceramic hot-water bottles shaped like body parts mark Pafos as an important medical centre. The page's final exhibit, the largest inscription ever found in Pafos. It's an honorary dedication to emperors Antoninus Pius and Marcus Aurelius for the construction of the city's theatre.",
    ],
    emphasis: ["the last thing the visitor sees"],
    keyFinds: [
      "Muse wall-paintings from the House of Aion · 4th century AD",
      'Medical instruments from surgeons’ tombs · "Pafos as a Roman medical centre"',
      "Honorary inscription to Antoninus Pius & Marcus Aurelius · largest ever found in Pafos, 2nd c. AD, the last thing the visitor sees",
    ],
    images: ["exploreRoman1", "exploreRoman2"],
    layout: "text-left",
  },
];

// The full-bleed gallery band sits directly after this chapter (the Figma
// places the wide vitrine panorama between Bronze Age and Iron Age).
export const GALLERY_BAND_AFTER = "bronze";
