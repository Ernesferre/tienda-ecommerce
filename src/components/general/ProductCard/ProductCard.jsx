import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({imagen,titulo,precio,id}) => {
    
    return (
        
        <article className="productCard ">
            
            <div>
                <img src={`/products/${imagen}`}  alt="Mi producto de prueba"/>

                <br/>

                <h4 className="mt-2">{titulo}</h4>
                <span> $ {precio} </span>

                <br/>

                <div className="Link">
                    <Link to={`/detail/${id}`} className="btn btn-warning text-center mr-1" activeClassName="active">Ver mas</Link>
                </div>
            </div>

        </article>
    )
}

export default ProductCard;