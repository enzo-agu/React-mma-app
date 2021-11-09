import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import {Navbar} from './Components/Navbar.js'
import { ItemListContainer } from './Container/ItemListContainer';
import { ErrorPage } from './Utils/ErrorPage';
import { Portada } from './Utils/Portada';
import { ItemContainerGuantes } from './Components/ItemContainerGuantes';

function App() {
  return (
    <>
    
    
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
      <ItemListContainer greeting="Bienvenido a la tienda MMA !"/>
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
        <Route exact path="/cart">
          <Portada/>
        </Route>
       <Route  path="*">
       <ErrorPage/>
       </Route> 
       </Switch>
      </BrowserRouter>
   </>
  );
}

export default App;
