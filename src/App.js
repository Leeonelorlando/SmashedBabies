import './App.css';

function App() {

  let imagen = "logo192.png"
  let titulo = "Probando"

  return (
  <div className='container'>
    <div className='row'>
    <div className='col md-4 offset-md-2'>
      <img src={imagen} alt={titulo} className="img-fluid" />
    </div>
    <div className='col md-4'>
    <h1>{titulo}</h1>
    <p>Mi primera pagina de React</p>
    </div>
    </div>
  </div>
  );
}

export default App;
