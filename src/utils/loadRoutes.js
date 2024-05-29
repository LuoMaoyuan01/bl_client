import axios from 'axios';

const LoadRoutes = async (apiKey, busStops) => {
  const BaseUrl = "https://routes.googleapis.com/directions/v2:computeRoutes";

  const requestBody = {
    origin: {
      location: {
        latLng: {
          latitude: 1.30674381370885,
          longitude: 103.87526413957400
        }
      }
    },
    destination: {
      location: {
        latLng: {
          latitude: 1.27464226961973,
          longitude: 103.84756721372408
        }
      }
    },
    travelMode: 'DRIVE',
    routingPreference: 'TRAFFIC_AWARE',
    computeAlternativeRoutes: false,
    routeModifiers: {
      avoidTolls: false,
      avoidHighways: false,
      avoidFerries: false
    },
    languageCode: 'en-US',
    units: 'IMPERIAL'
  };

  const headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': apiKey,
    'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline'
  };

  try {
    const response = await axios.post(BaseUrl, requestBody, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default LoadRoutes;
