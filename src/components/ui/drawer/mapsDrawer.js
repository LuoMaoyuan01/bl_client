// Import required libraries and functions
import React, { useEffect, useRef } from 'react';
// import { Tooltip } from 'react-tooltip'

// Import required components
import MapsCheckbox from '../checkbox/mapsCheckbox';
import SubmitBtn from '../buttons/submitBtn';
import SearchForm from '../form/searchForm';
import MapsRadioBtn from '../radioBtn/mapsRadioBtn';
import BusStopsDropdown from '../dropdown/busStopsDropdown';

// Import required styles
import Styles from './mapsDrawer.module.css';

const MapsDrawer = ({ returnValues }) => {
    console.log('test');
    const busNumberSearchValueRef = useRef(null);
    const busStopsCheckboxRef = useRef(null);
    const busNumberSearchCheckboxRef = useRef(null);
    const busDirectionSearchCheckboxRef = useRef(null);
    const brtRoutesSearchCheckboxRef = useRef(null);
    const busStopsDropdownRef = useRef(null);
    
    
    // Function to handle form submission
    const handleSubmit = () => {
        // ? used to prevent undefined values from being submitted
        // Checkbox refs
        const busNumberSearchCheckboxChecked = busNumberSearchCheckboxRef.current ? busNumberSearchCheckboxRef.current.checked : false;
        const brtRoutesSearchCheckboxChecked = brtRoutesSearchCheckboxRef.current ? brtRoutesSearchCheckboxRef.current.checked : false;
        const busStopsCheckboxChecked = busStopsCheckboxRef.current ? busStopsCheckboxRef.current.checked : false;

        // SearchForm refs
        const busDirectionValue = busDirectionSearchCheckboxRef.current.checkedStatus ? busDirectionSearchCheckboxRef.current.checkedStatus : '1';
        const busNumberSearchValue = busNumberSearchValueRef.current.value ? busNumberSearchValueRef.current.value : '0';

        console.log(busNumberSearchValue);

        // Appends the checkbox status boolean values to an array
        const checkBoxStatus = {
            // Checks if the checkbox has no reference currently or is false, if condition fulfilled, return false
            busNumberSearchCheckbox: busNumberSearchCheckboxChecked,
            brtRoutesCheckbox: brtRoutesSearchCheckboxChecked,
            busStopsCheckbox: busStopsCheckboxChecked,
        };

        // Appends the searchbox form values to an array
        const searchFormValue = {
            busNumberSearchValue: busNumberSearchValue  || '0', 
            busDirectionValue: busDirectionValue || '1',
        };

        // Passes the different values needed in the parent component as a prop called returnValues
        returnValues(checkBoxStatus, searchFormValue);

        return () => {
            console.log('Maps Drawer handleSubmit Unmounted');
        }
    }

    // Function to be called when a keydown event is triggered
    const handleKeyDown = (event) => {
        // Function to be run if ENTER KEY is pressed
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            try{
                handleSubmit(); // Trigger form submit
            }catch(error){
                console.log(error);
            }

        }

    }

    // // Runs whenever the items in the list in the parameter of useEffect has change
    useEffect(() => {
        // Global listener added for any keys that are pressed down
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });


    return (
        <div>
            {/* Start of content in Drawer component */}
            <div className={`${Styles.drawer} ${Styles.drawerOpen}`}>
                <div className={Styles.content}>

                    {/* List of content in Drawer component */}

                    {/* Search Options Content */}
                    <h1 className="tw-text-lg tw-font-bold tw-font-under" style={{ textDecoration: 'underline' }}>Search Options</h1>
                    <ul style={{ paddingBottom: '1.5vw' }}>
                        <li className={Styles.entry}>
                            <SearchForm label='busNumberSearchValue' ref={busNumberSearchValueRef} />
                        </li>
                        <li className={Styles.entry}>
                            <MapsRadioBtn label='busDirectionSearchCheckbox' ref={busDirectionSearchCheckboxRef}/>
                        </li>
                    </ul>

                    {/* Display Options Content */}
                    <h1 className="tw-text-lg tw-font-bold" style={{ textDecoration: 'underline' }}>Display Options</h1>
                    <ul style={{ paddingBottom: '1.5vw' }}>
                        <li className={Styles.entry}>
                            <MapsCheckbox label='busNumberSearchCheckbox' ref={busNumberSearchCheckboxRef} />Bus Routes
                        </li>
                        <li className={Styles.entry}>
                            <MapsCheckbox label='brtRoutesCheckbox' ref={brtRoutesSearchCheckboxRef} />BRT Routes
                        </li>
                        <li className={Styles.entry}>
                            <MapsCheckbox label='busStopsCheckbox' ref={busStopsCheckboxRef} />Bus Stops
                        </li>
                    </ul>

                    {/* Selection Options Content */}
                    <h1 className="tw-text-lg tw-font-bold" style={{ textDecoration: 'underline' }}>Display Options</h1>
                    <ul style={{ paddingBottom: '1.5vw' }}>
                        <li className={Styles.entry}>
                            <BusStopsDropdown label='busStopsDropdown' ref={busStopsDropdownRef} />
                        </li>
                    </ul>

                    {/* Submit button in Drawer component that sends the data to parent googlemaps */}
                    <SubmitBtn handleSubmit={handleSubmit} onKeyDown={handleKeyDown}/>
                </div>
            </div>
        </div>
    );
};

export default MapsDrawer;
