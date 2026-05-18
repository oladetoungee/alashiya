import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { Reveal } from "../reveal";

// Full-bleed vitrine panorama between Bronze Age and Iron Age.
export function GalleryBand() {
  const band = IMAGES.exploreGalleryBand;
  return (
    <Reveal className="mt-16 lg:mt-20">
      <Image
        src={band.src}
        alt={band.alt}
        width={band.width}
        height={band.height}
        sizes="100vw"
        className="h-auto w-full"
      />
    </Reveal>
  );
}
