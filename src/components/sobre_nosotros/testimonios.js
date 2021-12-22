import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Style.css';
import person2 from "../../assets/images/person-2.jpg";
import person4 from "../../assets/images/person-4.jpg";
import person3 from "../../assets/images/person-3.jpg";

const Testimonios = (props) => {
    return (
        <section>
        <div class="testimonials-clean">
	        <div class="container">
	            <div class="intro">
	                <h2 class="text-center">Testimonios</h2>
	                <p class="text-center">¡Nuestros clientes nos aman! Lea lo que tienen que decir a continuación.</p>
	            </div>
	            <div class="row people">
	                <div class="col-md-6 col-lg-4 item">
	                    <div class="box">
	                        <p class="description">"Excelente servicio, la musica en vivo es fenomenal y la comida deliciosa."</p>
	                    </div>
	                    <div class="author">
	                    	<img class="rounded-circle" src={person2} alt=""/>
	                        <h5 class="">Aioria Reyes</h5>
	                        <p class="">Odontologo</p>
	                    </div>
	                </div>
	                <div class="col-md-6 col-lg-4 item">
	                    <div class="box">
	                        <p class="description">"Un excelente sitio, muy tranquilo y acogedor; la atención es excelente."</p>
	                    </div>
	                    <div class="author"><img class="rounded-circle" src={person4} alt=""/>
	                        <h5 class="">Neji Hyuga</h5>
	                        <p class="">Ingeniero Industrial</p>
	                    </div>
	                </div>
	                <div class="col-md-6 col-lg-4 item">
	                    <div class="box">
	                        <p class="description">"Muy buena comida, buen ambiente para ir en familia o con amigos."</p>
	                    </div>
	                    <div class="author"><img class="rounded-circle" src={person3} alt=""/>
	                        <h5 class="">Sara Hurtado</h5>
	                        <p class="">Contadora Publica</p>
	                    </div>
	                </div>

	            </div>
	        </div>
	    </div>
        </section>
    )
};
export default Testimonios