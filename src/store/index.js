
import {createContext, useEffect, useState} from 'react';
// import {listaProductos}  from '../components/Assets/productos';
export const Store = createContext();

const StoreProvider = ({children})=>{

    const [data, setData] = useState ({
        carrito: [],
        cantidad: 0,
        precioTotal: 0

    });

    const [products, setProducts] = useState([]);

    // const deleteFromCart = () => {
    //   console.log("HOLA");
    //   // const prodFueradelCart = products.filter(prod => prod.id === productId)
    //   // console.log(prodFueradelCart);
    // }

    


    // useEffect( () => {
    //   console.log(data);
    // }

    // )


  return(
    <Store.Provider
      value={[
        data,
        setData,
        products,
        setProducts,
        // deleteFromCart
      
      
      ]}
    >
      {children}
    </Store.Provider>  
  )
}

export default StoreProvider;


