import React from 'react';
import './styles/review.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import p1 from '../../assets/images/person-2.jpg';
import p2 from '../../assets/images/person-3.jpg';
import p3 from '../../assets/images/person-4.jpg';

const review = () => {

    return (

        <div className="testimonials-clean">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">Testimonios</h2>
                    <p className="text-center">¡Nuestros clientes nos aman! Lea lo que tienen que decir a continuación.</p>
                </div>
                <div className="row people">
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <p className="description">"Excelente servicio, la musica en vivo es fenomenal y la comida deliciosa."</p>
                        </div>
                        <div className="author">
                            <img className="rounded-circle" src={p1} alt=""/>
                            <h5 className>Aioria Reyes</h5>
                            <p className>Odontologo</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <p className="description">"Un excelente sitio, muy tranquilo y acogedor; la atención es excelente."</p>
                        </div>
                        <div className="author"><img className="rounded-circle" src={p3} alt=""/>
                            <h5 className>Neji Hyuga</h5>
                            <p className>Ingeniero Industrial</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <p className="description">"Muy buena comida, buen ambiente para ir en familia o con amigos."</p>
                        </div>
                        <div className="author"><img className="rounded-circle" src={p2} alt=""/>
                            <h5 className>Sara Hurtado</h5>
                            <p className>Contadora Publica</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default review