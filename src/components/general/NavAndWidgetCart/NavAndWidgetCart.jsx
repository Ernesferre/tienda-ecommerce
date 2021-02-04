import {useState} from 'react';
import './NavAndWidgetCart.css';
import Nav from '../Nav/Nav';
import WidgetCart from '../WidgetCart/WidgetCart';



const NavAndWidgetCart = () => {
        const [showWidgetCart, setShowWidgetCart] = useState(false);
    
        const openWidgetCart = () => {
            setShowWidgetCart(!showWidgetCart);
        }

        
        return (
                <div>
                
                        <Nav  titulo="Tienda Musikal"  action={openWidgetCart}/>
                        <WidgetCart show={showWidgetCart} action={openWidgetCart} />       
                </div>
                                              
        )
}

export default NavAndWidgetCart;