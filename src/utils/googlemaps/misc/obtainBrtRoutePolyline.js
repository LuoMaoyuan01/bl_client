// Function to get fixed route data polyline and use it to hardcode the brtRouteInfo
// ONLY RUN TO GET ENCODED POLYLINE OF NEW BRT ROUTES

// Import required functions
import axios from 'axios';
import brtRouteInformation from "../../../data/brtRouteInfo";

const obtainBrtRoutePolyline = async (googleMaps) => {

    let brtRouteInfo = brtRouteInformation();
    let lineInfo;
    let brtStations;

    const BaseUrl = "https://routes.googleapis.com/directions/v2:computeRoutes";
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    // Iterate through the different routes contained in brtRouteInfo Javascript object
    for(let i = 0; i < Object.keys(brtRouteInfo).length; i++){

        // Get that loop's values line information ('Brt Stations' +  'Decoded Polyline')
        lineInfo = Object.values(brtRouteInfo)[i];
        console.log(lineInfo);
        brtStations = lineInfo['Brt Stations']

    }

    // Template request body to be sent as payload to API endpoint, assuming each brtStation ONLY HAS 4 STATIONS
    let requestBody = {
        origin: {
          location: {
            latLng: {
              latitude: brtStations[0]['lat'],
              longitude: brtStations[0]['lng']
            }
          }
        },
        destination: {
          location: {
            latLng: {
              latitude: brtStations[3]['lat'],
              longitude: brtStations[3]['lng']
            }
          }
        },
        intermediates: [
            {
              location:{
                latLng:{
                  latitude: brtStations[1]['lat'],
                  longitude: brtStations[1]['lng']
                }
              }
            },

            {
                location:{
                  latLng:{
                    latitude: brtStations[2]['lat'],
                    longitude: brtStations[2]['lng']
                  }
                }
              },

          ],
        travelMode: 'DRIVE',
        extraComputations: ["TRAFFIC_ON_POLYLINE"],
        routingPreference: 'TRAFFIC_AWARE_OPTIMAL',
        polylineQuality: 'HIGH_QUALITY',
        // departureTime: "2024-06-08T05:00:00Z",
        computeAlternativeRoutes: true,
        routeModifiers: {
          avoidTolls: false,
          avoidHighways: false,
          avoidFerries: false,
        },
        languageCode: 'en-US',
        units: 'IMPERIAL'
      };
  
      // routes.legs.travelAdvisory.speedReadingIntervals gives speed information about the legs of a route
      const headers = {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline,routes.legs.steps.transitDetails,routes.travelAdvisory,routes.legs.travelAdvisory,routes.legs.polyline'
      };
  
      // Call google routes API to obtain the corresponding routes information from the requestbody
      try {
          const response = await axios.post(BaseUrl, requestBody, { headers })
          let responseData = response.data;
          let EncodedPolyline;
          let DecodedPolyline;
          console.log(response.data);
          for(let route = 0; route < Object.keys(responseData['routes']).length; route++){
            console.log(route);
            EncodedPolyline = responseData['routes'][route]['polyline']['encodedPolyline'];
            DecodedPolyline = googleMaps.geometry.encoding.decodePath(EncodedPolyline);
            console.log(EncodedPolyline);
          }
          return response.data;
  
      }catch (error) {
          console.log(error);
      }

}

export default obtainBrtRoutePolyline;