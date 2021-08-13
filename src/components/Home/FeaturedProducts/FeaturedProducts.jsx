import {useState,useEffect} from "react";
// import { listaProductos } from "../../Assets/productos";
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {getFirestore} from '../../../db';
import { Box, Flex , Heading, SimpleGrid} from "@chakra-ui/react";
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

    console.log(items)

    return (
        
            <SimpleGrid 
                
                textAlign="center"
                mt={10}
                mb={10}
                m={6}
                bg="white"
            >
                

                {
                    items.length ?
                        <>
                            <Heading
                                fontFamily="Georama"
                                mt="2rem"
                                mb="2rem"
                            >
                                Productos Destacados
                            </Heading>
                            
                            
                            <Flex
                                
                                flexWrap="wrap"
                                justifyContent="center"
                            >

                            
                                {items.map((item) => (
                                        <Flex >
                                            <ProductCard
                                                id={item.id}
                                                imagen={item.data.imagen}
                                                titulo={item.data.titulo}
                                                descriction={item.data.descriction} 
                                                precio={item.data.precio}
                                            />
                                        </Flex>
                                    ))
                                }
                            
                            </Flex>  
                        </> :
                        
                        
                    <p className="cargando">Cargando Items...</p>
                }
                </SimpleGrid>
            
        
    )
}

export default FeaturedProducts;
