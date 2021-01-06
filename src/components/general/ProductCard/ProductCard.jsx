import StateCounter from '../../Home/StateCounter/StateCounter.jsx';
import './ProductCard.css';
import {Link} from 'react-router-dom';
// import { listaProductos } from "../../Assets/productos";

const ProductCard = ({imagen,titulo,descripcion,precio,id}) => {
    return (
        
        <article className="productCard">
            
            <div>
                <img src={imagen} alt="Mi producto de prueba"/>

                

                <hr/>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <span> $ {precio} </span>
                <hr/>
                {/* <StateCounter/>  */}
                <Link to={`/detail/${id}`} className="btn btn-warning" activeClassName="active">Ver mas</Link>
            </div>

        </article>
    )
}

export default ProductCard;