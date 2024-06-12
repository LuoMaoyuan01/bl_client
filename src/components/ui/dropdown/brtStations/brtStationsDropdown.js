// Import required libraries and functions
import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import brtRouteInformation from '../../../../data/brtRouteInfo';

// Import required styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import required context

const BrtStationsDropdown = () => {

    const brtRouteInfo = brtRouteInformation();
    const [selectedBrtStation, setSelectedBrtStation] = useState('Brt Stations');

    const handleSelect = (eventKey) => {
        setSelectedBrtStation( Object.keys(brtRouteInfo)[eventKey] );

    }

    return (
        <Dropdown onSelect={handleSelect}>
            {/* If no valid search value, dropdown is disabled*/}
            <Dropdown.Toggle id="dropdown-custom-1" variant='light' style={{minWidth: '10vw'}}>
                {selectedBrtStation.slice(0, 22)}
            </Dropdown.Toggle>
    
            <Dropdown.Menu style={{minWidth: '10vw'}}>
                {Object.keys(brtRouteInfo).map((brtRoute, index) => (
                    <Dropdown.Item eventKey={index} key={index} active={selectedBrtStation === brtRoute}>
                        {brtRoute}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
        )
}

export default BrtStationsDropdown;