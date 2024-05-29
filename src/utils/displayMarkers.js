// Import required images
// import busIcon from '../assets/images/busIcon.png'

// Import required libraries and functions

const DisplayMarkers = async (busStops, googleMaps, mapInstance) =>{


    // Loop through busStops array and for each bus stop entry, create a marker at that position
    for(let i = 0; i < busStops.length; i++){

        // Create a new DOM image for each marker
        const busIcon = document.createElement("img"); // Update this path as needed
        busIcon.src = 'https://cdn-icons-png.flaticon.com/128/3066/3066259.png';
        busIcon.style.width = '20px';
        busIcon.style.height = '20px';

        const latitude = parseFloat(busStops[i]['lat']);
        const longitude = parseFloat(busStops[i]['lng']);
        // const busIcon = createSvgElement(busIconURL);

        new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: latitude, lng: longitude },
            title: (busStops[i]['Bus Stop Name'] + '\nBus Stop ' + busStops[i]['Bus Stop Number']).toUpperCase(),
            content: busIcon,
        });
    }

    return;
}

export default DisplayMarkers;