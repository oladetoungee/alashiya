/*
  Single source of truth for all images in the site.
  Add new images here, then import the registry from components.
  To swap an image, change it once here.
*/

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const IMAGES = {
  cyprusEmblem: {
    src: "/images/cyprus-emblem.svg",
    alt: "Republic of Cyprus emblem",
    width: 28,
    height: 36,
  },
  departmentOfAntiquities: {
    src: "/images/department-of-antiquities.svg",
    alt: "Department of Antiquities monogram",
    width: 36,
    height: 36,
  },
  becomeMember: {
    src: "/images/become-a-member.svg",
    alt: "Galleries inside the Archaeological Museum of the Pafos District",
    width: 1440,
    height: 480,
  },
  yearRenovated: {
    src: "/images/year-renovated.jpg",
    alt: "The museum interior during its 1978 renovation",
    width: 1880,
    height: 1058,
  },
  lastUpdate: {
    src: "/images/last-update.jpg",
    alt: "The redesigned museum building, 2020",
    width: 1880,
    height: 1253,
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;
