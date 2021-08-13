import './ProductCard.css';
import {Link} from 'react-router-dom';
import { Container, Box, Image, Flex } from '@chakra-ui/react';

const ProductCard = ({imagen,titulo,precio,id}) => {
    
    return (
        
        <Container
            maxW="15rem"
            borderRadius={12}
            boxShadow="dark-xl"
            fontFamily="Georama"
            // position="relative"
            margin="1rem"
            textAlign="center"
            bg="white"
            p={1}
            // border= "2px"
        >
            
                <Image
                    borderTopRadius={10}
                    width="100%"
                    maxH="40em"
                    src={`/products/${imagen}`}
                    fallbackSrc="https://via.placeholder.com/382x300"
                    mb={4}
                />
                    
                    <Flex 
                        flexDir="column"
                        fontSize={10}
                    >

                        <Box
                            // textAlign="left"
                            fontSize="1.5rem"
                            maxHeight="3em"
                            overflow="hidden"
                            color="dark"
                                    
                        >
                             {titulo}
                        </Box>

                        <Box
                            mt={2}
                            mb={4}
                            textAlign="center"
                            fontSize="1rem"
                            marginLeft="1em"
                            marginRight="1em"
                            maxHeight="3em"
                            overflow="hidden"
                            color="dark"
                            // color={ props.isDark ? "black" : "white"}
                            >
                            $ {precio}
                        </Box>

                    
                    

                    <div className="Link">
                        <Link 
                            to={`/detail/${id}`} 
                            className="btn btn-warning text-center mr-1" 
                            activeClassName="active"
                        >
                            Ver mas
                        </Link>
                    </div>
            
                    </Flex>
        </Container>
    )
}

export default ProductCard;