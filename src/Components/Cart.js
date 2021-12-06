import './Styles/Styles.css';
import { addDoc, getFirestore, query } from '@firebase/firestore';
import { collection } from '@firebase/firestore';
import { product } from '../Utils/datos';
export const Cart = () => {




    const db = getFirestore()
    const q = query(collection(db, "orders"))
    console.log(q)
    const sendOrder = () => {

        const order = product


        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order)

    
        
    }


    return (
        <>
        
            <form className="formStyle" >
                <h2 className="formTitulo">Datos de confirmación</h2>
                <label >ingrese nombre</label>
                <input type="text" name="name" required />

                <label  >ingrese mail</label>
                <input type="email" name="mail" required />

                <label >teléfono</label>
                <input type="number" name="number" required />

                <button type="reset" onClick={sendOrder} >Enviar y finalizar</button>


            </form>


        </>

    )
}






