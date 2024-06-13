// mapContext.js
import React, { createContext, useState } from 'react';

const MapContext = createContext();

export const MapProvider = ({ children }) => {
    const [googleMaps, setGoogleMaps] = useState();
    const [mapInstance, setMapInstance] = useState();

  const setViewPoint = (latLng) => {
    if (mapInstance) {
        console.log(mapInstance);
        mapInstance.setCenter(latLng);
        mapInstance.setZoom(20);
    }
  };

  return (
    <MapContext.Provider value={{ mapInstance, setMapInstance, googleMaps, setGoogleMaps, setViewPoint }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapContext;