import '../Components/Styles/Styles.css';
import { useState } from "react"
import { ItemCount } from "../Components/ItemCount"
import { ItemList } from '../Components/ItemList';



export const ItemListContainer = ({ greeting }) => {

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


  return (
    <>
      <div className="titulos">
        {greeting}
      </div>
      <div>
        <h3 className="titulos">
          Remera de lycra manga larga!
        </h3>
      </div>

      <div>
        <ItemCount onAdd={increase} stock={decrease} initial={count} />
        <ItemList/>




      </div>
    </>
  )
}