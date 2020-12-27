import StateCounter from '../Home/StateCounter/StateCounter.jsx';

import './ProductDetail.css';





const ProductDetail = ({titulo,id,imagen,descripcion,precio})=> {
  return (
    <>
    
        <article>
          <h1> {titulo} </h1>
          <p>El id de este producto es {id}</p>
          <img src={imagen} alt="" />
          <p> {descripcion}</p>
          <p>{precio}</p>
        

      

    
      <StateCounter/>
        </article>

  </>
      
     

  
  
  )
}

export default ProductDetail;