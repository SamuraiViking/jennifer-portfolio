import React from 'react'
import Navbar from 'react-bootstrap/navbar'
import Nav from 'react-bootstrap/nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'

const MyNavBar = () => {
    return (
        <Navbar fixed="top" id="my-nav-bar" bg="light" expand="lg">
            <Navbar.Brand href="#home"><span><strong id="brand">JENNIFER NELSON</strong></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav id="right">
                    <Nav.Link className="links" href="#home">HOME</Nav.Link>
                    <Nav.Link className="links" href="#about">ABOUT</Nav.Link>
                    <Nav.Link className="links" href="#media">MEDIA</Nav.Link>
                    <Nav.Link className="links" href="#contact">CONTACT</Nav.Link>
                    <div className="nav-icons">
                        <Nav.Link className="icon" href="#">
                            <FontAwesomeIcon icon={["fab", "facebook"]} />
                        </Nav.Link>
                        <Nav.Link className="icon" href="#">
                            <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </Nav.Link>
                        <Nav.Link className="icon" href="#">
                            <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar

