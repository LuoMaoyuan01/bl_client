// emsClickContext.js

// Import required libraries and functions
import React, { createContext, useState, useContext } from 'react';
import brtRouteInformation from '../../data/brtRouteInfo';
import displayEmsSymbols from '../../utils/googlemaps/simulation/displayEmsSymbols';

// Import required context
import MapContext from '../mapContext';

// Import required components
import EMSAlertPopup from '../../components/ui/popup/EMSAlertPopup';

const EmsClickContext = createContext();

// Provider component that manages busStops data
// value available to all children components nested within provider
export const EmsClickProvider = ({ children }) => {

    const { googleMaps, mapInstance } = useContext(MapContext);
    const [showEmsAlertPopup, setShowEmsAlertPopup] = useState(0);

    const brtRouteInfo = brtRouteInformation();

    // Function to be run on clicking of the EMS button
    const handleClick = () => {
        displayEmsSymbols( brtRouteInfo, googleMaps, mapInstance );
        setShowEmsAlertPopup(showEmsAlertPopup+1);
    }

    console.log('run');

    return (
        <EmsClickContext.Provider value={{ handleClick }}>
            {children}
            {showEmsAlertPopup && <EMSAlertPopup/>}
        </EmsClickContext.Provider>
    );
};

export default EmsClickContext;
