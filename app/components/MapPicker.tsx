'use client';

import { useState, useEffect, useCallback } from 'react';
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

function MapSearchControl() {
  const map = useMapEvents({});

  useEffect(() => {
    const provider = new OpenStreetMapProvider({
      params: {
        countrycodes: 'ir',
        addressdetails: 1,
      },
    });

    const searchControl = new (GeoSearchControl as any)({
      provider,
      showMarker: true,
      showPopup: false,
      marker: {
        draggable: true,
      },
      autoClose: true,
      keepResult: true,
      searchLabel: 'جستجوی مکان...',
      style: 'bar',
    });

    map.addControl(searchControl);

    map.on('geosearch/showlocation', (result: any) => {
      if (result.marker) {
        result.marker.dragging?.enable();
        result.marker.on('dragend', () => {
          const latlng = result.marker.getLatLng();
          setPosition([latlng.lat, latlng.lng]);
        });
      }
    });

    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);

  return null;
}

let setPosition: (pos: [number, number] | null) => void = () => { };

export default function MapPicker() {
  const [position, setPos] = useState<[number, number] | null>(null);
  setPosition = setPos;

  const defaultCenter: [number, number] = [35.6892, 51.3890];

  function ClickHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
      },
    });
    return null;
  }



  return (
    <div className="space-y-6">
      <p className='text-2xl font-bold'> تست پرداخت</p>
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <MapContainer
          center={position ?? defaultCenter}
          zoom={position ? 15 : 10}
          scrollWheelZoom={true}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapSearchControl />
          <ClickHandler />

          {position && (
            <Marker
              position={position}
              draggable={true}
              eventHandlers={{
                dragend: (e) => {
                  const marker = e.target as L.Marker;
                  const pos = marker.getLatLng();
                  setPosition([pos.lat, pos.lng]);
                },
              }}
            />
          )}
        </MapContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">عرض جغرافیایی (Latitude)</label>
          <input
            type="text"
            value={position ? position[0].toFixed(6) : ''}
            readOnly
            className="w-full px-4 py-2 border border-gray-200  rounded-lg "
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">طول جغرافیایی (Longitude)</label>
          <input
            type="text"
            value={position ? position[1].toFixed(6) : ''}
            readOnly
            className="w-full px-4 py-2 border border-gray-200  rounded-lg"
          />
        </div>

      </div>
      <div>
        <button
          className="px-6 py-3 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          تست پرداخت در این موقعیت
        </button>
      </div>
    </div>
  );
}