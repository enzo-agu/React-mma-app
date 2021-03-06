import React from 'react';
import './Styles/Styles.css';
import { Cardwiget } from '../Utils/Cardwiget';
import { Link } from 'react-router-dom';
export const Navbar = () => {

    return (
        <>
            <div className="cardwiget">
                <Cardwiget className="" />
            </div>
            <div className="navbar" >
                <h1 className="titulos">Contact Sport! </h1>
                <div>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/category/licras"><button>Productos</button></Link>
                    <Link to="/portada"><button>Contacto</button></Link>
                </div>
            </div>
        </>
    )
}