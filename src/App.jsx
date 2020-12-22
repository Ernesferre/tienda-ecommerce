import './reset.css';
import './styles/App.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart.jsx';
import Home from './components/Home';
// import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/Category/Category.jsx'
import Detail from './components/Detail';




function App() {
  const mostrarSeccion = (section) => {
    switch(section) {
      case 'Home': return <Home />;
      case 'Category': return <Category />;
      case 'Detail': return <Detail/>;
      default: return <Home />
    }
  }


  return (
    <> 
        <NavAndWidgetCart/>   
        {mostrarSeccion('Detail')}
    </>
  );
}

export default App;
