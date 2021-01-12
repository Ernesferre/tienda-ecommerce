
import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';


const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(Store);
    
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <h2>Carrito de Compras</h2>
            <br/>
            {
                data.items.map(item => 
                <p>Articulo: {item.titulo} - <span>Cantidad: {data.qParcial} </span> </p>
                )
                
            }
            
            
            
                
        
            
            
    
            
            <button onClick={action}>Cerrar widget</button>
            <br/>
            <hr/>
           
        </div>
    )
}
export default WidgetCart;

