
import { ItemDetail } from '../Components/ItemDetail'
import {Data} from '../Utils/Data.js';
import { useEffect, useState } from "react";
import './Styles/Styles.css';


export const ItemDetailContainer=()=>{

    //efecto de montaje

    const [product,setProduct]=useState([])
   useEffect(()=>{
    const getData=(data)=>new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(data){
            resolve(data)
            console.log("llegó la data")
        }else{
            reject("no hay nada!")
        }
    },2000)  //2 segundos de para mostrar los productos
    });

getData(Data).then(res =>setProduct(res))
.catch(err => console.log (err))
},[])


  //logica del contador para que cada producto de la aplicación tenga contador


const [count, setCount] = useState(1) // contador iniciado en 1
//funcion para aumentar
const increase = () => {
  setCount(count + 1)
  // el contador solo llega hasta 5, si quiere sumar más salta el alert
  if (count === 5) {
    alert("no hay mas stock!")
    setCount(count) //seteo nuevamente para que no aumente despues del alert
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

return(
    <>
        
        {product.length ? product.map((p)=><ItemDetail key={p.id} onAdd={increase} stock={decrease} initial={count} producto={p} />) 
        : <span className="span1">Cargando...</span>}
      
      
    </>
)

}