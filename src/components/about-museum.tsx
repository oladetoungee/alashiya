import { ABOUT_STATS } from "@/lib/visit";
import { Reveal } from "./reveal";

export function AboutMuseum() {
  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-8">
          <div>
            <p className="type-pre-title text-flame">About the Museum</p>
            <div className="mt-2 h-px w-12 bg-flame" />
          </div>

          <h2 className="font-display text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-ink lg:text-5xl">
            From 1964
            <br />
            to the Present
          </h2>

          <div className="space-y-4 type-body text-ink/70">
            <p>
              Opened in 1964, shortly after Cyprus gained independence, the
              Pafos Archaeological Museum has grown from two modest exhibition
              rooms into one of the island&apos;s foremost cultural
              institutions.
            </p>
            <p>
              Completely redesigned in 2014–2020 with EU co-funding, the museum
              now offers a chronological journey through the Pafos
              District&apos;s extraordinary past, from the earliest known
              inhabitants of Cyprus to the splendour of Roman Nea Pafos.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.id}
              className="border-t-2 border-flame/70 bg-surface p-6 lg:p-8"
            >
              <p className="font-display text-xl font-normal text-ink lg:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 type-small text-ink/50">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
