import { Box, Heading, Text } from '@chakra-ui/react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Box 
                className="container"
                bg="grey.900"
            >
                <Text fontSize="medium" fontFamily="Georama">Hecho por   <Heading fontSize="medium" fontWeight="bold" fontFamily="Georama">Ernesto Ferreyra</Heading></Text>
            </Box>
        </footer>
    )
}

export default Footer;