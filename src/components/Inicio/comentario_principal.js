import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/comentarios.css';
/*import SubCom from '../includes/sub_comentario';*/
/* SubForm from '../includes/subform'*/

const ComentarioPrincipal = (props) => {

    /*const [showSub, setShowSub]=useState(false)*/

    return (
        <>
            {
                /*props.subUsers.length > 0 ?*/
                props.users.map(user =>(
                
                    <li key={user.id}>

                        <div className="comment-main-level">
                           
                           <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /></div>
                    
                            <div className="comment-box">
                                <div className="comment-head">
                                    <h6 className="comment-name">{user.nombre}</h6>
                                </div>
                                <div className="comment-content">
                                    <p>{user.comentarioPrincipal}</p>
                                </div>
                                <p type="button">Responder</p>{/*onClick=()=>setShowSub(true)*/}
                            </div>
                        </div>

                        {
                               /*showSub ? (
                                <>
                                    <li>
                                    <SubForm/>
                                    </li>
                                </>
                            ) : (
                                <>
                                </>
                            )*/
                        }
                        {
                            /* props.subUsers.map(sub =>(
                                                                 
                                 sub.idP === user.id ? (
                                    <>   
                                        
                                        <SubCom key={sub} sub={sub}/>
                                    </>
                                 ):(
                                    <>
                                      {
                                          console.log("El usuario "+user.nombre+" no tiene subcomentarios")
                                      }
                                    </>
                                 )

                             ))*/
                        }
                    </li>
                    

                ))
            }

            {/*modal form* data-bs-toggle="modal" data-bs-target=""
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Nombre</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Mensaje</label>
                                    <textarea className="form-control" id="message-text" defaultValue={""} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">comentar</button>
                        </div>
                    </div>
                </div>
        </div>*/}
        </>
    )
}

export default ComentarioPrincipal;