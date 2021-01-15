
import {useContext} from 'react';
import {Store} from '../../store';
import {Link} from 'react-router-dom';

const Cart = () => {
    const [data, setData] = useContext(Store);
    
    





    
    return (
        <>
            <h1 className="text-center text-primary mt-2">Esta en el Cart</h1>
            {
               data.carrito.map(item => 
                <h2 className="ml-5 mb-4 lead fontsize-6 text-success ">  
                    Art: <span> {item.titulo} </span>- 
                    Cant:  <span> {item.cantidad} </span>-
                    Precio: $ <span> {item.precio} </span> 
                    Total: 
                </h2>
                
                
            )}
            <hr/>
            
            <Link to={`/`} className="btn btn-warning mb-4 ml-5" activeClassName="active">Volver a Home</Link>
        </>
    )
}
export default Cart;

