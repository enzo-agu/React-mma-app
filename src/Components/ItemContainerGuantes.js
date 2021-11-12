import React from 'react';
import { ItemDetailGuantes } from './ItemDetailGuantes'
import {DataGuantes} from '../Utils/DataGuantes';
import { useEffect, useState } from "react";
import './Styles/Styles.css';
import { useParams } from 'react-router';


export const ItemContainerGuantes=()=>{

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

getData(DataGuantes).then(res =>setProduct(res))
.catch(err => console.log (err))
},[ID])

return(
    <>
        
        {product.length ? product.map((p)=><ItemDetailGuantes key={p.id}  producto={p} />) 
        : <span className="span1">Guantes en camino...</span>}
      
      
    </>
)

}