import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "../App.css"

function NavG(props){
  return     <Navbar collapseOnSelect expand="lg" className="bg-[#502E2A] text-white sm:h-20 table-fixed" data-bs-theme="light">
  <Container className="flex justify-between items-center">
    <Navbar.Brand href="#home"> <img className="h-20 sm:h-20 rounded-full px-1 py-1 relative sm:top-8 z-40" src="/images/logo.png"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-toggler" />
    <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="text-white flex justify-end ms-auto">
     <Nav.Link as={Link} to="/"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white" onClick={() => props.click("landing")}>Home</button></Nav.Link>
        <Nav.Link as={Link} to="/about"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white"onClick={() => props.click("landing")}>About Us</button></Nav.Link>
        <Nav.Link as={Link} to="/about"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white"onClick={() => click("landing")}>Events</button></Nav.Link>
        <Nav.Link as={Link} to="/about"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white"onClick={() => click("landing")}>Meet the team</button></Nav.Link>
        <Nav.Link as={Link} to="/about"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white"onClick={() => click("landing")}>Donations</button></Nav.Link>
        <Nav.Link as={Link} to="/contact"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white"onClick={() => click("landing")}>Contact Us</button></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default NavG