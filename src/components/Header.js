import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/carlogo.jpeg'; 
import '../style/Header.css';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";

function Header() {
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
            <Nav.Link as={Link} to="/" className='position-relative cart_icon'><FaCartFlatbed /><span className='bg-danger rounded-5 px-1'>0</span></Nav.Link>
            <Nav.Link as={Link} to="/login"><FaRegUser /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header