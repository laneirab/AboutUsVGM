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
        <a href="https://react.dev" target="_blank">
          <IconoBlancoTexto />
        </a>
      </div>
      <div className='text'>
      <h3 className="Fin">Financing</h3>
      <h2 className="Future" style={{ fontFamily: 'Beckman' }}>The future</h2>
      </div>
        <Button style={{ backgroundColor: '#29275C', borderColor: '#29275C', fontFamily: 'Beckman, sans-serif', fontSize: '15px', padding: '15px' ,margin:"30px"}} variant="primary" size="lg">
          Start Now
        </Button>
      <p className="subtexto">
        Página en construcción
      </p>
    </div>
  )
}

export default App
