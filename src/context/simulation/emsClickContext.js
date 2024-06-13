// emsClickContext.js

// Import required libraries and functions
import React, { createContext, useContext } from 'react';
import brtRouteInformation from '../../data/brtRouteInfo';
import displayEmsSymbols from '../../utils/googlemaps/simulation/displayEmsSymbols';

// Import required context
import MapContext from '../mapContext';

const EmsClickContext = createContext();

// Provider component that manages busStops data
// value available to all children components nested within provider
export const EmsClickProvider = ({ children }) => {

    const { googleMaps, mapInstance } = useContext(MapContext);
    const brtRouteInfo = brtRouteInformation();

    // Function to be run on clicking of the EMS button
    const handleClick = () => {
        displayEmsSymbols( brtRouteInfo, googleMaps, mapInstance );
        
    }

    return (
        <EmsClickContext.Provider value={{ handleClick }}>
            {children}
        </EmsClickContext.Provider>
    );
};

export default EmsClickContext;
