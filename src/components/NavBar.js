import './NavBar.css';
import './CartWidget'
import CartWidget from './CartWidget';

const NavBar = ()=> {
    return ( 
      <div className = "NavBar">
        <div className = "nav-bg">
          <nav className = "navegacionPrincipal contenedor">
            <a href="##">Inicio</a> 
            <a href="##">Sobre nosotros</a>
            <a href="##">Clientes</a>
            <a href="##">Contacto</a>
            <div className="posicionIcono">
              <CartWidget />
            </div>
          </nav>
        </div>
      </div>);
  }


export default NavBar;