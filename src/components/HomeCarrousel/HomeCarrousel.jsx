import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import portada1 from "../../assets/images/portada1.jpg";
import portada2 from "../../assets/images/portada2.jpg";
import portada3 from "../../assets/images/portada3.jpg";
import './HomeCarrousel.css';

const HomeCarrousel = () => {
  return (

    <Carousel className="Bellota-text carrousel">
        <Carousel.Item>
          <img height="300"
            className="d-block w-100"
            src={portada1}
            alt=""
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img height="300"
            className="d-block w-100"
            src={portada2}
            alt=""
          />
      
    
        </Carousel.Item>
        <Carousel.Item>
          <img height="300"
            className="d-block w-100"
            src={portada3}
            alt=""
          />
      
          
        </Carousel.Item>
      </Carousel>

    );
}
      
  

 
export default HomeCarrousel;