import React from "react";
import { createContext } from "react";
import { useState,useContext } from "react";
import { Data } from "../../Utils/Data";
console.log(Data)
export const ThemeContext= createContext({})
console.log(ThemeContext)

export const ThemeUse=()=> useContext(ThemeContext)

//LOGICA PARA LA CATEGORIA LICRAS USANDO CONTEXT
///////////////////////////////////
export const CartContext=({children})=>{

   
  //logica en CartContext traida del ItemDetail para las licras. 
  const [count, setCount] = useState(1) // contador iniciado en 1
  const[cart,setCart]=useState([])
  const[flag,setflag]=useState(true)
  const increase = () => {
    
    setCount(count + 1)    
    // el contador solo llega hasta 5, si quiere sumar más salta el alert
    if (count === 5) {
      alert("Agregaste al carrito 5 productos "+ Data[0].name + Data[0].category + " !")
      setCount(count) //seteo nuevamente para que no aumente despues del alert
      setflag(false) //cuando se llega al stock (5) desaparece el carrito
      console.log("Usted ha comprado : "  + count + " productos")           
    }
    else if (count >=1 ){
      setflag(true)
    }

  }

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1)    
    } //no se puede restar menos de 1 
    else {
      alert("No puedes sumar 0 productos")
    }
  }
  

  // se agrega al carrito de a uno mostrando el producto y aumentando el contador
const addItem=()=>{
 
  
  setCount(count + 1)    

  if(count >= 1 ){

    let licra1=Data.find((d)=>d.id===1)
    
    setCount(count)
    setCart(licra1)
    setCart(count)
    console.log(count + " Productos agregados" + Data[0].category + Data[0].name)
   


  }

}

 

//se remueve del carrito de a uno mostrando el producto como string y bajando el contador
const removeItem=(itemid)=>{

  if (count > 1) {
    setCount(count - 1)   
    let filtroLicra=Data.find(d=>d.id===1)

  setCount(count - 1)
  setCart(JSON.stringify(filtroLicra))
  console.log(count - 1 + Data[0].category + Data[0].name + "   QUEDA/N EN EL CARRITO" )
  console.log(cart + "     PRODUCTO FUERA DEL CARRITO")

  }else {
    alert("No puedes restar menos de 1 producto")
  }
//alert que no permite llegar a 0
}


    return(
        <>
        <ThemeContext.Provider value={{count,increase,decrease,flag,setflag,addItem,removeItem}}>
         {children}
        </ThemeContext.Provider>
    
      </>
    )

}