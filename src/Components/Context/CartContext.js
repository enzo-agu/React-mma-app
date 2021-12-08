import React from "react";
import { createContext } from "react";
import {  useContext } from "react";

export const ThemeContext = createContext({})

export const ThemeUse = () => useContext(ThemeContext)
export const CartContext = ({ children, producto }) => {



  



  return (
    <>
      <ThemeContext.Provider value={{producto}}>
        {children}

      </ThemeContext.Provider>

      
    </>
  )

}





















