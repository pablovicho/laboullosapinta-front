import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext, useEffect } from 'react';
import CategoriesContext from '../../context/Categories/CategoriesContext';

function Header() {
  const categoriesContext = useContext(CategoriesContext);
  const {categories, getCategories} = categoriesContext;

  const fetchData = async () => {
    await getCategories()
  }

  useEffect( () => {
   fetchData()
}, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{display: "flex", justifyContent: "space-around"}}>
            <Nav.Link href="#">Tienda</Nav.Link>
            <hr></hr>
            {categories && categories.map((category) =>{
                return (
                  <Nav.Link href={`/${category.attributes.slug}`} key={category.attributes.slug}>{category.attributes.name}</Nav.Link>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;