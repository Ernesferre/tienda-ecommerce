import {useState} from 'react'
import './StateCounter.css';

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

  return (
      
          <div>
              <div className="contador">
              
                <button className="btn btn-dark" width="100" onClick={() => setValor (restar)}>-</button>
                {/* eslint-disable-next-line */}
                

                <input type="text" value={valor} placeholder="0" width="5px"/>
                
                <button className="btn btn-dark" onClick={() => setValor (sumar)}>+</button>
                {/* eslint-disable-next-line */}
              </div>
              <button className="btn btn-info">Agregar a Carrito</button>
          </div>
      
  )
}
  


export default StateCounter;