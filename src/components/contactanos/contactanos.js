import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../includes/footer';
import Header from '../includes/header';
import Formulario from '../servicios/Formulario'

const sobre_nosotros=(props)=>{

    return(
      <>
        <Header/>
        <div class="container mt-3">
          <div class="row">
            <div class="col">
              <h1 class="p-contacto">Contáctanos</h1>
            </div>
          </div>
          <div class="row mt-3">
              <div class="col">
                
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aut neque harum eum autem obcaecati tenetur unde enim fugiat commodi. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit vel sint nemo consectetur incidunt! Quidem porro nam velit rerum distinctio! Nobis at explicabo odio ea, aperiam, quos rerum maxime illum ab, consequatur numquam? Eos officiis tenetur perferendis maiores qui.
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit vel sint nemo consectetur incidunt! Quidem porro nam velit rerum distinctio! Nobis at explicabo odio ea, aperiam, quos rerum maxime illum ab, consequatur numquam? Eos officiis tenetur perferendis maiores qui.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit vel sint nemo consectetur incidunt! Quidem porro nam velit rerum distinctio! Nobis at explicabo odio ea, aperiam, quos rerum maxime illum ab, consequatur numquam? Eos officiis tenetur perferendis maiores qui.
                
              </div>
          </div>
        </div>
        <Header/>
        <Formulario/>
      </>
    );
}
export default sobre_nosotros;