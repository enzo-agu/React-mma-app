import './Navbar.css';
import { Cardwiget } from '../Cardwiget/Cardwiget';

export const Navbar =()=>{
       
      return(
          <>
          <div className="cardwiget">
          <Cardwiget className=""/>
          </div>
          <div className="navbar" >
          <h1>Tienda MMA </h1>
          <div>
          <button>Home</button>
          <button>Guantes</button>
          <button>Bermudas</button>
          <button>Lycras</button>
          <button>Contacto</button>
          </div>
          </div>
          

          
      </>
      )

      

}