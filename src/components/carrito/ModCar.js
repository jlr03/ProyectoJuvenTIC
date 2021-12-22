import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ModCar = ({show, handleClose}) => {
  
  /* const text1=(it)=>{
     <p className="text-center">{it.quantity} * ${it.precio}</p>
  } */

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           Detalles de la compra
        </Modal.Header>
        <Modal.Body>
          <p>Hola! Gracias por confiar en nosotros, aquí tienes los datos de tu pedido.</p>
          {/* <img id="imagen_correo" src="img/lm.png" className="rounded mx-auto d-block" alt="Image" /> */}
          <h5 className="modal-title">Este es tu pedido</h5>
          <hr size={5} style={{ color: '#00b9c7' }} />
          {/* {
            producItems.map((p)=>(
               text1(p)
            ))
          } */}
          <hr size={5} style={{ color: '#00b9c7' }} />
          <p id="p1" className="text-center"></p>
          {/* <p id="p2" className="fw-bold text-center"></p> */}

          <form /* onsubmit="sendEmail()" */>
            <br />
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
              <input type="text" className="form-control" id="recipient-name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">Correo:</label>
              <input type="email" className="form-control" id="recipient-correo" required />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button>Aceptar</Button>
          <Button>Cancelar</Button>
        </Modal.Footer> */}
      </Modal>
      
    </>
  );
}

export default ModCar;