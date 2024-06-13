// Import required images
import busIcon from '../../../assets/images/busIcon.png';
import EMSIcon from '../../../assets/images/EMSIcon.png';

// Import required libraries and functions

// Import required components

const displayEmsSymbols = ( brtRouteInfo, googleMaps, mapInstance ) =>{

    const brts = brtRouteInfo['Blue Route']['Brt'];
    const emss = brtRouteInfo['Blue Route']['EMS']

    // Loop through brts array and for each entry's lat & lng coordinates, create a brt marker.
    for(let i = 0; i < brts.length; i++){

        // Create a new DOM image for each marker
        const bus = document.createElement("img"); // Update this path as needed
        bus.src = busIcon;

        // Styling of icon
        bus.style.width = '30px';
        bus.style.height = '30px';

        const latitude = parseFloat(brts[i]['lat']);
        const longitude = parseFloat(brts[i]['lng']);

        // Create marker with custom icon and lat,lng coordinates
        new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: latitude, lng: longitude },
            title: ('BRT ID.....').toUpperCase(),
            content: bus,
        });
    }

    // Create a new marker for every EMS in the array
    for(let i = 0; i < emss.length; i++){

        // Create a new DOM image for each marker
        const ems = document.createElement("img"); // Update this path as needed
        ems.src = EMSIcon;

        // Styling of icon
        ems.style.width = '30px';
        ems.style.height = '30px';

        const latitude = parseFloat(emss[i]['lat']);
        const longitude = parseFloat(emss[i]['lng']);

        // Create marker with custom icon and lat,lng coordinates
        new googleMaps.marker.AdvancedMarkerElement({
            map: mapInstance,
            position: { lat: latitude, lng: longitude },
            title: ('BRT ID.....').toUpperCase(),
            content: ems,
        });
    }

    return;
}

export default displayEmsSymbols;