// Single source of truth for the Team page copy and structured data.
// Components read from here — no inline strings, mirroring lib/about.ts etc.

import type { ImageKey } from "./images";

export const TEAM_INTRO = {
  eyebrow: "Built on Collaboration",
  // Rendered as two lines, matching the Figma line break.
  heading: ["Meet the Team Behind", "This Project"],
  subtitle:
    "This digital experience was conceived, designed, and built as an academic and creative project.",
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  // Optional — slots into the IMAGES registry once portrait photography lands.
  image?: ImageKey;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "hatim",
    name: "Hatim Lachyab",
    role: "Design & Development",
    image: "teamHatim",
  },
  {
    id: "robina",
    name: "Robina Schwarzburger",
    role: "Content + Story & Design",
    image: "teamRobina",
  },
  {
    id: "liu",
    name: "Liu Qianying",
    role: "Head of Content + 3D-Artist",
    image: "teamLiu",
  },
  {
    id: "gbemisola",
    name: "Gbemisola Oladetoun",
    role: "Head of Development",
    image: "teamGbemisola",
  },
  { id: "aminata", name: "Aminata Tendonge", role: "PM + Research & Design" },
  {
    id: "qianwen",
    name: "Qianwen Hou",
    role: "Content & Audio Design",
    image: "teamQianwen",
  },
  {
    id: "sahar",
    name: "Sahar Shahverdi",
    role: "User Research & Presentation",
  },
  {
    id: "anirban",
    name: "Anirban Tasfin Azad",
    role: "Research & UX Design",
    image: "teamAnirban",
  },
  {
    id: "ryan",
    name: "Ryan Dibeh",
    role: "Development & Connector",
    image: "teamRyan",
  },
  { id: "ali", name: "Ali Reza", role: "Presentation" },
];

export const INSTITUTIONAL_ACK = {
  heading: "Institutional Acknowledgement",
  eyebrow: "Primary Institutional Partner",
  partner: "Cyprus Department of Antiquities",
  body: "The Cyprus Department of Antiquities, operating under the Ministry of Transport, Communications and Works, is the custodial authority for all archaeological heritage on the island. The historical content, exhibit data, and collection information presented throughout this website are based entirely on materials provided by and attributed to the Department. We are deeply grateful for their stewardship of Cyprus's extraordinary cultural legacy.",
};

// `accent` maps to a static class in the component (no dynamic class names).
export type FieldPartner = {
  id: string;
  name: string;
  accent: "gold" | "ink";
  body: string;
};

export const FIELD_RESEARCH = {
  heading: "Field Research Partners",
  eyebrow: "Field Excavation & Research",
  partners: [
    {
      id: "polish",
      name: "The Polish Archaeological Mission in Paphos",
      accent: "gold",
      body: "Since 1965, the University of Warsaw's Polish Centre of Mediterranean Archaeology has conducted excavations at Nea Pafos, the longest-running foreign archaeological project on the island. Their work at the villa district of Maloutena has uncovered exceptional Hellenistic and Roman remains that have shaped scholarly understanding of the ancient capital.",
    },
    {
      id: "theatre",
      name: "Paphos Theatre Archaeological Project",
      accent: "ink",
      body: "Since 1995, the University of Sydney has excavated the World Heritage site of Nea Pafos under the auspices of the Department of Antiquities of Cyprus. Their work has revealed a Hellenistic-Roman theatre built around 300 BC. It was used for plays & performance for over six and a half centuries, seating more than 8,000 spectators at its peak.",
    },
  ] satisfies FieldPartner[],
};

export const DESIGN_ARCH = {
  heading: "Design & Architecture",
  eyebrow: "Museum Renovation & Visual Identity",
  partner: "N. G. Savvides Architects Ltd.  ·  Appios® Creative Team",
  body: "The physical and visual identity of the Pafos District Archaeological Museum was shaped by the work of N.G. Savvides Architects Ltd., responsible for the museum's architectural renovation, and Appios® Creative Team, who developed its visual identity and graphic language. The design direction of this digital project draws inspiration from and pays homage to their work.",
};

export const SPECIAL_THANKS = {
  heading: "Special Thanks!",
  subject: "Local District Museum Staff",
  body: "We extend our sincere thanks to the staff of the Pafos District Archaeological Museum for their patience, accessibility, and generous assistance throughout the research and development of this project.",
};
