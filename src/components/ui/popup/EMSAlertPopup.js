// Import required libraries and functions
import React from 'react';

// Import required styles
import Styles from './EMSAlertPopup.module.css';

// Import required images
import ErrorIcon from '../../../assets/images/errorIcon.png';


const EMSAlertPopup = ({ onClose, routesColour }) => {

    const message = `EMS is requesting to use ${routesColour}!`;
    
    const handleClose = () => {
        // Logic to close the popup
        onClose(); // Call the onClose prop
    }

    return (
      <div className={Styles.card}>
        <img src={ErrorIcon} alt='Error Icon' className={Styles.errorIcon} id="cookieSvg"/>
        <p className={Styles.cookieHeading}>EMS REQUEST ALERT</p>
        <p className={Styles.cookieDescription}>
          {message}
        </p>
        <div className={Styles.buttonContainer}>
          <button className={Styles.acceptButton} onClick={handleClose}>Confirm</button>
        </div>
      </div>
    );
}

export default EMSAlertPopup;