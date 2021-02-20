import {useState,useEffect} from "react";
// import { listaProductos } from "../../Assets/productos";
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {getFirestore} from '../../../db';
// import portada from '../../../../public/products/bateria4.jpg';



const FeaturedProducts = () => {
    
    const [items, setItems] = useState ([]);
    const db = getFirestore();


 

const getProducstFromDB =  () => {
    db.collection('productos').where("destacado","==",true).get()
    .then(docs => {
        let array = [];
        docs.forEach(doc => {
            array.push({id: doc.id, data: doc.data()})
        })        

        setItems(array);
    })
    .catch(e => console.log(e));   
}

    useEffect(() => {
        getProducstFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <section className="featuredProducts container">
            <div className="container">
                

                {
                    items.length ?
                        <>
                            <h2>Productos Destacados</h2>
                            {/* <img src={bateria4.jpg}/> */}
                            

                            <ul>
                                {
                                    
                                    items.map((item) => (
                                        <li key={item.id}>
                                            <ProductCard
                                                id={item.id}
                                                imagen={item.data.imagen}
                                                titulo={item.data.titulo}
                                                descriction={item.data.descriction} 
                                                precio={item.data.precio}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>    
                        </>:
                        
                        
                    <p className="cargando">Cargando Items...</p>
                }
                </div>
            
        </section>
    )
}

export default FeaturedProducts;
