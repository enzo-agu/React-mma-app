import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeUse } from './Context/CartContext';
import { ItemCount } from './ItemCount';
import './Styles/Styles.css';
import { Cardwiget } from '../Utils/Cardwiget';
export const Cart =({props})=>{

    // USO DE CONTEXT CON HOOK USECONTEX A TRAVÉS DE THEMEUSE
    //TRAIGO LAS VARIBLES QUE UTILIZO DE CARTCONTEXT.JS
   const {increase,decrease,flag,setflag,count,addItem,removeItem,price,stock}= ThemeUse()



    return(<>

       <div className="recuadro">
       <img src="../img/lycra2.jpg" width="150 px" height="150 px" alt=""></img>   
       <div className="recuadro-boton">$
      {price}
      </div>
       </div>
       <div>
       {flag && <Cardwiget className="cardwiget2"/>}
       </div>
       <div>
       <h3 className="parr1 letraPortada">stock {stock}</h3>
       </div>
       <ItemCount onAdd={increase} stock={decrease} initial={count} ></ItemCount>
       <button onClick={addItem} > Sumar al carrito </button>
       <button onClick={removeItem} > Restar productos del carrito </button>
       <div>
       <button onClick={()=>{setflag(true)}} >Icono</button>

        <Link to="/" ><button>Volver al Home</button></Link>
        <Link to="/category/licras" ><button>Volver a lista de lycras</button></Link>
        </div>
    
      


</>
    )
}


