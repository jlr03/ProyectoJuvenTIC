import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Plato from './Plato';

const Galeria = () => {

    let componentMounted = true;
    const [addPlato, setAddPlato] = useState([]);

    useEffect(() => {
        const getProducts = async () => {

            const response = await fetch("http://localhost:33144/api/plato");
            if (componentMounted) {
                setAddPlato(await response.clone().json());
                /*  console.log(cartItems); */
            }

            return () => {
                componentMounted = false;
            };
        };

        getProducts();
    }, []);

    return (
        <>
            <div className="album py-3">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {addPlato.map((plato) => (
                            <Plato key={plato.id} plato={plato}></Plato>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Galeria;