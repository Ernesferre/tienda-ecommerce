
import {createContext, useEffect, useState} from 'react';
export const Store = createContext();


const StoreProvider = ({children})=>{

  const wss = window.sessionStorage;

    const [data, setData] = useState ({
      carrito: JSON.parse(wss.getItem('carrito'))||[],
      cantidad: parseInt(wss.getItem('cantidad'))||0,
      precioTotal: parseInt(wss.getItem('precioTotal'))||0
    });

    const [products, setProducts] = useState([]);

  

    useEffect(()=>{
      window.sessionStorage.setItem('cantidad',data.cantidad);
      window.sessionStorage.setItem('carrito',JSON.stringify(data.carrito));
      window.sessionStorage.setItem('precioTotal',JSON.stringify(data.precioTotal));
      // eslint-disable-next-line
    },[data])


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


