import type { Metadata } from "next";
import { CollectionExplorer } from "@/components/collection/collection-explorer";
import { CollectionHero } from "@/components/collection/collection-hero";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { UtilityBar } from "@/components/utility-bar";

export const metadata: Metadata = {
  title: "The Permanent Collection · Archaeological Museum Pafos",
  description:
    "Browse over 50,000 artefacts spanning 10,000 years of Cypriot civilisation, filtered by period.",
};

export default function CollectionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <UtilityBar />
      <Nav />
      <CollectionHero />
      <CollectionExplorer />
      <SiteFooter />
    </div>
  );
}
