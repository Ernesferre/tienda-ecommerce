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
                <a href="#" onClick={() => setValor (restar)}>-</a>

                <input type="text" value={valor} placeholder="0" width="5px"/>

                <a href="#" onClick={() => setValor (sumar)}>+</a>
              </div>
              <button className="btn btn-info">Agregar a Carrito</button>
          </div>
      
  )
}
  


export default StateCounter;