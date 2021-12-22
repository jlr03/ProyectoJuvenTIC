import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from 'react-bootstrap';
import Mod from './Mod';

const Plato = ({plato}) => {

    const [show, setShow] = useState(false)
    
    const handleClose=()=> setShow(false)
    const handleShow=()=> setShow(true)

    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={plato.img} className="card-img-top" alt={plato.nombre}/>
                    <div className="card-body">
                        <h5 className="card-title">{plato.nombre}</h5>
                        <p className="text-start">{plato.descripcion}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                {/* <button type="button" className="btn btn-outline-primary btn-sm">Más detalles</button> */}
                                <Button variant="outline-secondary" size="sm" onClick={handleShow}>Mas detalles</Button>
                                <Mod desNombre={plato.nombre} desImg={plato.img2} desDetalle={plato.descripcion_larga} show={show} handleClose={handleClose}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plato;