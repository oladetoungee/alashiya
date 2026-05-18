import Image from "next/image";
import { IMAGES } from "@/lib/images";
import type { Era } from "@/lib/timeline";
import { TimelineOrnament } from "./timeline-ornament";

// Central column: the era's engraving, its name, date range, and the
// closing ornament. Placeholder slot until the illustration lands — same
// photo-pending convention as team-card (bg-placeholder + optional Image).
export function EraIllustration({ era }: { era: Era }) {
  const art = era.illustration ? IMAGES[era.illustration] : null;

  return (
    <div className="flex flex-col items-center text-center">
      {art ? (
        <div className="mx-auto w-full max-w-50">
          <Image
            src={art.src}
            alt={art.alt}
            width={art.width}
            height={art.height}
            sizes="(min-width: 1024px) 200px, 50vw"
            className="h-auto w-full"
          />
        </div>
      ) : (
        <div
          aria-hidden
          className="mx-auto aspect-2/5 w-full max-w-50 bg-placeholder"
        />
      )}

      <h2 className="mt-8 font-hero text-3xl font-medium leading-tight tracking-[-0.01em] text-ink lg:text-4xl">
        {era.name}
      </h2>
      <p className="mt-2 type-small font-medium tracking-[0.08em] text-hero-gold uppercase">
        {era.range}
      </p>

      <TimelineOrnament className="mt-8" />
    </div>
  );
}
