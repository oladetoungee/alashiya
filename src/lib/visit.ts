import type { ImageKey } from "./images";

export type VisitColumn = {
  id: string;
  category: string;
  lines: string[];
  footer: string;
};

export const VISIT_INFO: VisitColumn[] = [
  {
    id: "hours",
    category: "Opening Hours",
    lines: [
      "Monday  Closed",
      "Tuesday – Sunday",
      "09:00 – 16:30",
      "Closed on Public Holidays",
    ],
    footer: "Free admission, no booking required",
  },
  {
    id: "location",
    category: "Location",
    lines: [
      "Griva Diyeni (Ktima)",
      "Pafos District, Cyprus",
      "Tel: 26 955 801 / 26 955 802",
    ],
    footer: "Accessible by public transport",
  },
  {
    id: "accessibility",
    category: "Accessibility",
    lines: [
      "Entrance ramps",
      "Wheelchair accessible WC",
      "Marked parking space",
      "All galleries on one level",
    ],
    footer: "Fully wheelchair accessible",
  },
];

export type AboutStat = {
  id: string;
  value: string;
  label: string;
  image?: ImageKey; // photo backdrop, keyed into the image registry
};

export const ABOUT_STATS: AboutStat[] = [
  { id: "opened", value: "1964", label: "Year Opened" },
  {
    id: "renovated",
    value: "1978",
    label: "Year Renovated",
    image: "yearRenovated",
  },
  { id: "updated", value: "2020", label: "Last Update", image: "lastUpdate" },
  { id: "eu", value: "EU Co-Funded", label: "2014–2020 Redesign" },
];
