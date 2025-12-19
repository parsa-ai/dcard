'use client';

import { useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
// کامپوننت کلیک روی نقشه
function MapClickHandler({ onPositionChange }: { onPositionChange: (pos: [number, number]) => void }) {
  useMapEvents({
    click(e) {
      onPositionChange([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

// کامپوننت سرچ (فقط روی دسکتاپ نمایش داده می‌شه)
function MapSearchControl({ onLocationSelected }: { onLocationSelected: (pos: [number, number]) => void }) {
  const map = useMapEvents({});

  // تشخیص موبایل با استفاده از window (ایمن در کلاینت)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useCallback(() => {
    if (isMobile) return; // در موبایل سرچ بار رو نشون نده

    const provider = new OpenStreetMapProvider({
      params: { countrycodes: 'ir', addressdetails: 1 },
    });

    const searchControl = new (GeoSearchControl as any)({
      provider,
      showMarker: true,
      showPopup: false,
      marker: { draggable: true },
      autoClose: true,
      keepResult: true,
      searchLabel: 'جستجوی مکان در ایران...',
      style: 'bar',
    });

    map.addControl(searchControl);

    // وقتی مکان انتخاب شد
    map.on('geosearch/showlocation', (result: any) => {
      const { x: lng, y: lat } = result.location;
      onLocationSelected([lat, lng]);

      // اگر مارکر درگ شد
      if (result.marker) {
        result.marker.on('dragend', (e: any) => {
          const latlng = e.target.getLatLng();
          onLocationSelected([latlng.lat, latlng.lng]);
        });
      }
    });

    return () => {
      map.removeControl(searchControl);
    };
  }, [map, onLocationSelected, isMobile]);

  return null;
}

export default function MapPicker() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const defaultCenter: [number, number] = [35.6892, 51.3890];

  const handlePositionChange = (newPos: [number, number]) => {
    setPosition(newPos);
  };

  const sendData = () => {
    if (!position) {
      alert('لطفاً یک موقعیت روی نقشه انتخاب کنید');
      return;
    }

    console.log('موقعیت انتخاب‌شده:', {
      latitude: position[0].toFixed(6),
      longitude: position[1].toFixed(6),
    });

    // اینجا می‌تونی به API بفرستی یا فرم رو سابمیت کنی
    // مثلاً: router.push('/payment?lat=...&lng=...')
  };

  return (
    <div className="flex flex-col space-y-4 p-2 md:p-6 max-w-full overflow-x-hidden">
      <p className="text-xl md:text-2xl font-bold text-center md:text-right">تست پرداخت</p>

      {/* نقشه */}
      <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
        <MapContainer
          center={position ?? defaultCenter}
          zoom={position ? 15 : 12}
          scrollWheelZoom={true}
          style={{ height: '50vh', minHeight: '320px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapSearchControl onLocationSelected={handlePositionChange} />
          <MapClickHandler onPositionChange={handlePositionChange} />

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

      {/* نمایش مختصات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1 text-gray-600">عرض جغرافیایی (Latitude)</label>
          <input
            type="text"
            value={position ? position[0].toFixed(6) : '-'}
            readOnly
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1 text-gray-600">طول جغرافیایی (Longitude)</label>
          <input
            type="text"
            value={position ? position[1].toFixed(6) : '-'}
            readOnly
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
          />
        </div>
      </div>

      {/* دکمه تایید */}
      <button
        onClick={sendData}
        disabled={!position}
        className={`w-full py-3 rounded-xl font-bold transition-all ${
          position
            ? 'bg-blue-600 hover:bg-blue-700 active:scale-95 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {position ? 'تایید موقعیت و پرداخت' : 'لطفاً موقعیت را انتخاب کنید'}
      </button>
    </div>
  );
}