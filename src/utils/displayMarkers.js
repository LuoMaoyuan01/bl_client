// Import required libraries and functions

const DisplayMarkers = (busStops, googleMaps, mapInstance) =>{

    // Loop through busStops array and for each bus stop entry, create a marker at that position
    for(let i = 0; i < busStops.length; i++){
        const latitude = parseFloat(busStops[i]['lat']);
        const longitude = parseFloat(busStops[i]['lng']);

        new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: latitude, lng: longitude },
            title: 'Center Of Map',
        });
    }

    return;
}

export default DisplayMarkers;