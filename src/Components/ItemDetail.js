
import React from 'react';

import '../Components/Styles/Styles.css';


export const ItemDetail = ({producto,onAdd,initial,stock}) => {
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
             <div className="recuadro-boton">
              <button className="botones" onClick={onAdd} >Agrega al carrito!</button>
              <p className="parr1">  {initial} </p>
              <button className="botones" onClick={stock} >Descontar</button>
             </div>
           </div>
           
    
           
        </>
    )
} 