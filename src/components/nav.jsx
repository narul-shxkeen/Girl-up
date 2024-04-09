import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"

function NavG(){
  //   return  <nav className="bg-[#502E2A] text-white flex justify-between px-10">
  //   <img className="h-10 top-4 sm:h-20 rounded-full px-1 py-1 relative sm:top-8" src="/images/logo.png"/>
  //   <div className="flex justify-between py-4 gap-4">
  //   <button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center ">About Us</button>
  //   <button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center ">Events</button>
  //   <button className="px-1 rounded hover:bg-gray-700">Meet the team</button>
  //   <button className="px-1 rounded hover:bg-gray-700">Donations</button>
  //   <button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center">Contact Us</button>
  //   </div>
  // </nav>
  return     <Navbar collapseOnSelect expand="lg" className="bg-[#502E2A] text-white sm:h-20" data-bs-theme="light">
  <Container className="flex justify-between items-center">
    <Navbar.Brand href="#home"> <img className="h-20 sm:h-20 rounded-full px-1 py-1 relative sm:top-8" src="/images/logo.png"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-toggler" />
    <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="text-white flex justify-end ms-auto">
        <Nav.Link href="#deets"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white">About Us</button></Nav.Link>
        <Nav.Link href="#deets"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white">Events</button></Nav.Link>
        <Nav.Link href="#deets"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white">Meet the team</button></Nav.Link>
        <Nav.Link href="#deets"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white">Donations</button></Nav.Link>
        <Nav.Link href="#deets"><button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center text-white">Contact Us</button></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default NavG