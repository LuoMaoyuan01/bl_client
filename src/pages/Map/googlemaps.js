// Import styling files
import './googlemaps.css';

// Import required library and functions
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';  
import MapComponent from '../../components/api/gmaps';

function Maps() {

    const { busNumber } = useParams();

    console.log('Bus number: ', busNumber);

    const [busStops, setBusStops] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/scrape/${busNumber}`)
        .then((response) => {
            const data = response.data
            setBusStops(data);
            console.log(busStops);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [busNumber])



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
            <MapComponent />
        </div>
    );
}

export default Maps;