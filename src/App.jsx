
import './styles/App.css';
import Hero from './components/Home/Hero'
import Footer from './components/global/Footer'
import principal from './assets/principal.jpg'
import Navbar from './components/global/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div className="container">
        <Hero/>   
        <Navbar/>   
        <Footer/>
        <img className="img-fluid" src={principal} alt="Guitarras de todas las marcas"/>
      </div>
    </>
  );
}

export default App;
