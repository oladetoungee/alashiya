"use client";

import dynamic from "next/dynamic";

// Leaflet touches `window`, so the map is client-only. This thin client
// wrapper isolates the ssr:false import; the section stays a server component.
const SiteMap = dynamic(() => import("./site-map"), {
  ssr: false,
  loading: () => <div className="h-105 w-full bg-sand lg:h-130" />,
});

type Props = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function SiteMapEmbed({ selectedId, onSelect }: Props) {
  return <SiteMap selectedId={selectedId} onSelect={onSelect} />;
}
