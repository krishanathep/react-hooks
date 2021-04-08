import {
  Container,
  Navbar,
  Nav
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className='navbar-brand' to='/'>Navbar</NavLink>
          <Nav>
            <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
            <NavLink className='nav-link' to='/about' activeClassName='active'>About</NavLink>
            <NavLink className='nav-link' to='/news/indexnews' activeClassName='active'>News</NavLink>
            <NavLink className='nav-link' to='/products' activeClassName='active'>Products</NavLink>
            <NavLink className='nav-link' to='/users' activeClassName='active' >Users</NavLink>
            <NavLink className='nav-link' to='/countries' activeClassName='active' >Countries</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
