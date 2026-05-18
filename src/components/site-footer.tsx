import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_ACCESSIBILITY,
  FOOTER_HOURS,
  FOOTER_SITEMAP,
  MUSEUM_CONTACT,
} from "@/lib/footer";
import { IMAGES } from "@/lib/images";

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="type-eyebrow text-gold">{children}</p>
      <div className="mt-2 h-px w-8 bg-gold/70" />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-flame bg-footer pb-6 text-footer-ink">
      <div className="grid grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:px-20 lg:py-20">
        {/* Brand + location + copyright */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <Image
              src={IMAGES.departmentOfAntiquities.src}
              alt={IMAGES.departmentOfAntiquities.alt}
              width={IMAGES.departmentOfAntiquities.width}
              height={IMAGES.departmentOfAntiquities.height}
              className="h-11 w-auto"
            />
            <div className="leading-tight">
              <p className="type-eyebrow text-gold">Archaeological Museum</p>
              <p className="mt-1 font-body text-base font-medium text-footer-ink">
                Pafos District
              </p>
            </div>
          </div>

          <div className="mt-10">
            <FooterLabel>Location</FooterLabel>
            <p className="mt-4 type-body text-footer-ink/75">
              {MUSEUM_CONTACT.address}
            </p>
            <p className="mt-2 type-body text-footer-ink/75">
              {MUSEUM_CONTACT.tel}
            </p>
            <Link
              href="/visit"
              className="mt-2 inline-block type-body text-gold underline underline-offset-2 transition-opacity hover:opacity-75"
            >
              Find public transport ↗
            </Link>
            <p className="mt-6 max-w-sm type-body text-footer-ink/45">
              {MUSEUM_CONTACT.blurb}
            </p>
          </div>

          <p className="mt-12 type-small text-footer-ink/40 lg:mt-auto lg:pt-12">
            © 2026 Dept. of Antiquities, Cyprus · Archaeological Museum Pafos ·
            All rights reserved
          </p>
        </div>

        {/* Sitemap + Accessibility */}
        <div className="flex flex-col gap-10">
          <nav>
            <FooterLabel>Sitemap</FooterLabel>
            <ul className="mt-5 space-y-4">
              {FOOTER_SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="type-body text-footer-ink/85 transition-colors hover:text-footer-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <FooterLabel>Accessibility</FooterLabel>
            <ul className="mt-5 space-y-4">
              {FOOTER_ACCESSIBILITY.map((item) => (
                <li key={item} className="type-body text-footer-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Opening hours + newsletter */}
        <div className="flex flex-col gap-10">
          <div>
            <FooterLabel>Opening Hours</FooterLabel>
            <ul className="mt-5 space-y-3">
              {FOOTER_HOURS.map((line) => (
                <li key={line} className="type-body text-footer-ink/85">
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <form
            action="/newsletter"
            aria-label="Newsletter sign-up"
            className="border-t-2 border-gold bg-footer-ink/5 p-6"
          >
            <p className="font-hero text-2xl font-medium text-footer-ink">
              Subscribe to Our newsletter
            </p>
            <input
              type="email"
              required
              placeholder="Submit your email"
              className="mt-4 w-full rounded-md bg-footer-ink px-4 py-3 type-body text-footer placeholder:text-footer/40 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="mt-3 rounded-md bg-gold-strong px-6 py-2.5 font-ui text-sm font-medium text-card-ink transition-colors hover:bg-gold"
            >
              Subscribe
            </button>
            <div className="mt-5 border-t border-footer-ink/10 pt-3">
              <p className="type-small text-gold/90">
                Free admission, no booking required
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Greek-key meander band — tiled so it stays short and undistorted.
          The footer's pb-6 leaves a little dark space after it. */}
      <div className="meander" aria-hidden />
    </footer>
  );
}
