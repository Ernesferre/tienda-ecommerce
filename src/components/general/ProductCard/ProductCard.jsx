import StateCounter from '../../Home/StateCounter/StateCounter.jsx';
import './ProductCard.css';
import {Link} from 'react-router-dom';
// import { listaProductos } from "../../Assets/productos";

const ProductCard = ({imagen,titulo,precio,id}) => {
    return (
        
        <article className="productCard ">
            
            <div>
                <img src={`/products/${imagen}`}  alt="Mi producto de prueba"/>

                

                <br/>
                <h4 className="mt-2">{titulo}</h4>
                {/* <p>{descriction}</p> */}
                <span> $ {precio} </span>
               <br/>
                {/* <StateCounter/>  */}
                <div className="Link">
                    <Link to={`/detail/${id}`} className="btn btn-warning text-center " activeClassName="active">Ver mas</Link>
                </div>
            </div>

        </article>
    )
}

export default ProductCard;