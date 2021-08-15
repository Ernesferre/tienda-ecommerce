
import {useContext} from 'react';
import {Store} from '../../store';
import {Link} from 'react-router-dom';
import './index.css';
import ListShow from './ListShow'
import Swal from 'sweetalert2'


import { Heading, SimpleGrid, Box, HStack, Text, Button, Flex, Spacer, Container } from '@chakra-ui/react';


const Cart = () => {

    const store = useContext(Store);
    const [data,setData] = store;
    
    function deleteFromCart(id) {
            console.log(`removiendo ${id}`);
            console.log (data.carrito);
            const ProdRetirado = data.carrito.find((prod) => prod.id === id );
            const EliminarProd = data.carrito.filter((prod) => prod.id !== id);
        
            Swal.fire({
                title: 'Estas seguro que quieres eliminar este articulo ?',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: 'grey',
                confirmButtonText: 'Si, eliminar!'
              }).then((result) => {
                if (result.isConfirmed) {
                setData({
                    ...data,
                    carrito: EliminarProd,
                    cantidad: data.cantidad - ProdRetirado.cantidad,
                    precioTotal: data.precioTotal - (ProdRetirado.precio*ProdRetirado.cantidad)
                
                });
                  Swal.fire(
                    'Eliminado!',
                    'Su articulo ha sido eliminado',
                    'success'
                  )
                }
              })

        

       

         
    }

    const vaciarCarrito = () => {

        Swal.fire({
            title: 'Estas Seguro de Vaciar tu Carrito de Compras?',
            text: "No podras revertir esta accion !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'grey',
            confirmButtonText: 'Si, vaciar!'
          }).then((result) => {
            if (result.isConfirmed) {
                setData({
                    carrito: [],
                    cantidad: 0,
                    precioTotal:0
                })
              Swal.fire(
                'Vaciado!',
                'Su Carrito ha sido eliminado',
                'success'
              )
            }
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
                        fontWeight="bold" 
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
                                <Text fontSize="14px" mx="auto">
                                    Articulo
                                </Text>    
                        </HStack>

                        <HStack height="60px">
                            <Text fontSize="14px" mx="auto">
                                Cantidad
                            </Text>    
                        </HStack>

                        <HStack height="60px">
                            <Text fontSize="14px" mx="auto">
                                Precio Unitario
                            </Text>    
                        </HStack>

                        <HStack height="60px">
                            <Text fontSize="14px" mx="auto">
                                Precio total
                            </Text>    
                        </HStack>

                        <HStack height="60px">
                            <Text fontSize="14px" mx="auto">
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
                                    fontSize="xl"
                                    color="red"
                                    marginTop={4} 
                                    mb="2rem"
                                    p={3}
                                >
                                    Carrito Vacio
                                </Heading>
                            )
                        }

            

                </Box>
            
            <Heading
                textAlign="center"
                mt="2rem"
                mb='2rem'
                fontSize="xl"
                fontFamily="Georama"
                color="grey"
            >
                El total de tu compra es de $ {data.precioTotal}
            </Heading>

            
            {
                data.carrito.length !== 0 && (

            <Flex
                mb="2rem"
                mt="4rem"
                w="92%"
                m={4}
                alignContent= "center"
                textAlign="center"
                // spacingX={4}
            >
                <Link to={`/Checkout`}>
                    <Button
                        ml={2}
                        colorScheme="green"
                    >
                        Finalizar compra
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

                )
            }

        
        </Box>
    )
}
export default Cart;


