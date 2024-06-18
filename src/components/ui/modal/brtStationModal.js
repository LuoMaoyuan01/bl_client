// Import required libraries and functions
import React from 'react';

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

// Import required styles
import 'bootstrap/dist/css/bootstrap.min.css';
// import Styles from './emsModal.module.css';

// Import required 3D Model
import BrtStation3DModel from '../../3dModels/brtStation3DModel';

const BrtStationModal = ({handleModalClose}) => {

    return (
        <div className="modal show" style={{ display: 'block', position: 'fixed', zIndex: '101'}}>
          <Modal.Dialog className='modal-fullscreen' style={{left: '17.03vw', height: '100vh', width: '82.9vw', border: '2px solid black'}}>
            <div style={{display: 'flex', justifyContent: 'flex-end', background: '#ECECEC'}}>
                <CloseButton onClick={handleModalClose}/>
            </div>

            <Modal.Body style={{background: '#ECECEC'}}>
                <BrtStation3DModel url={'/testBrtStation.glb'}/>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      );
}

export default BrtStationModal;