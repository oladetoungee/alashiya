import { DESIGN_ARCH } from "@/lib/team";
import { Reveal } from "../reveal";

export function DesignArchitecture() {
  return (
    <section className="bg-nav px-6 pt-12 pb-28 lg:px-20 lg:pt-16 lg:pb-36">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-hero text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-[2.75rem]">
          {DESIGN_ARCH.heading}
        </h2>
        <p className="mt-4 type-eyebrow text-flame">
          {DESIGN_ARCH.eyebrow}
        </p>
        <p className="mt-8 font-hero text-2xl font-medium leading-tight text-ink lg:text-[1.75rem]">
          {DESIGN_ARCH.partner}
        </p>
        <p className="mx-auto mt-6 max-w-2xl type-body leading-relaxed text-ink/65">
          {DESIGN_ARCH.body}
        </p>
      </Reveal>
    </section>
  );
}
