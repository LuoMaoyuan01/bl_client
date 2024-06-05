// Import required library and functions
import React, { useEffect, useRef, useState } from 'react';
import loadGoogleMapsApi from './loadGoogleMapsApi';
import RoutesLoader from './busRoutesController';
import LoadBrtRoutes from '../../utils/googlemaps/routes/brt/loadBrtRoutes';
import DisplayRoute from '../../utils/googlemaps/routes/bus/displayBusRoute';
import DisplayBrtRoute from '../../utils/googlemaps/routes/brt/displayBrtRoute';
import DisplayMarkers from '../../utils/googlemaps/markers/displayBusMarkers';
// import GMapsGeoCoding from '../../utils/geoCoding';


const MapComponent = ({ busStops, busNumber, checkBoxStatus, busDirection }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Function that waits for mapRef to load before running initMap
    const waitForMapRef = async () => {
      while (!mapRef.current) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      if(mapRef.current){
        initMap();
      }
    };

    // First time running initMap, mapRef might return null, so function waitForMapRef needed to wait for mapRef to not be null before initMap runs again
    const initMap = async () => {
      try {
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

        // Function that enables loading of googlemaps, parameters take in apikey and list of libraries to include in the loading
        const googleMaps = await loadGoogleMapsApi(apiKey, ['places', 'geometry', 'marker', 'routes']);

        // ---------------------------------------- DEBUGGING LOGS ---------------------------------------------- //
        // console.log('Google Maps API Loaded:', googleMaps);
        // console.log(busStops);
        // ------------------------------------------------------------------------------------------------------ //

        if (mapRef.current) {

          // Load googlemaps auto focus on starting bus stop of the route
          // If invalid bus number or BusNumberSearch checkbox not checked, load in the center of sg map
          const mapOptions = {
            center: (busNumber && checkBoxStatus.busNumberSearchCheckbox) ? { lat: parseFloat(busStops[0]['lat']), lng: parseFloat(busStops[0]['lng']) }: { lat: 1.3521, lng: 103.8198 },
            zoom: (busNumber && checkBoxStatus.busNumberSearchCheckbox) ? 15 : 12.4,
            mapTypeId: googleMaps.MapTypeId.HYBRID  , // Set the default map type to Satellite view with labels
            mapId: process.env.REACT_APP_MAP_ID,
          };

          // googleMaps.Map loads in google.maps.Map instance
          const mapInstance = new googleMaps.Map(mapRef.current, mapOptions);
          setMap(mapInstance);
          console.log("Google Maps Loaded!");

// -------------------- Geocoding function (Disable if not needed since it costs quite abit to run) ------------------------------------------------ //
          
          // const updatedBusStops = await GMapsGeoCoding(busStops);
// ------------------------------------------------------------------------------------------------------------------------------------------------- //

          // Displays bus routes if valid bus number inputted && bus routes checkbox is checked
          if(parseInt(busNumber) && checkBoxStatus.busNumberSearchCheckbox){
            // Obtain split up route information in a list
            const routes = await RoutesLoader(apiKey, busStops, busNumber);

            // Display the splitted routes on google maps in increments
            for(let i = 0; i < routes.length; i++){
              // console.log("Iteration: ", i);
              await DisplayRoute(busNumber ,routes[i], googleMaps, mapInstance);
            }
            console.log("Bus Routes Displayed!");
          }

          // Displays bus stops markers if valid bus number inputted & bus stops checkbox is checked
          if(parseInt(busNumber) && checkBoxStatus.busStopsCheckbox){
            // Display bus stop markers on google maps
            await DisplayMarkers(busStops, googleMaps, mapInstance);
            console.log("Markers Displayed!");
          }

          // Displays brt routes if valid bus number inputted & brt routes checkbox is checked
          if(parseInt(busNumber) && checkBoxStatus.brtRoutesCheckbox){
            const brtRoutes = await LoadBrtRoutes(apiKey, busStops, busNumber);

            // Display the laoded brt routes on the map
            await DisplayBrtRoute(busNumber ,brtRoutes, googleMaps, mapInstance);
            
          }
        
        // Catches error if mapRef is null
        }else {
          console.error('mapRef.current is null');  
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error); 

      }
    };
    waitForMapRef();
    initMap();

    return () => {
      console.log("MapComponent Unmounted!");
    }

  }, [busStops, busNumber, checkBoxStatus, busDirection]);

  if(loading){
    return <div>Loading...</div>; 
  }

  // Returns the map component with its styling parameters
  return <div ref={mapRef} style={{ height: '100vh', width: '85%', zIndex: '1' }} />;
};

export default MapComponent;
