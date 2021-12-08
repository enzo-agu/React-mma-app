import './Styles/Styles.css';


export const Home = () => {
    return (
        <>
            <div>
                <h1 className="parr1"> Guantes de box y lycras para tu entrenamiento! </h1>
                <div className="recuadroHome">
                <h4 className="">Sin stock</h4>
                    <img className="imgHome" src="./img/LycraMlarga.jpg" width="350px" height="200px" alt="lycra-manga-larga" />
                    <h3 className="letraHome">Remera lycra manga larga Venum</h3>
                </div>
                <div className="recuadroHome">
                    <h4 className="">En stock!</h4>
                    <img className="imgHome" src="./img/lycra2.jpg" width="200px" height="200px" alt="lycra-manga-corta" />
                    <h3 className="letraHome">Remera lycra manga corta Venum</h3>

                </div>
                <div className="recuadroHome">
                    <h4 className="">En stock!</h4>
                    <img className="imgHome" src="./img/guantes-adidas.jpg" width="200px" height="200px" alt="guantes" />
                    <h3 className="letraHome">Guantes box 14 onzas Adidas</h3>
                </div>
                <div className="recuadroHome">
                <h4 className="">Sin stock</h4>
                    <img className="imgHome" src=" https://http2.mlstatic.com/D_NQ_NP_879051-MLA41141213133_032020-O.webp " width="200px" height="200px" alt="guantes" />
                    <h3 className="letraHome">Guantes box 14 onzas Twins/tematicos</h3>
                </div>

            </div>
            <footer>
                <ol>
                    <li>
                        <h3>Email:contactSport@gmail.com</h3>
                    </li>
                    <li>
                    <h3>Teléfono: 3457-543305</h3>
                    </li>
                </ol>
            </footer>
        </>
    )
}