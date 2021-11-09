
import React from 'react';
import { useState,useEffect } from "react"
import '../Components/Styles/Styles.css';
import { ItemCount } from './ItemCount';
import { Cart } from './Cart';

export const ItemDetail = ({producto,onAdd,initial,stock}) => {

  const[flag,setflag]=useState(true)
  const [count, setCount] = useState(1) // contador iniciado en 1

  

  //funcion para aumentar
  const increase = () => {
    
    setCount(count + 1)
    
    // el contador solo llega hasta 5, si quiere sumar más salta el alert
    if (count === 5) {
      alert("Agregado al carrito!")
      
      setCount(count) //seteo nuevamente para que no aumente despues del alert
      setflag(false) //cuando se llega al stock (5) desaparece el carrito
    }
    else if (count >=1 ){
      setflag(true)
    }

  }
//funcion reductora
const decrease = () => {
  if (count > 1) {
    setCount(count - 1)
    
  } //no se puede restar menos de 1 
  else {
    alert("No puedes sumar 0 productos")
  }

}


/*
const mount=(e)=>{

  console.log(e)
setflag(true)

}

const unmount=()=>{
  
  setflag(false)
}
*/

    return(
        <>
        <div className="parr 1 titulos">
           <h1 className="parr1 titulos">Productos</h1>
          <h4> {producto.id}
           {producto.name}
           {producto.category}
           {producto.price}
           {producto.stock}
           {producto.img}
           </h4>
           </div>
           <div className="recuadro ItemCount">
            
           <img src="../img/lycra2.jpg" width="150 px" height="150 px" alt=""></img>
           <ItemCount onAdd={increase} stock={decrease} initial={count} ></ItemCount>
           {flag && <Cart />}
           </div>
           <button onClick={()=>{setflag(true)}} >carrito</button>
           
    
           
        </>
    )
} 
/*
<div className="recuadro-boton">
              <button className="botones" onClick={onAdd} >Agrega al carrito!</button>
              <p className="parr1">  {initial} </p>
              <button className="botones" onClick={stock} >Descontar</button>
             </div>
           </div>
           */