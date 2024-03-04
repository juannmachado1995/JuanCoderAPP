import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../cardWidget/CardWidget';

function Navbarapp(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="navBarCss">
        <img src="https://i.imgur.com/AyEaKg1.png" alt="" className='logo-navbar'/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Ofertas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Destacados</NavDropdown.Item>
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
        <CardWidget counter={4}/>
      </Container>
    </Navbar>
  );
}

export default Navbarapp;