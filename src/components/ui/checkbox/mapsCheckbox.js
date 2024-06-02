// Import required styling
import Styles from './mapsCheckbox.module.css';

// Import required libraries and functions
import React, {useState, useEffect} from 'react';

const MapsCheckbox = () => {
    const [mapsCheckboxValue, setMapsCheckboxValue] = useState(false);

    return(
        <div className={Styles.checkboxwrapper31}>
            <input checked={mapsCheckboxValue} type="checkbox" onChange={() => setMapsCheckboxValue(!mapsCheckboxValue)}/>
            <svg viewBox="0 0 35.6 35.6">
                <circle className={Styles.background} cx="17.8" cy="17.8" r="17.8"></circle>
                <circle className={Styles.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
                <polyline className={Styles.check} points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
            </svg>
        </div>
    );
}

export default MapsCheckbox;