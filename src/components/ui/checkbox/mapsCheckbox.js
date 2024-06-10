// Import required styling
import Styles from './mapsCheckbox.module.css';

// Import required libraries and functions
import React, { useState, useEffect, forwardRef } from 'react';

// Utilize forwardRef to pass the reference from parent components
const MapsCheckbox = forwardRef((props, ref) => {
    const [mapsCheckboxValue, setMapsCheckboxValue] = useState(props.checkedStatus || false);


    return (
        <div className={Styles.checkboxwrapper31}>
            <input
                checked={mapsCheckboxValue}
                type="checkbox"
                onChange={() => setMapsCheckboxValue(!mapsCheckboxValue)}
                ref={ref} // Forwarding the ref to the input element
            />
            <svg viewBox="0 0 35.6 35.6">
                <rect className={Styles.background} x="0" y="0" width="35.6" height="35.6"></rect>
                <rect className={Styles.stroke} x="1.7" y="1.7" width="32.2" height="32.2"></rect>
                <polyline className={Styles.check} points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
            </svg>
        </div>
    );
});

export default MapsCheckbox;
