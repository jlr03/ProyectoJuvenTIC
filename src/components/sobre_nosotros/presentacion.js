import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Style.css';
import restaurant from "../../assets/images/restaurant.jpg";

const Presentacion = (props) => {
    return (
        <section>
        <div class="about-section-box bg-light">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-6 text-center">
						<div class="inner-column">
							<h1>Bienvenido a <span>FOOD WORLD</span></h1>
							<h4>Nuestra Historia</h4>
							<p>Cocina rica, hecha con mucha ilusión, para gente que le gusta comer y disfrutar cada bocado de la vida. Buscamos que nuestros clientes disfruten de vivir nuevas experiencias, de un lugar íntimo en el que puedes saborear a gusto y conversar de forma relajada.</p>
							<p>Brindamos a nuestros clientes deliciosos platos de la comida típica nacional e internacional, acompañados de las bebidas artesanales de algunos países.</p>
							<p>Atendemos reuniones sociales como matrimonios, grados, cumpleaños, grupos empresariales y familiares ofreciendo productos de calidad, trato amable y un excelente servicio.</p>
						</div>
					</div>
					<div class="col-lg-6 col-md-6">
						<img src={restaurant} alt="" class="img-fluid"/>
					</div>
				</div>
			</div>
		</div>
        </section>
    )
};
export default Presentacion