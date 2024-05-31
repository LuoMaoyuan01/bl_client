// Import required library and functions
import React, { useEffect, useRef, useState } from 'react';
import loadGoogleMapsApi from './loadGoogleMapsApi';
import RoutesLoader from './routesController';
import DisplayRoute from '../../utils/googlemaps/routes/displayBusRoute';
import DisplayMarkers from '../../utils/googlemaps/markers/displayBusMarkers';
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
        console.log("Google Maps Loaded!");

        // ---------------------------------------- DEBUGGING LOGS ---------------------------------------------- //
        // console.log('Google Maps API Loaded:', googleMaps);
        // console.log(busStops);
        // ------------------------------------------------------------------------------------------------------ //

        if (mapRef.current) {

          // First loa  d auto focus on starting bus stop of the route
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

          // Obtain split up route information in a list
          const routes = await RoutesLoader(apiKey, busStops, busNumber);
          console.log("Routes Loaded!");
          console.log(routes);

          // Display bus stop markers on google maps
          await DisplayMarkers(busStops, googleMaps, mapInstance);
          console.log("Markers Displayed!");

          // Display the splitted routes on google maps in increments
          for(let i = 0; i < routes.length; i++){
            console.log("Iteration: ", i);
            await DisplayRoute(busNumber ,routes[i], googleMaps, mapInstance);
          }
          console.log("Routes Displayed!");

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

  }, [busStops, busNumber]);

  if(loading){
    return <div>Loading...</div>; 
  }

  // Returns the map component with its styling parameters
  return <div ref={mapRef} style={{ height: '94vh', width: '100%' }} />;
};

export default MapComponent;
