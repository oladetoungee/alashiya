"use client";

import "leaflet/dist/leaflet.css";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import { SITE_LOCATIONS } from "@/lib/about";

// Leaflet draws SVG paths (not DOM) so marker colours can't be Tailwind
// tokens — these hexes mirror --flame / --ink, same approach as
// model-viewer.tsx.
const FLAME = "#d57800";
const INK = "#1c1c1c";

// Every site's coordinate, used to frame the map so all six are visible.
const BOUNDS = SITE_LOCATIONS.map((s) => [s.lat, s.lng] as [number, number]);

type Props = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export default function SiteMap({ selectedId, onSelect }: Props) {
  return (
    <div className="h-105 w-full overflow-hidden lg:h-130">
      <MapContainer
        bounds={BOUNDS}
        boundsOptions={{ padding: [36, 36] }}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        {/* Esri's NatGeo basemap — warm cream land + terracotta roads,
            matching the Figma's vintage-cartographic feel. Free, no key. */}
        <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
        />
        {SITE_LOCATIONS.map((site) => {
          const active = site.id === selectedId;
          return (
            <CircleMarker
              key={site.id}
              center={[site.lat, site.lng]}
              radius={active ? 11 : 7}
              eventHandlers={{ click: () => onSelect(site.id) }}
              pathOptions={{
                color: active ? INK : FLAME,
                fillColor: FLAME,
                fillOpacity: active ? 1 : 0.85,
                weight: active ? 3 : 2,
              }}
            >
              <Tooltip direction="top" offset={[0, -6]}>
                {site.name}
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
