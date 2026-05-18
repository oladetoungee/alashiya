import Image from "next/image";
import { IMAGES, type ImageKey } from "@/lib/images";

export function ChapterGallery({ images }: { images: ImageKey[] }) {
  if (images.length === 0) return null;

  // Hellenistic: two tall portraits + one wide below (per the Figma collage).
  if (images.length === 3) {
    const [a, b, c] = images.map((key) => IMAGES[key]);
    return (
      <div className="grid grid-cols-2 gap-4">
        {[a, b].map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="h-full w-full object-cover"
          />
        ))}
        <Image
          src={c.src}
          alt={c.alt}
          width={c.width}
          height={c.height}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="col-span-2 h-auto w-full"
        />
      </div>
    );
  }

  // Default: stacked landscape frames at their native aspect ratio.
  return (
    <div className="flex flex-col gap-4">
      {images.map((key) => {
        const img = IMAGES[key];
        return (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full"
          />
        );
      })}
    </div>
  );
}
