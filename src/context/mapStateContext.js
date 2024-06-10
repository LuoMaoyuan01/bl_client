

import React, { createContext, useState } from 'react';

// Map context to store current state values of the map
const MapStateContext = createContext();

export const MapStateProvider = ({ children }) => {

    const [mapState, setMapState] = useState({});

    return (
        <MapStateContext.Provider value={{mapState, setMapState}}>
            {children}
        </MapStateContext.Provider>
    );
};

export default MapStateContext;