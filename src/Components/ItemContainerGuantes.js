import React from 'react';
import { ItemDetailGuantes } from './ItemDetailGuantes'
import { useEffect, useState } from "react";
import './Styles/Styles.css';
import { useParams } from 'react-router';
import {getFirestore } from '@firebase/firestore';
import { collection,getDocs } from '@firebase/firestore';



export const ItemContainerGuantes=()=>{

     //EFECTO DE MONTAJE


const {ID} =useParams()

//TRAIGO PRODUCTOS DE FIREBASE
    const [product,setProduct]=useState([])
   useEffect(()=>{
    const db= getFirestore()
    getDocs(collection(db,"guantes")).then((snapshot)=>{
        setProduct(snapshot.docs.map((doc)=> doc.data()));
  
      })
},[ID])

return(
    <>
        
        {product.length ? product.map((p)=><ItemDetailGuantes key={p.name}  producto={p} />) 
        : <span className="span1">Guantes en camino...</span>}
      
      
    </>
)

}


//PROMISE ANTERIOR

// const getData=(data)=>new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     if(data){
//         resolve(data)
//         console.log("llegó la data")
//     }else{
//         reject("no hay nada!")
//     }
// },2000)  //2 segundos de para mostrar los productos
// });

// getData(DataGuantes).then(res =>setProduct(res))
// .catch(err => console.log (err))