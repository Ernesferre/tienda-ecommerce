import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action}) {
    return (
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <ul>
                    <li><NavItem text="Guitarras" url="https://www.google.com" /></li>
                    <li><NavItem text="Bajos"/></li>
                    <li><NavItem text="Baterias" /></li>
                    <li><NavItem text="Microfonos" /></li>
                    <li><NavItem text="Accesorios" /></li>
                </ul>
                <NavCart action={action} />
            </div>
        </nav>
    )
}

export default Nav;