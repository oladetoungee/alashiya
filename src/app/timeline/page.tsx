import type { Metadata } from "next";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { TimelineEras } from "@/components/timeline/timeline-eras";
import { TimelineHero } from "@/components/timeline/timeline-hero";
import { TimelineOutro } from "@/components/timeline/timeline-outro";
import { UtilityBar } from "@/components/utility-bar";

export const metadata: Metadata = {
  title: "Timeline · Archaeological Museum of the Pafos District",
  description:
    "12,500 years of Cyprus across three eras — Prehistory, Ancient History, and the Middle Ages — with key events and featured artefacts for each.",
};

export default function TimelinePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <UtilityBar />
      <Nav />
      <TimelineHero />
      <TimelineEras />
      <TimelineOutro />
      <SiteFooter />
    </div>
  );
}
