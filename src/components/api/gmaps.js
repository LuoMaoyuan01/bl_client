import React, { useEffect, useRef, useState } from 'react';
import loadGoogleMapsApi from '../../utils/loadGoogleMapsApi'; // Ensure the import path is correct

const MapComponent = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        // const apiKey = 'AIzaSyB5yzIMiOUagFda-20MnNBruQAGgdsVPfc';
        console.log(apiKey);
        const googleMaps = await loadGoogleMapsApi(apiKey, ['places']);

        if (mapRef.current) {
          const mapOptions = {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          };

          const mapInstance = new googleMaps.Map(mapRef.current, mapOptions);

          setMap(mapInstance);

          // Example: Adding a marker
          new googleMaps.Marker({
            position: { lat: -34.397, lng: 150.644 },
            map: mapInstance,
            title: 'Hello World!',
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};

export default MapComponent;
