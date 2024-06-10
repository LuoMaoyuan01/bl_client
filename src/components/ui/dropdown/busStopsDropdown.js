// Import required libraries and functionalities
import React, {forwardRef, useContext, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// Import required styles
import Styles from './busStopsDropdown.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import required context
import BusStopsContext from '../../../context/busStopsContext';
import MapContext from '../../../context/mapContext';

// Import required components
import DropdownSearchMenu from './dropdownSearchMenu';

const BusStopsDropdown = forwardRef((props, ref) => {

    // Context is available to all child components of the component which the context is defined in
    const { busStops } = useContext(BusStopsContext);
    const { setViewPoint } = useContext(MapContext); // Get the panTo function from context

    // Check if a valid bus number is filled into the form
    let validSearchValue = false;
    if(parseInt(props.busNumberSearchValue) > 0){
        validSearchValue = true;
    }

    // On select, utilize the mapRef in mapContext, and the provided panTo function to pan the map to the selected bus stop
    const handleSelect = (eventKey) => {
        const selectedBusStop = busStops[eventKey];
        const selectedLatLng ={lat: parseFloat(selectedBusStop['lat']), lng: parseFloat(selectedBusStop['lng'])}
        setViewPoint(selectedLatLng);
    }

    return (
    <Dropdown onSelect={handleSelect}>
        {/* If no valid search value, dropdown is disabled*/}
        <Dropdown.Toggle id="dropdown-custom-1" variant='light' disabled={!validSearchValue}>
            Bus Stops
        </Dropdown.Toggle>

        <Dropdown.Menu as={DropdownSearchMenu}>
            {busStops.map((busStop, index) => (
                <Dropdown.Item eventKey={index} key={index} className={Styles.dropdownItemDivider}>{busStop['Full Name']}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
    )
});

export default BusStopsDropdown;