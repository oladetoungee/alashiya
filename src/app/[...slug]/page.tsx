import Link from "next/link";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";

function titleFromSlug(slug: string[]) {
  if (!slug?.length) return "This page";
  return slug
    .join(" ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function ComingSoon({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <Nav />
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p
          className="hero-fade-in type-pre-title text-flame"
          style={{ animationDelay: "100ms" }}
        >
          Coming Soon
        </p>
        <h1
          className="hero-fade-in mt-4 font-display text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-ink lg:text-5xl"
          style={{ animationDelay: "200ms" }}
        >
          {title}
        </h1>
        <p
          className="hero-fade-in mt-6 max-w-md type-body text-ink/55"
          style={{ animationDelay: "350ms" }}
        >
          Still setting up the {title} page. It will be ready soon.
        </p>
        <Link
          href="/"
          className="hero-fade-in mt-10 inline-block type-pre-title text-flame transition-transform hover:-translate-x-1"
          style={{ animationDelay: "500ms" }}
        >
          ← Back to Home
        </Link>
      </main>
    </div>
  );
}
