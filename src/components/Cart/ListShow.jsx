import React from 'react'
import { Heading, SimpleGrid, Box, HStack, Text, Image, Button } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa'


const ListShow = (props) => {
    
    console.log(props)
    
    const {id, imagen, titulo, cantidad, precio, deleteFromCart } = props

    console.log(deleteFromCart)

    return (
        <>
        <SimpleGrid  
            bg="#fff" 
            // border="1px" 
            // borderColor="gray.100" 
            columns={6} 
            spacingY="10px" 
            spacingX="10px" 
            // p={1} 
            d={{base: "grid", md: "grid"}}
            mx="auto"
            p={2}
        >
            <HStack height="60px">
                    <Image
                         src={`/products/${imagen}`}
                         fontSize="14px"
                    />
            </HStack>

            <HStack height="60px" textAlign="center">
                    <Text fontSize="14px" mx="auto">{titulo}</Text>
            </HStack>

            <HStack height="60px" alignItems="center">
                    <Text fontSize="12px" mx="auto" >{cantidad}</Text>                
            </HStack>

            <HStack height="60px">

                <Text fontSize={{base: "12px"}} mx="auto">${precio}</Text>             
            </HStack>

            <HStack height="60px">
                <Text fontSize={{base: "12px"}} mx="auto">${precio*cantidad}</Text>
            </HStack>

            <HStack height="60px" mx="auto">
                    <span 
                        
                        mx="auto"
                        onClick={() => {deleteFromCart(id)}}
                        
                        > <FaTrash />
                    </span>
            </HStack>
                                    
            

      </SimpleGrid>

    


      

        
    </>
    )
}

export default ListShow
