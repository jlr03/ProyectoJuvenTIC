import { useEffect, useState } from 'react';
import HeaderSimple from '../HeaderSimple';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from './Main';
import Cart from './Cart';

function Carrito() {

  let componentMounted = true;
  const [cartItems, setCartItems] = useState([]); /*estado donde se va a cargar la info de la bd*/
  const [productItems, setProductItems] = useState([]); /*estado donde se va a pasar info de la bd cargada*/
  
  useEffect(() => {
    const getProducts = async () => {
      
      const response = await fetch("http://localhost:33144/api/plato");
      if (componentMounted) {
        setCartItems(await response.clone().json());
       /*  console.log(cartItems); */
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);


  /* const {products}=cartItems; */
  /* const { products } = data;
  const [cartItems, setCartItems] = useState(); */
   
  const addProduct=(product)=>{
    const productExist=productItems.find((item)=>item.id===product.id);
    
    if(productExist){
        setProductItems(productItems.map((it)=> it.id===product.id ?
        {...productExist, quantity: productExist.quantity+1} : it));
    
    }
    else
    {
        setProductItems([...productItems, {...product, quantity:1}]);

    }
}

const restProduct=(product)=>{
    const productExist=productItems.find((item)=>item.id===product.id);

    if(productExist.quantity===1){
        setProductItems(productItems.filter((item)=> item.id !== product.id));
    }
    else
    {
        setProductItems(productItems.map((item)=>item.id===product.id ? {...productExist, quantity: productExist.quantity-1}:item));
    }
}

const cleanAll=()=>{
  setProductItems([]);
  
}


  return (
    <div className="App">
      <HeaderSimple/>
      <Cart productItems={productItems} addProduct={addProduct} restProduct={restProduct} cleanAll={cleanAll}/>
      <div className="row p-5">
        <Main cartItems={cartItems} addProduct={addProduct}/>
      </div>
    </div>
  );
}

export default Carrito;
