import './styles/App.css';
import NavAndWidgetCart from './components/global/NavAndWidgetCart.jsx';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <div>
          
        <NavAndWidgetCart/>   
        <FeaturedProducts/>
         
      </div>
    </>
  );
}

export default App;
