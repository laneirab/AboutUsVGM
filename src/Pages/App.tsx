import { IconoBlancoTexto } from '../Components/icons';
import { NavBar } from '../Components/navBar';
import { BlurBackground } from '../Components/background.tsx';
import Button from 'react-bootstrap/Button';
import '../Styles/App.css';

function App() {

  return (
    <div>
    <BlurBackground />
    <NavBar />
      <div className='logo'>
        <a >
          <IconoBlancoTexto />
        </a>
      </div>
      <div className='text'>
      <h3 className="Fin">Financing</h3>
      <h2 className="Future" style={{ fontFamily: 'Beckman' }}>The future</h2>
      </div>
      <a href="https://wa.me/13052982118" target="_blank" rel="noopener noreferrer"> 
        <Button style={{ backgroundColor: '#29275C', borderColor: '#29275C', fontFamily: 'Beckman, sans-serif', fontSize: '15px', padding: '15px' ,margin:"30px"}} variant="primary" size="lg">
          Start Now
        </Button>
      </a>
      <p className="subtexto">
        Página en construcción
      </p>
    </div>
  )
}

export default App
