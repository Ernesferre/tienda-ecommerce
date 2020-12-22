import './reset.css';
import './styles/App.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart.jsx';
import Home from './components/Home';
// import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/Category/Category.jsx'




function App() {
  const mostrarSeccion = (section) => {
    switch(section) {
      case 'Home': return <Home />;
      case 'Category': return <Category />;
      default: return <Home />
    }
  }


  return (
    <> 
        <NavAndWidgetCart/>   
        {mostrarSeccion('Home')}
    </>
  );
}

export default App;
