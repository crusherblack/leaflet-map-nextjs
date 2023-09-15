import React, { useCallback } from "react";

import { Icon, LatLngTuple } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const markerIcon = new Icon({
  iconUrl: "/map/marker.png",
  iconSize: [40, 42],
  iconAnchor: [15, 42],
});

type Props = {
  position: LatLngTuple;
  title: string;
  description: string;
};

const AppMarker = ({ position, title = "", description = "" }: Props) => {
  const map = useMapEvents({});

  const handleFlyTo = useCallback(() => {
    map.flyTo(position, 17);
  }, []);

  return (
    <Marker
      position={position}
      icon={markerIcon}
      eventHandlers={{
        click: handleFlyTo,
      }}
    >
      <Popup>
        <p className="font-bold text-lg ">{title}</p> {description}
      </Popup>
    </Marker>
  );
};

export default AppMarker;
