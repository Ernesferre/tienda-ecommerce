import StateCounter from '../../Home/StateCounter/StateCounter.jsx';
import './ProductCard.css';
import {Link} from 'react-router-dom';
// import { listaProductos } from "../../Assets/productos";

const ProductCard = ({imagen,titulo,precio,id}) => {
    return (
        
        <article className="productCard">
            
            <div>
                <img src={`/products/${imagen}`}  alt="Mi producto de prueba"/>

                

                <hr/>
                <h3>{titulo}</h3>
                {/* <p>{descriction}</p> */}
                <span> $ {precio} </span>
                <hr/>
                {/* <StateCounter/>  */}
                <div className="Link">
                    <Link to={`/detail/${id}`} className="btn" activeClassName="active">Ver mas</Link>
                </div>
            </div>

        </article>
    )
}

export default ProductCard;