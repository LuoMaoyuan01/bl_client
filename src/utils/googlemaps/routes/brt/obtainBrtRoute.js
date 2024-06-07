// Import required libraries and functions
import deepEqual from "../../../misc/comparison";

export const obtainBrtRoute = async (responseData, googleMaps, mapInstance) => {

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

    return {route: brtRoutes[0], path: path};

};
  export default obtainBrtRoute;