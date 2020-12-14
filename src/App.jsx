import './styles/App.css';
// import principal from './assets/principal.jpg'
import NavAndWidgetCart from './components/global/NavAndWidgetCart.jsx';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <>
      <div className="container">
          
        <NavAndWidgetCart/>   
        <FeaturedProducts/>
         
      </div>
    </>
  );
}

export default App;
