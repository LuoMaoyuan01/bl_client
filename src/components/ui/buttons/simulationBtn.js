// Import required libraries and functions
import React, {useContext, useState} from 'react';

// Import required context
import EmsClickContext from '../../../context/simulation/emsClickContext';

// Import required styles
import Styles from './simulationBtn.module.css';

const SimulationBtn = ({BtnName, brtRouteValue}) => {
    const {handleClick} = useContext(EmsClickContext);

    const [isDisabled, setIsDisabled] = useState(true);

    if(brtRouteValue !== '0' && isDisabled !== false){
        setIsDisabled(false);
    }
    

    return (
        <button className={isDisabled ? Styles.disabledBtn : Styles.button} onClick={handleClick} disabled={isDisabled}>
            {BtnName}
        </button>
    )
}

export default SimulationBtn;