import { VISIT_INFO } from "@/lib/visit";
import { Reveal } from "./reveal";

export function VisitSection() {
  return (
    <section className="px-6 pt-24 pb-6 lg:px-10 lg:pt-32 lg:pb-8">
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="type-pre-title text-flame">Plan Your Visit</p>
        <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-[-0.02em] text-ink lg:text-5xl">
          Archaeological Museum Pafos District
        </h2>
      </Reveal>

      <div className="mx-auto mt-8 h-px max-w-6xl bg-flame/30" />

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
        {VISIT_INFO.map((col, i) => (
          <Reveal key={col.id} delay={i * 120} className="h-full">
            <div className="flex h-full flex-col border-t-2 border-flame/70 bg-surface p-6 lg:p-8">
              <p className="type-pre-title text-flame">{col.category}</p>
              <ul className="mt-6 space-y-4">
                {col.lines.map((line) => (
                  <li key={line} className="type-body text-ink">
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 type-small text-flame/80">
                {col.footer}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
