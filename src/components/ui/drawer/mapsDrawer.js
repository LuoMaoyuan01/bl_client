// Import required libraries and functions
import React, { useState, useRef } from 'react';
import { Tooltip } from 'react-tooltip'

// Import required components
import MapsCheckbox from '../checkbox/mapsCheckbox';
import SubmitBtn from '../buttons/submitBtn';
import SearchForm from '../form/searchForm';

// Import required styles
import Styles from './mapsDrawer.module.css';

const MapsDrawer = ({ returnValues }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [busNumberSearchValue, setBusNumberSearchValue] = useState('');
    const busStopsCheckboxRef = useRef(null);
    const busNumberSearchCheckboxRef = useRef(null);

    // Function to handle form submission
    const handleSubmit = () => {
        // Appends the checkbox statuses to an object
        const checkBoxStatus = {
            busNumberSearchCheckbox: busNumberSearchCheckboxRef.current.checked,
            busStopsCheckbox: busStopsCheckboxRef.current.checked,
        };

        // Appends the searchbox form values to an object
        const searchFormValue = {
            busNumberSearchValue: busNumberSearchValue,
        };

        // Returns the different values intended to be used in the parent component googlemaps.js
        returnValues(checkBoxStatus, searchFormValue);
    };

    return (
        <div>
            {/* button in Drawer component that opens the drawer */}
            {/* React tooltip displays a message on UI on hovering on component */}
            <button data-tip="Maps Display Options" className={Styles.toggleButton} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Drawer" data-tooltip-id="MapsDrawerBtn-ToolTip" data-tooltip-content="Maps Display Options" data-tooltip-place='right'>
                <div></div> {/* This div represents the middle line */}
            </button>
            <Tooltip id="MapsDrawerBtn-ToolTip" style={{zIndex: '3'}}/>

            {/* Start of content in Drawer component */}
            <div className={`${Styles.drawer} ${isOpen ? Styles.drawerOpen : ''}`}>
                <div className={Styles.content}>
                    {/* X button in Drawer component that closes the drawer */}
                    <button className={Styles.closeButton} onClick={() => setIsOpen(false)}> &#x2715; {/* Represents the X */} </button>

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
