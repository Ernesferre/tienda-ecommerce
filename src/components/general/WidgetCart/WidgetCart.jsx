
import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';
import {Link} from 'react-router-dom';



const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(Store);

   

    
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <h2>Carrito de Compras</h2>
            <hr/>
            {
                data.carrito.map(item => 
                <p> {item.titulo} - Cant: {item.cantidad}   
                <a href="#" className="btn-danger"> X </a> </p>
                
        
                ) 
            }
            
            
            
            <button className="btn btn-dark float-none"> Vaciar Carrito </button>

            <Link to={`/Cart`} className="btn btn-warning container-fluid" activeClassName="active">Ver Resumen</Link>
            
            <br/>
            <hr/>
            <button className="btn btn-danger img-fluid" onClick={action}>Cerrar widget</button>
            
            
           
        </div>
    )
}
export default WidgetCart;

