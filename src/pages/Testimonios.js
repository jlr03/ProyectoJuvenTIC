import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/includes/styles/comentarios.css'
import ComentarioP from '../components/includes/comentario_principal'
/*import ComentarioSub from '../components/includes/subform'*/
import Formulario from '../components/includes/Formulario'



const Testimonios=()=>{
    
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

    /*console.log(userData[0].id)*/

    const [users, setUsers]=useState(userData);
    /*const [subUsers, setSubUsers]=useState([{
                                               idUser:uuidv4(),
                                               idP:userData[0].id,
                                               nombreSub:"Aiorios",
                                               comentarioSub: "Hola sagitario"
                                            },
                                            {
                                                idUser:uuidv4(),
                                                idP:userData[2].id,
                                                nombreSub:"Shura",
                                                comentarioSub: "Escalibur"
                                             }           
                                              ]);*/
    
    /*modal*
   /*const [usersCom, setUsersCom]=useState(userSub);*/

    /*const [showSub, setShowSub]=useState(false)*/


    const addComent=(co)=>{
        co.id = uuidv4()
        setUsers([
            ...users,
            co
        ])
        
    }

    /*const subComentario = (id)=>{
        console.log(id)
    }*/

    return (
        <>
        <div className="comments-container">
            <ul id="comments-list" className="comments-list">
               
                     <ComentarioP users={users}/>
                     {/*
                        
                        subUsers={subUsers} setShowSub={setShowSub}
                        showSub ? (
                            <>
                               <ComentarioSub/>
                            </>
                         ) : (
                             <>
                             </>
                         )*/
                    }
    
            </ul>
        </div>
        <Formulario addComent={addComent}/>
        </>
    )
}

export default Testimonios;