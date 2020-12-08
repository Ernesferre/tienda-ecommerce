import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navb.css';
// import '.src/assets/cart.png'

function Nav () {
        
        
        return (
                <header clasName="justify-content-center text-center">
                        <h1 className="text-center">Tienda MusiKal</h1>
                
                        <div clasName="justify-content-center">
                                <nav className="nav justify-content-center text-right">
                                        <a href="a" className="nav-link text-white">Guitarras</a>
                                        <a href="a" className="nav-link text-white">Bajos</a>
                                        <a href="a" className="nav-link text-white">Baterias</a>
                                        <a href="a" className="nav-link text-white">Microfonos</a>
                                        <a href="a" className="nav-link text-white">Accsesorios</a>
                                </nav>
                                <CartWidget/>       
                        </div>
                                
                </header>
                
        )
}

export default Nav;