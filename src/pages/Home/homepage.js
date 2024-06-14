// Import styling files
import './homepage.css';


// Import required components
import MapsRadioBtn from "../../components/ui/radioBtn/mapsRadioBtn";
import MapsCheckbox from '../../components/ui/checkbox/mapsCheckbox';
import MapsDrawer from '../../components/ui/drawer/mapsDrawer';
import BusStopsDropdown from '../../components/ui/dropdown/busStops/busStopsDropdown';
import BrtStationsDropdown from '../../components/ui/dropdown/brtStations/brtStationsDropdown';
import BusStopsCard from '../../components/ui/popup/busStopCard';
import RefreshBtn from '../../components/ui/buttons/refreshBtn';
import Model3D from '../../components/3dModels/test';
import obtainBrtRoutePolyline from '../../utils/googlemaps/misc/obtainBrtRoutePolyline';
import EmsModal from '../../components/ui/modal/emsModal';

// Import required library and functions
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function HomePage() {

    return(
        <div style={{width: '100%', height: '100%'}}>
            <EmsModal/>
        </div>
    )
}

export default HomePage;