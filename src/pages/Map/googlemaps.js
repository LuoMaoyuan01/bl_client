// Import styling files
import Styles from './googlemaps.module.css';

// Import required components
// import ReverseBtn from '../../components/ui/buttons/reverseBtn';
import MapComponent from '../../components/api/googleMapsController';
import MapsDrawer from '../../components/ui/drawer/mapsDrawer';

// Import required library and functions
import React, { useState, useEffect } from 'react';
import axios from 'axios';  

function Maps() {
    const [busDirection, setBusDirection] = useState("1");
    const [busStops, setBusStops] = useState([]);
    const [busNumber, setBusNumber] = useState(0);
    const [checkBoxStatusValue, setCheckBoxStatusValue] = useState({});
    const [searchFormValue, setSearchFormValue] = useState('');

    // use effect runs everytime busNumber or busDirection is changed
    useEffect(() => {
        console.log(`Bus ${busNumber} going in direction ${busDirection}`);
        console.log(checkBoxStatusValue.busStopsCheckbox);
        console.log(checkBoxStatusValue.busNumberSearchCheckbox);

        // API call to server side runs only if the busStops checkbox is ticked and a valid bus number that is != 0 is entered
        if (busNumber && (checkBoxStatusValue.busStopsCheckbox || checkBoxStatusValue.busNumberSearchCheckbox)) {
            axios.get(`http://localhost:5000/scrape/${busNumber.toUpperCase()}/${busDirection.toString()}`)
            .then((response) => {
                const data = response.data;
                setBusStops(data);
            })
            .catch((error) => {
                console.log(error);
            }); 
        }
    }, [searchFormValue, checkBoxStatusValue, busNumber, busDirection]);  

    console.log(busStops);

    // Used for the reverse button
    // const toggleBusDirection = () => {
    //     const newDirection = busDirection === "1" ? "2" : "1";
    //     setBusDirection(newDirection);
    // };
    
    const handleReturnValues = (checkBoxStatus, searchFormValue) => {
        // Create local instances of the return values from maps drawer for easier usage
        setSearchFormValue(searchFormValue);
        setCheckBoxStatusValue(checkBoxStatus);

        // -------------------------------------------- DEBUGGING LOGS ---------------------------------------- //
        // console.log(searchFormValue);
        // console.log(checkBoxStatus);
        // ---------------------------------------------------------------------------------------------------- //

        // Utilize values in the returned array
        setBusNumber(searchFormValue.busNumberSearchValue);
        setBusDirection(searchFormValue.busDirectionValue.toString());
        console.log(busDirection);
    }

    return(
        <div className={Styles.mapContainer}>
            {/* <ReverseBtn toggleBusDirection={toggleBusDirection} /> */}
            <MapsDrawer returnValues={handleReturnValues} className={Styles.mapDrawer}/>
            <MapComponent busNumber={busNumber} busStops={busStops} checkBoxStatus={checkBoxStatusValue} busDirection={busDirection} className={Styles.MapComponent}/>
        </div>
    );  
}

export default Maps;
