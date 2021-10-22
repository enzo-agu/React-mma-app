import { Item } from "./Item"
import {Data} from '../Utils/Data.js';
import { useEffect, useState } from "react";
import './Styles/Styles.css';
export const ItemList = () =>{

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
    },2000)
    });

getData(Data).then(res =>setProduct(res))
.catch(err => console.log (err))
},[])
    return(
        <>
            
            {product.length ? product.map((p)=><Item key={p.id} producto={p} />) : <span className="span1">Cargando...</span>}
          
          
        </>
    )
}