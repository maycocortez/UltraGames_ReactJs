import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart/Cart';


function App() {
    return ( 
    <div className = "App">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/juegos/:juegosId' element={<ItemListContainer  />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            </Routes>
      </BrowserRouter>


    </div>);
}

export default App;