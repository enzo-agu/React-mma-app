import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import {Navbar} from './Components/Navbar.js'
import { ItemListContainer } from './Container/ItemListContainer';
import { ErrorPage } from './Utils/ErrorPage';
import { Portada } from './Utils/Portada';


function App() {
  return (
    <>
    
    
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
      <ItemListContainer greeting="Bienvenido a la tienda MMA !"/>
        </Route>
        <Route exact path="/category/licras">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/category/:id">
          <ItemDetailContainer/>
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
