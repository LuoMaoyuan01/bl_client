// Import styling files
import Styles from './mapsRadioBtn.module.css';

// Import required library and functions
import React , {useState} from 'react';

const MapsRadioBtn = ({setBusDirectionValue, busDirectionValue}) => {

    const [checkedStatus, setCheckedStatus] = useState("1");

    const handleChange = (value) => {
        // Toggles busDirectionValue between 1 & 2
        setCheckedStatus(value);

        // Value to be passed to parent component at runtime
        setBusDirectionValue(value.toString());
        // console.log(value);
    }

    return (
        <div className={Styles.radioInput}>
            <label onClick={() => handleChange("1")}>
                <input value="1" name="value-radio" id="value-1" type="radio" checked={checkedStatus === "1"} onChange={(event) => handleChange(event.target.value)}/>
                <span>1</span>
            </label>
            <label onClick={() => handleChange("2")}>
                <input value="2" name="value-radio" id="value-2" type="radio" checked={checkedStatus === "2"} onChange={(event) => handleChange(event.target.value)}/>
                <span>2</span>
            </label>
            <span className={Styles.selection}></span>
        </div>
    );
}

export default MapsRadioBtn;