
import {useContext} from 'react';
import {Store} from '../../store';
import {Link} from 'react-router-dom';

const Cart = ({nombre,precio,id,item}) => {

    const [data, setData] = useContext(Store);
    


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

    console.log(data);
}

// -------------------------------------------------------------------------------------------
    
    return (
        <>
            
            <h1 className="text-center text-primary mt-2">Estas en el Cart</h1>
            {
               data.carrito.map(item => 
                <>
                <h2 className="ml-5 mb-4 lead fontsize-6 text-success ">  

                    Art: <span> {item.titulo} </span>- 
                    Cant:  <span> {item.cantidad} </span>-
                    Precio: $ <span> {item.precio} </span>
                    Precio total: <strong>${item.precio * item.cantidad}</strong>
                
                    <button 
                        href="#" 
                        className="btn btn-danger" 
                        onClick={() => deleteFromCart (item.id)}
                        > X   
                    </button> 
                    
                </h2>
                

                

                </>,
                
               
                
            )}
            <hr/>
            
            <h3> Precio Final $ {data.precioTotal}</h3>
            <Link to={`/Checkout`} className="btn btn-warning mb-4 ml-5" activeClassName="active">Finalizar Compra</Link>
        </>
    )
}
export default Cart;

