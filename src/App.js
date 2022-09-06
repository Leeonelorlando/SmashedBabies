import './App.css';
import Footer from './assets/Footer';
import Header from './assets/Header';
import ItemCount from './assets/ItemCount';
import ItemListContainer from './assets/ItemListContainer';
import Prefooter from './assets/Prefooter';
import Cards from './components/Cards';

function App() {
  return (
    <div className='container-fluid fondo_amarillo'>
      <Header />
      <Cards />
      <ItemListContainer />
      <ItemCount stock={5} initial={1} onAdd={0}/>
      <Prefooter />
      <Footer />
    </div>
  );
}

export default App;
