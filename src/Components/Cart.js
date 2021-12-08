import './Styles/Styles.css';
import { addDoc, getFirestore } from '@firebase/firestore';
import { collection } from '@firebase/firestore';
import { product } from '../Utils/datos';
import { ThUse } from './ItemDetail';
export const Cart = () => {
    const { value, producto, count,setValue } = ThUse()

    


const onAdd2=()=>{
  console.log(count +" "+ producto.description+" "+producto.name )
  setValue(<div>Compra registrada!

      <h4>Codigo de compra: 00{producto.id}</h4>
  </div>)
alert("Tu código de compra es 00 "+ producto.id)
alert("Orden enviada!")

 const order ={CodProducto:  + producto.id,cantidad:count}


        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order)

}


    return (
        <>
            <h4>
                
                {value} {count} {producto.description} {producto.name}
            </h4>
            <button onClick={onAdd2}>Finalizar Compra</button>
           
            <div>

            </div>

        </>

    )
}






