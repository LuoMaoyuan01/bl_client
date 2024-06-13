// Import required libraries and functions

// Import required styles
import Styles from './simulationBtn.module.css';

const SimulationBtn = ({BtnName}) => {

    return (
        <button className={Styles.button}>
            {BtnName}
        </button>
    )
}

export default SimulationBtn;