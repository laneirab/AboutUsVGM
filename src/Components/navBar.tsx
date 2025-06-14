import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


export const NavBar: React.FC = () => {
  return (
    <Navbar fixed="top"  className="navBar">
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
      <Container style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '-1rem' }}>
  <Container style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', maxWidth: '700px', width: '100%' }}>
    <Nav.Link href="#home" style={{ fontFamily: 'Beckman', fontSize: '1.5vw' , color:"#F0EEE9"}} >Home</Nav.Link>
    <Nav.Link href="#services" style={{ fontFamily: 'Beckman', fontSize: '1.6vw' , color:"#F0EEE9"}} >Services</Nav.Link>
    <Nav.Link href="#about" style={{ fontFamily: 'Beckman', fontSize: '1.6vw' , color:"#F0EEE9"}}>About Us</Nav.Link>
    <Nav.Link href="#contact" style={{ fontFamily: 'Beckman', fontSize: '1.6vw' , color:"#F0EEE9"}} >Contact</Nav.Link>
  </Container>
</Container>
      <Navbar.Toggle aria-controls="navbar-nav"  />
      <Navbar.Collapse id="navbar-nav" className="custom-collapse">
        <Nav className="ms-auto" style={{ background: "rgba(192, 224, 255, 0.6)",borderRadius: '15px' ,padding: "0"}}> {}
       
        <Nav.Link href="https://m.facebook.com/profile.php?id=453888817815565" target="_blank" rel="noopener noreferrer">
          <img
          src="public\Fonts\Images\logos\logoFacebook.svg"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="Facebook"
          />
        </Nav.Link>
        <Nav.Link href="https://www.instagram.com/vmggroup_?igsh=MXM2NHJkeHNvanBocw==" target="_blank" rel="noopener noreferrer">
          <img
          src="public\Fonts\Images\logos\logoInstagram.svg"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="instagram"
          />
        </Nav.Link>
        <Nav.Link href="mailto:vgmgrouplit@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
          src="public\Fonts\Images\logos\logoCorreo.svg"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="mail"
          />
        </Nav.Link>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1} style={{ fontFamily: 'Beckman', fontSize: '1rem',backgroundColor: "rgba(192, 224, 255, 0.6)"}} size="sm">
          EN
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} style={{ fontFamily: 'Beckman', fontSize: '1rem',backgroundColor: "rgba(192, 224, 255, 0.6)"}} size="sm">
          SP
        </ToggleButton>

      </ToggleButtonGroup>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
