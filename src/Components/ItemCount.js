
import './Styles/Styles.css';

export const ItemCount=({stock,initial,onAdd})=>{
    
    return(
    <>
    <div>
    
       <img src="../img/remera-lycra-m-larga.jpg" width="350px" height="200px" alt=""></img>
       </div>
    <button className="botones" onClick={onAdd} >Agrega al carrito!</button>
       <p className="parr1">  {initial} </p>
    <button className="botones" onClick={stock} >Descontar</button>
        
    </>
    )

} 
