"use client"
import dynamic from 'next/dynamic';

const MapPicker = dynamic(() => import('@/app/components/MapPicker'), {
  ssr: false,
  loading: () => <p className="text-center py-10">در حال بارگذاری نقشه...</p>,
});

export default function Mapp() {
  return <MapPicker />;
}