import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import categories from '../../config/categories.json';

function Header() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{display: "flex", justifyContent: "space-around"}}>
            <Nav.Link href="#link">Tienda</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories && categories.map((category) =>{
                return (
                  <NavDropdown.Item href={`/${category.attributes.slug}`}>{category.attributes.name}</NavDropdown.Item>
                )
              })
            }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;