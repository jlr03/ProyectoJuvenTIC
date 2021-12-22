import React from 'react';
import './styles/footer.css'
import 'bootstrap/dist/css/bootstrap.css';


const Footer = () =>{
    
    return(

      <footer className="footer-area bg-f">
            <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-3 col-md-6">
                    <h3>Información de Contacto</h3>
                    <p>Calle 34A #15-11, Bogotá, Colombia</p>
                    <p>225 869 523</p>
                    <p>infofw@admin.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3>Horario de Atención</h3>
                    <p>Lunes: 12PM-10PM</p>
                    <p>Martes-Miercoles: 9AM - 10PM</p>
                    <p>Jueves-Viernes: 9AM - 10PM</p>
                    <p>Sabado-Domingo: 5PM - 10PM</p>
                </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <p className="company-name">All Rights Reserved. © 2021 Food World Design By: Jhonatan y Jose</p> 
                        </div>
                    </div>
                </div>
            </div>
      </footer>


    )
}

export default Footer