import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Footer from './assets/Footer';
import Header from './assets/Header';
import ItemCount from './assets/ItemCount';
import ItemListContainer from './assets/ItemListContainer';
import Prefooter from './assets/Prefooter';
import Cards from './components/Cards';
import ItemDetailContainer from './assets/ItemDetailContainer';
import CartProvider from './CartContext';
import Provider from './CartContext';

function App() {
  return (
    <div className='container-fluid fondo_amarillo'>
      <Provider>
      <BrowserRouter>
        <Routes>
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/menu"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Cards />
      <Prefooter />
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
