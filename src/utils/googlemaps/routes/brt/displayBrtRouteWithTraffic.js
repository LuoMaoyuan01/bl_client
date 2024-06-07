

const displayBrtRouteWithTraffic = (routesTime, routeDisplayed, googleMaps, mapInstance) => {
    const speedReadingIntervals = routeDisplayed.travelAdvisory.speedReadingIntervals;
    const polyline = routeDisplayed.polyline;

    console.log(speedReadingIntervals);
    console.log(polyline);
    // Creating infoWindow component
    const infoWindow = new googleMaps.InfoWindow({
        content: '',
        ariaLabel: "Uluru",

    });
  
    // // Plotting of routes on google maps
    // for (let i = 0; i < routesPath.length; i++) {
    //     const routePath = new googleMaps.Polyline({
    //         path: routesPath[i],
    //         geodesic: true,
    //         strokeColor: '#0096FF',
    //         strokeOpacity: 0.8,
    //         strokeWeight: 4
    //     });

    // routePath.setMap(mapInstance);

};

export default displayBrtRouteWithTraffic;
