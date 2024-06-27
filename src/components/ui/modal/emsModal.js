// Import required libraries and functions
import React, {useState} from 'react';

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

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
          <Modal.Dialog className={`${Styles.modalDialog} modal-fullscreen`}>
          <div style={{display: 'flex', justifyContent: 'flex-end', background: 'black'}}>
                <CloseButton onClick={handleModalClose} variant='white'/>
            </div>
    
            <Modal.Body style={{background: 'black'}}>
              {/* Video autoplays on modal opening & auto closes on modal closing */}
              <video width="100%" style={{display: 'flex', justifyContent: 'center'}} controls autoPlay onEnded={handleModalClose}>
                <source src={busAnimationVideo} type="video/mp4" />
            </video>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      );
}

export default EmsModal;