// Import required libraries and functions
import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Tooltip } from 'react-tooltip'

// Import required components
import MapsCheckbox from '../checkbox/mapsCheckbox';
import SubmitBtn from '../buttons/submitBtn';
import SearchForm from '../form/searchForm';
import MapsRadioBtn from '../radioBtn/mapsRadioBtn';

// Import required styles
import Styles from './mapsDrawer.module.css';

const MapsDrawer = ({ returnValues }) => {
    console.log('test');
    const [busNumberSearchValue, setBusNumberSearchValue] = useState('0');
    const busStopsCheckboxRef = useRef(null);
    const busNumberSearchCheckboxRef = useRef(null);
    const busDirectionSearchCheckboxRef = useRef(null);
    
    
    // Function to handle form submission
    const handleSubmit = useCallback(() => {
        // Checkbox refs
        const busNumberSearchCheckboxChecked = busNumberSearchCheckboxRef.current ? busNumberSearchCheckboxRef.current.checked : false;
        const busStopsCheckboxChecked = busStopsCheckboxRef.current ? busStopsCheckboxRef.current.checked : false;

        // SearchForm refs
        const busDirectionValue = busDirectionSearchCheckboxRef.current.checkedStatus;
        console.log(busDirectionValue);

        // Appends the checkbox status boolean values to an array
        const checkBoxStatus = {
            // Checks if the checkbox has no reference currently or is false, if condition fulfilled, return false
            busNumberSearchCheckbox: busNumberSearchCheckboxChecked,
            busStopsCheckbox: busStopsCheckboxChecked,
        };

        // Appends the searchbox form values to an array
        const searchFormValue = {
            busNumberSearchValue: busNumberSearchValue.toString(),
            busDirectionValue: busDirectionValue,
        };

        // Passes the different values needed in the parent component as a prop called returnValues
        returnValues(checkBoxStatus, searchFormValue);

        return () => {
            console.log('Maps Drawer handleSubmit Unmounted');
        }
    }, [busNumberSearchValue, returnValues]);

    // Function to be called when a keydown event is triggered
    const handleKeyDown = useCallback((event) => {
        // Function to be run if ENTER KEY is pressed
        if (event.key === 'Enter') {
            try{
                handleSubmit(); // Trigger form submit
            }catch(error){
                console.log(error);
            }

        }

        return () => {

        }
    }, [handleSubmit]);


    // // Runs whenever the items in the list in the parameter of useEffect has change
    useEffect(() => {
        // Global listener added for any keys that are pressed down
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);


    return (
        <div onKeyDown={handleKeyDown}>
            {/* Start of content in Drawer component */}
            <div className={`${Styles.drawer} ${Styles.drawerOpen}`}>
                <div className={Styles.content}>

                    {/* List of content in Drawer component */}

                    {/* Search Options Content */}
                    <h1 className="tw-text-lg tw-font-bold tw-font-under" style={{ textDecoration: 'underline' }}>Search Options</h1>
                    <ul style={{ paddingBottom: '1.5vw' }}>
                        <li className={Styles.entry}>
                            <MapsCheckbox label='busNumberSearchCheckbox' ref={busNumberSearchCheckboxRef} />Search By Bus Number
                        </li>
                        <li className={Styles.entry}>
                            <SearchForm setBusNumberSearchValue={setBusNumberSearchValue}/>
                        </li>
                        <li className={Styles.entry}>
                            <MapsRadioBtn label='busDirectionSearchCheckbox' ref={busDirectionSearchCheckboxRef}/>
                        </li>
                    </ul>

                    {/* Display Options Content */}
                    <h1 className="tw-text-lg tw-font-bold" style={{ textDecoration: 'underline' }}>Display Options</h1>
                    <ul style={{ paddingBottom: '1.5vw' }}>
                        <li className={Styles.entry}>
                            <MapsCheckbox label='busStopsCheckbox' ref={busStopsCheckboxRef} />Bus Stops
                        </li>
                    </ul>

                    {/* Submit button in Drawer component that sends the data to parent googlemaps */}
                    <SubmitBtn handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default MapsDrawer;
