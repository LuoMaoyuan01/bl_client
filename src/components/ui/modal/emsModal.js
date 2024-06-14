// Import required libraries and functions
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Import required styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './emsModal.module.css';

const EmsModal = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    if(!show){
        return ;
    }

    return (
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton onClick={handleClose}>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <p style={{display: 'flex', justifyContent: 'center'}}>Modal body text goes here.</p>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      );
}

export default EmsModal;