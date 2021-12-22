import React from 'react';
import './styles/style_index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import icon1 from '../../assets/images/celebracion.png';
import icon2 from '../../assets/images/boda.png';
import icon3 from '../../assets/images/cenarom.png';
import icon4 from '../../assets/images/empresa.png';


const seccion_2 = () => {

    return (
        <>
            <div className="container-fluid pd-0">
                <h1 className="text-lg-center">Organizamos eventos para cualquier celebración</h1>
                <div className="container-fluid bg-2">
                    <div className="row class align-items-end">
                        <div className="col-3 text-center">
                            <div className="d-block h-100 mb-4">
                                <img className="img-fluid" src={icon1} width="30%" alt="" />
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="d-block h-100 mb-4">
                                <img className="img-fluid" src={icon2} width="30%" alt="" />
                            </div>
                        </div>
                        <div className=" col-3 text-center ">
                            <div className="d-block h-100 mb-4">
                                <img className="img-fluid" src={icon3} width="30%" alt="" />
                            </div>
                        </div>
                        <div className=" col-3 text-center">
                            <div className="d-block h-100 mb-4">
                                <img className="img-fluid" src={icon4} width="40%" alt="" style={{ marginBottom: '-5px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="row class align-items-end">
                        <div className="col-3 ">
                            <div className="d-block h-100 mb-4">
                                <p style={{ textAlign: 'center', fontSize: '2vw', color: '#F2F2F2' }}>
                                    Celebraciones Especiales
                            </p>
                                <p style={{ textAlign: 'center', fontSize: '1.2vw', color: '#F2F2F2' }}>
                                    Nuestro restaurante cuenta con diferentes salones para que personalice cada espacio a su gusto.
                                    Disfrute con nosotros sus celebraciones especiales como cumpleaños, recepción de grado, reunion de amigos o familiares.
                            </p>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="d-block h-100 mb-4">
                                <p style={{ textAlign: 'center', fontSize: '2vw', color: '#F2F2F2' }}>
                                    Matrimonios
                            </p>
                                <p style={{ textAlign: 'center', fontSize: '1.2vw', color: '#F2F2F2' }}>
                                    Tu boda merece ser celebrada por todo lo alto y con el mejor ambiente lleno de armonía que te haga brillar durante toda la celebración.
                                    Con seguridad haremos que el día mas importante de tu vida sea como siempre lo soñaste.
                            </p>
                            </div>
                        </div>
                        <div className=" col-3 ">
                            <div className="d-block h-100 mb-4">
                                <p style={{ textAlign: 'center', fontSize: '2vw', color: '#F2F2F2' }}>
                                    Cenas Románticas
                            </p>
                                <p style={{ textAlign: 'center', fontSize: '1.2vw', color: '#F2F2F2', marginBottom: '49px' }}>
                                    ¿Preparado para dar el siguiente paso? ¿Celebrar otro año por haber conocido el amor de su vida? En nuestro restaurante contamos con
                                    todo lo necesario para hacer de este día inolvidable.
                            </p>
                            </div>
                        </div>
                        <div className=" col-3 ">
                            <div className="d-block h-100 mb-4">
                                <p style={{ textAlign: 'center', fontSize: '2vw', color: '#F2F2F2' }}>
                                    Eventos Empresariales
                            </p>
                                <p style={{ textAlign: 'center', fontSize: '1.2vw', color: '#F2F2F2', marginBottom: '49px' }}>
                                    Le brindamos un ambiente exclusivo a sus reuniones, contamos con extensas terrazas y un tercer piso VIP con ‘lounge’.
                                    Su empresa podrá disfrutar de música en vivo y diferentes géneros musicales.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default seccion_2