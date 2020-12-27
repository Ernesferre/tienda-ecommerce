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
// import {Link} from 'react';





function App() {
  return (
    <BrowserRouter>
      {/* El "NavAndWidgetCart" queda fijo en todo momemto */}
      <NavAndWidgetCart/>
      
      <Switch>
       <Route exact path="/" >
          <Home/>
        </Route>

        <Route path="/Category/:category_name?">
          <Category/>
        </Route>

        <Route path="/detail/:itemId">
          <Detail/>
        </Route>

        

        
        {/* no me funciona  */}
        <Route path="*" >
          <Error404 />   
        </Route>

        

      </Switch>

      {/* Colocar footer por fuera del switch para que quede fijo */}
    </BrowserRouter>
  );
    
  }




export default App;
