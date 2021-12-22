import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Pdf from '../../assets/pdfs/menu.pdf'
/* import Button from '@restart/ui/esm/Button'; */

const secMenu = () => {
    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Menú</h1>
                        <p className="lead text-muted text-center">
                            En esta sección encontrará los platos que ofrecemos en nuestro restaurante y con información detallada sobre
                            su origen e ingredientes. Si desea hacer un pedido o recibir más información sobre un plato se puede
                            contactar con nosotros y con gusto atenderemos su solicitud.
                        </p>

                        <a href={Pdf} target="_blank">Descargar Menu</a>
                        
                        {/*<p>
      <a href="./carrito.html" class="btn btn-primary my-2" >Realizar Pedidos</a>
    </p>*/}
                    </div>
                </div>
            </section>

        </>
    );
};

export default secMenu;