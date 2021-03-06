
import {useContext} from 'react';
import './NavCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Store} from '../../../store';


const NavCart = ({action}) => {
    const [data] = useContext(Store);

    return (
        <div className="navCart mr-3" onClick={action}>
            <AiOutlineShoppingCart />
            <span>{data.cantidad}</span>
        </div>
    )
}

export default NavCart;