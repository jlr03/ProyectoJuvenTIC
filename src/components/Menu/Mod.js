import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Mod = ({ show, handleClose, desNombre, desDetalle, desImg }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {desNombre}
                </Modal.Header>
                <Modal.Body>
                <div className="modal-body py-3">
                    <img src={desImg} className="rounded mx-auto d-block" width={304} height={236} /> 
                </div> 
                    {desDetalle}
                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Atras</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Mod;