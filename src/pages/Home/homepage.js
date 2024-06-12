// Import styling files
import './homepage.css';


// Import required components
import MapsRadioBtn from "../../components/ui/radioBtn/mapsRadioBtn";
import MapsCheckbox from '../../components/ui/checkbox/mapsCheckbox';
import MapsDrawer from '../../components/ui/drawer/mapsDrawer';
import BusStopsDropdown from '../../components/ui/dropdown/busStopsDropdown';
import BusStopsCard from '../../components/ui/popup/busStopCard';
import RefreshBtn from '../../components/ui/buttons/refreshBtn';
import Model3D from '../../components/3dModels/test';

// Import required library and functions
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function HomePage() {

    const navigate = useNavigate();
    const [radioInputValue, setRadioInputValue] = useState("1")

    const handleSearchBtnSubmit = (inputValue) => {
        console.log(`/googlemaps/${inputValue}/${radioInputValue}`);
        navigate(`/googlemaps/${inputValue}/${radioInputValue}`)
    };

    return(
        <div style={{width: '100%', height: '100%'}}>
            <Model3D/>
        </div>
    )
}

export default HomePage;