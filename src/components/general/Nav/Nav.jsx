// import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import { NavLink} from 'react-router-dom'
import {Box, Flex, HStack, Dropdown, Link} from '@chakra-ui/react'

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
        <>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid navbar fixed-top">
            
            
            {/* <div className="container-fluid bg-dark text-white "> */}

            <a className="navbar-brand bg-dark text-warning" href="/">Tienda Musikal</a>

            <div className="navbar-nav collapse navbar-collapse">
                <NavCart action={action} /> 
            </div>
                
            
            <button className="navbar-toggler text-warning mx-right btn-warning"  type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                

                
               

                
            <div 
                className="navbar-nav collapse navbar-collapse text-white mx-auto mr-5" 
                id="navbarTogglerDemo01"
            >
                {/* <div 
                    className="navbar-nav text-center text-white mx-auto"
                > */}
                             
                    <a className="nav-item nav-link text-white" aria-current="page" href="/Category/Guitarras">Guitarras</a>
                    <a className="nav-item nav-link text-white" href="/Category/Bajos">Bajos</a>                        
                    <a className="nav-item nav-link text-white" href="/Category/Baterias">Baterias</a>                           
                    <a className="nav-item nav-link text-white" href="/Category/Microfonos">Microfonos</a>                       
                    <a className="nav-item nav-link text-white" href="/Category/Accesorios">Accesorios</a>

                {/* </div>        */}
            </div>


            

                    
            
        </nav>

        
        
        
            
                
    </>
            
        
        
    )
}

export default Nav;

{/* <ul className=" me-auto mb-2 mb-lg-0"> */}

                            
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Articulos
                                </a>
                                
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}

                            

                        {/* </ul> */}