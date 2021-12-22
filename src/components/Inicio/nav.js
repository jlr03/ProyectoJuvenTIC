import React from 'react';
import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import './styles/index.css'

const Navi=(props)=>{

    return(
      <nav className="nav-header">
          <Link to='/'>Inicio</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/servicios'>Servicios</Link>
          <Link to='/sobre_nosotros'>Sobre Nosotros</Link>
          <Link to='/login'>Login</Link>
          <Link to='/carrito'><FiShoppingCart size='2em'/></Link>
      </nav>
    );
}
export default Navi;