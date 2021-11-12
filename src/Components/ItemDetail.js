
import React from 'react';
import '../Components/Styles/Styles.css';
import { ItemCount } from './ItemCount';
import { Cart } from './Cart';
import { ThemeUse } from './Context/CartContext';

export const ItemDetail = ({producto,onAdd,initial,stock}) => {

   //lógica anterior pasada al CartContext, funciona ahora a través del ThemeUse().
   const {increase,decrease,flag,setflag,count,addItem,removeItem}= ThemeUse()

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
           <button onClick={addItem} > Sumar al carrito </button>
           <button onClick={removeItem} > Restar productos del carrito </button>

           
    
           
        </>
    )
} 
