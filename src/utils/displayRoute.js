// Import required libraries and functions

export const DisplayRoute = async (busNumber, responseData, responseData2, googleMaps, mapInstance) => {

  console.log(responseData);
  console.log(responseData2);
  // Plot 2 separate routes
  for(let i = 0; i < 2; i++){
    let data;

    i ? data = responseData2 : data = responseData
    const routes = data.routes;
    console.log(routes.length); 

    // Verify correct bus number, select correct route
    function getAllTransitLineNames(data, busNumber) {
      if (data.routes && data.routes.length > 0) {
        for (let routeIndex = 0; routeIndex < data.routes.length; routeIndex++) {
          const route = data.routes[routeIndex];
          if (route.legs && route.legs.length > 0) {
            for (let legIndex = 0; legIndex < route.legs.length; legIndex++) {
              const leg = route.legs[legIndex];
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
    }
    
    // Example usage
    const routeNumber = getAllTransitLineNames(data, busNumber);

    if (routes && routes.length > 0) {
      const polyline = routes[routeNumber].polyline.encodedPolyline;
      const path = googleMaps.geometry.encoding.decodePath(polyline);
  
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