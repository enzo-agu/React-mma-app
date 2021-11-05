import React from 'react';
import './Styles/Styles.css';
import { Cardwiget } from '../Utils/Cardwiget';
import { Link } from 'react-router-dom';
export const Navbar =()=>{
       
      return(
          <>
          <div className="cardwiget">
          <Cardwiget className=""/>
          </div>
          <div className="navbar" >
          <h1 className="titulos">Contact MMA! </h1>
          <div>
          <Link to="/">      <button>Home</button></Link>
          <Link to="/category/remera-Lycras"><button>Lycras</button></Link>
          <Link to="/category/Guantes"><button>Guantes</button></Link>
          <button>Bermudas</button>
          <Link to="/cart"><button>Contacto</button></Link>
          </div>
          </div>
          

          
      </>
      )

      

}