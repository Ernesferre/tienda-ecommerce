import {useState, useContext} from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './ProductDetail.css';
import {Store} from '../../store';
import {useHistory} from 'react-router-dom';

const ProductDetail = ({item}) => {
    
    const [qty, setQty] = useState(1);
    const [data,setData] = useContext(Store);
    const history = useHistory();	

    const incrementar = () => setQty(qty + 1);
    const decrementar = () => setQty(qty - 1);

    
    
    // const handleClickResta = () => {	
    //     if(qty > 1) {	
    //         setQty(qty - 1);	
    //     }	
    // }	

    const onAdd = () => {
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
            data.carrito = [...productosCarrito]
            // console.log(productosCarrito),
            history.push("/cart");

        } else {
            item.cantidad = qty;
            setData({ 
                carrito: [...data.carrito, item],
                cantidad: data.cantidad + qty,
                precioTotal: data.precioTotal + (item.precio * qty)

            
        });
            history.push("/cart");
        }
            history.push("/cart");
      }



    // const onAdd = (id) => {
    //     const Existe = data.carrito.some((prod) => prod.id === id);
    //     console.log(Existe);
    //     console.log(data);

        

    //     if (Existe) {
    //         console.log("Articulo se agrega por 2da vez")
    //         setData ({
    //             carrito: [...data.carrito],
    //             cantidad: data.cantidad + qty,
    //             precioTotal: data.precioTotal + (item.precio * qty)
    //         })

    //         console.log(data);
    //     } else {
    //         console.log("Articulo se agrega por 1era Vez")
    //         setData({
    //             carrito: [...data.carrito, {id: item.id, titulo:  item.titulo, cantidad: item.cantidad + qty, precio: item.precio, imagen:item.imagen}],
    //             cantidad: data.cantidad + qty,
    //             precioTotal: data.precioTotal + (item.precio * qty),
    //         })
    //     }
        


        // setData({
        //     ...data, 
        //     carrito: [...data.carrito, {id: item.id, titulo:  item.titulo, cantidad: qty, precio: item.precio, imagen:item.imagen}],
        //     cantidad: data.cantidad + qty,
        //     precioTotal: data.precioTotal + (item.precio*qty),
            
            
            
        // });

        // console.log(data);

    
        // history.push('/cart');
        // alert(`Agregaste ${qty} productos al carrito`);	
    


    
    return (
        <article className="product">
            <div className="foto">
            <img src={`/products/${item.imagen}`} alt="" />
            </div>
            <div className="info">
                <h1 className="title">{item.titulo}</h1>
                {
                    !!item.description && <p className="description">{item.descriction}</p>
                }
                <p className="descripcion"> {item.descriction}</p>
                <p className="price">${item.precio}</p>
                <div className="qty">
                    <button shape="circle" onClick={decrementar} disabled={qty <= 1 ? true : null }  icon={<MinusOutlined />} />
                    <p className="counter-container_count">{qty}</p>
                    <button shape="circle" onClick={incrementar}  disabled= {qty === item.stock ? true : null } icon={<PlusOutlined />} />	
                    {/* <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>	 */}


                </div>
                <button className="btn" onClick={onAdd} >Agregar al carrito</button>
            </div>
        </article>
    )
}

export default ProductDetail;

