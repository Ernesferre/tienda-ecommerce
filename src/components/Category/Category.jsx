import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductCard from '../general/ProductCard/ProductCard';
import './Category.css';
import {getFirestore} from '../../db';
import { Box, Flex , Heading, SimpleGrid} from "@chakra-ui/react";

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
        
        <SimpleGrid 
                
                textAlign="center"
                mt={10}
                mb={10}
                m={6}
                bg="white"
            >
            
            <Heading
                fontFamily="Georama"
                letterSpacing={3}
                mt="5rem"
                mb="3rem"
            >
                {category_name}
            </Heading>

            <Flex                
                flexWrap="wrap"
                justifyContent="center"
            >
                {product.map((product) => (
                        <Flex >
                            <ProductCard
                                    id={product.id}
                                    imagen={product.data.imagen}    
                                    titulo={product.data.titulo}
                                    descriction={product.data.descriction} 
                                    precio={product.data.precio}
                                
                            />
                        </Flex>
                    ))
                }

            </Flex>
            </SimpleGrid>
    ):
                                
    <p>Cargando producto...</p>
          
}    

export default Category;