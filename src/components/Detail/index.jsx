import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail.jsx'
import {useParams} from 'react-router-dom';
import './index.css';
import {getFirestore} from '../../db';

const Detail = () => {
  const {itemId} = useParams();
  const [product, setProduct] = useState();
  const db = getFirestore();

  
  useEffect (() => {
    db.collection('productos').doc(itemId).get()
    .then(doc => {
      if(doc.exists) {
        setProduct(doc.data());
      }
    })
    .catch(e => console.log(e));  
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

