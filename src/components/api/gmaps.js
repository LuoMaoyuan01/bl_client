import React, { useEffect, useRef, useState } from 'react';
import loadGoogleMapsApi from '../../utils/loadGoogleMapsApi'; // Ensure the import path is correct

const MapComponent = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        const googleMaps = await loadGoogleMapsApi(apiKey, ['places', 'marker', 'routes']);
        console.log('Google Maps API Loaded:', googleMaps);

        if (mapRef.current) { 
          // First load auto focus on singapore map
          const mapOptions = {
            center: { lat: 1.3521, lng: 103.8198 },
            zoom: 12.5,
            mapId: process.env.REACT_APP_MAP_ID,
          };

          // googleMaps.Map loads in google.maps.Map instance
          const mapInstance = new googleMaps.Map(mapRef.current, mapOptions);

          setMap(mapInstance);

          // const { AdvancedMarkerElement } = google.maps.marker;
          // console.log('AdvancedMarkerElement:', AdvancedMarkerElement);

          // Example: Adding a marker
          new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: 1.3521, lng: 103.8198 },
            title: 'Center Of Map',
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error); 
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ height: '100vh', width: '100%' }} />;
};

export default MapComponent;
