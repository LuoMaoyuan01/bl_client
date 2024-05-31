// Import styling files
import Styles from './reverseBtn.module.css';

// Import images
import reverseIcon from '../../../assets/images/reverseIcon.png';

// Import required libraries and functions

const ReverseBtn = ({toggleBusDirection}) => {


    return(
        <button className={`${Styles.button} ${Styles['full-rounded']}`} onClick={toggleBusDirection}> 
            <img src={reverseIcon}/>
            <div className={`${Styles.border} ${Styles['full-rounded']}`}></div>
        </button>
    );
}

// Button is responsive on all screen sizes
export default ReverseBtn;  