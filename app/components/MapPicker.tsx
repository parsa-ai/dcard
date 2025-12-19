'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapSearchControl({ onLocationSelected }: { onLocationSelected: (pos: [number, number]) => void }) {
  const map = useMapEvents({});

  useEffect(() => {
    const provider = new OpenStreetMapProvider({
      params: { countrycodes: 'ir', addressdetails: 1 },
    });

    const searchControl = new (GeoSearchControl as any)({
      provider,
      showMarker: true,
      marker: { draggable: true },
      autoClose: true,
      keepResult: true,
      searchLabel: 'جستجوی مکان...',
      style: 'bar', 
    });

    map.addControl(searchControl);

    map.on('geosearch/showlocation', (result: any) => {
      if (result.location) {
        onLocationSelected([result.location.y, result.location.x]);
      }
    });

    return () => { map.removeControl(searchControl); };
  }, [map, onLocationSelected]);

  return null;
}

export default function MapPicker() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const defaultCenter: [number, number] = [35.6892, 51.3890];
  
  function ClickHandler() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  }
  function sendData() {
    console.log({ lat: position[0] , lng: position[1] });
    
  }

  return (
    
    <div className="flex flex-col space-y-4 p-2 md:p-6 max-w-full overflow-x-hidden">
      <p className='text-xl md:text-2xl font-bold text-center md:text-right'>تست پرداخت</p>
      
      <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 relative">
        <MapContainer
          center={position ?? defaultCenter}
          zoom={12}
          scrollWheelZoom={true}

          style={{ height: '50vh', minHeight: '320px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapSearchControl onLocationSelected={setPosition} />
          <ClickHandler />

          {position && (
            <Marker
              position={position}
              draggable={true}
              eventHandlers={{
                dragend: (e) => {
                  const pos = e.target.getLatLng();
                  setPosition([pos.lat, pos.lng]);
                },
              }}
            />
          )}
        </MapContainer>
      </div>

      {/* بخش ورودی‌ها بصورت ریسپانسیو */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1 text-gray-600">عرض جغرافیایی</label>
          <input
            type="text"
            value={position ? position[0].toFixed(6) : ''}
            readOnly
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1 text-gray-600">طول جغرافیایی</label>
          <input
            type="text"
            value={position ? position[1].toFixed(6) : ''}
            readOnly
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
          />
        </div>
      </div>

      <button
        onClick={sendData}
      className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all"
      >
        تایید موقعیت و پرداخت
      </button>
    </div>
  );
}