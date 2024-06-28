// Import required images

const displayBrtAnimation = async (routesPath, routesColour, googleMaps, mapInstance) => {
    
    // Promise and resolve will ensure displayBrtAnimation will run all its components before the next function in emsClickContext can run
    return new Promise((resolve) => {

        // Initialising the various symbols for route animation
        const sirenSymbol = {
            path: "M30.086 41.954 c-16.724 7.725-33.447 7.725-50.171 0V23.522 c0-13.854 11.231-25.085 25.085-25.085 h0 c13.854 0 25.085 11.231 25.085 25.085 V41.954 z M33.61 58H-23.61 c-2.116 0-3.832-1.716-3.832-3.832 v-8.382 c0-2.116 1.716-3.832 3.832-3.832 h57.22 c2.116 0 3.832 1.716 3.832 3.832 v8.382 C37.442 56.284 35.727 58 33.61 58 z M5 -5.754 c-1.104 0-2-0.896-2-2 V-22 c0-1.104 0.896-2 2-2 s2 0.896 2 2 v14.246 C7 -6.649 6.104 -5.754 5 -5.754 z M-19.889 5.555 c-0.512 0-1.024-0.195-1.414-0.586 L-31.376 -5.104 c-0.781-0.781-0.781-2.047 0-2.828 c0.78-0.781 2.048-0.781 2.828 0 l10.073 10.073 c0.781 0.781 0.781 2.047 0 2.828 C-18.865 5.36-19.377 5.555-19.889 5.555 z M29.889 5.555 c-0.512 0-1.023-0.195-1.414-0.586 c-0.781-0.781-0.781-2.047 0-2.828 l10.073-10.073 c0.781-0.781 2.047-0.781 2.828 0 c0.781 0.781 0.781 2.047 0 2.828 L31.303 4.969 C30.912 5.36 30.4 5.555 29.889 5.555 z",
            scale: 0.5,
            fillColor: 'red',
            fillOpacity: 1,
            strokeColor: 'black',
            strokeWeight: 1.5,
        };
    
        const busSymbol = {
            path: "M48,10 v44 a6,6 0 0,1 -6,6 h-12 a6,6 0 0,1 -6,-6 v-44 a6,6 0 0,1 6,-6 h12 a6,6 0 0,1 6,6 z M34,14 h10 v12 h-10 z M34,27 h10 v12 h-10 z M34,40 h10 v12 h-10 z M24,20 a4,4 0 1,0 -8,0 a4,4 0 1,0 8,0 z M24,44 a4,4 0 1,0 -8,0 a4,4 0 1,0 8,0 z",
            scale: 1,
            fillColor: 'grey',
            fillOpacity: 1,
            strokeColor: 'black',
            strokeWeight: 1,
            anchor: new googleMaps.Point(32, 32) // Adjust anchor to center the symbol
        };
    
        // Plotting of route on google maps
        const routePath = new googleMaps.Polyline({
            path: googleMaps.geometry.encoding.decodePath(routesPath[0]),
            icons:[
                {
                    icon: sirenSymbol,
                    offset: '100%',
                },
    
                {
                    icon: busSymbol,
                    offset: '100%',
                }
            ],
            geodesic: true,
            strokeColor: routesColour,
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
