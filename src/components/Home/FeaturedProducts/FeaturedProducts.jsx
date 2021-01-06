import {useState,useEffect} from "react";
import { listaProductos } from "../../Assets/productos";
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';


const FeaturedProducts = () => {
    
    const [items, setItems] = useState ([]);


    const getProducts = new Promise ((resolve, reject) => {
        const Prod_Destacados = listaProductos.filter(item => {
            return item.destacado === true
        });
        setTimeout(() => {
            resolve(Prod_Destacados);
            console.log (Prod_Destacados);
        }, 0)
    })

const getProducstFromDB = async () => {
    try {
        const result = await getProducts;
        setItems(result);
    } catch(error) {
        alert("No podemos mostrar los productos en este momento");
    }
}


    useEffect(() => {
        getProducstFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps

    }, []);

   

console.log(items);

    


    return (
        <section className="featuredProducts">
            <div className="container">
                

                {
                    items.length ?
                        <>
                            <h2>Alguno de Nuestros Productos</h2>

                            <ul>
                                {
                                    
                                    items.map((item,index) => (
                                        <li key={index}>
                                            <ProductCard
                                                imagen={item.imagen}
                                                titulo={item.titulo}
                                                descripcion={item.descripcion} 
                                                precio={item.precio}
                                                id={item.id}
                                                
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
