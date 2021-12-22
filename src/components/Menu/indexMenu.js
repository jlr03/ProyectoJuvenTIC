import React from 'react';
import Galeria from './Galeria';
import SecMenu from './secMenu_1';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeaderSimple from '../HeaderSimple';
import Footer from '../Inicio/footer';

const indexMenu = () => {
    return (
        <>
            <main>
                <HeaderSimple/>
                <SecMenu/>
                <Galeria/>
                <Footer/>
            </main>
        </>
    );
};

export default indexMenu;