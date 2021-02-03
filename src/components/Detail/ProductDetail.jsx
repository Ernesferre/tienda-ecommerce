import {useState, useContext} from 'react';
import './ProductDetail.css';
import {Store} from '../../store';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'

const ProductDetail = ({item}) => {
    
    const [qty, setQty] = useState(1);
    const [data,setData] = useContext(Store);
    const history = useHistory();	
    const [mensaje, setMensaje] = useState("")

    const incrementar = () => setQty(qty + 1);
    const decrementar = () => setQty(qty - 1);

    const onAdd = () => {     

        setMensaje(Swal.fire({
            title: `Has agregado ${qty} items al carrito `,
            icon: 'success',
            width: 600,
            padding: '3em',
          }))    

        const actualId = item.id;
        const exist = data.carrito.some(items => items.id === actualId);
        if(exist) {
            
            const productosCarrito = data.carrito.map (producto => {
                if( producto.id === actualId) {
                    producto.cantidad += qty;
                        return producto;
                } else {
                         return producto;
                }
            });

           setData({
               carrito: [...productosCarrito],
               cantidad: data.cantidad + qty,
               precioTotal: data.precioTotal + (item.precio * qty)
           })
                history.push("/cart");


        } else {
            item.cantidad = qty;
            setData({ ...data,
                carrito: [...data.carrito, item],
                cantidad: data.cantidad + qty,
                precioTotal: data.precioTotal + (item.precio * qty)    
            });
                history.push("/cart");           
            }         
    }
   
    return (
            
        <article className="product">
            
            <div className="foto">
                <img src={`/products/${item.imagen}`} alt="" />
            </div>
            
            <div className="info container mt-3 text-center">
                <h1 className="title">{item.titulo}</h1>
                    {
                        !!item.description && <p className="description">{item.descriction}</p>
                    }
                <p className="descripcion"> {item.descriction}</p>
                <p className="price">${item.precio}</p>
                
                <div className="d-flex justify-content-center">

                    <button className= "btn btn-secondary" onClick={decrementar} disabled={qty <= 1 ? true : null }>  - </button>
                    <h2 className="hola strong mt-2 ml-3 mr-3">{qty}</h2>
                    <button className="btn btn-secondary" onClick={incrementar}  disabled= {qty === item.stock ? true : null }> + </button>	
                    

                </div>
                
                <button className="btn-lg mt-5" onClick={onAdd}>Agregar al carrito</button>
            
            </div>
        </article>
    )
}

export default ProductDetail;

