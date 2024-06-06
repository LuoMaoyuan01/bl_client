// Import required library and functions
import React, { useEffect, useRef, useState } from 'react';
import loadGoogleMapsApi from './loadGoogleMapsApi';
import busRoutesLoader from '../../utils/googlemaps/routes/bus/busRoutesController';
import brtRoutesLoader from '../../utils/googlemaps/routes/brt/brtRoutesController';
import DisplayRoute from '../../utils/googlemaps/routes/bus/displayBusRoute';
import DisplayBrtRoute from '../../utils/googlemaps/routes/brt/displayBrtRoute';
import DisplayMarkers from '../../utils/googlemaps/markers/displayBusMarkers';
// import GMapsGeoCoding from '../../utils/geoCoding';


const MapComponent = ({ busStops, busNumber, checkBoxStatus, busDirection }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {

    // Function that waits for mapRef to load before running initMap
    const waitForMapRef = async () => {
      // Delays initMap till mapRef.current is set
      while (!mapRef.current) {
        console.log("Run");
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
            center: (busNumber && checkBoxStatus.busNumberSearchCheckbox) ? { lat: parseFloat(busStops[0]['lat'] || 1.3521), lng: parseFloat(busStops[0]['lng'] || 103.8198) }: { lat: 1.3521, lng: 103.8198 },
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
            const routes = await busRoutesLoader(apiKey, busStops, busNumber);

            // Display the splitted bus routes on google maps in increments
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
            const brtRoutes = await brtRoutesLoader(apiKey, busStops, busNumber);
            console.log("BRT Routes Loaded");

            // Display the splitted brt routes on googleMaps in increments
            for(let i = 0; i < brtRoutes.length; i++){
              console.log("Iteration: ", i);
              await DisplayBrtRoute(busNumber ,brtRoutes[i], googleMaps, mapInstance);
            }
            console.log("BRT Routes Displayed");

          }
        
        // Catches error if mapRef is null
        }else {
          console.error('mapRef.current is null');  
          return;
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error); 

      }
    };

    waitForMapRef();

    return () => {
      console.log("MapComponent Unmounted!");
    }

  }, []);

  // Returns the map component with its styling parameters
  return <div ref={mapRef} style={{ height: '100vh', width: '85%', zIndex: '1' }} />;
};

export default MapComponent;
