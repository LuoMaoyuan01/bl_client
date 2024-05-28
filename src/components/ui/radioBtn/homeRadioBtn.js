// Import styling files
import './homeRadioBtn.css';

// Import required library and functions
import React, { useState, useEffect } from 'react';

const RadioBtn = ({radioInputValue, setRadioInputValue}) => {


    return (
        <div className="radio-input">
            <label>
                <input value="1" name="value-radio" id="value-1" type="radio" checked={radioInputValue === "1"} onChange={() => setRadioInputValue("1")}/>
            <span>1</span>
            </label>
            <label>
                <input value="2" name="value-radio" id="value-2" type="radio" checked={radioInputValue === "2"} onChange={() => setRadioInputValue("2")}/>
            <span>2</span>
            </label>
            <span className="selection"></span>
        </div>
    );
}

export default RadioBtn;