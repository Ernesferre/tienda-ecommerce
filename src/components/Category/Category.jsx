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
          console.log(CategoriaClickeada);
        }, 50);
    
      });

    
      useEffect (() => {
        getProduct.then(response => setProduct(response));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [category_name]);

    
// useEffect(() => {
//     console.log(category_name);
//     }, [category_name])

    
    
    // return (
    //     <>
    //         <h1>{category_name}</h1>
    //     </>
    // )

    

    return product ? (
        <div className="Category">
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