
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import { Navbar } from './Components/Navbar.js'
import { ErrorPage } from './Utils/ErrorPage';
import { Portada } from './Utils/Portada';
import { Home } from './Components/Home';
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
              <Home />
            </Route>
            <Route exact path="/category/licras">
              <h1 className="parr1 titulos"> Remeras y guantes en stock</h1>
              <ItemDetailContainer />
            </Route>
            <Route exact path="/category/">
              <ItemDetailContainer />
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
