// Import styling files
import Styles from './mapsRadioBtn.module.css';

// Import required library and functions
import React from 'react';

const MapsRadioBtn = ({setBusDirectionValue, busDirectionValue}) => {

    const handleChange = (event) => {
        // Value to be passed to parent component
        setBusDirectionValue(event.target.value);
    }

    return (
        <div className={Styles.radioInput}>
            <label>
                    <input value="1" name="value-radio" id="value-1" type="radio" checked={busDirectionValue === "1"} onChange={handleChange}/>
                <span>1</span>
            </label>
            <label>
                    <input value="2" name="value-radio" id="value-2" type="radio" checked={busDirectionValue === "2"} onChange={handleChange}/>
                <span>2</span>
            </label>
            <span className={Styles.selection}></span>
        </div>
    );
}

export default MapsRadioBtn;