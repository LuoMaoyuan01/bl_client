// Import required libraries and functions
import LoadBusRoutes from '../../utils/googlemaps/routes/bus/loadBusRoutes';

const RoutesLoader = async (apiKey, busStops, busNumber) => {

    const routingPreference = 'FEWER_TRANSFERS';
    let routes = [];
    let segmentNo = 1;
    let results;

    // Algorithm to iterate through different number of route splits to generate the correct path
    // segmentNo = 1 will address all paths that have no loops
    // segMentNo = 2 will address most paths with loops
    while(true){
        results = [];
        // If results array dont show that all loaded route return true, which means there is a corresponding bus number associated with that transit,
        // Then the loop will rerun since the break condition will not be triggered
        for (let i = 0; i < segmentNo; i++) {
            const segmentLength = Math.floor(busStops.length / segmentNo);
            const start = i * segmentLength;
            const end = Math.min(((i + 1) * segmentLength) + 1, busStops.length);
            const segment = busStops.slice(start, end);
            
            await LoadBusRoutes(apiKey, segment, busNumber, routingPreference).then(([route, result]) => {
                results.push(result);
                routes.push(route);
            }).catch((error => {
                console.log(error);
            }));
        }

        segmentNo++;
        // Evaluating condition: if results array returned does not include any false
        if(!(results.includes(false))){
            break;
        }

        // Break condition: when the route is split into 5 but still no optimal route can be obtained.
        if(segmentNo == 5){
            break;
        }
    }
    return routes;

}

export default RoutesLoader;