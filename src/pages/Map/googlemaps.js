// Import styling files
import './googlemaps.css';

// Import required components
import ReverseBtn from '../../components/ui/buttons/reverseBtn';

// Import required library and functions
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';  
import MapComponent from '../../components/api/googleMapsController';

function Maps() {

    const { busNumber } = useParams();
    const { direction } = useParams();


    const [busStops, setBusStops] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/scrape/${busNumber}/${direction}`)
        .then((response) => {
            const data = response.data
            setBusStops(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [busNumber])

    console.log(busStops);


    return(
    // ----------------------- FOR TESTING ------------------------
    // <div>
    //   <h1>Bus Stops for Bus Number: {busNumber}</h1>
    //   <ul>
    //     {busStops.map((stop, index) => (
    //       <li key={index}>
    //         <p>Road Name: {stop['Road Name']}</p>
    //         <p>Bus Stop Number: {stop['Bus Stop Number']}</p>
    //         <p>Bus Stop Name: {stop['Bus Stop Name']}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    // --------------------------------------------------------------
        <div>
            <h1>My Google Maps App</h1>
            <ReverseBtn/>
            <MapComponent busNumber={busNumber.toString()} busStops={busStops}/>
        </div>
    );
}

export default Maps;