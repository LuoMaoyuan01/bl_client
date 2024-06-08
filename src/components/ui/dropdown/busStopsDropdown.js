// Import required libraries and functionalities
import React, {forwardRef} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// Import required styles
import Styles from './busStopsDropdown.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import required components
import DropdownSearchMenu from './dropdownSearchMenu';

const BusStopsDropdown = forwardRef((props, ref) => {


  return (
  <Dropdown>
    <Dropdown.Toggle id="dropdown-custom-1" variant='light'>
        Bus Stops
    </Dropdown.Toggle>

    <Dropdown.Menu as={DropdownSearchMenu}>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>Orange</Dropdown.Item>
        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
});

export default BusStopsDropdown;