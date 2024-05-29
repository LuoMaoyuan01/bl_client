import axios from 'axios';

const LoadRoutes = async (apiKey, busStops) => {
  const BaseUrl = "https://routes.googleapis.com/directions/v2:computeRoutes";

  const requestBody = {
    origin: {
      location: {
        latLng: {
          latitude: parseFloat(busStops[0]['lat']),
          longitude: parseFloat(busStops[0]['lng'])
        }
      }
    },
    destination: {
      location: {
        latLng: {
          latitude: parseFloat(busStops[busStops.length-1]['lat']),
          longitude: parseFloat(busStops[busStops.length-1]['lng'])
        }
      }
    },
    // intermediates: [],
    travelMode: 'TRANSIT',
    computeAlternativeRoutes: false,
    transitPreferences: { 
        allowedTravelModes: ["BUS"],
        routingPreference: "LESS_WALKING"
    },

    routeModifiers: {
      avoidTolls: false,
      avoidHighways: false,
      avoidFerries: false
    },
    languageCode: 'en-US',
    units: 'IMPERIAL'
  };

  
// ------------------------------ NO NEED WAYPOINT AS TRANSIT_MODE DO NOT ACCEPT WAYPOINT PARAMETER IN REQUEST BODY-------------------------------------
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
// -----------------------------------------------------------------------------------------------------------------------------------------------------


  const headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': apiKey,
    'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline'
  };


  // Call google routes API to obtain the corresponding routes information from the requestbody
  try {
    const response = await axios.post(BaseUrl, requestBody, { headers });
    return response.data;
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
