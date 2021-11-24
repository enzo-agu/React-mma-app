import { useParams } from 'react-router';
import React from 'react';
import '../Components/Styles/Styles.css';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ producto }) => {


    return (
        <>
            <div className="parr1 titulos">
                <h4> COD: {producto.id}</h4>
                <h4> {producto.name}</h4>
                <h4> {producto.description}</h4>
                <h4> $ {producto.price}</h4>
            </div>
            <div className="recuadro ">
                <Link to="/cart"  > <button>
                    <img src={producto.image} width="150 px" height="150 px" alt="remera-lycra"></img>
                    <h4>Stock {producto.stock}</h4>
                </button></Link>
            </div>
            <Link to="/cart"  ><button className="">Ir a la compra</button></Link>

        </>
    )
}
