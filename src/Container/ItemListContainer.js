import React from 'react';
import '../Components/Styles/Styles.css';




export const ItemListContainer = ({ greeting }) => {
/*
  const [count, setCount] = useState(1) // contador iniciado en 1
  //funcion para aumentar
  const increase = () => {
    setCount(count + 1)
    // el contador solo llega hasta 5, si quiere sumar más salta el alert
    if (count === 5) {
      alert("no hay mas stock!")
      setCount(count) //seteo nuevamente para que no aumente despues del alert
    }

  }
  //funcion reductora
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1)
    } //no se puede restar menos de 1 
    else {
      alert("No puedes sumar 0 productos")
    }

  }

*/
  return (
    <>
      <div className="titulos">
        {greeting}
      </div>
      <div>
        <h3 className="titulos">
          Remera de lycra manga larga!
          <img src="../img/LycraMLarga.jpg" width="350px" height="200px" alt=""></img>

        </h3>
      </div>

      <div>
        
      



      </div>
    </>
  )
}