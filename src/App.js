/*import logo from './logo.svg';*/
import './App.css';
import NavBar from "./components/NavBar"
import Titulo from './components/Titulo';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return ( 
    <div className = "App">
      <Titulo />
      <NavBar />
      <ItemListContainer />
      <body>
             Cuerpo de la página
          </body>
          <footer>
            Ultra Games - Tienda de juegos - 2022 - "Todos los derechos reservados"
          </footer>
    </div>);
}

export default App;