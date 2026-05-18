"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMAGES } from "@/lib/images";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/timeline", label: "Timeline" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/visit", label: "Visit Us" },
];

function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="relative z-30 flex h-22 items-center justify-between gap-6 border-b-2 border-gold bg-nav px-6 lg:px-20">
      <div className="flex items-center gap-4">
        <Image
          src={IMAGES.cyprusEmblem.src}
          alt={IMAGES.cyprusEmblem.alt}
          width={IMAGES.cyprusEmblem.width}
          height={IMAGES.cyprusEmblem.height}
          className="h-10 w-auto"
        />
        <Image
          src={IMAGES.departmentOfAntiquities.src}
          alt={IMAGES.departmentOfAntiquities.alt}
          width={IMAGES.departmentOfAntiquities.width}
          height={IMAGES.departmentOfAntiquities.height}
          className="h-10 w-auto"
        />
        <div className="ml-1 border-l border-gold pl-4 leading-tight">
          <p className="type-eyebrow text-gold">Archaeological Museum</p>
          <p className="mt-1 font-body text-base font-normal text-ink">
            Pafos District
          </p>
        </div>
      </div>

      <ul className="hidden items-center gap-9 lg:flex">
        {NAV_LINKS.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`type-nav border-b-2 pb-1 transition-colors ${
                  active
                    ? "border-gold text-ink"
                    : "border-transparent text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-5">
        <ThemeToggle />
        <span className="hidden h-7 w-px bg-gold sm:block" />
        <Link
          href="/tickets"
          className="hidden rounded-md border-2 border-gold-strong px-5 py-2.5 font-ui text-sm text-ink transition-colors hover:bg-gold-strong hover:text-nav sm:inline-block"
        >
          Get Tickets
        </Link>
      </div>
    </nav>
  );
}
