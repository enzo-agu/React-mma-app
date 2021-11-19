
import React from 'react';
import { useState } from "react"
import '../Components/Styles/Styles.css';
import { ItemGuantes } from './ItemGuantes';
import { Link } from 'react-router-dom';
export const ItemDetailGuantes = ({producto,onAdd,initial,stock}) => {

  const[flag,setflag]=useState(true)
  const [count, setCount] = useState(1) // contador iniciado en 1

  

  //funcion para aumentar
  const increase = (e) => {
    console.log(e)
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
           <div className="recuadro">
          <h4>  {producto.id}</h4>
           <h4> {producto.name}</h4>
           <h4> {producto.description}</h4>
           <h4>  {producto.price}</h4>
          <h4>{producto.stock}</h4>
          <img src={producto.image} alt="guantes"/>
          </div>
           </div>
           <div className="recuadro ItemCount">
           <img src="../img/guantes-adidas.jpg" width="170 px" height="160 px" alt=""></img>
           <ItemGuantes onAdd={increase} stock={decrease} initial={count} ></ItemGuantes>
           
           </div>
           <div>
           <Link to="/cart"  >
           <button onClick={()=>{setflag(true)}} >Ir a la compra</button>
           </Link>
           </div>
           
    
           
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