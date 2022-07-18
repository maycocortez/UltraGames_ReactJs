/*import logo from './logo.svg';*/
import './App.css';
import NavBar from "./components/NavBar"
import Titulo from './components/Titulo';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const greetingsMsj = ["Hola", "Chau", "Buenas Noches", "Adios"];
  return ( 
    <div className = "App">
      <Titulo />
      <NavBar />
      <ItemListContainer yoSoyUnaProps={greetingsMsj}/>
    </div>);
}

export default App;