import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'


export default function Header() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand >ReactProject</Navbar.Brand>
    <Nav className="me-auto">
     <Link to="/movie/popular" className="mx-3"><button class="btn btn-success">Movies</button></Link>
      <Link to="/contact" className="mx-3"><button class="btn btn-success">Contact Us</button></Link>
      <Link to="/product" className="mx-3"><button class="btn btn-success">Products</button></Link>
    </Nav>
    </Container>
  </Navbar>
  </>
    
  )
}

