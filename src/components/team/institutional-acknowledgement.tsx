import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { INSTITUTIONAL_ACK } from "@/lib/team";
import { Reveal } from "../reveal";

export function InstitutionalAcknowledgement() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-20 lg:py-32">
      <Image
        src={IMAGES.teamAckBg.src}
        alt={IMAGES.teamAckBg.alt}
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-hero text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-[2.75rem]">
            {INSTITUTIONAL_ACK.heading}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Image
              src={IMAGES.departmentOfAntiquities.src}
              alt={IMAGES.departmentOfAntiquities.alt}
              width={IMAGES.departmentOfAntiquities.width}
              height={IMAGES.departmentOfAntiquities.height}
              className="h-12 w-auto"
            />
            <div className="text-left">
              <p className="type-eyebrow text-flame">
                {INSTITUTIONAL_ACK.eyebrow}
              </p>
              <p className="mt-1.5 font-hero text-2xl font-medium leading-tight text-ink lg:text-[1.75rem]">
                {INSTITUTIONAL_ACK.partner}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl type-body leading-relaxed text-ink/65">
            {INSTITUTIONAL_ACK.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
