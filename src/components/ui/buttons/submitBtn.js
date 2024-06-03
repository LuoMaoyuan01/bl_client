// Import required libraries and functions

// Import required styles
import Styles from './submitBtn.module.css';

const SubmitBtn = ({handleSubmit}) => {

    return (
        <button className={Styles.btn} type='submit' onClick={handleSubmit}> Submit </button>
    )
}

export default SubmitBtn;