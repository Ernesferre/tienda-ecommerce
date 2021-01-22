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

    // console.log(data);

    const handleChangeInput = (e) => {
        setFormData ({...formData, [e.target.name]: e.target.value});
    } 

    // console.log(formData)

    const compra = {
        user: formData,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
           console.log(id);
        })
        .catch (e => console.log(e));
    }
        

    return (
        <section className="checkout">
            <div className="container">
                <h2>Checkout</h2>
                


                <form onSubmit={handleSubmitForm}>
                
                    <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                    <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                    <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                    <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />
                    
                    <button className="btn btn-primary">Pagar</button>
                </form>
            </div>
        </section>
    )
}

export default Checkout;