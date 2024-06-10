// Import styling files
import Styles from './mapsRadioBtn.module.css';

// Import required library and functions
import React , {useState, forwardRef} from 'react';

const MapsRadioBtn = forwardRef((props, ref) => {

    const [checkedStatus, setCheckedStatus] = useState(props.busDirectionValue || "1");

    const handleChange = () => {
        console.log(checkedStatus);
        checkedStatus === '1' ? setCheckedStatus('2') : setCheckedStatus('1');
    }


    return (
        <div className={Styles.radioInput}>
            <label onClick={() => {setCheckedStatus('1'); ref.current.checkedStatus = '1'}}>
                <input value="1" name="value-radio" id="value-1" type="radio" ref={ref} checked={checkedStatus === "1"} onChange={handleChange}/>
                <span>1</span>
            </label>
            <label onClick={() => {setCheckedStatus('2'); ref.current.checkedStatus = '2'}}>
                <input value="2" name="value-radio" id="value-2" type="radio" ref={ref} checked={checkedStatus === "2"} onChange={handleChange}/>
                <span>2</span>
            </label>
            <span className={Styles.selection}></span>
        </div>
    );
})

export default MapsRadioBtn;