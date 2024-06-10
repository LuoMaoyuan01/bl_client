// Import required library and functions
import React, { useEffect, useRef, useState, useContext } from 'react';
// import ReactDOM from 'react-dom';

import loadGoogleMapsApi from './loadGoogleMapsApi';
import busRoutesLoader from '../../utils/googlemaps/routes/bus/busRoutesController';
import brtRoutesLoader from '../../utils/googlemaps/routes/brt/brtRoutesController';
import obtainBusRoute from '../../utils/googlemaps/routes/bus/obtainBusRoute';
import obtainBrtRoute from '../../utils/googlemaps/routes/brt/obtainBrtRoute';
import displayBusRoute from '../../utils/googlemaps/routes/bus/displayBusRoute';
import displayBrtRoute from '../../utils/googlemaps/routes/brt/displayBrtRoute';
import displayBrtRouteWithTraffic from '../../utils/googlemaps/routes/brt/displayBrtRouteWithTraffic';
import DisplayMarkers from '../../utils/googlemaps/markers/displayBusMarkers';

// Import required component
import BusStopsCard from '../../components/ui/popup/busStopCard';


// Import required context
import MapContext from '../../context/mapContext';


const MapComponent = ({ busStops, busNumber, checkBoxStatus}) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [busStopData, setBusStopData] = useState(null);
  const { setMapInstance } = useContext(MapContext);

  // Handles the clicking on bus markers
  const handleMarkerClick = async (busMarkerResponseData) => {
    try {
      setBusStopData(busMarkerResponseData);
      // Toggles the busMarker 
    } catch (error) {
      console.error('Error fetching bus stop data:', error);
    }
  };

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
            // mapTypeId: googleMaps.MapTypeId.HYBRID  , // Set the default map type to Satellite view with labels
            mapId: process.env.REACT_APP_MAP_ID,
          };

          // googleMaps.Map loads in google.maps.Map instance
          const mapInstance = new googleMaps.Map(mapRef.current, mapOptions);
          setMap(mapInstance);

          // Set mapInstance for MapContext
          setMapInstance(mapInstance);
          
          console.log("Google Maps Loaded!");

// -------------------- Geocoding function (Disable if not needed since it costs quite abit to run) ------------------------------------------------ //
          
          // const updatedBusStops = await GMapsGeoCoding(busStops);
// ------------------------------------------------------------------------------------------------------------------------------------------------- //

          // Displays bus routes if valid bus number inputted && bus routes checkbox is checked
          if(parseInt(busNumber) && checkBoxStatus.busNumberSearchCheckbox){
            // Obtain split up route information in a list
            const busRoutes = await busRoutesLoader(apiKey, busStops, busNumber);
            // routesTime stores the total time taken across the paths and routePaths stores the individual decoded paths from the polylines
            let routesTime = 0.00;
            let routesPath = [];

            // Display the splitted bus routes on google maps in increments
            for(let i = 0; i < busRoutes.length; i++){
              // Obtain correct route number out of all the routes & decoded polyline from that route
              let routeResults = await obtainBusRoute(busNumber ,busRoutes[i], googleMaps, mapInstance) || 0;
              let routeDisplayed = routeResults.route;
              let path = routeResults.path;
              let routeDisplayedTiming = 0;
              // Convert timing to mins, in floating point, to nearest 2dp
              if(routeDisplayed){
                routeDisplayedTiming = (parseFloat(routeDisplayed.duration.slice(0,routeDisplayed.duration.length - 1))/60).toFixed(2) || 0;
                routesTime += parseFloat(routeDisplayedTiming);
                routesPath.push(path);
              }
              
            }
            // Displays polyline on maps and attaches event listener to the polyline that shows an infoWindow upon mouseover on the polyline
            displayBusRoute(routesTime, routesPath, googleMaps, mapInstance);
            console.log("Bus Routes Displayed!");
          }

          // Displays bus stops markers if valid bus number inputted & bus stops checkbox is checked
          if(parseInt(busNumber) && checkBoxStatus.busStopsCheckbox){
            // Display bus stop markers on google maps
            await DisplayMarkers(busStops, googleMaps, mapInstance, handleMarkerClick);
            console.log("Markers Displayed!");
          }

          // Displays brt routes if valid bus number inputted & brt routes checkbox is checked
          if(parseInt(busNumber) && checkBoxStatus.brtRoutesCheckbox){
            const brtRoutes = await brtRoutesLoader(apiKey, busStops);
            console.log(brtRoutes);
            // routesTime stores the total time taken across the paths and routePaths stores the individual decoded paths from the polylines
            let routesTime = 0.00;
            let routesPath = [];

            // Display the splitted brt routes on googleMaps in increments
            for(let i = 0; i < brtRoutes.length; i++){
              let routeResults = await obtainBrtRoute(brtRoutes[i], googleMaps, mapInstance);
              let routeDisplayed = routeResults.route;
              console.log(routeDisplayed);
              let path = routeResults.path;
              let routeDisplayedTiming = 0;
              // Convert timing to mins, in floating point, to nearest 2dp
              if(routeDisplayed){
                routeDisplayedTiming = (parseFloat(routeDisplayed.duration.slice(0,routeDisplayed.duration.length - 1))/60).toFixed(2) || 0;
                routesTime += parseFloat(routeDisplayedTiming);
                routesPath.push(path);
              }
              displayBrtRouteWithTraffic(routesTime, routeResults.route, googleMaps, mapInstance);
            }
            // Displays polyline on maps and attaches event listener to the polyline that shows an infoWindow upon mouseover on the polyline
            console.log(routesPath);
            // Toggle if want to display brt route without traffic information
            // displayBrtRoute(routesTime, routesPath, googleMaps, mapInstance);

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
  return (
    <>
      <div ref={mapRef} style={{ height: '100vh', width: '85%', zIndex: '1', position: 'relative'}} />
      {busStopData ? <BusStopsCard busStopData = {busStopData}/> : null}
    </>
  )
  // return (<div ref={mapRef} style={{ height: '100vh', width: '85%', zIndex: '1', position: 'relative'}} />);
};

export default MapComponent;
