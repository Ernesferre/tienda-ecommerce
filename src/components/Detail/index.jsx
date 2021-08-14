import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail.jsx'
import {useParams} from 'react-router-dom';
import './index.css';
import {getFirestore} from '../../db';
import { Box, Text } from '@chakra-ui/react';

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
    
    <Box 
      className="container"
    >
        <ProductDetail item={product}/>
    </Box>
  ):

  <Text>Cargando producto...</Text>

}

export default Detail;

