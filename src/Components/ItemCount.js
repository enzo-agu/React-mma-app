import React from 'react';
import './Styles/Styles.css';

export const ItemCount=({stock,initial,onAdd})=>{
    
    return(
    <>
    <div className="ItemCount">
    <div className="parr1">
       
       </div>
    <button className="botones" onClick={onAdd} >Agregar</button>
       <p className="parr1">  {initial} </p>
    <button className="botones" onClick={stock} >Quitar</button>
    </div>
    </>
    )

} 
