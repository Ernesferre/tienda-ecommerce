import {useState} from 'react'
import './StateCounter.css';
import { useHistory } from "react-router-dom";

function StateCounter ()  {
  
  const [valor, setValor] = useState(1);
  
  function restar () {
    let resultado = valor - 1;
    return resultado; 
  }

  function sumar  () {
    let resultado = valor + 1;
    return resultado; 
  }

  const [click,setClick] = useState(false);

  let history = useHistory();

    const handleClickAdd =(e)=>{ 
        if(click){
            history.push("/cart");
        }
        e.target.innerText="Ir al Cart";
        // e.target.className="add-button color-clicked";
        setClick(true);
    }

    
  

  return (
      
          <>
              <div className="contador">
                  <button className="btn btn-primary" width="100" onClick={() => setValor (restar)}>-</button>
                  {/* eslint-disable-next-line */}
                  <input type="text" value={valor} placeholder="0" width="5px"/>
                  <button className="btn btn-primary" onClick={() => setValor (sumar)}>+</button>
                  {/* eslint-disable-next-line */}
              </div>

              <button 
              className="btn btn-info"
              onClick={handleClickAdd}
               >Agregar a Carrito
               </button>
          </>
      
  )

  }


export default StateCounter;