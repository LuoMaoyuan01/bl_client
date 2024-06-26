// Import required libraries
import React, { useState, useEffect, useCallback, useContext, lazy, Suspense } from 'react';
import axios from 'axios';

// Import required styles
import Styles from './googlemaps.module.css';

// Import required context
import BusStopsContext from '../../context/busStopsContext';
// import MapStateContext from '../../context/mapStateContext';

// Import required components
import Loader from '../../components/ui/loaders/loader';
import MapsDrawer from '../../components/ui/drawer/mapsDrawer';
// import ErrorPopup from '../../components/ui/popup/errorPopup';
const LazyMapComponent = lazy(() => import('../../components/api/googleMapsController'));


const Maps = () => {
    // Consume context in googlemaps.js
    const { setBusStops } = useContext(BusStopsContext);

    // Initial state of the map
    const stateTemplate = {
        busStops: [],
        checkBoxStatusValue: {},
        searchFormValue: {},
        isLoading: false,
        triggerEffect: false,
    };

    // Map reloads everytime state of page changes
    const [state, setState] = useState(stateTemplate); 

    // React hook that returns a memoized  version of the callback function, function only recreated if one of its dependencies change
    const handleReturnValues = useCallback((checkBoxStatus, searchFormValue) => {
        setState(prevState => ({
        ...prevState,
        searchFormValue: searchFormValue,
        checkBoxStatusValue: checkBoxStatus,
        triggerEffect: !prevState.triggerEffect,
        }));

    }, []);

    // Runs only when handleReturnValues functions run
    // Function to obtain bus stops data from the backend server
    useEffect(() => {
        const fetchBusStops = async () => {
            setState(prevState => ({ ...prevState, isLoading: true }));

            const busNumber = state.searchFormValue.busNumberSearchValue || '0';
            const busDirection = state.searchFormValue.busDirectionValue || '0';
            
            // Runs only if valid bus number & checkboxes are ticked
            if (busNumber !== '0' && (state.checkBoxStatusValue.busStopsCheckbox || state.checkBoxStatusValue.busNumberSearchCheckbox)) {
                try {
                    // Replace 192.168.9.111:5000 with desired IP address
                    const response = await axios.get(`http://192.168.9.111:5000/scrape/${busNumber.toUpperCase()}/${busDirection.toString()}`);

                    // bus direction or bus number do not exist
                    if(response.data.length === 0){
                        // setState(stateTemplate => ({ ...stateTemplate, isExists: false }));
                        // setIsExists(false);
                    }

                    // Minimum loading time of 1s
                    setTimeout(() => {
                        // Set BusStops context & current state of maps
                        setBusStops(response.data);
                        setState(prevState => ({ ...prevState, busStops: response.data, isLoading: false }));
                    }, 1000);

                } catch (error) {
                    console.log(error);

                    setTimeout(() => {
                    setState(prevState => ({ ...prevState, isLoading: false }));
                    }, 1000);

                    // Response given if bus number or direction does not exist
                    if(error.response.request.status === 500){
                        // Reset map state if error occurs
                        // setState(stateTemplate => ({ ...stateTemplate, isExists: false }));
                        // setIsExists(false);
                    }
                }
            } else {
            setTimeout(() => {
                setState(prevState => ({ ...prevState, isLoading: false }));
            }, 1000);
            }
        };

        fetchBusStops();
        setTimeout(() => {
        }, 1000);
    
    }, [state.triggerEffect]);

    if (state.isLoading) {
        return <div><Loader/></div>; // Show loading indicator while loading
    }

    console.log("googlemaps");
    // console.log(state.busStops);
    // console.log(state.checkBoxStatusValue);

    return (
        <div className={Styles.mapContainer}>
            {/* {state.isExists ? null : <ErrorPopup/>} */}
            <Suspense fallback={<div>Loading...</div>}>
                <LazyMapComponent
                busNumber={state.searchFormValue.busNumberSearchValue || '0'}
                brtRoute={state.searchFormValue.brtRouteValue || '0'}
                busStops={state.busStops}
                checkBoxStatus={state.checkBoxStatusValue}
                className={Styles.MapComponent}
                />
                <MapsDrawer returnValues={handleReturnValues} className={Styles.mapDrawer} />
            </Suspense>
        </div>
    );
};

export default Maps;
