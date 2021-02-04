import {useState, useContext} from 'react';
import {Store} from '../../store';
import './Checkout.css';
import {getFirestore} from '../../db';
import firebase from 'firebase/app';
import {Link} from 'react-router-dom';

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

    const vaciarCarrito = () => {
        setData({
            carrito: [],
            cantidad: 0,
            precioTotal:0
        })
    }  

    return (
        <div className="checkout text-center">
            
        <h2 className="titulo text-center mt-3"> CheckOut </h2>

            <div className="container mt-5 mb-3 text-center">
                <div className="row mt-3 text-center">
                    <div class="col text-center">

                    {
                        !venta ?

                            <form onSubmit={handleSubmitForm} id="formulario" action="" className="container text-center mb-4" style={{width: "25rem"}}>
                                   
                                   <div className="form-group">
                                          <label for="nombre">Nombre</label>
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


                                   <p className="pagp"> Seleccionar Forma de Pago </p>

                                   <div clasName="centrado" >
                                        <div className="form-check">
                                                <label className="form-check-label">
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
                                  

                                   <input 
                                    type="submit" 
                                    className="btn btn-success btn-lg mt-3" 
                                    value="Enviar"
                                    id="enviar"
                                    />

                            </form>:
                            
                            <>
                                	<h3 className=""> Su Compra fue efectuada correctamente. Conserve este numero de seguimiento: <br/><br/> <span className="text-success mb-5"> {idCompra}</span> </h3>
                                    <Link to={`/`} className="btn btn-warning mb-5 mt-5" onClick={() => vaciarCarrito ()}>Realizar una nueva compra</Link>
                            </>
                    
                    }
                    </div>
                    
                </div>
            </div>

    </div>
            
    )
}
        
export default Checkout;


