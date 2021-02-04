
import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';
import {Link} from 'react-router-dom';


const WidgetCart = ({show, action}) => {
    const [data,setData] = useContext (Store);
          
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`} >

            <div className="contenedor d-flex justify-content-between mb-3">
            
                <h2 className="text-center mt-2 ml-4">Carrito</h2>
                <button className="Salir mt-3 mr-4" onClick={action}> X </button>
            
            </div>

            {data.carrito.length === 0 && <h3 className="text-center">Carrito Vacio</h3>}
            {data.carrito.length !== 0 &&  (
            
                data.carrito.map(item => 
                    <>  
                        <div className="card text-white text-center mt-1 ml-2 mr-2 mb-2">
                        
                            <h5 className="mt-2"> {item.titulo} </h5>
                            <p> Cant: {item.cantidad} </p>   
                            
                        </div>
                        
                    </>  
                )                   
            )}

            <Link to={`/Cart`} className="btn btn-outline-success btn-lg btn-block text-center" onClick={action}>Ver Resumen</Link>
           
        </div>
    )
}

export default WidgetCart;

