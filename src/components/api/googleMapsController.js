// Import required library and functions
import React, { useEffect, useRef, useState } from 'react';
import loadGoogleMapsApi from '../../utils/googlemaps/loadGoogleMapsApi';
import LoadRoutes from '../../utils/googlemaps/loadRoutes';
import DisplayRoute from '../../utils/googlemaps/displayRoute';
import DisplayMarkers from '../../utils/googlemaps/displayMarkers';
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
          const routes1 = await LoadRoutes(apiKey, busStops.slice(0, busStops.length/5 + 1));
          const routes2 = await LoadRoutes(apiKey, busStops.slice(busStops.length/5, (busStops.length*2)/5 + 1));
          const routes3 = await LoadRoutes(apiKey, busStops.slice((busStops.length*2)/5, (busStops.length*3)/5 + 1));
          const routes4 = await LoadRoutes(apiKey, busStops.slice((busStops.length*3)/5, (busStops.length*4)/5 + 1));
          const routes5 = await LoadRoutes(apiKey, busStops.slice((busStops.length*4)/5, busStops.length));
          const routes = [routes1, routes2, routes3, routes4, routes5];
          console.log(routes);

          // Display bus stop markers on google maps
          await DisplayMarkers(busStops, googleMaps, mapInstance);

          // Display the splitted routes on google maps
          await DisplayRoute(busNumber ,routes, googleMaps, mapInstance);

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
