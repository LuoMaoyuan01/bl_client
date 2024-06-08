// Import styling files
import './homepage.css';


// Import required components
import HomePageSearchBtn from "../../components/ui/buttons/homePageSearchBtn";
import MapsRadioBtn from "../../components/ui/radioBtn/mapsRadioBtn";
import MapsCheckbox from '../../components/ui/checkbox/mapsCheckbox';
import MapsDrawer from '../../components/ui/drawer/mapsDrawer';
import BusStopsDropdown from '../../components/ui/dropdown/busStopsDropdown';
import BusStopsCard from '../../components/ui/popup/busStopCard';

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
        <div>
            <BusStopsCard/>
        </div>
    )
}

export default HomePage;