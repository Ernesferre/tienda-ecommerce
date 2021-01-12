
import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);
    return (
        <>
            <h1>Estás en el cart</h1>
            {
                data.items.map(item => <h2>{item.titulo}</h2>)
            }
        </>
    )
}
export default Cart;

// const Cart = () => {
//   return (
//     <h1>Estas en el Cart</h1>
//   )
// }

// export default Cart;
