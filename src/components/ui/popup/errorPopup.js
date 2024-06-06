// Import required functions
import React, {useState} from 'react';

// Import required styles
import Styles from './errorPopup.module.css';

// Import required components
import ErrorIcon from '../../../assets/images/errorIcon.png';

function ErrorPopup() {

    const [close, setClose] = useState(false)
    const message = `This bus number or direction does not exist currently, please try again with a different value.`;
    
    if(close === true){
        return ;
    }

    return (
      <div className={Styles.card}>
        <img src={ErrorIcon} alt='Error Icon' className={Styles.errorIcon} id="cookieSvg"/>
        <p className={Styles.cookieHeading}>Input Error Occured</p>
        <p className={Styles.cookieDescription}>
          {message}
        </p>
        <div className={Styles.buttonContainer}>
          <button className={Styles.acceptButton} onClick={() => {setClose(true)}}>Confirm</button>
        </div>
      </div>
    );
  }
  

export default ErrorPopup;
