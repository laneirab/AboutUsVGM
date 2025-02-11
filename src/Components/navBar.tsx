import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import navBar from "../styles/navBar.module.css";	



export const NavBar: React.FC = () => {
  return (
    <Navbar fixed="top" expand="lg" className="navBar">
      <Container>
      <Navbar.Brand href="#">
        <img
        src="src\Images\VGMRecurso 4.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="vgm logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto"> {/* Alinea a la derecha */}
        <Nav.Link href="#facebook">
          <img
          src="src\Images\VGMRecurso 7.svg"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="Facebook"
          />
        </Nav.Link>
        <Nav.Link href="#instagram">
          <img
          src="src\Images\VGMRecurso 8.svg"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="instagram"
          />
        </Nav.Link>
        <Nav.Link href="#mail">
          <img
          src="src\Images\VGMRecurso 9.svg"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="mail"
          />
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
