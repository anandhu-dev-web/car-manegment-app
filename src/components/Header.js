import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/carlogo.jpeg'; 
import '../style/Header.css';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { IoIosLogOut } from "react-icons/io";
import { userLogout } from '../redux/authslice';


function Header() {
  const dispatch = useDispatch();
  const {isLogged,user} = useSelector(state=>state.auth)
  const handleLogOut = () => {
    dispatch(userLogout())
    console.log('Logout clicked');
    
  }
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={Logo} alt="Brand Logo" className='header_logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='header_navbar'>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/ourcars">OUR CARS</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
               {user?.role === "Admin" && (<Nav.Link as={Link} to="/addproduct">ADD CAR</Nav.Link>)}
            <Nav.Link as={Link} to="/cart" className='cart_icon'><FaCartFlatbed /></Nav.Link>
            <Nav.Link as={Link} to="/login">
            {isLogged ? <IoIosLogOut onClick={handleLogOut} /> : <FaRegUser />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;