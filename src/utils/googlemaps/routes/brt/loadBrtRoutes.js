// Import required libraries and functions
import axios from 'axios';

const LoadBrtRoutes = async (apiKey, busStops) => {
    // BRT Route is essentially a 'DRIVE' route that is the fastest and takes the average traffic experienced on the road in 24hrs 
    // The route generated aims to mimic how a BRT route will be like

    const BaseUrl = "https://routes.googleapis.com/directions/v2:computeRoutes";

    // Define variables
    let startLat = parseFloat(busStops[0]['lat']);
    let startLng = parseFloat(busStops[0]['lng']);
    let endLat = parseFloat(busStops[busStops.length-1]['lat']);
    let endLng = parseFloat(busStops[busStops.length-1]['lng']);
  
    // -------------------------------------- DEBUG LOGGING -------------------------------------------------- //
    // console.log(busStops[0]['Bus Stop Name']);
    // console.log(busStops[busStops.length-1]['Bus Stop Name']);
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
      travelMode: 'DRIVE',
      routingPreference: 'TRAFFIC_UNAWARE',
      polylineQuality: 'HIGH_QUALITY',
    // departureTime: "2024-05-30T05:00:00Z",
      computeAlternativeRoutes: true,
      routeModifiers: {
        avoidTolls: false,
        avoidHighways: false,
        avoidFerries: false,
      },
      languageCode: 'en-US',
      units: 'IMPERIAL'
    };

    
    const headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline,routes.legs.steps.transitDetails'
    };

    // Call google routes API to obtain the corresponding routes information from the requestbody
    try {
        const response = await axios.post(BaseUrl, requestBody, { headers })
        console.log(response.data);
        return response.data;

    }catch (error) {
        console.log(error);
    }
    
};

export default LoadBrtRoutes;