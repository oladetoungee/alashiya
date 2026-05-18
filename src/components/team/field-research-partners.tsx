import { FIELD_RESEARCH, type FieldPartner } from "@/lib/team";
import { Reveal } from "../reveal";

// Static class strings (no dynamic concatenation) so Tailwind keeps them.
const ACCENT: Record<FieldPartner["accent"], string> = {
  gold: "border-gold",
  ink: "border-ink",
};

export function FieldResearchPartners() {
  return (
    <section className="bg-nav px-6 py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <h2 className="font-hero text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-[2.75rem]">
            {FIELD_RESEARCH.heading}
          </h2>
          <p className="mt-4 type-eyebrow text-flame">
            {FIELD_RESEARCH.eyebrow}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {FIELD_RESEARCH.partners.map((partner, index) => (
            <Reveal key={partner.id} delay={index * 120}>
              <article
                className={`h-full border-t-2 bg-surface p-8 lg:p-10 ${ACCENT[partner.accent]}`}
              >
                <h3 className="font-hero text-xl font-medium leading-snug tracking-[-0.01em] text-ink lg:text-2xl">
                  {partner.name}
                </h3>
                <p className="mt-5 type-body leading-relaxed text-ink/60">
                  {partner.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
