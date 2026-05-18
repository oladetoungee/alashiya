import type { Era } from "@/lib/explore";

/*
  Era-toned placeholder fills until gallery photography lands (same convention
  as collection-card / news-section). Real photos slot in via the IMAGES
  registry later. Tones echo each era's palette so the page reads correctly.
*/
const TINTS: Record<Era, string[]> = {
  prehistory: [
    "linear-gradient(135deg,#d8d2c2 0%,#a99f86 100%)",
    "linear-gradient(135deg,#cdc6b2 0%,#9b9077 100%)",
    "linear-gradient(135deg,#e0dac8 0%,#b3a98c 100%)",
  ],
  bronze: [
    "linear-gradient(135deg,#caa867 0%,#7c5a2e 100%)",
    "linear-gradient(135deg,#b9794a 0%,#6b3c1f 100%)",
    "linear-gradient(135deg,#cdbf9e 0%,#8d8163 100%)",
  ],
  hellenistic: [
    "linear-gradient(135deg,#7d93ad 0%,#3c5575 100%)",
    "linear-gradient(135deg,#9aa7b8 0%,#5a6b80 100%)",
    "linear-gradient(135deg,#b6c0cd 0%,#74859b 100%)",
  ],
  roman: [
    "linear-gradient(135deg,#b9bcae 0%,#6f7757 100%)",
    "linear-gradient(135deg,#c7a16b 0%,#7a5630 100%)",
    "linear-gradient(135deg,#b2997a 0%,#6f5f49 100%)",
  ],
};

function Tile({
  era,
  index,
  className,
}: {
  era: Era;
  index: number;
  className: string;
}) {
  const tints = TINTS[era];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        aria-hidden
        className="h-full w-full"
        style={{ background: tints[index % tints.length] }}
      />
      {/* gentle vignette so the placeholder reads as a framed photograph */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_55%,rgba(0,0,0,0.18)_100%)]"
      />
    </div>
  );
}

export function ChapterGallery({
  era,
  count,
}: {
  era: Era;
  count: number;
}) {
  // Hellenistic uses a 3-up collage (two squares + one wide), per the Figma.
  if (count === 3) {
    return (
      <div className="grid grid-cols-2 gap-4">
        <Tile era={era} index={0} className="aspect-4/5" />
        <Tile era={era} index={1} className="aspect-4/5" />
        <Tile era={era} index={2} className="col-span-2 aspect-2/1" />
      </div>
    );
  }

  // Default: two stacked landscape frames.
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <Tile key={i} era={era} index={i} className="aspect-4/3" />
      ))}
    </div>
  );
}
