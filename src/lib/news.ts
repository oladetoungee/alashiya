import type { ImageKey } from "./images";

export type NewsArticle = {
  id: string;
  category: string;
  title: string;
  date: string;
  href: string;
  image: ImageKey;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "discoveries-pafos-park",
    category: "Excavations",
    title: "New Discoveries at the Pafos Archaeological Park",
    date: "10 April 2026",
    href: "/news/discoveries-pafos-park",
    image: "newsDiscoveries",
  },
  {
    id: "cyprus-museum-reopens",
    category: "Museums",
    title: "Cyprus Museum Reopens Restored Bronze Age Gallery",
    date: "22 March 2026",
    href: "/news/cyprus-museum-reopens",
    image: "newsCyprusMuseum",
  },
  {
    id: "unesco-report",
    category: "UNESCO",
    title: "Annual UNESCO World Heritage Report Submitted",
    date: "5 March 2026",
    href: "/news/unesco-report",
    image: "newsUnesco",
  },
];
