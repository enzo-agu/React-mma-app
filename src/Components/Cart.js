import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeUse } from './Context/CartContext';
import { ItemCount } from './ItemCount';
import './Styles/Styles.css';
import { Cardwiget } from '../Utils/Cardwiget';
import { addDoc, getFirestore, query } from '@firebase/firestore';
import { collection, getDocs } from '@firebase/firestore';
import { BuyerForm } from './Form';
import { product } from '../Utils/datos';
export const Cart = () => {
    const { increase, decrease, flag, setflag, count, addItem, removeItem, price, stock } = ThemeUse()


    const date = new Date()
    const orderDate = date.toLocaleDateString()
    const [buy, setBuy] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const db = getFirestore();

    const q = query(collection(db, "orders"))
    console.log(q)
    const orders = collection(db,"orders");

    const handleSubmit = (e) => {
        e.preventDefult()
        const newOrder = {
            buy,
            product,
            price: product.price,
            date: orderDate
        }
        console.log(newOrder)
        addDoc(orders, newOrder)
        setBuy({
            name: "",
            phone: "",
            email: ""
        })

    }


    return (<>


        <div className="Form" >
            <form onSubmit={handleSubmit}>
                <label><h4>Inserte nombre y apellido</h4></label>
                <BuyerForm setBuy={setBuy} name="name" buy={buy} />
                <label><h4>Inserte Telefono</h4></label>
                <BuyerForm setBuy={setBuy} name="phone" buy={buy} />
                <label><h4>Inserte email</h4></label>
                <BuyerForm setBuy={setBuy} name="email" buy={buy} />

                <button type="submit">Finalizar Compra</button>
            </form>
        </div>

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
        </div>

    </>
    )
}



/* <div>
           <img src="../img/guantes-adidas.jpg" width="150 px" height="150 px" alt=""></img>
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
           <Link to="/guantes" ><button>Volver a lista de guantes</button></Link>
       </div> */