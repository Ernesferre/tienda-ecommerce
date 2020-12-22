import guitarras from '../../assets/img/guitarras.jpg';
import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail.jsx'

const Detail = () => {

  const [product, setProduct] = useState(null);

  const getProduct = new Promise ((resolve,reject) => {
    setTimeout (() => {
      resolve ({
        id: 1,
        nombre: "Guitarra Criolla PW-300",
        foto: guitarras,
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae iure molestiae odit sapiente architecto incidunt quam, quibusdam ipsa quo sunt aliquam facilis voluptate enim reprehenderit soluta optio excepturi! Voluptas, omnis.",
        precio: "USD 600"
      })
    }, 2000);
  });


  useEffect (() => {
    getProduct.then(response => setProduct(response));
  }, []);


  
  return (
    <>
      {
        product ?
        <div className="container">
          <ProductDetail item={product}/>
        </div>:

        <p>Cargando Producto...</p>

      }
      


     </> 
  )
}

export default Detail