import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

export default function LocationMap() {
  const [position, setPosition] = useState([20.5937, 78.9629]); // India default

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      () => {
        console.log("Location access denied");
      }
    );
  }, []);

  return (
    <div className="h-[380px] w-full rounded-lg overflow-hidden shadow">
      <MapContainer center={position} zoom={14} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>Your current location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
