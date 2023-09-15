import React, { useState, useEffect } from "react";
import { LayersControl, GeoJSON } from "react-leaflet";

const GeoJsonlayer = () => {
  const [geoJson, setGeoJson] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/map/adm1.json");
        const body = await res.json();

        setGeoJson(body);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <LayersControl.Overlay name="Provinsi Indonesia">
      {/* bikin 1 component juga */}
      {geoJson && (
        <GeoJSON
          data={geoJson}
          style={{
            weight: 1,
            color: "red",
          }}
          onEachFeature={function (feature, layer) {
            layer.bindPopup(feature.properties.shapeName);
            layer.on("mouseover", function () {
              //@ts-ignore
              this.setStyle({
                fillColor: "black",
              });
            });
            layer.on("mouseout", function () {
              //@ts-ignore
              this.setStyle({
                fillColor: "red",
              });
            });
          }}
          eventHandlers={{
            click: (e) => {},
          }}
        />
      )}
    </LayersControl.Overlay>
  );
};

export default GeoJsonlayer;
