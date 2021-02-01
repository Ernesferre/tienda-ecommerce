import {useState, useContext} from 'react';
import {Store} from '../../store';
import './Checkout.css';

import {getFirestore} from '../../db';
import firebase from 'firebase/app';

const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, completoVenta] = useState(false);
    const [formData, setFormData] = useState ({
        nombre: '',
        apellido:'',
        email:'',
        tel:'',

    })
    const [idCompra, setIdCompra]= useState('');

    const handleChangeInput = (e) => {
        setFormData ({...formData, [e.target.name]: e.target.value});
    } 

    const compra = {
        user: formData,
        items: data.carrito,
        precioTotal: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true);
            setIdCompra(id);
        })
        .catch (e => console.log(e));
    }


        

    
        // VALIDACION DE FORMULARIO ------------------------------------------------------------------

    
        

    return (
        <body>
            
        <h2 className="text-white text-center"> CheckOut </h2>

        

            <div className="container mt-5 mb-3">
                <div className="row mt-3">
                    <div class="col">

                    {
                        !venta ?

                            <form onSubmit={handleSubmitForm} id="formulario" action="">
                                   <div className="form-group">
                                          <label for="nombre" className="text-white">Nombre</label>
                                          <input 
                                            type="text"     
                                            className="form-control"
                                            placeholder="Insertar Nombre" 
                                            name="nombre"
                                            id="nombre"
                                            value={formData.nombre}
                                            onChange={handleChangeInput}
                                            required/>

                                   </div>

                                   <div className="form-group">
                                          <label for="apellido">Apellido</label>
                                          <input 
                                          type="apellido" 
                                          className="form-control"
                                          placeholder="Insertar Apellido"
                                          name="apellido" 
                                          id="apellido"
                                          value={formData.apellido}
                                          onChange={handleChangeInput}
                                          required/>

                                   </div>

                                   <div className="form-group">
                                          <label for="email">Correo Electronico</label>
                                          <input 
                                          type="email"
                                          name="email" 
                                          id="email" 
                                          placeholder="Insertar Correo Electronico"
                                          className="form-control"
                                          value={formData.email}
                                          onChange={handleChangeInput}
                                          required/>

                                   </div>

                                   <div className="form-group">
                                          <label for="apellido">Telefono</label>
                                          <input 
                                          type="tel" 
                                          className="form-control"
                                          placeholder="Insertar su Nro Telefonico"
                                          name="telefono" 
                                          id="telefono"
                                          value={formData.telefono}
                                          onChange={handleChangeInput}
                                          required/>

                                   </div>

                                   {/* <div className="form-group">
                                          <label for="pais">Pais</label>
                                          <select name="pais" id="pais" className="form-control">
                                                 <option value="mexico">Mexico</option>
                                                 <option value="espana">España</option>
                                                 <option value="colombia">colombia</option>

                                          </select>

                                   </div> */}

                                   <p> Seleccionar Forma de Pago</p>

                                   <div clasName="centrado" >
                                        <div className="form-check">
                                                <label class="form-check-label">
                                                        <input type="radio" name="sexo" id="hombre" 
                                                                className="form-check-input mr-2" required/> Transferencia Bancaria
                                                                
                                                </label>
                                        </div>
                                        <div className="form-check">
                                                <label className="form-check-label" >
                                                        <input type="radio" name="sexo" id="mujer"
                                                                className="form-check-input mr-2" required/> Tarjeta de Credito
                                                </label>

                                        </div>
                                   </div>
                                   {/* <div className="form-check mb-3">
                                          <label class="form-check-label">
                                                 <input type="checkbox" name="terminos" id="terminos"
                                                        className="form-check-input mr-2"/> Acepto Terminos
                                          </label>
                                   </div> */}

                                   <input 
                                    type="submit" 
                                    className="btn btn-success btn-lg" 
                                    value="Enviar"
                                    id="enviar"
                                    />

                            </form>:
                            <p className="display-4"> Su Compra fue efectuada correctamente. Conserve este numero de seguimiento: <br/> <hr/> <span className="text-success"> {idCompra}</span> </p>
                            }
                        </div>
                     </div>
                </div>

            </body>
            
        )
    }
        




export default Checkout;


