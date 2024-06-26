// Import required libraries and functions
import React from 'react';
import brtRouteInformation from '../../../data/brtRouteInfo';

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

// Import required styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './brtStationModal.module.css';

// Import required 3D Model
import BrtStation3DModel from '../../3dModels/brtStation3DModel';

// Import required components
import BusStopsCard from '../popup/busStopCard';

const BrtStationModal = ({handleModalClose}) => {

    const brtRouteInfo = brtRouteInformation();

    return (
        <div className="modal show" style={{ display: 'block', position: 'fixed', zIndex: '101'}}>
          <Modal.Dialog className={`${Styles.modalDialog} modal-fullscreen`}>
            <div style={{display: 'flex', justifyContent: 'flex-end', background: 'black'}}>
                <CloseButton onClick={handleModalClose} variant='white'/>
            </div>

            <BusStopsCard busStopData = {brtRouteInfo['Blue Route']['BrtArrivalData']} style={{ position: 'absolute', left: '40vw', top: '0vh'}}/>

            <Modal.Body style={{background: 'black'}}>
                <BrtStation3DModel url={'/BrtStation.glb'}/>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      );
}

export default BrtStationModal;