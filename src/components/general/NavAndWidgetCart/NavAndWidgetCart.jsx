
import {useState} from 'react';
import Nav from '../Nav/Nav';
// import './NavAndWidjetCart.css';
import WidgetCart from '../WidgetCart/WidgetCart';


const NavAndWidgetCart = () => {
        const [showWidgetCart, setShowWidgetCart] = useState(false);
    
        const openWidgetCart = () => {
            setShowWidgetCart(!showWidgetCart);
        }

        
        return (
                <>
                        <Nav titulo="Tienda Musikal" action={openWidgetCart}/>
                        <WidgetCart show={showWidgetCart}/>       
                </>
                                              
        )
}

export default NavAndWidgetCart;