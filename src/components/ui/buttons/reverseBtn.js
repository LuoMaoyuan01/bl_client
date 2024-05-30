// Import styling files
import Styles from './reverseBtn.module.css';

// Import images
import reverseIcon from '../../../assets/images/reverseIcon.png';

// Import required libraries and functions

const ReverseBtn = () => {


    return(
        <button className={`${Styles.button} ${Styles['full-rounded']}`}> 
            <img src={reverseIcon}/>
            <div className={`${Styles.border} ${Styles['full-rounded']}`}></div>
        </button>
    );
}

export default ReverseBtn;  