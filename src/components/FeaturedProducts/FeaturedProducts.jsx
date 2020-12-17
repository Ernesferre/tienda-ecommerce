import {useState,useEffect} from "react";
import ProductCard from '../../components/ProductCard/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    
    const [items, setItems] = useState ([]);

    
    // Hacer de cuenta que esta constante es una API
    const products = [
        {
            id: 1,
            titulo: "Guitarra Criolla",
            Precio: 5900,
        },
        {
            id: 2,
            titulo: "Bateria 7 cuerpos",
            Precio: 16300,
        },
        {
            id: 3,
            titulo: "Microfono Shure 200",
            Precio: 8500,
        },
        {
            id: 4,
            titulo: "Bajo 4 cuerdas",
            Precio: 12000,
        },

    ]

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 5000)
    })

    useEffect(() => {
        getProducts.then(rta => setItems(rta));
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
                                    items.map(item => (
                                        <li key={item.id}>
                                            <ProductCard
                                                titulo={item.titulo} 
                                                precio={item.Precio}
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
