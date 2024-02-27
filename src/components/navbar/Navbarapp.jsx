import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../cardWidget/CardWidget';

function Navbarapp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='navBarCss'>
        <Navbar.Brand href="#home"><a>JuanAPP</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><a>Home</a></Nav.Link>
            <Nav.Link href="#pricing"><a>Contacto</a></Nav.Link>
            <NavDropdown title="Productos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><a>Nuevos</a></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <a>Ofertas</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><a>Destacados</a></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <a>Proximos Lanzamientos</a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><a>Ubicacion</a></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <a>Sobre Nosotros</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CardWidget counter={4}/>
      </Container>
    </Navbar>
  );
}

export default Navbarapp;