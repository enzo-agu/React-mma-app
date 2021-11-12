import React from 'react';
import { ItemDetail } from '../Components/ItemDetail'
import {Data} from '../Utils/Data.js';
import { useEffect, useState } from "react";
import './Styles/Styles.css';
import { useParams } from 'react-router';


export const ItemDetailContainer=()=>{

    //efecto de montaje

const {ID} =useParams()


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
},[ID])

return(
    <>
        
        {product.length ? product.map((p)=><ItemDetail key={p.id}  producto={p} />) 
        : <span className="span1">Licras en camino...</span>}
      
      
    </>
)

}