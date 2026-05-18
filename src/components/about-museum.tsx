import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { ABOUT_STATS } from "@/lib/visit";
import { Reveal } from "./reveal";

export function AboutMuseum() {
  return (
    <section className="bg-nav px-6 py-24 lg:px-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-8">
          <div>
            <p className="type-pre-title text-flame">About the Museum</p>
            <div className="mt-2 h-px w-12 bg-flame" />
          </div>

          <h2 className="font-hero text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-ink lg:text-5xl">
            From 1964
            <br />
            to the Present
          </h2>

          <div className="space-y-4 type-body">
            <p className="text-ink/75">
              Opened in 1964, shortly after Cyprus gained independence, the
              Pafos Archaeological Museum has grown from two modest exhibition
              rooms into one of the island&apos;s foremost cultural
              institutions.
            </p>
            <p className="text-ink/55">
              Completely redesigned in 2014–2020 with EU co-funding, the museum
              now offers a chronological journey through the Pafos
              District&apos;s extraordinary past, from the earliest known
              inhabitants of Cyprus to the splendour of Roman Nea Pafos.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          {ABOUT_STATS.map((stat) =>
            stat.image ? (
              <div
                key={stat.id}
                className="relative flex min-h-40 flex-col justify-end overflow-hidden border-t-2 border-gold p-6"
              >
                <Image
                  src={IMAGES[stat.image].src}
                  alt={IMAGES[stat.image].alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-footer/85 via-footer/25 to-transparent"
                />
                <p className="relative font-hero text-2xl font-medium text-footer-ink lg:text-3xl">
                  {stat.value}
                </p>
                <p className="relative mt-1 type-small font-semibold text-footer-ink">
                  {stat.label}
                </p>
              </div>
            ) : (
              <div
                key={stat.id}
                className="flex min-h-40 flex-col justify-start border-t-2 border-gold bg-surface p-6"
              >
                <p className="font-hero text-2xl font-medium text-ink lg:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 type-small text-ink/50">{stat.label}</p>
              </div>
            ),
          )}
        </Reveal>
      </div>
    </section>
  );
}
