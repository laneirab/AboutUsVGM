import { IconoBlancoTexto } from '../Components/icons';
import { NavBar } from '../Components/navBar';
import { BlurBackground } from '../Components/background.tsx';
import '../Styles/App.css';

function App() {

  return (
    <div>
    <BlurBackground />
    <NavBar />
      <div className='logo'>
        <a href="https://react.dev" target="_blank">
          <IconoBlancoTexto />
        </a>
      </div>
      <div className='text'>
      <h3>FINANCING</h3> 
      <h2>THE FUTURE</h2>
      </div>
        <button>
          Start Now
        </button>
      <p className="read-the-docs">
        Página en construcción
      </p>
    </div>
  )
}

export default App
