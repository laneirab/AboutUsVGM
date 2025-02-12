import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
//import NavDropdown from "react-bootstrap/NavDropdown";


export const NavBar: React.FC = () => {

  return (
    <Navbar fixed="top" expand="lg" className="navBar">
      <Container>
      <Navbar.Brand href="#">
        <img
        src="src\assets\logos\logoBlancoSinTexto.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="vgm logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="custom-collapse">
        <Nav className="ms-auto"> {/* Alinea a la derecha */}
        <Nav.Link href="https://m.facebook.com/profile.php?id=453888817815565" target="_blank" rel="noopener noreferrer">
          <img
          src="src\assets\logos\logoFacebook.svg"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="Facebook"
          />
        </Nav.Link>
        <Nav.Link href="https://www.instagram.com/vmggroup_?igsh=MXM2NHJkeHNvanBocw==" target="_blank" rel="noopener noreferrer">
          <img
          src="src\assets\logos\logoInstagram.svg"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="instagram"
          />
        </Nav.Link>
        <Nav.Link href="mailto:vgmgrouplit@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
          src="src\assets\logos\logoCorreo.svg"
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
