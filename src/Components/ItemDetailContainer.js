import React from 'react';
import { ItemDetail } from '../Components/ItemDetail'
import { useEffect, useState } from "react";
import './Styles/Styles.css';
import { useParams } from 'react-router';
import {getFirestore } from '@firebase/firestore';
import { collection,getDocs } from '@firebase/firestore';



export const ItemDetailContainer=()=>{

    //EFECTO DE MONTAJE

const {ID} =useParams()

//TRAIGO PRODUCTOS DE FIREBASE

    const [product,setProduct]=useState([])
   useEffect(()=>{

    const db= getFirestore()
    getDocs(collection(db,"items")).then((snapshot)=>{
        setProduct(snapshot.docs.map((doc)=> doc.data()));
  
      })

},[ID])

return(
    <>
        
        {product.length ? product.map((p)=><ItemDetail key={p.name}  producto={p} />) 
        : <span className="span1">Lycras en camino...</span>}
      
      
    </>
)

}

//PROMISE ANTERIOR

//     const getData=(data)=>new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         if(data){
//             resolve(data)
//             console.log("llegó la data")
//         }else{
//             reject("no hay nada!")
//         }
//     },2000)  //2 segundos de para mostrar los productos
//     });

// getData(Data).then(res =>setProduct(res))
// .catch(err => console.log (err))