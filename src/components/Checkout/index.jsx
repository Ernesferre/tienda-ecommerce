import {useState, useContext} from 'react';
import {Store} from '../../store';
import './Checkout.css';
// import './tailwind.min.css';
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
        // totalPrice: data.precioTotal,
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
        
            <div className="container mx-auto mt-20 bg-white">
                <header id="header" className="bg-blue-800 p-3 font-bold">
                    Checkout
                </header>

                {
                    !venta ?
                


                <form onSubmit={handleSubmitForm} id="formulario" className="py-10 px-5 max-w-lg mx-auto">
                    
                    

                    <div className="mb-10">
                        <label for="asunto">Nombre</label>
                        <input className="bg-gray-100 border shadow p-3 w-full" id="Nombre" type="text" 
                        value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre"/>
                    </div>

                    <div className="mb-10">
                        <label for="asunto">Apellido</label>
                        <input className="bg-gray-100 border shadow p-3 w-full" id="Apellido" type="text" 
                        value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido"/>
                    </div>

                    <div className="mb-10">
                        <label for="email">Correo Electronico</label>
                        <input className="bg-gray-100 border shadow p-3 w-full" id="email" type="email"
                        value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail"/>
                    </div>
                    
                    <div className="mb-10">
                        <label for="asunto">Telefono</label>
                        <input className="bg-gray-100 border shadow p-3 w-full" id="Apellido" type="tel"
                        value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono"/>
                    </div>
                    

                    {/* <div id="spinner">
                        <div className="sk-chase">
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                        </div>
                    </div> */}

                    <div className="flex justify-between">
                        <button id="enviar"
                            className="ml-5 btn w-full bg-blue-600 px-2 py-5 text-white items-center  mr-5 uppercase font-bold items-center flex justify-center"
                            type="submit">Enviar
                            <i className="material-icons right text-white ml-3"></i>
                        </button>

                        {/* <button id="resetBtn"
                            // onClick={resetearForm}
                            className="w-full bg-green-600 px-2 py-5 text-white items-center uppercase font-bold items-center flex justify-center"
                            type="button">Resetear Formulario
                            <i className="material-icons right ml-3"></i>
                            
                            
                        </button> */}
                    </div>
                </form>:
                <p> La Compra fue efectuada correctamente. Conserva este numero de seguimiento: {idCompra} </p>
                }
            </div>
        </body>
) 
}

export default Checkout;


/* <section className="checkout">
<div className="container">
    <h2>Checkout</h2>
    {
        !venta ?
    


    <form onSubmit={handleSubmitForm}>
    
        <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
        <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
        <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
        <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />
        
        <button className="btn btn-primary">Pagar</button>
    </form>:
    <p>La Compra fue efectuada correctamente. Conserva este numero de seguimiento: {idCompra} </p>
    }
</div>
</section> */