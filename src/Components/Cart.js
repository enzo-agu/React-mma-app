import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeUse } from './Context/CartContext';
import { ItemCount } from './ItemCount';
import './Styles/Styles.css';
import { Cardwiget } from '../Utils/Cardwiget';
import { addDoc, getFirestore, query } from '@firebase/firestore';
import { collection} from '@firebase/firestore';
import { product } from '../Utils/datos';
export const Cart = () => {
    const { increase, decrease, flag, setflag, count, addItem, removeItem, price, stock } = ThemeUse()

    const db = getFirestore()
    const q = query(collection(db,"orders"))
console.log(q)
    const sendOrder= ()=>{
        const order = product
  
    const db = getFirestore()
    const ordersCollection= collection(db,"orders")
    addDoc(ordersCollection,order).then(({id})=> console.log(id))
}


    return (
    <>
        <div className="recuadro">
            <img src="../img/lycra2.jpg" width="150 px" height="150 px" alt=""></img>
            <div className="recuadro-boton">$
                {price}
            </div>
        </div>
        <div>

            {flag && <Cardwiget className="cardwiget2" />}
        </div>
        <div>
            <h3 className="parr1 letraPortada">stock {stock}</h3>
        </div>

        <ItemCount onAdd={increase} stock={decrease} initial={count} ></ItemCount>
        <button onClick={addItem} > Sumar al carrito </button>
        <button onClick={removeItem} > Restar productos del carrito </button>
        <div>
            <button onClick={() => { setflag(true) }} >Icono</button>

            <Link to="/" ><button>Volver al Home</button></Link>
            <Link to="/category/licras" ><button>Volver a lista de lycras</button></Link>
            <button onClick={sendOrder} >Finalizar Compra</button>

        </div>
    </>
    
    )
}




        