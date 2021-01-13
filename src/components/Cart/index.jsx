
import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);
    return (
        <>
            <h1 className="text-center text-primary">Esta en el Cart</h1>
            {
               data.carrito.map(item => 
                <h3 className="ml-4 mb-4 fontsize-4 text-success ">  Art: <span> {item.item} </span>- Cant:  <span> {item.cantidad} </span></h3>
                
            )}
            <hr/>
        </>
    )
}
export default Cart;

