
import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';
import {Link} from 'react-router-dom';


const WidgetCart = ({show, action}) => {
    const [data,setData] = useContext (Store);
    
  
       
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            
            <h2>Carrito Compras</h2>;
            
            {data.carrito.length === 0 && <h3>No has comprado nada</h3>}
            {data.carrito.length !== 0 &&  (
            
                data.carrito.map(item => 
                    <>  
                        <div>
                            <h5> {item.titulo} </h5>
                            <p>  {item.cantidad} </p>   
                            
                        </div>
                    </>                
                )                 
            )}
                      
            
            <button className="btn btn-dark float-none"> Vaciar Carrito </button>

            <Link to={`/Cart`} className="btn btn-warning container-fluid" activeClassName="active">Ver Resumen</Link>
            
            <br/>
            <hr/>
            <button className="btn btn-danger img-fluid"  onClick={action}>Cerrar widget</button>
            
            
           
        </div>
    )
}

export default WidgetCart;

