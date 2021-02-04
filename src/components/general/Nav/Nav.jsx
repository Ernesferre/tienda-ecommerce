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
    
    
    return (
        <nav>
            <div className="container">
                <h1 className="mt-2"><Link to={"/"} >{titulo} </Link></h1>

                <ul>
                   {
                       menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta}/>)
                   } 
                        <NavCart className="" action={action}/>
                </ul>

                
                
                
                
            </div>
        </nav>
    )
}

export default Nav;