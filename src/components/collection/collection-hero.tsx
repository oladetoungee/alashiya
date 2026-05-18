import { Reveal } from "../reveal";

export function CollectionHero() {
  return (
    <section className="border-y-2 border-flame bg-footer">
      <Reveal className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-24">
        <p className="type-pre-title text-flame">Collections</p>
        {/* Same typographic treatment as the home hero h1 (font-hero =
            Fraunces, font-medium, leading-[1.06]) — kept identical on purpose. */}
        <h1 className="mt-5 font-hero text-[clamp(2.75rem,6vw,4.25rem)] font-medium leading-[1.06] text-footer-ink">
          The Permanent Collection
        </h1>
        <p className="mx-auto mt-6 max-w-xl type-body text-footer-ink/55">
          Over 50,000 artefacts spanning 10,000 years of Cypriot civilisation
        </p>
      </Reveal>
    </section>
  );
}
