// Import required images

const displayBrtAnimation = async (routesPath, googleMaps, mapInstance) => {
    
    // Promise and resolve will ensure displayBrtAnimation will run all its components before the next function in emsClickContext can run
    return new Promise((resolve) => {

        // Initialising the various symbols for route animation
        const emsSymbol = {
            path: googleMaps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 9,
            strokeWeight: 1.5,
            fillColor: 'red',
            fillOpacity: 1,
            strokeColor: "black",
        };
    
        const brtSymbol = {
            path: googleMaps.SymbolPath.CIRCLE,
            scale: 12,
            strokeWeight: 1.5,
            fillColor: 'orange',
            fillOpacity: 1,
            strokeColor: "black",
        };
    
        // Plotting of route on google maps
        const routePath = new googleMaps.Polyline({
            path: googleMaps.geometry.encoding.decodePath(routesPath[0]),
            icons:[
                {
                    icon: emsSymbol,
                    offset: '100%',
                },
    
                {
                    icon: brtSymbol,
                    offset: '100%',
                }
            ],
            geodesic: true,
            strokeColor: '#0096FF',
            strokeOpacity: 1,
            strokeWeight: 4,
            zIndex: 1,
            map: mapInstance,
        })
    
        animateSymbols(routePath, resolve);

    })

};

const animateSymbols = (routePath, resolve) => {
    let emscount = 0;
    let brtcount = 800;

    const emsIntervalID = window.setInterval(() => {
        emscount = (emscount + 1) % 2000; // Limit of traversal

        brtcount = (brtcount + 1) % 2000;

        const icons = routePath.get("icons");

        // EMS symbol
        icons[0].offset = emscount / 100 + "%";

        // Brt 1 symbol
        icons[1].offset = brtcount / 300 + "%";
        routePath.set("icons", icons);

        // console.log(icons[0].offset);
        // console.log(icons[1].offset);

        // Break loop once both icons offset same
        if(icons[0].offset === icons[1].offset){
            clearInterval(emsIntervalID);

            // Remove route from map upon finishing animation
            routePath.setMap(null);

            // Resolve promise and continue code flow
            resolve();
        }
    }, 20);

    return;

}

// window.displayBrtAnimation = displayBrtAnimation;

export default displayBrtAnimation;
