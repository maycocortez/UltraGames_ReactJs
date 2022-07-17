/*import logo from './logo.svg';*/
import './App.css';
import NavBar from "./components/NavBar"
import Titulo from './components/Titulo';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const greetingsMsj = 'Cuerpo de la página';
  return ( 
    <div className = "App">
      <Titulo />
      <NavBar />
      <ItemListContainer textoSalida={greetingsMsj} />
    </div>);
}

export default App;