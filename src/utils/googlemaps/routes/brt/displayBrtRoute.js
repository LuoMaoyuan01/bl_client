
const displayBrtRoute = (routesTime, routesPath, routesColour, googleMaps, mapInstance) => {
    
    // Creating infoWindow component
    const infoWindow = new googleMaps.InfoWindow({
        content: '',
        ariaLabel: "Uluru",

    });
  
    // Plotting of routes on google maps
    for (let i = 0; i < routesPath.length; i++) {
        const routePath = new googleMaps.Polyline({
            // Uncomment line 17 for pre-decoded paths
            path: googleMaps.geometry.encoding.decodePath(routesPath[i]),
            // path: routesPath[i],
            geodesic: true,
            strokeColor: routesColour,
            strokeOpacity: 1,
            strokeWeight: 4,
            zIndex: 1,
        });

    routePath.setMap(mapInstance);

    // Add event listener to each route that displays the routesTime in an infowindow at that position
    googleMaps.event.addListener(routePath, 'mouseover', function (e) {

        infoWindow.setPosition(e.latLng);
        infoWindow.setContent(`<p><b>Travel Time From Start Location: <u>${routesTime.toFixed(2)} mins<u></b></p>`);
        infoWindow.open(mapInstance);
    });

    // Close infowindow once mouse does not hover at that location
    googleMaps.event.addListener(routePath, 'mouseout', function () {
        infoWindow.close();
    });
  }
};

export default displayBrtRoute;
