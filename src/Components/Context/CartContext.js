import React from "react";
import { createContext } from "react";
import { useState,useContext } from "react";

export const ThemeContext = createContext({})
console.log(ThemeContext)

export const ThemeUse = () => useContext(ThemeContext)
export const CartContext = ({ children }) => {
const[flag,setFlag]=useState(false)
  const [count,setCount]=useState(1)

  const ofAdd=()=>{
    setFlag(true)
    setFlag(<div>enviado!</div>)
  }
 

  return (
    <>
      <ThemeContext.Provider value={{count,setCount,flag,ofAdd} }>
        {children}
      </ThemeContext.Provider>

    </>
  )

}





















