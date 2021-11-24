import React from 'react';
// import { useState } from "react"
import '../Components/Styles/Styles.css';
import { Link } from 'react-router-dom';
export const ItemDetailGuantes = ({ producto }) => {

  return (
    <>
      <div className="parr1 titulos">
        <div className="">
          <h4> COD: {producto.id}</h4>
          <h4> {producto.name}</h4>
          <h4> {producto.description}</h4>
          <h4> $ {producto.price}</h4>
         
        </div>
      </div>
      <div className="recuadro">
      <Link to="/cart"  > <button>
      <img src={producto.image} width="150px" height="150px" alt="guantes" />
          <h4>Stock {producto.stock}</h4>
          </button></Link>
      </div>
      <div>
        <Link to="/cart"  >
          <button>Ir a la compra</button>
        </Link>
      </div>



    </>
  )
}
