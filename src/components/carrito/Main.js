import React from 'react';
import Product from './Product';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Main({cartItems, addProduct}) {
  
  /* const { products} = props.cartItems; */

  
  return (
    <>
      <h2 className="text-center mt-3">Productos</h2>
      <section className="py-4 container">
        <div className="row justify-content-center">
        {cartItems.map((product) => (
          <Product key={product.id} product={product} addProduct={addProduct}></Product>
        ))}
        </div>
      </section>
    </>
  );
}
