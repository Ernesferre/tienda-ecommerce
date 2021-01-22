import {useState} from 'react';
import './reset.css';
import './styles/App.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart.jsx';
import Home from './components/Home';
// import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/Category/Category.jsx'
import Detail from './components/Detail';
import {BrowserRouter,Switch,Route} from "react-router-dom"; //Dependencia que me permite generar rutas 
import Error404 from './components/general/Error404/index.jsx';
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Footer from './components/general/Footer'
import StoreProvider from './store';



export default function App() {

  return (  
    <StoreProvider>
      <BrowserRouter>
        {/* El "NavAndWidgetCart" queda fijo en todo momemto */}
        <NavAndWidgetCart/>
        
        <Switch>
        <Route exact path="/" >
            <Home/>
          </Route>

          <Route path="/Cart">
            <Cart />
          </Route>

          <Route path="/Checkout">
            <Checkout />
          </Route>

          <Route path="/Category/:category_name?">
            <Category/>
          </Route>

          <Route path="/detail/:itemId">
            <Detail/>
          </Route>

          <Route path="/Cart">
            <Cart/>
          </Route>

          <Route path="/Checkout">
            <Checkout/>
          </Route>

          

          
          {/* no me funciona  */}
          <Route path="*">
            <Error404 />   
          </Route>

          

        </Switch>

        <Footer />
      </BrowserRouter>
    </StoreProvider>
    
  );
    
  }


