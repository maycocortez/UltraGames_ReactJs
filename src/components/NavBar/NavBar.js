import './NavBar.css';
import CartWidget from '../Cart/CartWidget';
import { NavLink } from 'react-router-dom';
import img from '../images/icon-page.png'

const NavBar = ()=> {
    return ( 
      <div className='barraNav'>
          <nav className = "navegacionPrincipal contenedor">
              <NavLink to="/"><img className="imgLogo" src={img} alt='logo'/></NavLink>
            <div className='nav'>
              <NavLink to="/">Inicio</NavLink> 
              <NavLink to="/juegos/offline">Juegos - Offline</NavLink>
              <NavLink to="/juegos/online">Juegos - Modo Online </NavLink>
            </div>
              <NavLink to="cart"><CartWidget /></NavLink>
           </nav>
       </div>
  );}


export default NavBar;
