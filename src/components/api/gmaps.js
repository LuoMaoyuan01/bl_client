// Import required library and functions
import React, { useEffect, useRef, useState } from 'react';
import loadGoogleMapsApi from '../../utils/loadGoogleMapsApi';
import LoadRoutes from '../../utils/loadRoutes';
import DisplayRoute from '../../utils/displayRoute';
import DisplayMarkers from '../../utils/displayMarkers';
// import GMapsGeoCoding from '../../utils/geoCoding';


const MapComponent = ({ busStops, busNumber }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initMap = async () => {
      try {
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

        // Function that enables loading of googlemaps
        const googleMaps = await loadGoogleMapsApi(apiKey, ['places', 'geometry', 'marker', 'routes']);

        // ---------------------------------------- DEBUGGING LOGS ---------------------------------------------- //
        // console.log('Google Maps API Loaded:', googleMaps);
        // console.log(busStops);
        // ------------------------------------------------------------------------------------------------------ //

        if (mapRef.current) {
          console.log("test");

          // First load auto focus on starting bus stop of the route
          const mapOptions = {
            center: { lat: parseFloat(busStops[0]['lat']), lng: parseFloat(busStops[0]['lng']) },
            zoom: 15,
            mapId: process.env.REACT_APP_MAP_ID,
          };

          // googleMaps.Map loads in google.maps.Map instance
          const mapInstance = new googleMaps.Map(mapRef.current, mapOptions);
          setMap(mapInstance);

// -------------------- Geocoding function (Disable if not needed since it costs quite abit to run) ------------------------------------------------ //
          
          // const updatedBusStops = await GMapsGeoCoding(busStops);
// ------------------------------------------------------------------------------------------------------------------------------------------------- //


          // Obtain splitted route information for that bus number
          const routes1 = await LoadRoutes(apiKey, busStops.slice(0, busStops.length/2 + 1));
          const routes2 = await LoadRoutes(apiKey, busStops.slice(busStops.length/2, busStops.length));

          // Display the splitted routes on google maps
          await DisplayRoute(busNumber ,routes1 ,routes2, googleMaps, mapInstance);

          // Display bus stop markers on google maps
          await DisplayMarkers(busStops, googleMaps, mapInstance);

          // Ensures MAP, ROUTES & MARKERS loaded in tandem
          setTimeout(() => {setLoading(false);}, 300);

          }else {
            console.error('mapRef.current is null');
            setLoading(false);
          }
      } catch (error) {
        console.error('Error loading Google Maps:', error); 
      }
    };

    initMap();

  }, [busStops]);

  if(loading){
    return <div>Loading...</div>; 
  }

  // Returns the map component with its styling parameters
  return <div ref={mapRef} style={{ height: '94vh', width: '100%' }} />;
};

export default MapComponent;
