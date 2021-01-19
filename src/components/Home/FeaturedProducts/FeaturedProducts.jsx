import {useState,useEffect} from "react";
// import { listaProductos } from "../../Assets/productos";
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {getFirestore} from '../../../db';



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

        console.log(array);

        

        setItems(array);
    })
    .catch(e => console.log(e));   
}


    useEffect(() => {
        getProducstFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps

    }, []);




    


    return (
        <section className="featuredProducts">
            <div className="container">
                

                {
                    items.length ?
                        <>
                            <h2>Alguno de Nuestros Productos</h2>
                            

                            <ul>
                                {
                                    
                                    items.map((item) => (
                                        <li key={item.id}>
                                            <ProductCard
                                                id={item.id}
                                                imagen={item.data.imagen}
                                                titulo={item.data.titulo}
                                                descripcion={item.data.descripcion} 
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
