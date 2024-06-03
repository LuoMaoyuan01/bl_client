// Import required libraries and functions
import React, { useState, useRef } from 'react';
import { Tooltip } from 'react-tooltip'

// Import required components
import MapsCheckbox from '../checkbox/mapsCheckbox';
import SubmitBtn from '../buttons/submitBtn';
import SearchForm from '../form/searchForm';
import MapsRadioBtn from '../radioBtn/mapsRadioBtn';

// Import required styles
import Styles from './mapsDrawer.module.css';

const MapsDrawer = ({ returnValues }) => {
    const [busNumberSearchValue, setBusNumberSearchValue] = useState('');
    const [busDirectionValue, setBusDirectionValue] = useState('');
    const busStopsCheckboxRef = useRef(null);
    const busNumberSearchCheckboxRef = useRef(null);

    // Function to handle form submission
    const handleSubmit = () => {

        // Appends the checkbox status boolean values to an array
        const checkBoxStatus = {
            busNumberSearchCheckbox: busNumberSearchCheckboxRef.current.checked,
            busStopsCheckbox: busStopsCheckboxRef.current.checked,
        };

        // Appends the searchbox form values to an array
        const searchFormValue = {
            busNumberSearchValue: busNumberSearchValue,
            busDirectionValue: busDirectionValue,
        };

        // Passes the different values needed in the parent component as a prop called returnValues
        returnValues(checkBoxStatus, searchFormValue);
    };

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
                            <MapsCheckbox label='busNumberSearchCheckbox' ref={busNumberSearchCheckboxRef} />Search By Bus Number
                        </li>
                        <li className={Styles.entry}>
                            <SearchForm setBusNumberSearchValue={setBusNumberSearchValue} />
                        </li>
                        <li className={Styles.entry}>
                            <MapsRadioBtn setBusDirectionValue={setBusDirectionValue} />
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
