import StateCounter from '../Home/StateCounter/StateCounter.jsx';

import './ProductDetail.css';





const ProductDetail = ({titulo,id,imagen,descripcion,precio})=> {
  return (
    <>
    
    <div className="contenedor">
      
        <div className="contimagen">
          
          {/* <p>El id de este producto es {id}</p> */}
          <img src={imagen} alt="" />
          
          
        </div>
        <div className="counter">
          	
            <h2 > {titulo} </h2>
            <hr/>
            <p> {descripcion}</p>
            <span> $ {precio}</span>
            <br/>
            <br/>
            <p className="strong">Cantidad Requerida</p>
          <StateCounter/>
          

        </div>
        

  </div>
  </>
      
     

  
  
  )
}

export default ProductDetail;