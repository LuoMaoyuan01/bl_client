// Import required libraries and functions
import deepEqual from "../../../misc/comparison";

export const DisplayBrtRoute = async (busNumber, responseData, googleMaps, mapInstance) => {

    // ------------------------- DEBUGGING LOGS ------------------------------ //
    // console.log(responseData);
    // ----------------------------------------------------------------------- //

    // Check if responseData passed in is empty
    if(deepEqual(responseData, {})){
        return;
    }

    const brtRoutes = responseData.routes;

    // Take the first route generated as it is the fastest & obtain the polyline from that route
    const polyline = brtRoutes[0].polyline.encodedPolyline;

    // Obtain path corresponding to the polyline
    const path = googleMaps.geometry.encoding.decodePath(polyline);

    // Plotting of route on google maps
    const routePath = new googleMaps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#0096FF',
        strokeOpacity: 0.8,
        strokeWeight: 4
    });

    routePath.setMap(mapInstance);

};
  export default DisplayBrtRoute;