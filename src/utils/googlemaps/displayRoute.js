// Import required libraries and functions

export const DisplayRoute = async (busNumber, responseData, googleMaps, mapInstance) => {

  // ------------------------- DEBUGGING LOGS ------------------------------ //
  // console.log(responseData);
  // console.log(responseData2);
  // ----------------------------------------------------------------------- //

  // Plot 2 separate routes
  for(let i = 0; i < responseData.length; i++){
    let data;

    data = responseData[i];

    const routes = data.routes;

    console.log("Iteration " + i);
    console.log("Route Length " + routes.length);

    // Verifies that entry bus number and route bus number are equivalent, returning that route's index
    function getAllTransitLineNames(data, busNumber) {
      if (data.routes && data.routes.length > 0) {
        for (let routeIndex = 0; routeIndex < data.routes.length; routeIndex++) {
          const route = data.routes[routeIndex];
          console.log(route);
          if (route.legs && route.legs.length > 0) {
            for (let legIndex = 0; legIndex < route.legs.length; legIndex++) {
              const leg = route.legs[legIndex];
              console.log(leg);
              if (leg.steps && leg.steps.length > 0) {
                for (let stepIndex = 0; stepIndex < leg.steps.length; stepIndex++) {
                  const step = leg.steps[stepIndex];
                  if (step.transitDetails && step.transitDetails.transitLine) {
                    const lineName = step.transitDetails.transitLine.name;
                    if (lineName === busNumber) {
                      console.log(routeIndex);
                      return routeIndex;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return null; // If no matching routeIndex is found
    }
    
    const routeNumber = getAllTransitLineNames(data, busNumber);

    // Obtain the polyline corresponding to that route number, and decodes it
    if (routes && routes.length > 0) {
      const polyline = routes[routeNumber].polyline.encodedPolyline;
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
    }
  }
};
  
export default DisplayRoute;