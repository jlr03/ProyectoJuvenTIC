import React from "react";
//import ScriptTag from 'react-script-tag';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import EnviarCorreo from "./envioCorreo";
/*
constructor(props) {
    super(props);
    this.state = {
      nombre: "", fecha: "", telefono: "", email: "",
      descripcion: "", servicio: "", autoriza: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  valueToState = ({ name, value, checked, type }) => {
    this.setState(state => {
      return { [name]: type === "checkbox" ? checked : value };
    })
  }
  handleSubmit(event) {
    alert('A nombre was submitted: ' + this.state.nombre + " " + this.state.descripcion
      + " " + this.fecha);
    sendEmail(this.state);
    event.preventDefault();
  }
*/

const FormReserva = () => {

  function sendEmail() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    sendEmailCliente(nombre, email);
    sendEmailRestaurante(nombre, email);

    alert("Solicitud reserva exitosa");
  }
  function sendEmailCliente(nombre, email) {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "josebeap11@gmail.com",
      Password: "vvtgsyoewgtiafmg",
      To: email,
      From: "josebeap11@gmail.com",
      Subject: nombre + ", este es tu pedido",
      Body: "mensaje",
    });
  }
  function sendEmailRestaurante(nombre, email) {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "josebeap11@gmail.com",
      Password: "vvtgsyoewgtiafmg",
      To: "jose.1701710903@ucaldas.edu.co",
      From: "josebeap11@gmail.com",
      Subject: nombre + " Ha realizado una compra",
      Body: nombre + "<br>" + email + "<br> " + "mensaje",
    });
  }

  return (
    <section class="form-content" id="form-content">
      <form onSubmit={()=>sendEmail()} id="form">
        <h2>Haz Tu Reserva Ahora!</h2>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre del Cliente"
        />
        <input
          type="date"
          id="fecha"
          name="fecha"
          placeholder="Fecha Reserva"
        />
        <input
          type="number"
          id="telefono"
          name="telefono"
          placeholder="Telefono del Cliente"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo Electronico"
        />
        <textarea
          id="descripcion"
          name="descripcion"
          rows="5"
          placeholder="Descripcion relevante"
        ></textarea>
        <input
          type="text"
          name="servicio"
          id="servicio"
          placeholder="Servicio que deseé"
        />
        <label>
          ¿Autoriza tratamiento Datos?
          <input
            type="checkbox"
            id="autoriza"
            name="autoriza"
            placeholder="Autoriza"
          />
        </label>
        <button type="submit" class="btn btn-warning">
          ¡Reservar!
        </button>
      </form>
    </section>
  );
};
export default FormReserva;
