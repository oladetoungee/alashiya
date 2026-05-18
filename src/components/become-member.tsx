import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { Reveal } from "./reveal";

export function BecomeMember() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={IMAGES.becomeMember.src}
        alt={IMAGES.becomeMember.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Fade the photo back so the panel + text read clearly */}
      <div aria-hidden className="absolute inset-0 bg-footer/45" />

      <div className="relative px-6 py-24 lg:px-20 lg:py-28">
        <Reveal>
          <div className="border-t-2 border-gold bg-footer/90 px-8 py-12 lg:px-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
              <h2 className="font-hero text-4xl font-medium leading-tight tracking-[-0.02em] text-footer-ink lg:text-5xl">
                Become a Member
              </h2>

              <div className="max-w-md">
                <p className="type-body text-footer-ink/80">
                  Enjoy exclusive events, access to exhibitions and the
                  Members&apos; Room, plus discounts in the Museum souvenir
                  shops.
                </p>
                <Link
                  href="/membership"
                  className="group mt-6 inline-flex items-center gap-3 rounded-md bg-gold-strong py-2.5 pl-6 pr-2.5 text-card-ink transition-colors hover:bg-gold"
                >
                  <span className="type-pre-title">Find Out More</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-card-ink transition-transform group-hover:translate-x-0.5">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
