/*
  Story scene data — one source for the Alasiya Act II walkthrough.
  Each scene's voiceover already has background music mixed in, so there's no
  separate BGM or SFX track.
*/

import type { ImageKey } from "./images";
import type { Model3D } from "./models";

export type StoryScene = {
  id: string;
  sceneLabel: string;
  // Static frame — used as the video poster + a fallback if video can't load.
  illustration: ImageKey;
  // Animated portrait of Alasiya for the scene. URL-encoded path under /public.
  video?: string;
  background: ImageKey;
  speaker: string;
  monologue: string;
  cta: string;
  // The artefact displayed in the lower model panel for this scene.
  model: Model3D;
  // VO + background music mixed into a single track. Played once on entry.
  voiceover: string;
};

export type Story = {
  id: string;
  act: string;
  title: string;
  intro: string;
  scenes: StoryScene[];
};

export const ALASIYA_STORY: Story = {
  id: "alasiya",
  act: "Act II",
  title: "Geometric patterns from the Red Earth",
  intro:
    "“Alashiya” was the ancient name of Cyprus during the Middle and Late Bronze Age. Today, you will follow Alasiya — a proud, young pottery artisan — to experience a typical day in her life as an ancient Cypriot.",
  scenes: [
    {
      id: "settlement",
      sceneLabel: "In the settlement",
      illustration: "storyAlasiya1",
      video:
        "https://pub-88e47f1e62ad4b07865026261d5ac22d.r2.dev/Alasiya%20Explaining.mp4",
      background: "storySettlementBg",
      speaker: "Alasiya",
      monologue:
        "This morning, my father brought me an important task: crafting a ceremonial vessel for a local noble’s funeral. I am used to working with large pots, but my heart is still racing, the buyer specifically asked for me by name!",
      cta: "Go to the Workshop",
      model: {
        id: "alasiya-vase",
        src: "/models/vase.glb",
        caption: "Painted vase · the form she will craft",
      },
      voiceover: "/audio/vo_01_intro_alasiya_with_bgm.mp3",
    },
    {
      id: "workshop",
      sceneLabel: "In the courtyard workshop",
      illustration: "storyAlasiya2",
      video:
        "https://pub-88e47f1e62ad4b07865026261d5ac22d.r2.dev/Alasiya%20Doing%20Pottery.mp4",
      background: "storyWorkshopBg",
      speaker: "Alasiya",
      monologue:
        "I can’t wait to apply the intricate painting techniques passed down from my mother. There is something magical about moulding this familiar, warm red clay. It is the earth of our island, and shaping it with my own hands makes me feel so proud of who I am.",
      cta: "Start Moulding",
      model: {
        id: "alasiya-ritual-vessel",
        src: "/models/ritual-vessel.glb",
        caption: "Ritual vessel · taking shape on the wheel",
      },
      voiceover: "/audio/vo_02_courtyard_workshop_bgm.mp3",
    },
    {
      id: "kiln",
      sceneLabel: "Firing the kiln",
      illustration: "storyAlasiya3",
      video:
        "https://pub-88e47f1e62ad4b07865026261d5ac22d.r2.dev/Alasiya%20Holding%20Basket.mp4",
      background: "storyWorkshopBg",
      speaker: "Alasiya",
      monologue:
        "There! The geometric lines flow perfectly. Just one final step—firing it in the kiln—and the vessel will be complete. I know the noble family will be deeply satisfied, and my work will accompany the departed with the utmost honour.",
      cta: "Return to the Museum",
      model: {
        id: "alasiya-sculpture",
        src: "/models/sculpture.glb",
        caption: "The completed ceremonial vessel",
      },
      voiceover: "/audio/vo_03_final_kiln_with_bgm.mp3",
    },
  ],
};

export function getStoryScene(sceneId: string): StoryScene | undefined {
  return ALASIYA_STORY.scenes.find((s) => s.id === sceneId);
}

export function getNextScene(sceneId: string): StoryScene | undefined {
  const i = ALASIYA_STORY.scenes.findIndex((s) => s.id === sceneId);
  if (i < 0 || i >= ALASIYA_STORY.scenes.length - 1) return undefined;
  return ALASIYA_STORY.scenes[i + 1];
}

export function getPrevScene(sceneId: string): StoryScene | undefined {
  const i = ALASIYA_STORY.scenes.findIndex((s) => s.id === sceneId);
  if (i <= 0) return undefined;
  return ALASIYA_STORY.scenes[i - 1];
}
