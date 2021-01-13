
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
                data.carrito.map(item => 
                <p>  Art: <span> {item.item} </span>- Cant:  <span> {item.cantidad}    </span> </p>

                )
                
            }
            
            
            <button onClick={action}>Cerrar widget</button>
            <br/>
            <hr/>
            
           
        </div>
    )
}
export default WidgetCart;

