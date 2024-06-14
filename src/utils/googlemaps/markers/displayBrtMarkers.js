// Import required images
import brtStationIcon from '../../../assets/images/brtStation.png';

// Import required libraries and functions

// Import required components

const DisplayBrtMarkers = async (brtStations, googleMaps, mapInstance, handleBrtMarkerClick) =>{


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
        const brtMarker = new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: latitude, lng: longitude },
            title: brtStations[i]['Full Name'],
            content: brtIcon,
        });

        // Create an event listener to each BRT Marker that runs a function enabling display of bus stop animation
        googleMaps.event.addListener(brtMarker, 'click', function (e) {
            handleBrtMarkerClick();
        });
    }

    return;
}

export default DisplayBrtMarkers;