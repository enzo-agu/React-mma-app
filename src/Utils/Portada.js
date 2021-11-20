import React from "react";
import '../Components/Styles/Styles.css';

export const Portada = () => {
    return (

        <div className="portada">
            <div className="tituloPortada">
                <h1 className="tituloPortada letraPortada parr1 titulos ">Guantes de box y lycras</h1>
                <h2 className="letraPortada "> Telefono : 3457-543305</h2>
                <h2 className="letraPortada "> contactSport@gmail.com</h2>

            </div>
            <div className="">
                <img src="../img/portada/guantes-venum.png" width="300px" height="200px" alt="guantesBox" />
                <img src="../img/portada/licraVenumMLarga.jpg" width="220px" height="200px" alt="remera-licra" />
            </div>
        </div>

    )
}
