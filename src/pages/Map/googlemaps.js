// Import required libraries
import React, { useState, useEffect, useCallback, useContext, lazy, Suspense } from 'react';
import axios from 'axios';

// Import required styles
import Styles from './googlemaps.module.css';

// Import required context
import BusStopsContext from '../../context/busStopsContext';

// Import required components
import Loader from '../../components/ui/loaders/loader';
import MapsDrawer from '../../components/ui/drawer/mapsDrawer';
// import ErrorPopup from '../../components/ui/popup/errorPopup';
const LazyMapComponent = lazy(() => import('../../components/api/googleMapsController'));


const Maps = () => {
    // Context used
    const { busStops, setBusStops } = useContext(BusStopsContext);

    // Initial state of the map
    const stateTemplate = {
        busStops: [],
        checkBoxStatusValue: {},
        searchFormValue: {},
        isLoading: false,
        // isExists: true,
        triggerEffect: false,
    };
    const [state, setState] = useState(stateTemplate); 
    // const [isExists, setIsExists] = useState(true);

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
    useEffect(() => {
        const fetchBusStops = async () => {
            setState(prevState => ({ ...prevState, isLoading: true }));

            const busNumber = state.searchFormValue.busNumberSearchValue || '0';
            const busDirection = state.searchFormValue.busDirectionValue || '0';
            console.log(busNumber);
            
            // Runs only if valid bus number & checkboxes are ticked
            if (busNumber !== '0' && (state.checkBoxStatusValue.busStopsCheckbox || state.checkBoxStatusValue.busNumberSearchCheckbox)) {
                try {
                    const response = await axios.get(`http://localhost:5000/scrape/${busNumber.toUpperCase()}/${busDirection.toString()}`);

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
    console.log(state.checkBoxStatusValue);

    return (
        <div className={Styles.mapContainer}>
            {/* {state.isExists ? null : <ErrorPopup/>} */}
            <Suspense fallback={<div>Loading...</div>}>
                <MapsDrawer returnValues={handleReturnValues} className={Styles.mapDrawer} />
                <LazyMapComponent
                busNumber={state.searchFormValue.busNumberSearchValue || '0'}
                busStops={state.busStops}
                checkBoxStatus={state.checkBoxStatusValue}
                className={Styles.MapComponent}
                />
            </Suspense>
        </div>
    );
};

export default Maps;
