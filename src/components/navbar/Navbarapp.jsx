import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../cardWidget/CardWidget';
import './navBar.css'
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbarapp(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="navBarCss">
        <Link to='/'>
          <img src="https://i.imgur.com/AyEaKg1.png" alt="" className='logo-navbar' />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} href='/'>Home</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/categorias/Literatura">Literatura</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="categorias/Fantasia">Fantasia</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="categorias/Misterio">Misterio</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="categorias/Romance">Romance</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="categorias/Ficción">Ficción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Proximos Lanzamientos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Ubicacion</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sobre Nosotros
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CardWidget counter={4} />
      </Container>
    </Navbar>
  );
}

export default Navbarapp;