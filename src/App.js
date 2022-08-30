import './components/estilos.css'
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import Titulo from './components/Titulo';
import Input from './components/Input';
import Navbar from './components/NavBar';
import BurguerButton from './components/Burgerbutton';

function App() {

  return (
    <div className='container-fluid fondo_amarillo'>
    <Header />
    <Navbar />
    <BurguerButton />
    <hr />
    <Item />
    <Titulo />
    <Input />
    <Footer />
  </div>
);
}

export default App;
