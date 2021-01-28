
import {useContext} from 'react';
import {Store} from '../../store';
import {Link} from 'react-router-dom';
import './index.css';
// import CartCounter from "../CartCounter/CartCounter"

const Cart = ({nombre,precio,id,item,imagen, cantidad}) => {

    const store = useContext(Store);
    const [data,setData] = store;
    


    function deleteFromCart(id) {
        console.log(`removiendo ${id}`);
        console.log (data.carrito);
        const ProdRetirado = data.carrito.find((prod) => prod.id === id );
        const EliminarProd = data.carrito.filter((prod) => prod.id !== id);
      
        
    setData({
        ...data,
        carrito: EliminarProd,
        cantidad: data.cantidad - EliminarProd.cantidad,
        precioTotal: data.precioTotal - (ProdRetirado.precio*ProdRetirado.cantidad)
    
    });

    

    // const vaciarCarrito = () => {
    //     setData({
    //         carrito: [],
    //         cantidad: 0,
    //         precioTotal: 0

    //     })
    // };
}

// -------------------------------------------------------------------------------------------
    
    return (
        <div className="cart container">
            
            <h1 className="text-center mt-4 mb-3">Resumen de Compra</h1>
            {
               data.carrito.map(item => 
                
                <>
                <table className="table ml-5 mb-4 mt-5 lead fontsize-6 text-center">  
                    
                        {/* <thead>
                            <tr>
                                <th>imagen</th>
                                <th>Articulo</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Precio Total</th>
                                <th></th>
                            </tr>
                        </thead> */}
                        
                    
                    

                    <tr>

                        <td><img src={`/products/${item.imagen}`}></img></td>
                        <td>{item.titulo}</td>
                        <td>{item.cantidad}</td>
                        <td>$ {item.precio}</td>
                        <td>$ {item.precio * item.cantidad}</td>

                        <td>
                    
                            <button 
                                href="#" 
                                className="btn btn-danger" 
                                onClick={() => deleteFromCart (item.id)}
                                > Eliminar Articulo   
                            </button>

                        </td> 

                    </tr>

                    
                    

                </table>
                


                </>,
                
               
                
            )}
            
            
            <h3> Precio Final $ {data.precioTotal}</h3>
            
            <div className="link d-flex justify-content-center mt-3 mb-3">

                <Link to={`/Checkout`} className="btn btn-warning btn-block mb-4 ml-5 text-center" activeClassName="active">Finalizar Compra</Link>
                <button className="btn btn-danger" >Vaciar Carrito</button>
            </div>    
        </div>
    )
}
export default Cart;


// onClick={() => vaciarCarrito ()}