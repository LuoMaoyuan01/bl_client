// emsClickContext.js

// Import required libraries and functions
import React, { createContext, useState, useContext, useEffect } from 'react';
import brtRouteInformation from '../../data/brtRouteInfo';
import displayEmsSymbols from '../../utils/googlemaps/simulation/displayEmsSymbols';
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

    const brtRouteInfo = brtRouteInformation();

    const handleClick = () => {
        setViewPoint(brtRouteInfo['Blue Route']['View Point'], 17);
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
                await displayBrtAnimation(brtRouteInfo['Blue Route']['Decoded Polyline'], googleMaps, mapInstance);
                setPopupClosed(false); // Reset the state
                
                // Run Popup window Animation Video of EMS passing BRT
                setModalOpen(true);

            }
        }

        runAnimation();
    }, [popupClosed, brtRouteInfo, googleMaps, mapInstance]);

    return (
        <EmsClickContext.Provider value={{ handleClick }}>
            {children}
            {showEmsAlertPopup && <EMSAlertPopup onClose={handlePopupClose}/>}
            {modalOpen && !showEmsAlertPopup && <EmsModal handleModalClose={handleModalClose}/>}
        </EmsClickContext.Provider>
    );
};

export default EmsClickContext;
