import StateCounter from '../StateCounter/StateCounter';
import './ProductCard.css';

const ProductCard = ({titulo, precio}) => {
    return (
        <article className="productCard">
            <img src="https://placehold.it/300x300" alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
                <hr/>
                <StateCounter/> 
            </div>
        </article>
    )
}

export default ProductCard;