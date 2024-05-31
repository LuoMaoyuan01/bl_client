// Import required libraries and functions
import axios from 'axios';
import verifyTransitLineExists from './verifyTransitLineExist';

const LoadRoutes = async (apiKey, busStops, busNumber, routingPreference) => {

  const BaseUrl = "https://routes.googleapis.com/directions/v2:computeRoutes";

  // Define variables
  let startLat = parseFloat(busStops[0]['lat']);
  let startLng = parseFloat(busStops[0]['lng']);
  let endLat = parseFloat(busStops[busStops.length-1]['lat']);
  let endLng = parseFloat(busStops[busStops.length-1]['lng']);

  // -------------------------------------- DEBUG LOGGING -------------------------------------------------- //
  console.log(busStops[0]['Bus Stop Name']);
  console.log(busStops[busStops.length-1]['Bus Stop Name']);
  // ------------------------------------------------------------------------------------------------------- //

  // Template request body to be sent as payload to API endpoint
  let requestBody = {
    origin: {
      location: {
        latLng: {
          latitude: startLat,
          longitude: startLng
        }
      }
    },
    destination: {
      location: {
        latLng: {
          latitude: endLat,
          longitude: endLng
        }
      }
    },
    // intermediates: [],
    travelMode: 'TRANSIT',
    // routingPreference: 'TRAFFIC_UNAWARE',
    polylineQuality: 'HIGH_QUALITY',
    departureTime: "2024-05-30T05:00:00Z",
    computeAlternativeRoutes: true,
    transitPreferences: { 
        allowedTravelModes: ["BUS"],
        routingPreference: routingPreference 
    },

    routeModifiers: {
      avoidTolls: false,
      avoidHighways: false,
      avoidFerries: false,
    },
    languageCode: 'en-US',
    units: 'IMPERIAL'
  };

  
// ------------------------------ NO NEED WAYPOINT AS TRANSIT_MODE DO NOT ACCEPT WAYPOINT PARAMETER IN REQUEST BODY------------------------------------- //
// Create an entry for each waypoint between start busstop and end busstop
//   for(let i = 1; i < (busStops.length-1); i += 3){
//     const intermediatesBody = 
//     {
//         "location":{
//         "latLng":{
//             "latitude": parseFloat(busStops[i]['lat']),
//             "longitude": parseFloat(busStops[i]['lng'])
//         }
//         }
//     }
//     requestBody['intermediates'].push(intermediatesBody);
//   }
// ----------------------------------------------------------------------------------------------------------------------------------------------------- //

  const headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': apiKey,
    'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline,routes.legs.steps.transitDetails'
  };


  // Call google routes API to obtain the corresponding routes information from the requestbody
  try {
    const response = await axios.post(BaseUrl, requestBody, { headers });
    // console.log(response.data);

    // Verify if the routes returned contains the requested bus number
    // If dont exists, try to load route with different transitPreference parameter and see if this route has the requested bus number
    let exists = verifyTransitLineExists(response.data, busNumber);
    console.log(exists);
    if(!exists){
      console.log("Checking alternate API call");
      requestBody['transitPreferences']['routingPreference'] = 'LESS_WALKING';
      await axios.post(BaseUrl, requestBody, { headers }).then((response) => {
        exists = verifyTransitLineExists(response.data, busNumber);
        console.log(exists);
        if(exists){
          console.log("Alternate Preference Loaded!");
          return [response.data, exists];
        }
      })
    }

    return [response.data, exists];
  } catch (error) {
    if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Error request data:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error message:', error.message);
      }
      throw error; // Re-throw the error after logging it
    }
};

export default LoadRoutes;
