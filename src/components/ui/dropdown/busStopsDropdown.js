// Import required libraries and functionalities
import React, {forwardRef, useContext} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// Import required styles
import Styles from './busStopsDropdown.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import required context
import BusStopsContext from '../../../context/busStopsContext';

// Import required components
import DropdownSearchMenu from './dropdownSearchMenu';

const BusStopsDropdown = forwardRef((props, ref) => {

    // Context is available to all child components of the component which the context is defined in
    const { busStops } = useContext(BusStopsContext);
    console.log(busStops);

    return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-custom-1" variant='light'>
            Bus Stops
        </Dropdown.Toggle>

        <Dropdown.Menu as={DropdownSearchMenu}>

            {busStops.map((busStop, index) => (
                <Dropdown.Item eventKey={index} key={index}>{busStop['Full Name']}
                <Dropdown.Divider />
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
    )
});

export default BusStopsDropdown;