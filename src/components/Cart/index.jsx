
import {useContext} from 'react';
import {Store} from '../../store';
import {Link} from 'react-router-dom';
import './index.css';
import ListShow from './ListShow'


import { Heading, SimpleGrid, Box, HStack, Text, Button, Flex, Spacer } from '@chakra-ui/react';


const Cart = () => {

    const store = useContext(Store);
    const [data,setData] = store;
    
    function deleteFromCart(id) {
            console.log(`removiendo ${id}`);
            console.log (data.carrito);
            const ProdRetirado = data.carrito.find((prod) => prod.id === id );
            const EliminarProd = data.carrito.filter((prod) => prod.id !== id);
        
        setData({
            ...data,
            carrito: EliminarProd,
            cantidad: data.cantidad - ProdRetirado.cantidad,
            precioTotal: data.precioTotal - (ProdRetirado.precio*ProdRetirado.cantidad)
        
        });

         
    }

    const vaciarCarrito = () => {
        setData({
            carrito: [],
            cantidad: 0,
            precioTotal:0
        })
    }   
    
    return (

        <Box
            mt="5rem"
            
        >


            <Heading 
                    className="text-center mt-4 mb-3"
                    fontFamily="Georama"
                >Resumen de Compra
            </Heading>

                <Box 
                    w="95%" 
                    m="auto" 
                    // bg="rgba(0, 0, 0, 0.02)" 
                    boxShadow="lg" 
                    borderRadius="4px"
                >

                    <SimpleGrid 
                        px={4} 
                        columns={6}  
                        spacingY="10px" 
                        spacingX="10px" 
                        // border="1px" 
                        borderColor="gray.200" 
                        // bg="bgGray.100" 
                        display={{base: "none", md: "grid"}} 
                        // borderRadius="4px" 
                        textDecoration="bold"
                    >
                    

                        <HStack height="60px">
                                <Text fontSize="14px">
                                    Imagen
                                </Text>    
                        </HStack>

                        <HStack height="60px">
                                <Text fontSize="14px">
                                    Articulo
                                </Text>    
                        </HStack>

                        <HStack height="60px">
                            <Text fontSize="14px">
                                Cantidad
                            </Text>    
                        </HStack>

                        <HStack height="60px">
                            <Text fontSize="14px">
                                Precio Unitario
                            </Text>    
                        </HStack>

                        <HStack height="60px">
                            <Text fontSize="14px">
                                Precio total
                            </Text>    
                        </HStack>

                        <HStack height="60px">
                            <Text fontSize="14px">
                                Accion
                            </Text>    
                        </HStack>

                    </SimpleGrid>


                        {/* CONTENIDO DE TABLA */}

                        
                        {data.carrito.length > 0  ? (
                                
                                data.carrito.map((el) => 
                                    <ListShow 
                                        key={el.id} {...el} 
                                        deleteFromCart={deleteFromCart} 
                                        
                                />)
                            ) : (
                                <Heading 
                                    textAlign="center" 
                                    marginTop={4} 
                                    marginBottom={4}
                                >
                                    Carrito Vacio
                                </Heading>
                            )
                        }

            

                </Box>
            
            <Heading
                textAlign="center"
                mt="2rem"
                fontSize="xl"
                fontFamily="Georama"
                color="grey"
            >
                El total de tu compra es de $ {data.precioTotal}
            </Heading>

            

            <Flex
                mb="2rem"
                mt="4rem"
                w="90%"
                m={4}
            >
                <Link to={`/Checkout`}>
                    <Button
                        colorScheme="green"
                    >
                        Avanzar
                    </Button>
                </Link>

                <Spacer />
                    
                <Button
                    colorScheme="red"
                    onClick={() => vaciarCarrito ()}
                >
                    Vaciar Carrito
                </Button>
            </Flex>
            

            {/* <table className="table mb-4 mt-5 lead text-center">

                <thead className="table">
                    <tr>
                        <th>Imagen</th>
                        <th>Articulo</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                        <th></th>
                    </tr>
                </thead>
                        
                {
                    data.carrito.length !== 0 &&  (
            
                        data.carrito.map(item => 
                        
                        <tbody> 

                            <tr className="table">

                                <td><img src={`/products/${item.imagen}`} alt="#"></img></td>
                                <td>{item.titulo}</td>
                                <td>{item.cantidad}</td>
                                <td>$ {item.precio}</td>
                                <td className="mr-auto">$ {item.precio * item.cantidad}</td>
                                <td>
                                    <button
                                        href="#" 
                                        className="btn btn-danger btn-small"
                                        onClick={() => deleteFromCart (item.id)} 
                                        >  X      
                                    </button>
                                </td> 

                            </tr>

                        </tbody>
                        )
                    )
                }
               
            </table> 

                {
                    data.carrito.length === 0 && 
                    <> 
                        <h4 className="text-center display-5 mt-5">Actualmente no tienes artículos en tu Carrito</h4>
                        <Link to={`/`} className="btn btn-warning mb-5 mt-4">Volver a Comprar</Link>                    
                    </>             
                    
                }
              
                {
                    data.precioTotal !== 0 && (

                        <h3> Total <span className="text-dark"> $ {data.precioTotal}</span></h3>

                    )
                }

                {
                    data.carrito.length !== 0 &&  (

    	                <div className="link d-flex contenedor d-flex justify-content-center mt-3 mb-3">

                            <Link to={`/Checkout`} 
                                className="btn btn-success btn-lg text-white text-center p-3 mb-5 ml-5"    
                                activeClassName="active">Finalizar Compra
                            </Link>
                            <a 
                                href="?"
                                onClick={() => vaciarCarrito ()}
                                className="btn btn-danger btn-lg text-white text-center p-3 mb-5 ml-auto mr-5">
                                Vaciar Carrito
                            </a>
                    
                        </div>
                    )
                } */}

        
        </Box>
    )
}
export default Cart;


