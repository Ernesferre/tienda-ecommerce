import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import { listaProductos } from "../Assets/productos";
import ProductCard from '../general/ProductCard/ProductCard';
import './Category.css';


const Category = () => {
    
    const [product, setProduct] = useState();

    const {category_name} = useParams();

    const getProduct = new Promise ((resolve,reject) => {
        setTimeout (() => {
          const CategoriaClickeada = listaProductos.filter ( product => {
              return product.categoria === category_name
          });

          resolve (CategoriaClickeada);
        //   console.log(CategoriaClickeada);
        }, );
    
      });

    
      useEffect (() => {
        getProduct.then(response => setProduct(response));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [category_name]);

    

    return product ? (
        <div className="Category">
            <h2>{category_name}</h2>
            <ul> 
                {
                    product.map((prod,index) => (
                        <li key={index}>
                            <ProductCard
                                titulo={prod.titulo}
                                id={prod.id}
                                imagen={prod.imagen}
                                descripcion={prod.descripcion} 
                                precio={prod.precio}
                            />
                        </li>
                    ))
                
                }

            </ul>
        </div>
    ):
                             
    <p>Cargando producto...</p>
          
      
    
}

export default Category;