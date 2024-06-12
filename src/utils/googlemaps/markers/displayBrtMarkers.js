// Import required images
import brtStationIcon from '../../../assets/images/brtStation.png';

// Import required libraries and functions

// Import required components

const DisplayBrtMarkers = async (brtStations, googleMaps, mapInstance) =>{


    // Loop through busStops array and for each bus stop entry's lat & lng coordinates, create a marker.
    for(let i = 0; i < brtStations.length; i++){

        // Create a new DOM image for each marker
        const brtIcon = document.createElement("img"); // Update this path as needed
        brtIcon.src = brtStationIcon;

        // Styling of icon
        brtIcon.style.width = '30px';
        brtIcon.style.height = '30px';

        const latitude = parseFloat(brtStations[i]['lat']);
        const longitude = parseFloat(brtStations[i]['lng']);

        // Create marker with custom icon and lat,lng coordinates
        new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: latitude, lng: longitude },
            title: brtStations[i]['Full Name'],
            content: brtIcon,
        });

        // Add event listener for click and displays a moveable popup
    }

    return;
}

export default DisplayBrtMarkers;