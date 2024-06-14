// Import required libraries and functions
import React, {useState} from 'react';

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Import required styles
import 'bootstrap/dist/css/bootstrap.min.css';
// import Styles from './emsModal.module.css';

// Import required 3D Model
import Model3D from '../../3dModels/test';
import testBrtStation from '../../../assets/3dModels/testBrtStation.glb'

const BrtStationModal = ({handleModalClose}) => {

    return (
        <div
          className="modal show"
          style={{ display: 'block', position: 'fixed', zIndex: '101'}}
        >
          <Modal.Dialog className='modal-fullscreen' style={{left: '17.03vw', height: '100vh', width: '82.9vw', border: '2px solid black'}}>
            <Modal.Header closeButton onClick={handleModalClose}>
            </Modal.Header>
    
            <Modal.Body>
                <Model3D url={'/testBrtStation.glb'}/>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      );
}

export default BrtStationModal;