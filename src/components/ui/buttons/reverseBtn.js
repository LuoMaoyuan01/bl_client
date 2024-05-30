// Import styling files
import Styles from './reverseBtn.module.css';

// Import required libraries and functions

const ReverseBtn = () => {


    return(
        <button className={`${Styles.button} ${Styles['full-rounded']}`}>
            <span>Hover me</span>
            <div className={`${Styles.border} ${Styles['full-rounded']}`}></div>
        </button>
    );
}

export default ReverseBtn;  