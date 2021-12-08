import React from 'react';
import './Styles/Styles.css';

export const ItemCount = ({ decrement, initial, onAdd,stock,addCart,price }) => {

   return (
      <>
         <div className="">
           
            <div><h4>Quedan {stock}</h4></div>
            <button className="botones" onClick={onAdd} >Agregar</button>
            <div className="parr1"><h4>  {initial} </h4>
            <div> <h4>$ {price} </h4></div>
             
             </div>
            <button className="botones" onClick={decrement} >Quitar</button>
            <button  onClick={addCart}>Añadir al carrito</button>
          
         </div>
      </>
   )

}
