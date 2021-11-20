
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import { Navbar } from './Components/Navbar.js'
import { ErrorPage } from './Utils/ErrorPage';
import { Portada } from './Utils/Portada';
import { ItemContainerGuantes } from './Components/ItemContainerGuantes';
import { CartContext } from './Components/Context/CartContext';
import { Cart } from './Components/Cart';
import { getFirestore } from "./firebase";
import { collection, getDocs } from 'firebase/firestore';
function App() {



  return (
    <>

      <CartContext>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <h1 className="parr1">Lycras y guantes de box para tu entrenamiento!</h1>
              <ItemDetailContainer />
              <ItemContainerGuantes />
            </Route>
            <Route exact path="/category/licras">
              <h1 className="parr1 titulos"> Productos</h1>
              <ItemDetailContainer />
            </Route>
            <Route exact path="/category/:ID">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/Guantes">
              <h1 className="parr1 titulos"> Productos</h1>

              <ItemContainerGuantes />
            </Route>
            <Route exact path="/portada">
              <Portada />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
