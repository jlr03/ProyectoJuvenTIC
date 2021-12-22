import React, { Component } from 'react';
import './styles/style_index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import i1 from '../../assets/images/oferta1.png'
import i2 from '../../assets/images/oferta2.png'


class Carrousel extends Component {

   render()
   { 
       return (

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={i1} className="d-block w-100" alt="..."/>
                    
{/*<div className="carousel-caption d-md-block">
                        <h5>Sabores que exaltan sus sentidos</h5>
       </div>*/}
                </div>
                <div className="carousel-item">
                    <img src={i2} className="d-block w-100" alt="..."/>
                   
                    {/*<div className="carousel-caption d-md-block">
                        <h5>Second slide label</h5>
    </div>*/}
                </div>
                {/* <div className="carousel-item">
                    <img src={i3} className="d-block w-100" alt="..."/>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>




    );}

}

export default Carrousel