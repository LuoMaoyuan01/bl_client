// Import styling files
import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported


// Import required components
import HomePageSearchBtn from "../../components/ui/buttons/homePageSearchBtn";
import RadioBtn from "../../components/ui/radioBtn/homeRadioBtn";

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
            <HomePageSearchBtn handleSubmit={handleSearchBtnSubmit}/>   
            <RadioBtn radioInputValue={radioInputValue} setRadioInputValue={setRadioInputValue}/>
        </div>
    )
}

export default HomePage;