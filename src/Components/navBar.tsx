import { IconoBlancoTexto } from '../Components/icons';
import '../Styles/navBar.css';


export const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className= "navbar-logo">
            <IconoBlancoTexto />
        </div>
        <div className='navbar-links'>
            <button className= "navbar-button">
            Start Now
            </button>
        </div>
    </nav>
  )
}