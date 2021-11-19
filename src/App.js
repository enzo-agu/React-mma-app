
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import {Navbar} from './Components/Navbar.js'
import { ItemListContainer } from './Container/ItemListContainer';
import { ErrorPage } from './Utils/ErrorPage';
import { Portada } from './Utils/Portada';
import { ItemContainerGuantes } from './Components/ItemContainerGuantes';
import { CartContext } from './Components/Context/CartContext';
import { Cart } from './Components/Cart';
import {getFirestore} from "./firebase";
// import {doc,getDoc} from 'firebase/firestore'
import {collection,getDocs} from 'firebase/firestore';
function App() {

  

  return (
    <>
    
    <CartContext>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
      <ItemListContainer greeting="Consegui tus lycras y guantes de box al mejor precio y calidad !"/>
      <ItemContainerGuantes/>
      <ItemDetailContainer/>
        </Route>
        <Route exact path="/category/licras">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/category/:ID">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/Guantes">
          <ItemContainerGuantes/>
        </Route>
        <Route exact path="/portada">
          <Portada/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
       <Route  path="*">
       <ErrorPage/>
       </Route> 
       </Switch>
      </BrowserRouter>
      </CartContext>
   </>
  );
}

export default App;
