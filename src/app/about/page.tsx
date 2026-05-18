import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutHistory } from "@/components/about/about-history";
import { ExhibitionRoute } from "@/components/about/exhibition-route";
import { SiteLocations } from "@/components/about/site-locations";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { UtilityBar } from "@/components/utility-bar";

export const metadata: Metadata = {
  title: "About · Archaeological Museum of the Pafos District",
  description:
    "Twelve thousand years of Cyprus — the history, exhibition route, and archaeological sites of the Pafos District Archaeological Museum.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <UtilityBar />
      <Nav />
      <AboutHero />
      <AboutHistory />
      <ExhibitionRoute />
      <SiteLocations />
      <SiteFooter />
    </div>
  );
}
