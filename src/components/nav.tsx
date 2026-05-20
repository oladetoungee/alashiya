"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IMAGES } from "@/lib/images";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/timeline", label: "Timeline" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  // { href: "/visit", label: "Visit Us" },
];

function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-40 flex h-22 items-center justify-between gap-3 border-b-2 border-gold bg-nav px-4 sm:gap-6 sm:px-6 lg:px-20">
      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
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
        <div className="ml-1 hidden border-l border-gold pl-4 leading-tight sm:block">
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

      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        <ThemeToggle />
        <span className="hidden h-7 w-px bg-gold sm:block" />
        {/* Tickets page doesn't exist yet — button stays put. */}
        <button
          type="button"
          className="hidden rounded-md border-2 border-gold-strong px-5 py-2.5 font-ui text-sm text-ink transition-colors hover:bg-gold-strong hover:text-nav sm:inline-block"
        >
          Get Tickets
        </button>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="text-ink lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile fold-out menu */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-40 border-b-2 border-gold bg-nav px-6 pt-2 pb-6 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-gold/20 py-4 type-nav transition-colors ${
                      active ? "text-gold" : "text-ink/75 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-5 block w-full rounded-md border-2 border-gold-strong py-3 text-center font-ui text-sm text-ink transition-colors hover:bg-gold-strong hover:text-nav"
          >
            Get Tickets
          </button>
        </div>
      )}
    </nav>
  );
}
