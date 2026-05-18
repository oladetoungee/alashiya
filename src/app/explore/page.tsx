import type { Metadata } from "next";
import { CustomCursor } from "@/components/custom-cursor";
import { ExploreHero } from "@/components/explore/explore-hero";
import { ExploreTimeline } from "@/components/explore/explore-timeline";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { UtilityBar } from "@/components/utility-bar";

export const metadata: Metadata = {
  title: "Explore · Archaeological Museum of the Pafos District",
  description:
    "Follow the visitor route through time — from the first footprints on Cyprus to Roman Nea Pafos — each period marked by its own colour.",
};

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <UtilityBar />
      <Nav />
      <ExploreHero />
      <ExploreTimeline />
      <SiteFooter />
    </div>
  );
}
