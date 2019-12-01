import React from 'react'
import Navbar from 'react-bootstrap/navbar'
import Nav from 'react-bootstrap/nav'

const MyNavBar = () => {
    return (
        <Navbar id="my-nav-bar" bg="light" expand="lg">
            <Navbar.Brand href="#home"><span><strong id="brand">JENNIFER NELSON</strong></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav id="right">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#media">MEDIA</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar

