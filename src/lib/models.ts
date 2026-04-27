/*
  Single source of truth for 3D models.
  - `src` is the path to a .glb/.gltf in /public/models/. When null, a placeholder
    primitive shape is rendered, so the viewer always works during content prod.
  - HERO_MODELS is the pool the home-page hero cycles through.
*/

export type Model3D = {
  id: string;
  src: string | null;
  caption: string;
  shape?: "torus" | "icosahedron" | "octahedron" | "knot";
};

export const HERO_MODELS: Model3D[] = [
  {
    id: "aphrodite",
    src: "/models/aphrodite.glb",
    caption: "Aphrodite · marble sculpture",
  },
  {
    id: "amphoroid-crater",
    src: "/models/amphoroid-crater.glb",
    caption: "Amphoroid Crater · Crypto-Geometric, 11th century BC",
  },
  {
    id: "sculpture",
    src: "/models/sculpture.glb",
    caption: "Sculpture · awaiting attribution",
  },
  {
    id: "ritual-vessel",
    src: "/models/ritual-vessel.glb",
    caption: "Ritual vessel · awaiting attribution",
  },
  {
    id: "wall-painting",
    src: "/models/wall-painting.glb",
    caption: "Wall painting fragment · awaiting attribution",
  },
  {
    id: "vase",
    src: "/models/vase.glb",
    caption: "Vase · awaiting attribution",
  },
];

export function pickRandomHeroModel(): Model3D {
  return HERO_MODELS[Math.floor(Math.random() * HERO_MODELS.length)];
}
