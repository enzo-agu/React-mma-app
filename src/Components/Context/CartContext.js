import React from "react";
import { createContext } from "react";
import { useState, useContext } from "react";
import { Data } from "../../Utils/Data";
console.log(Data)
export const ThemeContext = createContext({})
console.log(ThemeContext)

export const ThemeUse = () => useContext(ThemeContext)
export const CartContext = ({ children }) => {

  const [count, setCount] = useState(1)
  const [cart, setCart] = useState([])
  const [flag, setflag] = useState(true)
  const [price, setPrice] = useState(2800)
  const [stock, setStock] = useState([4])
  const increase = () => {

    setCount(count + 1)
    if (count >= 1) {
      setPrice(price + 2800)
      setStock(stock - 1)

    }
    if (stock === 0) {
      alert("sin stock")
      setStock(stock)
    }
    if (count === 5) {

      alert("Agregaste al carrito 5 productos " + Data[0].name + Data[0].category + " !")
      setCount(count)
      setflag(true)
      console.log("Usted ha comprado : " + count + " productos")
      setPrice(price)
    }


    else if (count >= 1) {
      setflag(true)
    }

  }
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1)
      setPrice(price - 2800)
      setStock(stock + 1)
    }
    else {
      alert("No puedes sumar 0 productos")
      setflag(false)
    }
  }

  const addItem = () => {
    setCount(count + 1)

    if (count >= 1) {
      let licra1 = Data.find((d) => d.id === 1)

      setCount(count)
      setCart(licra1)
      setCart(count)
      console.log(count + " Productos agregados" + Data[0].category + Data[0].name)

      alert("$ " + price)
    }

  }
  const removeItem = (itemid) => {
    if (count > 1) {
      let filtroLicra = Data.find(d => d.id === 1)
      setCount(count - 1)
      setStock(stock + 1)
      setPrice(price - 2800)
      setCart(JSON.stringify(filtroLicra))
      console.log(count - 1 + Data[0].category + Data[0].name + "   QUEDA/N EN EL CARRITO")
      console.log(cart + "     PRODUCTO FUERA DEL CARRITO")

    } else {
      alert("No puedes restar menos de 1 producto")
    }
  }


  return (
    <>
      <ThemeContext.Provider value={{ count, increase, decrease, flag, setflag, addItem, removeItem, price, stock }}>
        {children}
      </ThemeContext.Provider>

    </>
  )

}