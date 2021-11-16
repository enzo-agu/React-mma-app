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

   
  //LOGICA EN CARTCONTEX TRAIDA DEL ITEMDETAIL PARA LAS LICRAS
  const [count, setCount] = useState(1) // contador iniciado en 1
  const[cart,setCart]=useState([])
  const[flag,setflag]=useState(true)
  const [price,setPrice]=useState(2800)
  const[stock,setStock]=useState([4]) //MANEJO DE STOCK 
  const increase = () => {
    
    setCount(count + 1)    
    
    // EL CONTADOR SOLO LLEGA HASTA 5, LUEGO SALE EL ALERT
    if(count>=1){
      setPrice(price + 2800)
      setStock(stock - 1)
     
    }
    if (stock===0){
      alert("sin stock")
      setStock(stock)
     }
    if (count === 5)  {
      
      alert("Agregaste al carrito 5 productos "+ Data[0].name + Data[0].category + " !")
      setCount(count) //SETEO NUEVAMENTE PAARA QUE NO AUMENTE DESPUES DEL ALERT
      setflag(true) //SET FLAG, AHORA PARA FOTO DE CINTURON NEGRO
      console.log("Usted ha comprado : "  + count + " productos")
      setPrice(price)           
    }
    

    else if (count >=1 ){
      setflag(true)
    }

  }

  

  const decrease = () => {
    if (count > 1)  {
      setCount(count - 1)    
      setPrice(price - 2800)
    setStock(stock + 1)
    } //NO SE PUEDE RESTAR MENOS DE 1
    else {
      alert("No puedes sumar 0 productos")
      setflag(false)
    }
  }
  

  // SE AGREGA AL CARRITO DE A UNO MOSTRANDO EL PRODUCTO Y AUMENTANDO
  // EL CONTADOR
const addItem=()=>{
 
  
  setCount(count + 1)    

  if(count >= 1 ){

    let licra1=Data.find((d)=>d.id===1)
    
    setCount(count)
    setCart(licra1)
    setCart(count)
    console.log(count + " Productos agregados" + Data[0].category + Data[0].name)
   
   alert("$ " +price)


  }

}

 
// SE REMUEVE DEL CARRITO DE A UNO MOSTRANDO EL PRODUCTO COMO STRING Y BAJANDO EL CONTADOR
const removeItem=(itemid)=>{

  if (count > 1) {
       
    let filtroLicra=Data.find(d=>d.id===1)

  setCount(count - 1)
  setStock(stock + 1)
  setPrice(price - 2800)
  setCart(JSON.stringify(filtroLicra))
  console.log(count - 1 + Data[0].category + Data[0].name + "   QUEDA/N EN EL CARRITO" )
  console.log(cart + "     PRODUCTO FUERA DEL CARRITO")

  }else {
    alert("No puedes restar menos de 1 producto")
  }
//ALERT QUE NO PERMITE LLEGAR A 0
}


    return(
        <>
        <ThemeContext.Provider value={{count,increase,decrease,flag,setflag,addItem,removeItem,price,stock}}>
         {children}
        </ThemeContext.Provider>
    
      </>
    )

}