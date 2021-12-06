import React from 'react';
// import { useState } from "react"
import '../Components/Styles/Styles.css';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import {useState} from 'react'

export const ItemDetailGuantes = ({ producto }) => {

  const [cart,setCart] =useState([producto.stock])
  const [count, setCount] = useState(1)
const [stock, setStock] = useState([producto.stock - 1])
const [price,setPrice] =useState(producto.price)


const addCart=()=>{

   alert("Añadiste " + count + " producto/s " + producto.name)
   setCount(<div><h4>Gracias por su compra!</h4></div>)
   console.log(cart)
   setCart(count + producto.name)
   console.log(count + " producto/s añadido/s" + producto.name)
   setPrice(<div><h4>Pronto mas novedades!</h4></div>)
}
const increase=()=>{
    setCount(count + 1)
    if(count >= 1 )  {
      setStock(stock - 1)
      setCart(count)
      setPrice(price + producto.price) 
    }
    
    
    if (stock === 0) {
            alert("sin stock")
            setStock(stock)
            setCount(count)
            setPrice(price)
          }
}

const decrease=()=>{
    setCount(count - 1)
    if(count > 1){
        setStock(stock + 1)   
        setPrice(price - producto.price) 
    }
    else {
           alert("No puedes sumar 0 productos")
           setCount(count)
    }

}

  return (
    <>
     <div className="recuadroItemDetail">
            <div className="parr1 titulos">
            <div className="recuadroItemDetail--2">
                <h4> COD: {producto.id}</h4>
                <h4> {producto.name}</h4>
                <h4> {producto.description}</h4>
                <h4> $ {producto.price}</h4>
                </div>

                <ItemCount initial={count} onAdd={increase}
                 price={price} decrement={decrease} 
                 stock={stock} addCart={addCart}/>
            </div>
            <div className=" ">
                <div>
                    <img src={producto.image} width="150 px" height="150 px" alt="guantes"></img>
                    <h4>Stock {producto.stock}</h4>
                </div>

            </div>
            <Link to="/cart"  ><button className="">Completar formulario de datos y envío</button></Link>
            </div>



    </>
  )
}
