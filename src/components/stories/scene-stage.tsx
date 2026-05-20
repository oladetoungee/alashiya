"use client";

import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { IMAGES } from "@/lib/images";
import { ALASIYA_STORY, type StoryScene } from "@/lib/stories";
import { ModelViewer } from "../model-viewer";

type Props = {
  scene: StoryScene;
  // Where the gold CTA goes. On the final scene this is "/" — the story
  // ends by sending the visitor back to the home page.
  nextHref: string;
  // Previous scene route, or null on the first scene.
  prevHref: string | null;
  sceneNumber: number;
  totalScenes: number;
};

function CornerMark({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) {
  const map = {
    tl: "-top-1.5 -left-1.5",
    tr: "-top-1.5 -right-1.5",
    bl: "-bottom-1.5 -left-1.5",
    br: "-bottom-1.5 -right-1.5",
  } as const;
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute ${map[position]} text-gold-strong`}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="0.9" />
      </svg>
    </span>
  );
}

function TitleFlourish({ side }: { side: "left" | "right" }) {
  return (
    <span aria-hidden className="text-gold-strong">
      {side === "left" ? (
        <svg width="60" height="10" viewBox="0 0 60 10" fill="none">
          <path d="M0 5h54" stroke="currentColor" strokeWidth="1" />
          <path
            d="M54 5l4-3v6l-4-3z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg width="60" height="10" viewBox="0 0 60 10" fill="none">
          <path d="M60 5H6" stroke="currentColor" strokeWidth="1" />
          <path d="M6 5l-4-3v6l4-3z" fill="currentColor" />
        </svg>
      )}
    </span>
  );
}

export function SceneStage({
  scene,
  nextHref,
  prevHref,
  sceneNumber,
  totalScenes,
}: Props) {
  const router = useRouter();
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const voRef = useRef<HTMLAudioElement | null>(null);
  const sfxRef = useRef<HTMLAudioElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const playVoiceover = useCallback(() => {
    const el = voRef.current;
    if (!el) return;
    el.currentTime = 0;
    el.muted = muted;
    el.play().catch(() => {
      // Browsers block autoplay before any user gesture — silent fail is fine.
    });
  }, [muted]);

  const playSfx = useCallback(() => {
    const el = sfxRef.current;
    if (!el || muted) return;
    el.currentTime = 0;
    el.play().catch(() => {});
  }, [muted]);

  useEffect(() => {
    playVoiceover();
    const vo = voRef.current;
    const sfx = sfxRef.current;
    return () => {
      vo?.pause();
      sfx?.pause();
    };
  }, [playVoiceover]);

  useEffect(() => {
    if (voRef.current) voRef.current.muted = muted;
    if (sfxRef.current) sfxRef.current.muted = muted;
  }, [muted]);

  const handleCta = useCallback(() => {
    if (scene.audio.sfx) playSfx();
    // Let the SFX bite — short delay before route change feels intentional.
    window.setTimeout(() => router.push(nextHref), scene.audio.sfx ? 220 : 0);
  }, [nextHref, playSfx, router, scene.audio.sfx]);

  const toggleFullscreen = useCallback(async () => {
    const el = stageRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
        setFullscreen(true);
      } else {
        await document.exitFullscreen();
        setFullscreen(false);
      }
    } catch {
      // Some browsers (or sandboxed iframes) block fullscreen — ignore.
    }
  }, []);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const illo = IMAGES[scene.illustration];
  const bg = IMAGES[scene.background];

  return (
    <section
      ref={stageRef}
      className="relative isolate overflow-hidden bg-bg"
      aria-label={`${ALASIYA_STORY.act}: ${scene.sceneLabel}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={bg.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/60 via-bg/40 to-bg/80" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-12 lg:py-14">
        {/* Title row — gold arrow-tipped rules either side of the page title */}
        <div className="flex items-center justify-center gap-5 pb-10">
          <TitleFlourish side="left" />
          <h1 className="font-hero text-2xl font-medium tracking-[-0.01em] text-ink sm:text-3xl lg:text-[2.25rem]">
            {ALASIYA_STORY.title}
          </h1>
          <TitleFlourish side="right" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-8">
          {/* Illustration / video column.
              Aspect ratio comes from the SVG poster so the box doesn't reflow
              when the video loads. */}
          <div
            className="relative mx-auto w-full max-w-90 lg:mx-0"
            style={{ aspectRatio: `${illo.width} / ${illo.height}` }}
          >
            {scene.video ? (
              <video
                key={scene.video}
                src={scene.video}
                poster={illo.src}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label={illo.alt}
                className="absolute inset-0 h-full w-full border border-gold/40 object-cover animate-[hero-fade-in_700ms_ease-out]"
              />
            ) : (
              <Image
                src={illo.src}
                alt={illo.alt}
                width={illo.width}
                height={illo.height}
                className="h-auto w-full animate-[hero-fade-in_700ms_ease-out]"
                priority
              />
            )}
          </div>

          {/* Right column — speech panel + 3D model panel */}
          <div className="flex min-w-0 flex-col gap-5">
            {/* Header strip: Play Sound · Fullscreen — sits outside the speech card */}
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  const next = !muted;
                  setMuted(next);
                  if (!next) playVoiceover();
                }}
                aria-pressed={!muted}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-ui text-sm font-medium transition-colors ${
                  muted
                    ? "border-ink/20 bg-surface/70 text-ink/70 hover:border-ink/40 hover:text-ink"
                    : "border-flame/70 bg-flame/10 text-flame hover:bg-flame/15"
                }`}
              >
                {muted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
                <span>{muted ? "Sound Off" : "Play Sound"}</span>
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-surface/70 px-3.5 py-1.5 font-ui text-sm font-medium text-ink/75 transition-colors hover:border-ink/40 hover:text-ink"
              >
                <span>{fullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                {fullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Speech panel */}
            <div className="relative rounded-sm border border-card-ink/15 bg-surface/85 p-6 backdrop-blur-sm sm:p-7">
              <CornerMark position="tl" />
              <CornerMark position="tr" />
              <CornerMark position="bl" />
              <CornerMark position="br" />

              <p className="font-hero text-2xl font-medium text-card-ink">
                {scene.speaker}
              </p>
              <p className="mt-4 type-body text-card-ink/80">
                {scene.monologue}
              </p>
            </div>

            {/* 3D model panel — the artefact tied to this scene */}
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-sm border-t-2 border-gold bg-surface/70 backdrop-blur-sm sm:aspect-video">
              <ModelViewer model={scene.model} />

              {/* Scene navigator — prev / position / next, in the panel corner.
                  Forward arrow on the last scene routes home; on click it
                  also fires the scene's completion SFX. */}
              <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-card-ink/10 bg-bg/85 p-1 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => prevHref && router.push(prevHref)}
                  disabled={!prevHref}
                  aria-label="Previous scene"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-card-ink/75 transition-colors hover:bg-card-ink/5 hover:text-card-ink disabled:cursor-default disabled:text-card-ink/25 disabled:hover:bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="px-1 font-ui text-[11px] uppercase tracking-[0.18em] text-card-ink/70">
                  {sceneNumber} / {totalScenes}
                </span>
                <button
                  type="button"
                  onClick={handleCta}
                  aria-label={scene.cta}
                  title={scene.cta}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-strong text-card-ink transition-colors hover:bg-gold"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <p className="pointer-events-none absolute bottom-3 left-4 right-4 truncate font-ui text-[11px] uppercase tracking-[0.18em] text-card-ink/65">
                {scene.model.caption}
              </p>
            </div>
          </div>
        </div>
      </div>

      <audio ref={voRef} src={scene.audio.voiceover} preload="auto" />
      {scene.audio.sfx && (
        <audio ref={sfxRef} src={scene.audio.sfx} preload="auto" />
      )}
    </section>
  );
}
