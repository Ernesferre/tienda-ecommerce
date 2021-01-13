import {useState, useContext} from 'react';
import './ProductDetail.css';
import {Store} from '../../store';
import {useHistory} from 'react-router-dom';

const ProductDetail = ({item}) => {
    
    const [qty, setQty] = useState(1);
    const [data, setData] = useContext(Store);
    const history = useHistory();	
    
    
    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }	
    const onAdd = () => {


        setData({
            ...data, 
            carrito: [...data.carrito, {item: item.titulo, cantidad: qty}],
            cantidad: data.cantidad + qty,
            
            
            
        });

    
        history.push('/cart');
        // alert(`Agregaste ${qty} productos al carrito`);	
    }
    console.log(data.carrito);
    return (
        <article className="product">
            <div className="foto">
            <img src={item.imagen} alt="" />
            </div>
            <div className="info">
                <h1 className="title">{item.titulo}</h1>
                {
                    !!item.description && <p className="description">{item.descripcion}</p>
                }
                <p className="descripcion"> {item.descripcion}</p>
                <p className="price">${item.precio}</p>
                <div className="qty">	
                    <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>	
                </div>
                <button className="btn" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </article>
    )
}
export default ProductDetail;

