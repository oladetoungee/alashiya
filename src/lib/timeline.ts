// Single source of truth for the Timeline page copy and structured data.
// Components read from here — no inline strings, mirroring lib/about.ts etc.

import type { ImageKey } from "./images";

export const TIMELINE_INTRO = {
  eyebrow: "Journey Through Time",
  heading: "12,500 Years of Cyprus",
  subtitle:
    "Explore the rich history of Cyprus from the earliest hunter-gatherers to the medieval period. Click on any pillar to discover more about each era.",
};

export type Era = {
  id: string;
  // Selector-card label, e.g. "Era I"
  label: string;
  // Section eyebrow, e.g. "Era I · Stone Age Cyprus"
  eyebrow: string;
  name: string;
  range: string;
  description: string;
  keyEvents: string[];
  artifacts: string[];
  // "text-left" → description left / key events right (mirrored for "text-right")
  layout: "text-left" | "text-right";
  // Optional — slots into the IMAGES registry once the era illustration lands.
  illustration?: ImageKey;
};

export const TIMELINE_ERAS: Era[] = [
  {
    id: "prehistory",
    label: "Era I",
    eyebrow: "Era I · Stone Age Cyprus",
    name: "Prehistory",
    range: "12,000 – 4,500 BCE",
    description:
      "The earliest evidence of human presence in Cyprus, from hunter-gatherers to the agricultural revolution. Permanent settlements emerged, pottery developed, and trade networks expanded across the eastern Mediterranean.",
    keyEvents: [
      "Fossilized remains at Aetokremnos (12,000 BCE)",
      "Development of semi-permanent settlements",
      "First agricultural communities at Khirokitia",
      "Introduction of pottery making",
      "Trade networks with Anatolia and the Levant",
    ],
    artifacts: [
      "Stone tools",
      "Clay pottery",
      "Stone vessels",
      "Figurines",
      "Agricultural implements",
    ],
    layout: "text-left",
  },
  {
    id: "ancient-history",
    label: "Era II",
    eyebrow: "Era II · Bronze & Iron Age",
    name: "Ancient History",
    range: "4,500 BCE – 325 BCE",
    description:
      "Cyprus becomes a major copper producer and trading hub. The Bronze and Iron Ages brought city-kingdoms, writing systems, and extensive international trade across the Mediterranean world.",
    keyEvents: [
      "Introduction of copper metallurgy",
      "Cyprus becomes major copper exporter",
      "Development of city-kingdoms",
      "Introduction of Cypro-Minoan script",
      "Greek colonization and Phoenician settlement",
      "Development of Cypro-Syllabic script",
    ],
    artifacts: [
      "Copper tools",
      "Bronze weapons",
      "Gold jewelry",
      "Clay tablets",
      "Cypro-Syllabic inscriptions",
    ],
    layout: "text-right",
  },
  {
    id: "middle-ages",
    label: "Era III",
    eyebrow: "Era III · Roman & Byzantine",
    name: "Middle Ages",
    range: "325 BCE – 1,191 CE",
    description:
      "From Hellenistic glory through Roman prosperity to Byzantine splendor. Christianity arrived and flourished, magnificent basilicas were constructed, and Cyprus became integral to Mediterranean culture.",
    keyEvents: [
      "Conquest by Alexander the Great (333 BCE)",
      "Roman annexation brings prosperity (58 BCE)",
      "Visit of Apostles Paul and Barnabas (45 CE)",
      "Division creates Byzantine Cyprus (395 CE)",
      "Construction of major basilicas",
      "Richard the Lionheart conquers Cyprus (1191)",
    ],
    artifacts: [
      "Marble sculptures",
      "Roman mosaics",
      "Glass vessels",
      "Byzantine icons",
      "Gold coins",
    ],
    layout: "text-left",
  },
];

export const TIMELINE_OUTRO = {
  heading: "The Story Continues",
  body: "Visit the Archaeological Museum of the Pafos District to experience these twelve thousand years of history firsthand. Admission is free.",
};
