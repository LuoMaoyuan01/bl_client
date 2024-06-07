

const displayBrtRouteWithTraffic = (routesTime, routeDisplayed, googleMaps, mapInstance) => {

    const speedReadingIntervals = routeDisplayed.travelAdvisory.speedReadingIntervals;
    const polyline = routeDisplayed.polyline.encodedPolyline;
    const decodedPolyline = googleMaps.geometry.encoding.decodePath(polyline);
    // console.log(speedReadingIntervals);
    // console.log(polyline);
    // console.log(decodedPolyline);

    // Creating infoWindow component
    const infoWindow = new googleMaps.InfoWindow({
        content: '',
        ariaLabel: "Uluru",

    });

    // Function to get the color based on speed
    const getColorBySpeed = (speed) => {
        switch (speed) {
            case 'TRAFFIC_JAM':
                return '#FF0000'; // Red
            case 'SLOW':
                return '#FF7300'; // Orange
            case 'NORMAL':
                return '#38A169'; // Green
            default:
                return '#38A169'; // Default to Green if no match
        }
    };

    speedReadingIntervals.forEach(interval => {
        const segmentPath = decodedPolyline.slice(interval.startPolylinePointIndex, interval.endPolylinePointIndex + 1);
        const color = getColorBySpeed(interval.speed);
    
        const routePath = new googleMaps.Polyline({
          path: segmentPath,
          geodesic: true,
          strokeColor: color,
          strokeOpacity: 1,
          strokeWeight: 4,
          // zIndex set to be higher so that this will overlap on existing polylines
          zIndex: 2,
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
    });


};

export default displayBrtRouteWithTraffic;
