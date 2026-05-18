import { ABOUT_HISTORY, GLANCE_STATS } from "@/lib/about";
import { Reveal } from "../reveal";

export function AboutHistory() {
  return (
    <section className="bg-surface px-6 py-20 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          <Reveal>
            <p className="type-pre-title text-flame">Our History</p>
            <div className="mt-2 h-px w-12 bg-flame" />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <p className="max-w-3xl font-body text-lg leading-relaxed text-ink/85 lg:text-xl lg:leading-[1.7]">
              {ABOUT_HISTORY}
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 lg:mt-28 lg:grid-cols-4">
            {GLANCE_STATS.map((stat) => (
              <div key={stat.id}>
                <dt className="font-hero text-4xl font-medium leading-none tracking-[-0.02em] text-ink lg:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-3 type-small font-medium text-flame/75">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
