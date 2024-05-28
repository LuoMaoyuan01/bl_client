// Import styling files
import './homeRadioBtn.css';

// Import required library and functions
import React, {useState, useEffect} from 'react';

const RadioBtn = () => {



    return (
        <div class="radio-input">
            <label>
                <input value="value-1" name="value-radio" id="value-1" type="radio"/>
            <span>1</span>
            </label>
            <label>
                <input value="value-2" name="value-radio" id="value-2" type="radio"/>
            <span>2</span>
            </label>
            <span class="selection"></span>
        </div>
    );
}

export default RadioBtn;