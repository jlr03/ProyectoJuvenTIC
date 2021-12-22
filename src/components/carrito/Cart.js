import React, { useEffect, useRef, useState } from "react";
import "./cart.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import ModCar from "./ModCar";

const Cart = ({ productItems, addProduct, restProduct, cleanAll }) => {

    const totalPrice = productItems.reduce((precio, item) => precio + item.quantity * item.precio, 0);

    const [show, setShow] = useState(false)
    const [textP, setTextP] = useState('')

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    let tp=""
    const tx=useRef()
    
    useEffect(()=>{
        tx.current=textP
        
    })


    
    return (
        <>
            <div className="cart-item">
                <div className="clear-cart">
                    {productItems.length >= 1 && (
                        <button className="clear-cart-button" onClick={cleanAll}>Limpiar todo</button>
                    )}
                </div>

                {productItems.length === 0 && (<p className="cart-item-empty">No se han agregado prodcutos</p>)}

                <div>
                    {productItems.map((it) => (
                        <div key={it.id} className="cart-item-list">
                            <img className="cart-item-img" src={it.img} alt={it.nombre} />
                            <div className="cart-item-name">{it.nombre}</div>
                            <div className="cart-item-function">
                                <button className="cart-item-add" onClick={() => addProduct(it)}>+</button>
                                <button className="cart-item-remove" onClick={() => restProduct(it)}>-</button>
                            </div>
                            <p className="cart-item-price" value={textP} onChange={e=>setTextP(e.target.value)}>
                                {it.quantity} * ${it.precio} = {it.quantity * it.precio}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="cart-item-total-price-name">
                    Precio total
                    <p className="cart-item-total-price">${totalPrice}</p>
                </div>

                <div>
                    {productItems.length >= 1 && (
                        <>
                            <div className="btn-group">
                                <Button variant="primary" size="lg" onClick={handleShow}>Realizar Compra</Button>
                            </div>

                            <ModCar show={show} handleClose={handleClose} />
                        </>
                    )}
                </div>
            </div>
            {
               /*  console.log(text1.current.value) */
            }
        </>
    )



}

export default Cart;