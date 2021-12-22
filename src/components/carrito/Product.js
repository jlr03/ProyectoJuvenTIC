import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Product({product, addProduct}) {
  /* const { product, addProduct } = props; */
  return (
    <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4" >
      <div class="card p-3 overflow-hidden h-100 shadow">
        <img
          className="img-fluid"
          src={product.img}
          alt={product.nombre}
        />
        <div class="card-body">
          <h3>{product.nombre}</h3>
          <div>${product.precio}</div>
          <p className="card-text">{product.descripcion}</p>

          <button className="btn btn-dark" onClick={() => addProduct(product)}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
