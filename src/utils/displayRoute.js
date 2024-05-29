// Import required libraries and functions

export const DisplayRoute = (responseData, googleMaps, mapInstance) => {
    const routes = responseData.routes;
    if (routes && routes.length > 0) {
      const polyline = routes[0].polyline.encodedPolyline;
      const path = googleMaps.geometry.encoding.decodePath(polyline);
  
      const routePath = new googleMaps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
  
      routePath.setMap(mapInstance);
    }
  };
  
  export default DisplayRoute;