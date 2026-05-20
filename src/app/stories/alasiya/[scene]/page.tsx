import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { SceneStage } from "@/components/stories/scene-stage";
import { UtilityBar } from "@/components/utility-bar";
import {
  ALASIYA_STORY,
  getNextScene,
  getPrevScene,
  getStoryScene,
} from "@/lib/stories";

export function generateStaticParams() {
  return ALASIYA_STORY.scenes.map((s) => ({ scene: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ scene: string }>;
}): Promise<Metadata> {
  const { scene: sceneId } = await params;
  const scene = getStoryScene(sceneId);
  if (!scene) return {};
  return {
    title: `${scene.sceneLabel} · Alasiya's Journey · Archaeological Museum Pafos`,
    description: scene.monologue,
  };
}

export default async function StoryScenePage({
  params,
}: {
  params: Promise<{ scene: string }>;
}) {
  const { scene: sceneId } = await params;
  const scene = getStoryScene(sceneId);
  if (!scene) notFound();

  const next = getNextScene(scene.id);
  const prev = getPrevScene(scene.id);
  const sceneNumber =
    ALASIYA_STORY.scenes.findIndex((s) => s.id === scene.id) + 1;

  // Last scene → CTA returns to the home page.
  const nextHref = next ? `/stories/alasiya/${next.id}` : "/";
  const prevHref = prev ? `/stories/alasiya/${prev.id}` : null;

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <UtilityBar />
      <Nav />
      <SceneStage
        scene={scene}
        nextHref={nextHref}
        prevHref={prevHref}
        sceneNumber={sceneNumber}
        totalScenes={ALASIYA_STORY.scenes.length}
      />
      <SiteFooter />
    </div>
  );
}
