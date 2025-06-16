import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import '../Styles/navBar.css';

export const NavBar: React.FC = () => {
  return (
    <Navbar fixed="top" className="navBar">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="public\Fonts\Images\logos\logoBlancoSinTexto.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="vgm logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#">
          <img
            src="public\Fonts\Images\logos\vmgTexb.svg"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="vgm"
          />
        </Navbar.Brand>
        
        <Container style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Container style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', maxWidth: '500px', width: '100%' }}>
            <Nav.Link href="#home" style={{ fontFamily: 'Summer', fontSize: '1.1vw', color: "#F0EEE9" }}>Home</Nav.Link>
            <Nav.Link href="#services" style={{ fontFamily: 'Summer', fontSize: '1.1vw', color: "#F0EEE9" }}>Services</Nav.Link>
            <Nav.Link href="#about" style={{ fontFamily: 'Summer', fontSize: '1.1vw', color: "#F0EEE9" }}>About Us</Nav.Link>
            <Nav.Link href="#contact" style={{ fontFamily: 'Summer', fontSize: '1.1vw', color: "#F0EEE9" }}>Contact</Nav.Link>
          </Container>
        </Container>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="custom-collapse">
          <Nav className="ms-auto">
            {/* Contenedor glassmorphism para íconos sociales y idiomas */}
            <div className="social-language-container">
              {/* Íconos sociales */}
              <div className="social-icons-group">
                <Nav.Link 
                  href="https://www.instagram.com/vmggroup_?igsh=MXM2NHJkeHNvanBocw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <img
                    src="public\Fonts\Images\logos\logoInstagram.svg"
                    width="18"
                    height="18"
                    alt="instagram"
                  />
                </Nav.Link>
                
                <Nav.Link 
                  href="https://m.facebook.com/profile.php?id=453888817815565" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <img
                    src="public\Fonts\Images\logos\logoFacebook.svg"
                    width="18"
                    height="18"
                    alt="Facebook"
                  />
                </Nav.Link>
                
                <Nav.Link 
                  href="mailto:vgmgrouplit@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <img
                    src="public\Fonts\Images\logos\logoCorreo.svg"
                    width="18"
                    height="18"
                    alt="mail"
                  />
                </Nav.Link>
              </div>
              
              {/* Separador */}
              <div className="language-divider"></div>
              
              {/* Botones de idioma */}
              <ToggleButtonGroup 
                type="radio" 
                name="language-options" 
                defaultValue={1}
                className="language-toggle-group"
              >
                <ToggleButton 
                  id="tbg-radio-1" 
                  value={1} 
                  className="language-toggle-btn"
                >
                  EN
                </ToggleButton>
                <ToggleButton 
                  id="tbg-radio-2" 
                  value={2}
                  className="language-toggle-btn"
                >
                  SP
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};