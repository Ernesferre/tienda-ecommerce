// import guitarra2 from '../../assets/img/guitarra2.jpg';
import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail.jsx'
import {useParams} from 'react-router-dom';
import { listaProductos } from "../Assets/productos";
import './index.css';


const Detail = () => {
  
  const [product, setProduct] = useState();

  const {itemId} = useParams();
  

  const getProduct = new Promise ((resolve,reject) => {
    setTimeout (() => {
      const productoClickeado = listaProductos.find( product => product.id == itemId )
      resolve (productoClickeado);
    }, 500);

  });
  


  useEffect (() => {
    getProduct.then(response => setProduct(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  
return product ? (
  <div className="container">
    <ProductDetail 
      titulo={product.titulo}
      id={product.id}
      imagen={product.imagen}
      descripcion={product.descripcion} 
      precio={product.precio}
      
      
    />
  </div>
):
                         
<p>Cargando producto...</p>
      
  

}

export default Detail
