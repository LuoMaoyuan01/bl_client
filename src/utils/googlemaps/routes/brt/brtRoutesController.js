// Import required libraries and functions
import LoadBrtRoutes from "./loadBrtRoutes";

const brtRoutesLoader = async (apiKey, busStops, busNumber) => {

    let routes = [];
    let segmentNo = 1;

    // Check if bus route is in a loop
    // If its in a loop, break loading of bus routes into 2 parts
    if(busStops[0]['lat'] === busStops[busStops.length - 1]['lat']){
        segmentNo = 2;
    }else{
        segmentNo = 1;
    }

    // Slices busStops array into their segmentNo number of parts and gets the brt routes for the respective segments
    for (let i = 0; i < segmentNo; i++) {
        const segmentLength = Math.floor(busStops.length / segmentNo);
        const start = i * segmentLength;
        const end = Math.min(((i + 1) * segmentLength) + 1, busStops.length);
        const segment = busStops.slice(start, end);
        
        await LoadBrtRoutes(apiKey, segment, busNumber).then((route) => {
            routes.push(route);
        }).catch((error => {
            console.log(error);
        }));
    }

    return routes;

}

export default brtRoutesLoader;