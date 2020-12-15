import './ProductCard.css';

const ProductCard = ({titulo, precio}) => {
    return (
        <article className="productCard">
            <img src="https://placehold.it/400x400" alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
            </div>
        </article>
    )
}

export default ProductCard;