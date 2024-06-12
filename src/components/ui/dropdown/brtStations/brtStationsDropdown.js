// Import required libraries and functions
import Dropdown from 'react-bootstrap/Dropdown';

// Import required styles
import 'bootstrap/dist/css/bootstrap.min.css';

const BrtStationsDropdown = () => {

    return (
        <Dropdown>
            {/* If no valid search value, dropdown is disabled*/}
            <Dropdown.Toggle id="dropdown-custom-1" variant='light' style={{minWidth: '10.85vw'}}>
                {/* {selectedBusStopName.slice(0, 22)} */}
                Brt Stations
            </Dropdown.Toggle>
    
            <Dropdown.Menu style={{maxWidth: '15vw'}}>
                <Dropdown.Item>
                    Test
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        )
}

export default BrtStationsDropdown;