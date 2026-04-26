/*
  Single source of truth for 3D models.
  - `src` is the path to a .glb/.gltf in /public/models/. When null, a placeholder
    primitive shape is rendered, so the viewer always works during content prod.
  - HERO_MODELS is the pool the home-page hero randomly picks from on each load.

  As the team delivers more .glb files, drop them into /public/models/ and add
  an entry below (or move one out of the in-progress list).
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
];

// In progress with the team — re-add to HERO_MODELS as each .glb arrives.
export const IN_PROGRESS_MODELS: Model3D[] = [
  { id: "amphora", src: null, shape: "torus", caption: "Amphora · in progress" },
  { id: "mosaic-fragment", src: null, shape: "octahedron", caption: "Mosaic fragment · in progress" },
  { id: "bronze-bowl", src: null, shape: "knot", caption: "Bronze vessel · in progress" },
];

export function pickRandomHeroModel(): Model3D {
  return HERO_MODELS[Math.floor(Math.random() * HERO_MODELS.length)];
}
