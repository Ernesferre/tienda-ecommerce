import ProductCard from '../../components/ProductCard/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    return (
        <section className="featuredProducts">
            <div className="container">
                <h2>Alguno de Nuestros Productos</h2>

                <ul>
                    <li><ProductCard titulo="Producto 1" precio="10.000" /></li>
                    <li><ProductCard titulo="Producto 2" precio="20.000" /></li>
                    <li><ProductCard titulo="Producto 3" precio="25.000" /></li>
                    <li><ProductCard titulo="Producto 4" precio="30.000" /></li>
                </ul>
            </div>
        </section>
    )
}

export default FeaturedProducts;
