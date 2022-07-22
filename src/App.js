/*import logo from './logo.svg';*/
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
    return ( 
    <div className = "App">
       <NavBar />
       <ItemListContainer texto = "Ultra Games - Tienda de juegos" />
       <ItemDetailContainer />

    </div>);
}

export default App;