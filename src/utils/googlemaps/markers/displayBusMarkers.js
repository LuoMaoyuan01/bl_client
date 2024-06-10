// Import required images

// Import required libraries and functions
import axios from 'axios';

// Import required components

const DisplayMarkers = async (busStops, googleMaps, mapInstance, handleMarkerClick) =>{


    // Loop through busStops array and for each bus stop entry's lat & lng coordinates, create a marker.
    for(let i = 0; i < busStops.length; i++){

        // Create a new DOM image for each marker
        const busIcon = document.createElement("img"); // Update this path as needed
        busIcon.src = 'https://cdn-icons-png.flaticon.com/128/3066/3066259.png';

        // Styling of icon
        busIcon.style.width = '20px';
        busIcon.style.height = '20px';

        const latitude = parseFloat(busStops[i]['lat']);
        const longitude = parseFloat(busStops[i]['lng']);

        // Create marker with custom icon and lat,lng coordinates
        const googleMapsMarker = new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: latitude, lng: longitude },
            title: (busStops[i]['Bus Stop Name'] + '\nBus Stop ' + busStops[i]['Bus Stop Number']).toUpperCase(),
            content: busIcon,
        });

        // googleMapsMarker.setMap(mapInstance);
        console.log(`http://localhost:5000/scrape/${busStops[i]['Bus Stop Number']}`);

        // Create an event listener for sending api call to lta datamall & displaying popup card
        googleMaps.event.addListener(googleMapsMarker, 'click', async function (e) {
            await axios.get(`http://localhost:5000/scrape/${busStops[i]['Bus Stop Number']}`).then((response) => {
                const responseData = response.data;
                // Go back to Maps Controller to handle the click and display the DOM of Bus Stops Card
                handleMarkerClick(responseData);
            })
        });

        // Add event listener for click and displays a moveable popup
    }

    return;
}

export default DisplayMarkers;