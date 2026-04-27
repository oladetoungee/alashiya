import Link from "next/link";
import { NEWS_ARTICLES } from "@/lib/news";
import { Reveal } from "./reveal";

export function NewsSection() {
  return (
    <section className="px-6 pb-24 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="type-pre-title text-flame">Latest</p>
          <h2 className="mt-2 font-display text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-ink lg:text-5xl">
            News &amp; Announcements
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {NEWS_ARTICLES.map((article, i) => (
            <Reveal key={article.id} delay={i * 120} className="h-full">
              <Link
                href={article.href}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-ink/10 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25"
              >
                <div className="aspect-16/10 w-full overflow-hidden">
                  <div className="h-full w-full bg-white transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="type-pre-title text-flame">
                    {article.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-medium leading-snug text-ink lg:text-xl">
                    {article.title}
                  </h3>
                  <p className="mt-3 type-small text-ink/50">{article.date}</p>
                  <div className="mt-auto border-t border-ink/10 pt-4">
                    <span className="type-pre-title inline-block text-flame transition-transform group-hover:translate-x-1">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
