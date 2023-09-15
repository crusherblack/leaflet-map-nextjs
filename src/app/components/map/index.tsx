"use client";

import GeoJsonlayer from "@/app/components/map/layers/geoJsonlayer";
import MarkerLayer from "@/app/components/map/layers/markerLayer";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";

const MAP_ZOOM = 5;

const RootMap = () => {
  return (
    <MapContainer
      center={[-3.3778676693807794, 118.74023437500001]}
      zoom={MAP_ZOOM}
      scrollWheelZoom={true}
      style={{
        height: "95vh",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayersControl position="topright">
        <MarkerLayer />
        <GeoJsonlayer />
      </LayersControl>
    </MapContainer>
  );
};

export default RootMap;
