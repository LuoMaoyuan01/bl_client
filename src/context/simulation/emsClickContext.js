
// Import required libraries and functions
import React, { createContext, useState, useContext, useEffect } from 'react';
import brtRouteInformation from '../../data/brtRouteInfo';
// import displayEmsSymbols from '../../utils/googlemaps/simulation/displayEmsSymbols';
import displayBrtAnimation from '../../utils/googlemaps/simulation/displayBrtAnimation';

// Import required context
import MapContext from '../mapContext';

// Import required components
import EMSAlertPopup from '../../components/ui/popup/EMSAlertPopup';
import EmsModal from '../../components/ui/modal/emsModal';

const EmsClickContext = createContext();

// Provider component that manages busStops data
// value available to all children components nested within provider
export const EmsClickProvider = ({ children }) => {

    const { googleMaps, mapInstance, setViewPoint } = useContext(MapContext);
    const [showEmsAlertPopup, setShowEmsAlertPopup] = useState(false);
    const [popupClosed, setPopupClosed] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)
    const [brtRouteValue, setBrtRouteValue] = useState('Blue Route');


    // Obtain static brtRoute information stored
    const brtRouteInfo = brtRouteInformation();

    const handleClick = () => {
        setViewPoint(brtRouteInfo[brtRouteValue]['View Point'], 17);
        setShowEmsAlertPopup(true);
    }

    const handlePopupClose = () => {
        setShowEmsAlertPopup(false);
        setPopupClosed(true);
    }

    const handleModalClose = () => {
        setModalOpen(false);
    }

    useEffect(() => {
        const runAnimation = async () => {
            if (popupClosed) {
                // Run Brt Google Maps Route Animation
                await displayBrtAnimation(brtRouteInfo[brtRouteValue]['Decoded Polyline'], brtRouteInfo[brtRouteValue]['lineColour'], googleMaps, mapInstance);
                setPopupClosed(false); // Reset the state
                
                setModalOpen(true); // Enable EmsModal to popup

            }
        }

        runAnimation();
    }, [popupClosed, brtRouteInfo, googleMaps, mapInstance]);

    return (
        <EmsClickContext.Provider value={{ handleClick , setBrtRouteValue}}>
            {children}
            {showEmsAlertPopup && <EMSAlertPopup onClose={handlePopupClose} routesColour={brtRouteValue}/>}
            {modalOpen && !showEmsAlertPopup && <EmsModal handleModalClose={handleModalClose}/>}
        </EmsClickContext.Provider>
    );
};

export default EmsClickContext;
