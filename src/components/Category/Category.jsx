import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductCard from '../general/ProductCard/ProductCard';
import './Category.css';
import {getFirestore} from '../../db';

const Category = () => {
    const {category_name} = useParams();
    const [product, setProduct] = useState();
    const db = getFirestore();


    useEffect (() => {
        if (category_name) {
            db.collection('productos').where("categoria","==",category_name).get()
                .then(docs => {
                    let array = [];
                        docs.forEach(doc => {
                            array.push({id: doc.id, data: doc.data()})
                        })
                        setProduct(array);
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category_name])


    return product ? (
        
        <div className="Category">
            
            <h2>{category_name}</h2>
            <ul> 
                {
                    product.map((product) => (
                        <li key={product.id}>
                            <ProductCard
                                    id={product.id}
                                    imagen={product.data.imagen}    
                                    titulo={product.data.titulo}
                                    descriction={product.data.descriction} 
                                    precio={product.data.precio}
                                
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