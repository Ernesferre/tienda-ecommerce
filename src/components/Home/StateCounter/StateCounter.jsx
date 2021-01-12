import {useState, useContext} from 'react'
import './StateCounter.css';
import { useHistory } from "react-router-dom";
import {Store} from '../../../store';


const StateCounter = ({item}) =>  {
    
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);
  
  const handleClickResta = () => {	
    if(qty > 1) {	
        setQty(qty - 1);	
    }	
}

const onAdd = () => {
  setData({
      ...data, 
      cantidad: data.cantidad + qty,
      items: [...data.items, item],
  });


  history.push('/cart');
  // alert(`Agregaste ${qty} productos al carrito`);	
}

    
  

  return (


<div>
      	<div className="qty ml-5">	
          <button 	
          disabled={qty === 1 ? 'disabled' : null } 	
          onClick={handleClickResta}	
          >	
          -	
          </button>	
          <input type="text" value={qty} readOnly/>	
          <button onClick={() => setQty(qty + 1)}>+</button>	
        </div>

        <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
</div>
          
  )}


export default StateCounter;