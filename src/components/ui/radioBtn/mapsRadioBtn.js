// Import styling files
import Styles from './mapsRadioBtn.module.css';

// Import required library and functions
import React, { useState } from 'react';

const MapsRadioBtn = ({setBusDirectionValue}) => {

    const [directionValue, setDirectionValue] = useState('1');

    // Value to be passed to parent component
    setBusDirectionValue(directionValue);

    return (
        <div className={Styles.radioInput}>
            <label>
                    <input value="1" name="value-radio" id="value-1" type="radio" checked={directionValue === "1"} onChange={() => setDirectionValue("1")}/>
                <span>1</span>
            </label>
            <label>
                    <input value="2" name="value-radio" id="value-2" type="radio" checked={directionValue === "2"} onChange={() => setDirectionValue("2")}/>
                <span>2</span>
            </label>
            <span className={Styles.selection}></span>
        </div>
    );
}

export default MapsRadioBtn;