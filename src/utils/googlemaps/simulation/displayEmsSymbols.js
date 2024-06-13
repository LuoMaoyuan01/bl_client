// Import required images
import busIcon from '../../../assets/images/busIcon.png';

// Import required libraries and functions

// Import required components

const displayEmsSymbols = ( brtRouteInfo, googleMaps, mapInstance ) =>{

    const busStops = brtRouteInfo['Blue Route']['Brt Stations'];

    // Loop through busStops array and for each bus stop entry's lat & lng coordinates, create a marker.
    for(let i = 0; i < busStops.length; i++){

        // Create a new DOM image for each marker
        const bus = document.createElement("img"); // Update this path as needed
        bus.src = busIcon;

        // Styling of icon
        bus.style.width = '20px';
        bus.style.height = '20px';

        const latitude = parseFloat(busStops[i]['lat']);
        const longitude = parseFloat(busStops[i]['lng']);

        // Create marker with custom icon and lat,lng coordinates
        new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: latitude, lng: longitude },
            title: ('Bus ID.....').toUpperCase(),
            content: bus,
        });

        // Create an event listener for sending api call to lta datamall & displaying popup card
        // googleMaps.event.addListener(googleMapsMarker, 'click', async function (e) {
        //     await axios.get(`http://localhost:5000/scrape/${busStops[i]['Bus Stop Number']}`).then((response) => {
        //         const responseData = response.data;
        //         // Go back to Maps Controller to handle the click and display the DOM of Bus Stops Card
        //         handleMarkerClick(responseData);
        //     })
        // });

    }

    return;
}

export default displayEmsSymbols;