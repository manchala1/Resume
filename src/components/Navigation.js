import { Navbar, Nav, Container,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import './navigation.css'

const Navigation=()=>{
    return(
        <>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/home">Jahnavi Manchala</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/experience">Experience</Nav.Link>
        <NavDropdown title="Projects" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/projects">Projects Done</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact">
          Contact
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className="btn btn-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}
export default Navigation;