import React from 'react';
import '../index.css';
import Navi from './Inicio/nav';
const styles = {
    header: {
        backgroundColor: 'rgb(0,0,0)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        position: 'sticky',
        /* top:0,
        zIndex:3 */
    },
    title: {
        fontSize: '2em',
        color: 'rgb(255,200,0);',

    }
}
const HeaderSimple = (props) => {



    return (
        <header style={styles.header} className='header-simple'>
            <h1 className="title-principal">FoodWorld</h1>
            <div className="nav-segundario">
                <Navi />
            </div>

        </header>
    );
}
export default HeaderSimple;