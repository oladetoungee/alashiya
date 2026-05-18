import Image from "next/image";
import { IMAGES } from "@/lib/images";
import type { TeamMember } from "@/lib/team";

export function TeamCard({ member }: { member: TeamMember }) {
  const photo = member.image ? IMAGES[member.image] : null;

  return (
    <article className="flex flex-col">
      <div className="h-[3px] w-full bg-gold" />
      <div className="relative aspect-5/4 overflow-hidden bg-placeholder">
        {photo && (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover grayscale"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col bg-nav px-4 py-4">
        <h3 className="font-hero text-base font-medium leading-tight text-ink lg:text-lg">
          {member.name}
        </h3>
        <p className="mt-1.5 type-small text-ink/55">{member.role}</p>
      </div>
    </article>
  );
}
