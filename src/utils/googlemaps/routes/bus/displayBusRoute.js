// Import required libraries and functions
import deepEqual from "../../../misc/comparison";

export const DisplayRoute = async (busNumber, responseData, googleMaps, mapInstance) => {

  // ------------------------- DEBUGGING LOGS ------------------------------ //
  // console.log(responseData);
  // console.log(responseData2);
  // ----------------------------------------------------------------------- //

  // Check if responseData passed in is empty
  if(deepEqual(responseData, {})){
    return;
  }
    
  // Loads in an array of routes for a certain path
  let routes;
  const data = responseData;
  routes = data.routes;

  console.log(routes);
  // console.log("Route Length " + routes.length);

  // Checks through an array of routes & returns the route number that contains the bus number in it
  // If no such route number exists, returns 0
  const obtainRouteNumber = (data, busNumber) => {
    if (data.routes && data.routes.length > 0) {
      for (let routeIndex = 0; routeIndex < data.routes.length; routeIndex++) {
        const route = data.routes[routeIndex];
        console.log(route);
        if (route.legs && route.legs.length > 0) {
          for (let legIndex = 0; legIndex < route.legs.length; legIndex++) {
            const leg = route.legs[legIndex];
            console.log(leg);
            if (leg.steps && leg.steps.length > 0) {
              let routeNumber = 1000;
              for (let stepIndex = 0; stepIndex <= leg.steps.length; stepIndex++) {
                if(stepIndex === leg.steps.length && routeNumber !== 1000){
                  console.log(routeNumber);
                  return [routeNumber, true];
                }
                if(stepIndex === leg.steps.length){
                  break;
                }
                const step = leg.steps[stepIndex];
                if (step.transitDetails && step.transitDetails.transitLine) {
                }else{
                  console.log('skipped');
                  continue;
                }
                let lineName = step.transitDetails.transitLine.name;
                if (lineName === busNumber) {
                  console.log("Bus Number Found In Route");
                }else{
                  console.log("Wrong Bus Number In Legs");
                  break;
                }
                console.log("updated routeNumber");
                routeNumber = routeIndex;
              }
            }
          }
        }
      }
    }
    // console.log("Bus Number Not Found In Route");
    return [0, false]; // If no matching routeIndex is found
  }

  let routeNumber = obtainRouteNumber(data, busNumber);
  console.log(routeNumber);

  // Try to get route for bus number without M at the back
  if(routeNumber[1] == false && busNumber.slice(busNumber.length-1, ) == 'M'){
    console.log("Obtaining route number for bus number without M")
    routeNumber = obtainRouteNumber(data, busNumber.slice(0, busNumber.length-1));
  }
  // console.log("Route Number: " + routeNumber[0]);

  // Obtain the polyline corresponding to that route number, and decodes it
  console.log(routes[routeNumber[0]]);
  const polyline = routes[routeNumber[0]].polyline.encodedPolyline;
  const path = googleMaps.geometry.encoding.decodePath(polyline);
  
  // Plotting of route on google maps
  const routePath = new googleMaps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: '#FF4433',
    strokeOpacity: 0.8,
    strokeWeight: 4
  });

  routePath.setMap(mapInstance);

};
  
export default DisplayRoute;