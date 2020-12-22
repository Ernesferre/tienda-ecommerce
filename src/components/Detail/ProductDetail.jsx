import './ProductDetail.css';


const ProductDetail = ({item}) => {
  return (
    <div className="productDetail">
      <h1>{item.nombre} </h1>
      <img src={item.foto} width="300" alt=""/>
      <p> {item.descripcion}</p>
      <p>{item.precio}</p>
      <button>Agregar al Carrito</button>

    </div>
  )
}

export default ProductDetail;