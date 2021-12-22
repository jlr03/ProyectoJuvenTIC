import React from 'react';
import Footer from '../Inicio/footer';
import HeaderSimple from '../HeaderSimple';
import Presentacion from "./presentacion"
import Equipo from "./equipo"
import Testimonios from "./testimonios"
import Comentarios from './Comentarios';
//import Reviw from "../includes/review"
//import Comentarios from "../includes/comentario_principal"
//import SubComentario from "../includes/sub_comentario"

const sobre_nosotros=(props)=>{

    return(
      <>
        <HeaderSimple/>
        <h1 class="text-center">Sobre Nosotros</h1>
        <hr/>
        <Presentacion/>
        <Equipo/>
        <Testimonios/>
        <Comentarios/>
        <Footer/>
      </>
    );
}
export default sobre_nosotros;