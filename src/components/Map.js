import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Map() {
  const coords = useSelector((state) => state.coords);
//   const [zoom, setZoom] = useState(21);

//   useEffect(() => {
//     setZoom(21);
//   });

  return (
    <MapContainer
      center={coords}
      scrollWheelZoom={true}
      key={coords}
      zoom={21}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords} />
    </MapContainer>
  );
}

export default Map;
