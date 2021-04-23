import './App.scss';
import { Navbar, Nav } from "react-bootstrap";
// import { Link, Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbarpage() {
  return (
      <Navbar collapseOnSelect expand="lg" className="navbar-container">
          <Navbar.Brand className="navbar-brand">
            <Link to="/home">
              <img src="https://i.imgur.com/Yp6piUe.png" className="navbar-logo"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/home">
              <Nav.Link href="#sobrenosotros">Sobre nosotros</Nav.Link>
            </Link>
            <Link to="/home">
              <Nav.Link href="#queesunaagenciabytour">¿Qué es una agencia byTour?</Nav.Link>
            </Link>
            <Link to="/home">
              <Nav.Link href="#tecnologiatecnoturis">Nuestra tecnología exclusiva</Nav.Link>
            </Link>
            <Link to="/home">
              <Nav.Link href="#franquiciasyfreelance">Franquicias & Freelance</Nav.Link>
            </Link>
            <Link to="/home">
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
}

export default Navbarpage;