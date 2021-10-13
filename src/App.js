import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar.js'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
function App() {
  return (
    
    <div>
      <Navbar/>
      <ItemListContainer greeting="Benvenido a la tienda MMA !"/>
     
        
        
       
      
    </div>
  );
}

export default App;
