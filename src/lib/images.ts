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
  newsDiscoveries: {
    src: "/images/new-discoveries.svg",
    alt: "Excavations at the Pafos Archaeological Park",
    width: 408,
    height: 185,
  },
  newsCyprusMuseum: {
    src: "/images/cyprus-museum.svg",
    alt: "The restored Bronze Age gallery at the Cyprus Museum",
    width: 408,
    height: 185,
  },
  newsUnesco: {
    src: "/images/unesco.svg",
    alt: "Aerial view of the Pafos UNESCO World Heritage site",
    width: 408,
    height: 185,
  },
  artifactEnthronedGoddess: {
    src: "/images/enthroned-goddess.svg",
    alt: "Terracotta enthroned goddess with attendant figures",
    width: 408,
    height: 300,
  },
  artifactAmphoroidKrater: {
    src: "/images/amphroid-krater.svg",
    alt: "Mycenaean amphoroid krater with painted decoration",
    width: 408,
    height: 300,
  },
  artifactGoldDiadem: {
    src: "/images/gold-daidem.svg",
    alt: "Hellenistic gold diadem",
    width: 408,
    height: 300,
  },
  artifactMosaicFloor: {
    src: "/images/mosaic-floor.svg",
    alt: "Roman floor mosaic panel",
    width: 408,
    height: 300,
  },
  artifactMarbleAphrodite: {
    src: "/images/marble-aphrodite.svg",
    alt: "Marble Aphrodite sculpture in the gallery",
    width: 408,
    height: 300,
  },
  artifactLimestoneSarcophagus: {
    src: "/images/limestone.svg",
    alt: "Classical limestone sarcophagus",
    width: 408,
    height: 300,
  },
  aboutGlanceExterior: {
    src: "/images/at-a-glance-1.svg",
    alt: "The Archaeological Museum of the Pafos District, exterior",
    width: 428,
    height: 368,
  },
  aboutGlanceGalleries: {
    src: "/images/at-a-glance-2.svg",
    alt: "Gallery interiors of the Pafos District Archaeological Museum",
    width: 836,
    height: 368,
  },
  aboutJourney1: {
    src: "/images/journey-1.svg",
    alt: "A gallery display in the Pafos District Archaeological Museum",
    width: 368,
    height: 248,
  },
  aboutJourney2: {
    src: "/images/journey-2.svg",
    alt: "A gallery display in the Pafos District Archaeological Museum",
    width: 368,
    height: 248,
  },
  aboutJourney3: {
    src: "/images/journey-3.svg",
    alt: "A gallery display in the Pafos District Archaeological Museum",
    width: 368,
    height: 248,
  },
  aboutJourney4: {
    src: "/images/journey-4.svg",
    alt: "A gallery display in the Pafos District Archaeological Museum",
    width: 368,
    height: 248,
  },
  aboutMap: {
    src: "/images/Map.svg",
    alt: "Map of western Cyprus showing the museum's six archaeological sites",
    width: 800,
    height: 536,
  },
  teamHatim: {
    src: "/images/hatim.svg",
    alt: "Hatim Lachyab",
    width: 232,
    height: 200,
  },
  teamRobina: {
    src: "/images/robina.svg",
    alt: "Robina Schwarzburger",
    width: 232,
    height: 200,
  },
  teamLiu: {
    src: "/images/liu.svg",
    alt: "Liu Qianying",
    width: 232,
    height: 200,
  },
  teamGbemisola: {
    src: "/images/gbemisola.svg",
    alt: "Gbemisola Oladetoun",
    width: 232,
    height: 200,
  },
  teamQianwen: {
    src: "/images/qianwen.svg",
    alt: "Qianwen Hou",
    width: 232,
    height: 200,
  },
  teamAnirban: {
    src: "/images/anirban.svg",
    alt: "Anirban Tasfin Azad",
    width: 232,
    height: 200,
  },
  teamRyan: {
    src: "/images/ryan.svg",
    alt: "Ryan Dibeh",
    width: 232,
    height: 200,
  },
  teamAckBg: {
    src: "/images/acknowledgement-bg.svg",
    alt: "",
    width: 1440,
    height: 493,
  },
  museumArchitecture: {
    src: "/images/museum-architecture.svg",
    alt: "Museum floor plan — the visitor route, each period marked by a different colour",
    width: 632,
    height: 640,
  },
  exploreBronze1: {
    src: "/images/bronze-age-1.svg",
    alt: "Bronze Age gallery display",
    width: 408,
    height: 248,
  },
  exploreBronze2: {
    src: "/images/bronze-age-2.svg",
    alt: "Bronze Age artefacts in a vitrine",
    width: 408,
    height: 233,
  },
  exploreIron1: {
    src: "/images/iron-age-1.svg",
    alt: "Iron Age gallery room",
    width: 448,
    height: 290,
  },
  exploreIron2: {
    src: "/images/iron-age-2.svg",
    alt: "Iron Age artefacts in a display case",
    width: 448,
    height: 268,
  },
  exploreHellenistic1: {
    src: "/images/hellenistic-1.svg",
    alt: "Hellenistic artefact",
    width: 192,
    height: 264,
  },
  exploreHellenistic2: {
    src: "/images/hellenistic-2.svg",
    alt: "Hellenistic sculpture",
    width: 192,
    height: 264,
  },
  exploreHellenistic3: {
    src: "/images/hellenistic-3.svg",
    alt: "Hellenistic amphora collection",
    width: 408,
    height: 252,
  },
  exploreRoman1: {
    src: "/images/roman.svg",
    alt: "Roman period gallery display",
    width: 408,
    height: 244,
  },
  exploreRoman2: {
    src: "/images/roman-2.svg",
    alt: "Roman artefacts in a display case",
    width: 408,
    height: 320,
  },
  exploreGalleryBand: {
    src: "/images/image-group-explore.svg",
    alt: "Panoramic view of the museum's vitrine galleries",
    width: 1440,
    height: 470,
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;
