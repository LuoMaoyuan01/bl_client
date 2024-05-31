// Import styling files
import './googlemaps.css';

// Import required components
import ReverseBtn from '../../components/ui/buttons/reverseBtn';

// Import required library and functions
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios';  
import MapComponent from '../../components/api/googleMapsController';

function Maps() {
    const { busNumber } = useParams();
    const { direction } = useParams();
    const navigate = useNavigate();
    const [busDirection, setBusDirection] = useState(direction || "1");
    const [busStops, setBusStops] = useState([]);

    // Reloads data every time busNumber or busDirection values change
    useEffect(() => {
        axios.get(`http://localhost:5000/scrape/${busNumber}/${busDirection}`)
        .then((response) => {
            const data = response.data;
            setBusStops(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [busNumber, busDirection]);

    console.log(busStops);

    // Function that toggles the busDirection value between 1 & 2
    const toggleBusDirection = () => {
        const newDirection = busDirection === "1" ? "2" : "1";
        setBusDirection(newDirection);
        navigate(`/googlemaps/${busNumber}/${newDirection}`); // Adjust the path accordingly
    };

    return(
        <div>
            <h1>My Google Maps App</h1>
            <ReverseBtn toggleBusDirection={toggleBusDirection} />
            <MapComponent busNumber={busNumber.toString()} busStops={busStops} />
        </div>
    );
}

export default Maps;
