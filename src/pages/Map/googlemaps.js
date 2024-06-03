// Import styling files
import Styles from './googlemaps.module.css';

// Import required components
import ReverseBtn from '../../components/ui/buttons/reverseBtn';
import MapComponent from '../../components/api/googleMapsController';
import MapsDrawer from '../../components/ui/drawer/mapsDrawer';

// Import required library and functions
import React, { useState, useEffect } from 'react';
import axios from 'axios';  

function Maps() {
    const [busDirection, setBusDirection] = useState("1");
    const [busStops, setBusStops] = useState([]);
    const [busNumber, setBusNumber] = useState(0);
    const [CheckBoxStatusValue, setCheckBoxStatusValue] = useState({});
    const [searchFormValue, setSearchFormValue] = useState('');

    useEffect(() => {
        console.log(busNumber);
        if (busNumber) {
            axios.get(`http://localhost:5000/scrape/${busNumber.toUpperCase()}/${busDirection}`)
            .then((response) => {
                const data = response.data;
                setBusStops(data);
            })
            .catch((error) => {
                console.log(error);
            }); 
        }
    }, [busNumber, busDirection]);  

    console.log(busStops);

    const toggleBusDirection = () => {
        const newDirection = busDirection === "1" ? "2" : "1";
        setBusDirection(newDirection);
    };
    
    const handleReturnValues = (checkBoxStatus, searchFormValue) => {
        // Create local instances of the return values from maps drawer for easier usage
        setSearchFormValue(searchFormValue.busNumberSearchValue);
        setCheckBoxStatusValue(checkBoxStatus);

        console.log(searchFormValue);
        console.log(checkBoxStatus);

        // Utilize values in the returned array
        setBusNumber(searchFormValue.busNumberSearchValue);
    }

    return(
        <div className={Styles.mapContainer}>
            {/* <ReverseBtn toggleBusDirection={toggleBusDirection} /> */}
            <MapsDrawer returnValues={handleReturnValues} className={Styles.mapDrawer}/>
            <MapComponent busNumber={busNumber} busStops={busStops}/>
        </div>
    );  
}

export default Maps;
