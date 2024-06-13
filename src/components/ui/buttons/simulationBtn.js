// Import required libraries and functions
import React, {useContext} from 'react';

// Import required context
import EmsClickContext from '../../../context/simulation/emsClickContext';

// Import required styles
import Styles from './simulationBtn.module.css';

const SimulationBtn = ({BtnName}) => {
    const {handleClick} = useContext(EmsClickContext);

    return (
        <button className={Styles.button} onClick={handleClick}>
            {BtnName}
        </button>
    )
}

export default SimulationBtn;