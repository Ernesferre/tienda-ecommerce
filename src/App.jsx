import './styles/App.css';
// import principal from './assets/principal.jpg'
import NavAndWidgetCart from './components/global/NavAndWidgetCart.jsx';
import ListContainer from './components/ListContainer/ListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <>
      <div className="container">
          
        <NavAndWidgetCart/>   
        <ListContainer name="Guitarras"/>
        
       
        
      </div>
    </>
  );
}

export default App;
