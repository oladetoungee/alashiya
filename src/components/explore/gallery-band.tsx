import { Reveal } from "../reveal";

// Full-bleed vitrine panorama between Bronze Age and Iron Age (the Figma
// runs four gallery photos edge to edge). Placeholder fills until the
// photography lands — warm museum tones, one per frame.
const FRAMES = [
  "linear-gradient(135deg,#c8a05a 0%,#7a531f 100%)",
  "linear-gradient(135deg,#b07440 0%,#5f3415 100%)",
  "linear-gradient(135deg,#cdbf9e 0%,#897b56 100%)",
  "linear-gradient(135deg,#ad8347 0%,#5d3c1c 100%)",
];

export function GalleryBand() {
  return (
    <Reveal className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:mt-20">
      {FRAMES.map((frame, i) => (
        <div
          key={i}
          className="relative h-[220px] overflow-hidden md:h-[320px] lg:h-[440px]"
        >
          <div
            aria-hidden
            className="h-full w-full"
            style={{ background: frame }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_50%,rgba(0,0,0,0.22)_100%)]"
          />
        </div>
      ))}
    </Reveal>
  );
}
