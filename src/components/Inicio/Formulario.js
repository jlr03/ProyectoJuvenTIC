import React from 'react';
import {useForm} from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Formulario=(props) =>{

    const {register, handleSubmit, formState: {errors}}=useForm();

    const onSubmit = (data, e)=>{
        
        props.addComent(data)
        e.target.reset(data)
    }

    return(

        <div className="container">
            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" {...register("nombre", 
                    {
                        required: {value: true, message: 'Campo Requerido'}
                    })}/>
                <div>
                    {errors?.nombre?.message}
                </div>
                </div>
                <div className="col-md-6">
                <label htmlFor="formFile" className="form-label">Subir imagen</label>
                <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="col-md-6">
                <textarea className="form-control" placeholder="Leave a comment here" id="comentario" name="comentarioPrincipal" {...register("comentarioPrincipal", 
                    {
                        required: {value: true, message: 'Campo Requerido'}
                    })}/>
                <div>
                    {errors?.comentarioPrincipal?.message}
                </div>
                </div>
                <div className="col-12">
                <button type="submit" className="btn btn-primary" id="boton-guardar">Enviar</button>
                </div>
            </form>
        </div>  



    );



}

export default Formulario