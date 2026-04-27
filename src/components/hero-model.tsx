"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { HERO_MODELS } from "@/lib/models";
import { ModelViewer } from "./model-viewer";

const SWAP_INTERVAL_MS = 9000;
const FADE_MS = 700;

export function HeroModel() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * HERO_MODELS.length),
  );
  const [visible, setVisible] = useState(true);

  // Warm the cache for the current and next model so the swap is instant.
  useEffect(() => {
    const cur = HERO_MODELS[index];
    const next = HERO_MODELS[(index + 1) % HERO_MODELS.length];
    if (cur.src) useGLTF.preload(cur.src);
    if (next.src) useGLTF.preload(next.src);
  }, [index]);

  // Cycle. Chained setTimeouts (not setInterval) + cancelled flag so Strict
  // Mode's mount → unmount → mount in dev can't leave stray timers running.
  useEffect(() => {
    if (HERO_MODELS.length <= 1) return;
    let cancelled = false;
    let timer: number | undefined;

    const scheduleNext = () => {
      timer = window.setTimeout(() => {
        if (cancelled) return;
        setVisible(false);
        timer = window.setTimeout(() => {
          if (cancelled) return;
          setIndex((i) => (i + 1) % HERO_MODELS.length);
          setVisible(true);
          scheduleNext();
        }, FADE_MS);
      }, SWAP_INTERVAL_MS);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  const model = HERO_MODELS[index];

  return (
    <>
      <div
        className="absolute inset-0 transition-all ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.94)",
          transitionDuration: `${FADE_MS}ms`,
        }}
      >
        <ModelViewer key={model.id} model={model} />
      </div>

      <p
        key={`caption-${model.id}`}
        className="pointer-events-none absolute left-6 top-6 max-w-55 type-body text-ink/55 transition-opacity"
        style={{
          opacity: visible ? 1 : 0,
          transitionDuration: `${FADE_MS - 200}ms`,
        }}
      >
        {model.caption}
      </p>
    </>
  );
}
