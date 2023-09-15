import { LatLngTuple } from "leaflet";
import React from "react";
import { LayersControl, LayerGroup } from "react-leaflet";
import AppMarker from "../components/map/marker";

type Location = {
  position: LatLngTuple;
  title: string;
  description: string;
};

const locations: Location[] = [
  {
    position: [-6.331841417162344, 106.25976562500001],
    title: "Rumah Makan",
    description: "Rumah makan enak yang baru",
  },
  {
    position: [-7.192159258472316, 108.06152343750001],
    title: "Rumah Sepatu",
    description: "Rumah Sepatu Nike",
  },
  {
    position: [-7.3665534505648145, 108.01757812500001],
    title: "Toko Baju",
    description: "Beli Baju Baru disini",
  },
];

const MarkerLayer = () => {
  return (
    <LayersControl.Overlay name="Marker" checked>
      <LayerGroup>
        {locations.map((item) => (
          <AppMarker
            key={item.position.toString()}
            position={item.position}
            title={item.title}
            description={item.description}
          />
        ))}
      </LayerGroup>
    </LayersControl.Overlay>
  );
};

export default MarkerLayer;
