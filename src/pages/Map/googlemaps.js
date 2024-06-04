
// Import required library and functions
import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import axios from 'axios';  

// Import styling files
import Styles from './googlemaps.module.css';

// Import required components
// import MapComponent from '../../components/api/googleMapsController';
import MapsDrawer from '../../components/ui/drawer/mapsDrawer';
// Utilize lazy and suspense to only load MapComponent once all functions in mapsDrawer & googlemaps has finished
const LazyMapComponent = lazy(() => import('../../components/api/googleMapsController'));

function Maps() {
    const [busStops, setBusStops] = useState([]);
    const [checkBoxStatusValue, setCheckBoxStatusValue] = useState({});
    const [searchFormValue, setSearchFormValue] = useState({});

    // use effect runs everytime busNumber or busDirection is changed
    useEffect(() => {
        // Prevents busNumber & busDirection to be undefined
        const busNumber = searchFormValue.busNumberSearchValue || '0';
        const busDirection = searchFormValue.busDirectionValue || '0';

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

        return () => {
            console.log('Maps Unmounted!');
        }
    }, [searchFormValue, checkBoxStatusValue]);  

    console.log("googlemaps");
    console.log(busStops);
    
    const handleReturnValues = (checkBoxStatus, searchFormValue) => {
        // Create local instances of the return values from maps drawer for easier usage
        setSearchFormValue(searchFormValue);
        setCheckBoxStatusValue(checkBoxStatus);
    }

    return(
        <div className={Styles.mapContainer}>
            {/* <ReverseBtn toggleBusDirection={toggleBusDirection} /> */}
            <MapsDrawer returnValues={handleReturnValues} className={Styles.mapDrawer}/>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyMapComponent busNumber={searchFormValue.busNumberSearchValue || '0'} busStops={busStops} checkBoxStatus={checkBoxStatusValue} busDirection={searchFormValue.busDirectionValue || '0'} className={Styles.MapComponent}/>
            </Suspense>
        </div>
    );  
}

export default Maps;
