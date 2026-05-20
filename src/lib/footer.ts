// `href` omitted → the item renders as a non-navigating label until that
// destination page is built.
export type FooterSitemapItem = {
  label: string;
  href?: string;
};

export const FOOTER_SITEMAP: FooterSitemapItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Visit Us" },
  { label: "Event Calendar" },
  { label: "Join & Support" },
  { label: "Exhibition Catalogue", href: "/collection" },
];

export const FOOTER_ACCESSIBILITY = [
  "Entrance ramps",
  "Wheelchair accessible WC",
  "Marked parking space",
  "Single level galleries",
];

export const FOOTER_HOURS = [
  "Monday : Closed",
  "Tuesday – Sunday : 09.00 – 16.30",
  "Closed on Public Holidays",
];

export const MUSEUM_CONTACT = {
  address: "53 Griva Diyeni Avenue, 81000 Pafos District, Cyprus",
  tel: "TEL: (+357) 26955801 / 26955802",
  blurb:
    "The Archaeological Museum of the Pafos District presents the area's past from the earliest known settlers to the splendour of Roman Nea Pafos.",
};
