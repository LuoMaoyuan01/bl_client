// Import required libraries and functions
import React, { useContext, useEffect, useRef } from 'react';
// import { Tooltip } from 'react-tooltip'

// Import required components
import MapsCheckbox from '../checkbox/mapsCheckbox';
import SubmitBtn from '../buttons/submitBtn';
import SearchForm from '../form/searchForm';
import MapsRadioBtn from '../radioBtn/mapsRadioBtn';
import BusStopsDropdown from '../dropdown/busStops/busStopsDropdown';
import BrtStationsDropdown from '../dropdown/brtStations/brtStationsDropdown';
import RefreshBtn from '../buttons/refreshBtn';

// Import required styles
import Styles from './mapsDrawer.module.css';

// Import required context
import MapStateContext from '../../../context/mapStateContext';

const MapsDrawer = ({ returnValues }) => {

    // use the context
    const { mapState, setMapState } = useContext(MapStateContext);

    // Search options references
    const busNumberSearchValueRef = useRef(mapState.searchFormValue?.busNumberSearchValue || null);
    const busDirectionSearchCheckboxRef = useRef(mapState.searchFormValue?.busDirectionValue || '1');
    const brtRouteValueRef = useRef(mapState.searchFormValue?.brtRouteValue || '0');
    const busStopsDropdownRef = useRef(null);

    // Checkbox references
    const busNumberSearchCheckboxRef = useRef(mapState.checkBoxStatus?.busNumberSearchCheckbox || null);
    const brtRoutesSearchCheckboxRef = useRef(mapState.checkBoxStatus?.brtRoutesCheckbox || null);
    const busStopsCheckboxRef = useRef(mapState.checkBoxStatus?.busStopsCheckbox || null);   

    
    // Function to handle form submission
    const handleSubmit = () => {

        // ? used to prevent undefined values from being submitted
        // Checkbox values to be returned , in the mapsCheckbox component it refers to the <input> DOM
        const busNumberSearchCheckboxChecked = busNumberSearchCheckboxRef.current.checked ? busNumberSearchCheckboxRef.current.checked : false;
        const brtRoutesSearchCheckboxChecked = brtRoutesSearchCheckboxRef.current.checked ? brtRoutesSearchCheckboxRef.current.checked : false;
        const busStopsCheckboxChecked = busStopsCheckboxRef.current.checked ? busStopsCheckboxRef.current.checked : false;

        // SearchForm Values to be returned
        const busNumberSearchValue = busNumberSearchValueRef.current.value ? busNumberSearchValueRef.current.value : '0';
        const busDirectionValue = busDirectionSearchCheckboxRef.current.checkedStatus ? busDirectionSearchCheckboxRef.current.checkedStatus : '1';
        const brtRouteValue = brtRouteValueRef.current.getSelectedBrtStation() ? brtRouteValueRef.current.getSelectedBrtStation() : '0';

        // Appends the checkbox status boolean values to an array
        const checkBoxStatus = {
            // Checks if the checkbox has no reference currently or is false, if condition fulfilled, return false
            busNumberSearchCheckbox: busNumberSearchCheckboxChecked,
            brtRoutesCheckbox: brtRoutesSearchCheckboxChecked,
            busStopsCheckbox: busStopsCheckboxChecked,
        };

        // Appends the searchbox form values to an array
        const searchFormValue = {
            busNumberSearchValue: busNumberSearchValue,  
            busDirectionValue: busDirectionValue,
            brtRouteValue: brtRouteValue,
        };

        // Put state into MapStateContext
        setMapState(prevState => ({
            ...prevState,
            searchFormValue: searchFormValue,
            checkBoxStatusValue: checkBoxStatus,
        }));

        console.log(mapState);

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

    console.log('Maps Drawer Loaded');

    return (
        <div>
            {/* Start of content in Drawer component */}
            <div className={`${Styles.drawer} ${Styles.drawerOpen}`}>
                <div className={Styles.content}>

                    {/* List of content in Drawer component */}

                    {/* Search Options Content */}
                    <h1 className="tw-text-lg tw-font-bold tw-font-under">Search Options</h1>
                    <ul className={Styles.formUl} style={{ paddingBottom: '1.5vw' }}>
                        <li className={Styles.entry}>
                            <SearchForm 
                            label='busNumberSearchValue' 
                            ref={busNumberSearchValueRef} 
                            />
                            <MapsRadioBtn label='busDirectionSearchCheckbox' ref={busDirectionSearchCheckboxRef} busDirectionValue={mapState.searchFormValue?.busDirectionValue || '1'}/>
                        </li>
                        <li className={Styles.entry}>
                            <BrtStationsDropdown label='brtRouteValue' ref={brtRouteValueRef}/>
                        </li>
                        <li className={Styles.entry}>
                            <BusStopsDropdown label='busStopsDropdown' ref={busStopsDropdownRef} busNumberSearchValue={mapState.searchFormValue?.busNumberSearchValue || '0'}/>
                        </li>
                    </ul>

                    {/* Display Options Content */}
                    <h1 className="tw-text-lg tw-font-bold">Display Options</h1>
                    <ul className={Styles.formUl} style={{ paddingBottom: '1.5vw' }}>
                        <li className={Styles.entry}>
                            <MapsCheckbox 
                            label='busNumberSearchCheckbox' 
                            ref={busNumberSearchCheckboxRef} 
                            checkedStatus={mapState.checkBoxStatusValue?.busNumberSearchCheckbox || false}
                            />
                            Bus Routes
                        </li>
                        <li className={Styles.entry}>
                            <MapsCheckbox 
                            label='brtRoutesCheckbox' 
                            ref={brtRoutesSearchCheckboxRef} 
                            checkedStatus={mapState.checkBoxStatusValue?.brtRoutesCheckbox || false}
                            />
                            BRT Routes
                        </li>
                        <li className={Styles.entry}>
                            <MapsCheckbox 
                            label='busStopsCheckbox' 
                            ref={busStopsCheckboxRef} 
                            checkedStatus={mapState.checkBoxStatusValue?.busStopsCheckbox || false}
                            />
                            Bus Stops
                        </li>
                    </ul>

                    <ul style={{ paddingBottom: '1.5vw', border: 'none'}}>
                        <li className={Styles.submitEntry} >
                            {/* Submit button in Drawer component that sends the data to parent googlemaps */}
                            <SubmitBtn handleSubmit={handleSubmit} onKeyDown={handleKeyDown}/>
                            <RefreshBtn style={{ paddingBottom: '1.5vw' }}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MapsDrawer;
