
import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';
import {Link} from 'react-router-dom';




const WidgetCart = ({show, action}) => {
    const [data] = useContext(Store);

    
        
        


   

  
    console.log(data);
    // console.log (products);
   

    
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            
            <h2>Carrito de Compras</h2>
            
            {data.carrito.length === 0 && <h3>No has comprado nada</h3>}
            {data.carrito.length !== 0 &&  (
            
                data.carrito.map(item => 
                    <>  
                        {/* <img src={item.imagen} className="card-img-top" alt="imagen"/>   */}
                        <p> {item.titulo} - Cant: {item.cantidad}   
                            <button 
                                href="#" 
                                className="btn btn-danger btn-sm" 

                                // onClick={ () => deleteFromCart(item.id) } 
                                > 
                            X </button> 
                        </p>
                    </>
                
        
                ) 
                
            )}
            
            
            
            <button className="btn btn-dark float-none"> Vaciar Carrito </button>

            <Link to={`/Cart`} className="btn btn-warning container-fluid" activeClassName="active">Ver Resumen</Link>
            
            <br/>
            <hr/>
            <button className="btn btn-danger img-fluid" onClick={action}>Cerrar widget</button>
            
            
           
        </div>
    )
}

export default WidgetCart;

