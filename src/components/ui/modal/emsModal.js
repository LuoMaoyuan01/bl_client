// Import required libraries and functions
import React, {useState} from 'react';

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Import required styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './emsModal.module.css';

// Import required animations
import busAnimationVideo from '../../../assets/videos/busAnimationVideo.mp4';

const EmsModal = ({handleModalClose}) => {

    return (
        <div
          className="modal show"
          style={{ display: 'block', position: 'fixed', zIndex: '101'}}
        >
          <Modal.Dialog className='modal-fullscreen' style={{left: '17.03vw', height: '100vh', width: '82.9vw', border: '2px solid black'}}>
            <Modal.Header closeButton onClick={handleModalClose}>
            </Modal.Header>
    
            <Modal.Body>
              {/* <p style={{display: 'flex', justifyContent: 'center'}}>Modal body text goes here.</p> */}
              <video width="100%" style={{display: 'flex', justifyContent: 'center'}} controls autoPlay onEnded={handleModalClose}>
                <source src={busAnimationVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      );
}

export default EmsModal;