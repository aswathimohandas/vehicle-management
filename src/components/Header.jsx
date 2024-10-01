import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <h3 className='text-center text-primary'><i className="fa-solid fa-car fa-xl" style={{color: "#B197FC",}} />
          Vehicle Management</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    
    </>
  )
}

export default Header
