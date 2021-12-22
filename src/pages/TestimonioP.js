import React, { useState } from 'react'

import {v4 as uuidv4} from 'uuid';
import ComentarioP from '../components/includes/comentario_principal'
import Formulario from '../components/includes/Formulario'

const TestimonioP=(props)=>{

    const userData=[
        {
            id:uuidv4(),
            nombre: "aioria",
            comentarioPrincipal: "Hola digimundo estás muy grande que genial",
        },
        {
            id:uuidv4(),
            nombre: "Sasuke",
            comentarioPrincipal: "Hola konoha"
        },
        {
            id:uuidv4(),
            nombre: "Sakura",
            comentarioPrincipal: "Pinche tabla inutil"
        },
    ]
    
    /*const userSub=[
        {
            idUser:users.id,
            nombreUser:"alex",
            comentario:"Hola neji"
        },
        {   
            idUser:users.id,
            nombreUser:"jhon",
            comentario:"Hola patamon"
        },
        {   
            idUser:users.id,
            nombreUser:"andres",
            comentario:"Hola angemon"
        }
    ]*/

    const [users, setUsers]=useState(userData);
    /*const [usersCom, setUsersCom]=useState(userSub);*/
    
    const addComent=(co)=>{
        co.id = uuidv4()
        setUsers([
            ...users,
        ])
        
    }

    return(
     
          <i>
              <ComentarioP users={users}/>
              <Formulario addComent={addComent}/>
          </i>
        );
}
export default TestimonioP;