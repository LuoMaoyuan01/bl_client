// Import required images

const displayBrtAnimation = (routesPath, googleMaps, mapInstance) => {
    

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

    // Plotting of routes on google maps
    const routePath = new googleMaps.Polyline({
        // Uncomment line 17 for pre-decoded paths
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

    animateSymbols(routePath);

    // routePath.setMap(mapInstance);
};

const animateSymbols = (routePath) => {
    let emscount = 0;
    let brtcount = 800;

    window.setInterval(() => {
        emscount = (emscount + 1) % 20000; // Limit of traversal

        brtcount = (brtcount + 1) % 20000;

        const icons = routePath.get("icons");

        // EMS symbol
        icons[0].offset = emscount / 100 + "%";

        // Brt 1 symbol
        icons[1].offset = brtcount / 300 + "%";
        routePath.set("icons", icons);
    }, 20);

}

// window.displayBrtAnimation = displayBrtAnimation;

export default displayBrtAnimation;
