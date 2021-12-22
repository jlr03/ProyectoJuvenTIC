import React from 'react';
import Header from '../components/Inicio/header';
import Footer from '../components/Inicio/footer';
import Carrousel from '../components/Inicio/carrousel';
import Seccion1 from '../components/Inicio/seccion_1';
import Seccion2 from '../components/Inicio/seccion_2';
import Review from '../components/Inicio/review'

const Home=(props)=>{

    return(
      <>
        <Header/>
        <Carrousel/>
        <Seccion1/>
        <Seccion2/>
        <Review/>
        <Footer/>
      </>
    );
}
export default Home;