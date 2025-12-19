function UiMap({ MapContainer, position, defaultCenter, TileLayer, MapSearchControl, MapClickHandler, handlePositionChange, Marker, setPosition, sendData, setAmount, amount, setPin2, pin2 }) {
    return (
        <div className="mb-10 lg:mb-0 flex flex-col space-y-4 p-2 md:p-6 max-w-full overflow-x-hidden">
            <p className="text-xl md:text-2xl font-bold text-center md:text-right">تست پرداخت</p>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col">
                    <label className="text-xs font-medium mb-1 text-gray-600">عرض جغرافیایی (Latitude)</label>
                    <input
                        type="text"
                        value={position ? position[0].toFixed(6) : '-'}
                        readOnly
                        className="w-full focus:outline-0 px-3 py-2 border border-gray-200 rounded-lg bg-gray-100 text-sm"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs font-medium mb-1 text-gray-600">طول جغرافیایی (Longitude)</label>
                    <input
                        type="text"
                        value={position ? position[1].toFixed(6) : '-'}
                        readOnly
                        className="w-full focus:outline-0 px-3 py-2 border border-gray-200 rounded-lg bg-gray-100 text-sm"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col">
                    <label className="text-xs font-medium mb-1 text-gray-600">رمز</label>
                    <input
                        type="text"
                        value={pin2}
                        onChange={(e) => setPin2(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs font-medium mb-1 text-gray-600">قیمت</label>
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm"
                    />
                </div>
            </div>

            <button
                onClick={sendData}
                disabled={!position}
                className={`w-full py-3 rounded-xl font-bold transition-all ${position
                    ? 'bg-blue-600 hover:bg-blue-700 active:scale-95 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
            >
                {position ? 'تایید موقعیت و تست پرداخت' : 'لطفاً موقعیت را انتخاب کنید'}
            </button>
        </div>
    )
}

export default UiMap