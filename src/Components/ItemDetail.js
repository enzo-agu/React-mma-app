
import React from 'react';
import '../Components/Styles/Styles.css';
import { Link } from 'react-router-dom';

export const ItemDetail = ({producto,onAdd,initial,stock}) => {

   //LOGICA ANTERIOR QUE AGREGABA AL CARRITO, PASADA A CART.JS

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
          <img src={producto.image} alt="remeras"/>
          </div>
           </div>
           <div className="recuadro ItemCount">
           <Link to="/cart"  > <button>
           <img src="../img/lycra2.jpg" width="150 px" height="150 px" alt=""></img>
           </button></Link>      
           </div>
           <Link to="/cart"  ><button className="">Ir a la compra</button></Link>

          

    
           
        </>
    )
} 
