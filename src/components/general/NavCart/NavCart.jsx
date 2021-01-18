
import {useContext} from 'react';
// El "unseContext" me permite obtener informacion desde un contexto, en este caso "Store"
import './NavCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Store} from '../../../store';


const NavCart = ({action}) => {
    const [data, setData] = useContext(Store);

    // console.log(data);

    return (
        <div className="navCart" onClick={action}>
            <AiOutlineShoppingCart />
            <span>{data.cantidad}</span>
        </div>
    )
}

export default NavCart;