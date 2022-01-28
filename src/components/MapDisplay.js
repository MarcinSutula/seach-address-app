import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MAP_ZOOM } from "../config";

function MapDisplay() {
  const { coords, name } = useSelector((state) => state.result);
  const [location, setLocation] = useState(coords);
  const [zoomLevel, setZoomLevel] = useState(MAP_ZOOM);

  const mapLocOnChangeHandler = (e) => {
    setZoomLevel(e.zoom);
    setLocation([...e.center]);
  };

  const markerOnClickHandler = (e) => {
    setZoomLevel(MAP_ZOOM);
    setLocation(coords);
  };

  const displayName = (name) => {
    if (name.length === 2) {
      return name[0] + " " + name[1];
    } else {
      return name;
    }
  };

  useEffect(() => {
    if (coords !== location) {
      setZoomLevel(MAP_ZOOM);
      setLocation(coords);
    }
  }, [coords]);

  return (
    <Map
      center={location}
      zoom={zoomLevel}
      // zoomControl={true}
      onViewportChanged={mapLocOnChangeHandler}
      animate={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords} onclick={markerOnClickHandler}>
        <Popup>{displayName(name)}</Popup>
      </Marker>
    </Map>
  );
}

export default MapDisplay;
