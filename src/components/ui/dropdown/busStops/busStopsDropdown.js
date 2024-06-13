// Import required libraries and functionalities
import React, {forwardRef, useContext, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import brtRouteInformation from '../../../../data/brtRouteInfo';

// Import required styles
import Styles from './busStopsDropdown.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import required context
import BusStopsContext from '../../../../context/busStopsContext';
import MapContext from '../../../../context/mapContext';

// Import required components
import DropdownSearchMenu from './dropdownSearchMenu';

const BusStopsDropdown = forwardRef((props, ref) => {

    // Context is available to all child components of the component which the context is defined in
    const { busStops } = useContext(BusStopsContext);
    const { setViewPoint } = useContext(MapContext); // Get the panTo function from context
    const brtRouteInfo = brtRouteInformation();

    // Get a local value of the busStops array for manipulation
    let localBusStops = busStops;

    const [selectedBusStopName, setSelectedBusStopName] = useState('Stations');

    // Perform checks that enables the dropDown menu if passed
    let validSearchValue = false;
    if((parseInt(props.busNumberSearchValue) > 0 && props.busStopsCheckbox) || ((props.brtRouteValue !== 'Brt Stations') && props.brtStationsCheckbox)){
        validSearchValue = true;
    }

    // Push brtStations into busStops if Brt route selected and brt stations checkbox checked
    if((props.brtRouteValue !== '0') && props.brtStationsCheckbox && props.brtRouteValue){
        localBusStops = localBusStops.concat(brtRouteInfo[props.brtRouteValue]['Brt Stations']);
        console.log(brtRouteInfo[props.brtRouteValue]['Brt Stations']);
    }

    // On select, utilize the mapRef in mapContext, and the provided panTo function to pan the map to the selected bus stop
    const handleSelect = (eventKey) => {
        const selectedBusStop = localBusStops[eventKey];
        const selectedLatLng ={lat: parseFloat(selectedBusStop['lat']), lng: parseFloat(selectedBusStop['lng'])}
        setViewPoint(selectedLatLng, 20);

        // Store value of the bus stop that was selected
        setSelectedBusStopName(selectedBusStop['Full Name']);
    }

    return (
    <Dropdown onSelect={handleSelect}>
        {/* If no valid search value, dropdown is disabled*/}
        <Dropdown.Toggle id="dropdown-custom-1" variant='light' disabled={!validSearchValue} style={{minWidth: '10.85vw'}}>
            {selectedBusStopName.slice(0, 22)}
        </Dropdown.Toggle>

        <Dropdown.Menu as={DropdownSearchMenu} style={{maxWidth: '15vw'}}>
            {localBusStops.map((busStop, index) => (
                <Dropdown.Item eventKey={index} key={index} className={Styles.dropdownItemDivider} active={selectedBusStopName === busStop['Full Name']}>
                    {busStop['Full Name']}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
    )
});

export default BusStopsDropdown;