import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import {Link} from 'react-router-dom'

function Nav({titulo, action}) {
   
    const menuItems = [
        { 
            texto: 'Guitarras',
            ruta: '/Category/Guitarras',
        },
        { 
            texto: 'Bajos',
            ruta: '/Category/Bajos',
        },
        { 
            texto: 'Baterias',
            ruta: '/Category/Baterias',
        },
        { 
            texto: 'Microfonos',
            ruta: '/Category/Microfonos',
        },
        { 
            texto: 'Accesorios',
            ruta: '/Category/Accesorios',
        },
    
    ]
    
    const qty = 0;
    
    return (
        <nav>
            <div className="container">
                <h1><Link className="text-dark" to={"/"} >{titulo} </Link></h1>

                <ul>
                   {
                       menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta}/>)
                   } 
                </ul>

                {
                    !!qty && <NavCart action={action} qty={qty}/>
                }
                
            </div>
        </nav>
    )
}

export default Nav;