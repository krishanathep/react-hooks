import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className='navbar-brand' to='/'>Navbar</NavLink>
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
            <NavLink className='nav-link' to='/about' activeClassName='active'>About</NavLink>
            <NavLink className='nav-link' to='/services' activeClassName='active'>Services</NavLink>
            <NavLink className='nav-link' to='/products' activeClassName='active'>Products</NavLink>
          </Nav>
          <Form inline>
            <Button variant="outline-info">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
