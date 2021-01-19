// import guitarra2 from '../../assets/img/guitarra2.jpg';
import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail.jsx'
import {useParams} from 'react-router-dom';
// import { listaProductos } from "../Assets/productos";
import './index.css';
import {getFirestore} from '../../db';

const Detail = () => {
  const {itemId} = useParams();
  const [product, setProduct] = useState();
  const db = getFirestore();

  
  
  
  
  
  useEffect (() => {
    // console.log(itemId);
    db.collection('productos').doc(itemId).get()
    .then(doc => {
      if(doc.exists) {
        setProduct(doc.data());
      }
    })
    .catch(e => console.log(e));

    
  }, []);


  return product ? (
  <div className="container">
    <ProductDetail 
      item={product}
    />
  </div>
):
<p>Cargando producto...</p>
}



export default Detail;

