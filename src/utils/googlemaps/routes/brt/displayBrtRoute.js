

const displayBrtRoute = (routesTime, routesPath, googleMaps, mapInstance) => {
    
    // Creating infoWindow component
    const infoWindow = new googleMaps.InfoWindow({
        content: '',
        ariaLabel: "Uluru",

    });
  
    // Plotting of routes on google maps
    for (let i = 0; i < routesPath.length; i++) {
        const routePath = new googleMaps.Polyline({
            path: routesPath[i],
            geodesic: true,
            strokeColor: '#0096FF',
            strokeOpacity: 1,
            strokeWeight: 4,
            zIndex: 1,
        });

    routePath.setMap(mapInstance);

    // Add event listener to each route that displays the routesTime in an infowindow at that position
    googleMaps.event.addListener(routePath, 'mouseover', function (e) {

        infoWindow.setPosition(e.latLng);
        infoWindow.setContent(`<p><b>Travel Time From Start Location: <u>${routesTime} mins<u></b></p>`);
        infoWindow.open(mapInstance);
    });

    // Close infowindow once mouse does not hover at that location
    googleMaps.event.addListener(routePath, 'mouseout', function () {
        infoWindow.close();
    });
  }
};

export default displayBrtRoute;
