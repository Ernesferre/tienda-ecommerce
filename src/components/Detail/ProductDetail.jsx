import {useState, useContext} from 'react';
import './ProductDetail.css';
import {Store} from '../../store';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Box, HStack, SimpleGrid, Stack, Image, Center, Heading, Text, Button, VStack } from "@chakra-ui/react"



const ProductDetail = ({item}) => {
    
    const [qty, setQty] = useState(1);
    const [data,setData] = useContext(Store);
    const history = useHistory();	
    const [mensaje, setMensaje] = useState("")

    

    const incrementar = () => setQty(qty + 1);
    const decrementar = () => setQty(qty - 1);

    const onAdd = () => {     

        setMensaje(Swal.fire({
            title: `Has agregado ${qty} items al carrito `,
            icon: 'success',
            width: 600,
            padding: '3em',
          }))    

        const actualId = item.id;
        const exist = data.carrito.some(items => items.id === actualId);
        if(exist) {
            
            const productosCarrito = data.carrito.map (producto => {
                if( producto.id === actualId) {
                    producto.cantidad += qty;
                        return producto;
                } else {
                         return producto;
                }
            });

           setData({
               carrito: [...productosCarrito],
               cantidad: data.cantidad + qty,
               precioTotal: data.precioTotal + (item.precio * qty)
           })
                history.push("/cart");


        } else {
            item.cantidad = qty;
            setData({ ...data,
                carrito: [...data.carrito, item],
                cantidad: data.cantidad + qty,
                precioTotal: data.precioTotal + (item.precio * qty)    
            });
                history.push("/cart");           
            }         
    }
   
    return (
        <>
            
        {/* // DESKTOP // */}
        <SimpleGrid
            bg="grey.200" 
            w='70%'
            border="1px" 
            borderRadius={8}
            mt="5rem"
            mb="3rem"
            mx="auto"
            borderColor="gray.100"
            minHeight="100vh" 
            spacingY="10px" 
            spacingX="10px" 
            p={8} 
            d={{base: "none", md: "grid"}}
        >
            <HStack>

                
                <Box
                    alignItems="center"
                    w="50%"
                >
                    <Image 
                        src={`/products/${item.imagen}`} 
                        mx="auto" 
                        width="250px"  
                    />
                </Box>
               
            
                <Box
                 p={2}
                >
                    <Heading 
                        fontFamily="Georama"
                        letterSpacing={2}
                        mb={2}
                    >
                        {item.titulo}
                    </Heading>

                        {
                            !!item.description && <Text fontFamily="Georama">{item.descriction}</Text>
                        }
                    <Text fontFamily="Georama" mb={3}>{item.descriction}</Text>
                    <Text fontFamily="Georama" fontWeight="bold"> $ {item.precio}</Text>
                    
                    <Box 
                        className="d-flex justify-content-center"
                        mt={4}
                    >

                        <button className= "btn btn-secondary" onClick={decrementar} disabled={qty <= 1 ? true : null }>  - </button>
                        <h2 className="hola strong mt-2 ml-3 mr-3">{qty}</h2>
                        <button className="btn btn-secondary" onClick={incrementar}  disabled= {qty === item.stock ? true : null }> + </button>	
                        

                    </Box>
                    
                    <Button 
                        variant="solid"
                        colorScheme="yellow"
                        onClick={onAdd}
                        mt={5}
                        
                        _hover={{
                            color: "green"
                        }}
                    >
                        Agregar al carrito
                    </Button>
            
                </Box>
        </HStack>
            
        </SimpleGrid>
        

        {/* // MOBILE // */}
        <Box  
             
            textAlign="center"
            w="100%" 
            h="auto"
            mt="4rem" 
            d={{base: "flex", md: "none"}} 
            direction="row" 
            // justifyContent="space-between" 
            // px="16px" 
            py="8px" 
            border="1px" 
            borderColor="gray.200"
        >
            {/* Tamaño Mobile */}
            <VStack 
                d="flex" 
                direction={{base: "column", md: "row"}} 
                justifyContent={{base: "center", md: "space-around"}}
                mx="auto"
            >
                <Box
                    alignItems="center"
                    w="100%"
                    mx="auto"
                >
                    <Image 
                        src={`/products/${item.imagen}`} 
                        mx="auto" 
                        width="250px"  
                    />
                </Box>

                <Box
                 p={2}
                >
                    <Heading 
                        fontFamily="Georama"
                        letterSpacing={2}
                        
                        mb={2}
                    >
                        {item.titulo}
                    </Heading>

                        {
                            !!item.description && <Text fontFamily="Georama">{item.descriction}</Text>
                        }
                    <Text fontFamily="Georama" mb={3}>{item.descriction}</Text>
                    <Text fontFamily="Georama" fontWeight="bold"> $ {item.precio}</Text>
                    
                    <Box 
                        className="d-flex justify-content-center"
                        mt={4}
                    >

                        <button className= "btn btn-secondary" onClick={decrementar} disabled={qty <= 1 ? true : null }>  - </button>
                        <h2 className="hola strong mt-2 ml-3 mr-3">{qty}</h2>
                        <button className="btn btn-secondary" onClick={incrementar}  disabled= {qty === item.stock ? true : null }> + </button>	
                        

                    </Box>
                    
                    <Button 
                        variant="solid"
                        colorScheme="yellow"
                        onClick={onAdd}
                        mt={5}
                        
                        _hover={{
                            color: "green"
                        }}
                    >
                        Agregar al carrito
                    </Button>
            
                </Box>
            </VStack>


        </Box>
    </>
    )
}

export default ProductDetail;

