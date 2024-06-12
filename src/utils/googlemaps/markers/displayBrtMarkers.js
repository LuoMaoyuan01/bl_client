// Import required images
import brtStation from '../../../assets/images/brtStation.png';

// Import required libraries and functions

// Import required components

const DisplayBrtMarkers = async (brtStops, googleMaps, mapInstance) =>{


    // Loop through busStops array and for each bus stop entry's lat & lng coordinates, create a marker.
    for(let i = 0; i < brtStops.length; i++){

        // Create a new DOM image for each marker
        const brtIcon = document.createElement("img"); // Update this path as needed
        brtIcon.src = brtStation;

        // Styling of icon
        brtIcon.style.width = '30px';
        brtIcon.style.height = '30px';

        const latitude = parseFloat(brtStops[i]['lat']);
        const longitude = parseFloat(brtStops[i]['lng']);

        // Create marker with custom icon and lat,lng coordinates
        const googleMapsMarker = new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: latitude, lng: longitude },
            title: brtStops[i]['Full Name'],
            content: brtIcon,
        });

        // Add event listener for click and displays a moveable popup
    }

    return;
}

export default DisplayBrtMarkers;