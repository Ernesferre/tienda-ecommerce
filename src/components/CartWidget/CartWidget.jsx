import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';



function CartWidget () {
    return (
        <h2 className="container">
            <a href="">
                <FontAwesomeIcon icon={faShoppingCart}/>
            </a>
        </h2>
    )
}
   

export default CartWidget;