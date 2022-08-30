import './App.css';
import Cupones from './assets/Cupones';
import Destacado from './assets/Destacado';
import Footer from './assets/Footer';
import Header from './assets/Header';
import PromoApp from './assets/PromoApp';
import Cards from './components/Cards';

function App() {
  return (
    <div className='container-fluid fondo_amarillo'>
      <Header />
      <hr />
      <Destacado />
      <hr />
      <Cards />
      <Cupones />
      <PromoApp />
      <Footer />
    </div>
  );
}

export default App;
