
import {createContext, useEffect, useState} from 'react';
import {listaProductos}  from '../components/Assets/productos';
export const Store = createContext();

const StoreProvider = ({children})=>{

    const [data, setData] = useState ({
        carrito: [],
        cantidad: 0,

    });

    const [products, setProducts] = useState([]);

    // const deleteFromCart = () => {
    //   console.log("HOLA");
    //   // const prodFueradelCart = products.filter(prod => prod.id === productId)
    //   // console.log(prodFueradelCart);
    // }


    useEffect( () => {
      setProducts(listaProductos);
      console.log(products);
      console.log(data);
    }

    )


  return(
    <Store.Provider
      value={[
        data,
        setData,
        products,
        setProducts,
      
      ]}
    >
      {children}
    </Store.Provider>  
  )
}

export default StoreProvider;


