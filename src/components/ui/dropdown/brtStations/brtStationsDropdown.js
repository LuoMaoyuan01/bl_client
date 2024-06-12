// Import required libraries and functions
import React, {useState, forwardRef, useImperativeHandle} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import brtRouteInformation from '../../../../data/brtRouteInfo';

// Import required styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './brtStationsDropdown.module.css';

// Import required context

const BrtStationsDropdown = forwardRef((props, ref) => {

    const brtRouteInfo = brtRouteInformation();
    const [selectedBrtStation, setSelectedBrtStation] = useState('Brt Routes');

    const handleSelect = (eventKey) => {
        setSelectedBrtStation( Object.keys(brtRouteInfo)[eventKey] );
    }

    // Use useImperativeHandle to expose the selectedBrtStation to parent component
    useImperativeHandle(ref, () => ({
        // Returns '0' if no Brt Stations Selected
        getSelectedBrtStation: () => {
            if (selectedBrtStation === 'Brt Routes') {
                return '0';
            } else {
                return selectedBrtStation;
            }
        },
    }));

    return (
        <Dropdown onSelect={handleSelect}>
            {/* If no valid search value, dropdown is disabled*/}
            <Dropdown.Toggle id="dropdown-custom-1" variant='light' style={{minWidth: '10.85vw'}}>
                {selectedBrtStation.slice(0, 22)}
            </Dropdown.Toggle>
    
            <Dropdown.Menu style={{minWidth: '10.85vw'}}>
                {Object.keys(brtRouteInfo).map((brtRoute, index) => (
                    <Dropdown.Item eventKey={index} key={index} active={selectedBrtStation === brtRoute}>
                        {brtRoute}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
        )
})

export default BrtStationsDropdown;