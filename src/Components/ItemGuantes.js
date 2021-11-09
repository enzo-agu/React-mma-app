import React from 'react';
import './Styles/Styles.css';

export const ItemGuantes=({stock,initial,onAdd})=>{
    
    return(
    <>
    <div className="ItemCount">
    <div className="parr1">
       
       </div>
       

    <button className="botones" onClick={onAdd} >Agrega al carrito!</button>
       <p className="parr1">  {initial} </p>
    <button className="botones" onClick={stock} >Descontar</button>
    </div>
    </>
    )

} 
