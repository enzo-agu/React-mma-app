
import './Styles/Styles.css';

export const ItemCount=({stock,initial,onAdd})=>{
    
    return(
    <>
    <div className="ItemCount">
    <div className="parr1">
       
       <img src="../img/LycraMLarga.jpg" width="350px" height="200px" alt=""></img>
       </div>
    <button className="botones" onClick={onAdd} >Agrega al carrito!</button>
       <p className="parr1">  {initial} </p>
    <button className="botones" onClick={stock} >Descontar</button>
    </div>
    </>
    )

} 
