import './styles/App.css';
import principal from './assets/principal.jpg'
import Nav from './components/global/Nav.jsx';
import ListContainer from './components/ListContainer/ListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <>
      <div className="container">
          
        <Nav/>   
        <ListContainer name="Guitarras"/>
        <ListContainer name="Bajos"/>
        <ListContainer name="Baterias"/>
        <ListContainer name="Microfonos"/>
        <ListContainer name="Acsesorios"/>
       
        <img className="img-fluid" src={principal} alt="Guitarras de todas las marcas"/>
      </div>
    </>
  );
}

export default App;
