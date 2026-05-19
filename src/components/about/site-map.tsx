"use client";

import "leaflet/dist/leaflet.css";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import { SITE_LOCATIONS } from "@/lib/about";

// Leaflet draws SVG paths (not DOM) so the marker colour can't be a Tailwind
// token — this hex mirrors --flame, same approach as model-viewer.tsx.
const FLAME = "#d57800";

// Every site's coordinate, used to frame the map so all six are visible.
const BOUNDS = SITE_LOCATIONS.map((s) => [s.lat, s.lng] as [number, number]);

export default function SiteMap() {
  return (
    <div className="h-105 w-full overflow-hidden lg:h-130">
      <MapContainer
        bounds={BOUNDS}
        boundsOptions={{ padding: [36, 36] }}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community"
        />
        {SITE_LOCATIONS.map((site) => (
          <CircleMarker
            key={site.name}
            center={[site.lat, site.lng]}
            radius={7}
            pathOptions={{
              color: FLAME,
              fillColor: FLAME,
              fillOpacity: 0.85,
              weight: 2,
            }}
          >
            <Tooltip direction="top" offset={[0, -6]}>
              {site.name}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
