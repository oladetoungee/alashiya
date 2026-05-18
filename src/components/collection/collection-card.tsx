import Image from "next/image";
import Link from "next/link";
import type { CollectionObject } from "@/lib/collection";
import { IMAGES } from "@/lib/images";
import { Reveal } from "../reveal";

/*
  Placeholder fills until artefact photography lands (same approach as
  news-section). Warm museum tones — stone, terracotta, bronze — cycled by
  index so adjacent cards never share a fill.
*/
const PLACEHOLDER_TINTS = [
  "linear-gradient(135deg, #c9b48d 0%, #8a6f49 100%)",
  "linear-gradient(135deg, #d49a4e 0%, #7c4a1e 100%)",
  "linear-gradient(135deg, #d8d2c4 0%, #a99a73 100%)",
  "linear-gradient(135deg, #b2997a 0%, #6f5f49 100%)",
  "linear-gradient(135deg, #b9bcae 0%, #6f7757 100%)",
  "linear-gradient(135deg, #cdbfa3 0%, #8c7a55 100%)",
];

export function CollectionCard({
  object,
  index,
}: {
  object: CollectionObject;
  index: number;
}) {
  const photo = object.image ? IMAGES[object.image] : null;

  return (
    <Reveal delay={(index % 3) * 120} className="h-full">
      <Link
        href={object.href}
        className="group flex h-full flex-col border-t-2 border-flame bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative aspect-4/3 overflow-hidden">
          {photo ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div
              aria-hidden
              className="h-full w-full transition-transform duration-700 group-hover:scale-105"
              style={{
                background:
                  PLACEHOLDER_TINTS[index % PLACEHOLDER_TINTS.length],
              }}
            />
          )}
          <span className="absolute bottom-4 left-4 rounded-full border border-gold/40 bg-bg/85 px-3 py-1 type-pre-title text-ink/65 backdrop-blur-sm">
            {object.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col pt-5">
          <h3 className="font-hero text-2xl font-medium leading-tight text-ink">
            {object.name}
          </h3>
          <p className="mt-2 type-body text-flame">{object.era}</p>

          <div className="mt-auto border-t border-gold/30 pt-4">
            <div className="flex items-center justify-between">
              <span className="font-ui text-sm font-medium text-flame">
                View Object
              </span>
              <span className="text-flame transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
