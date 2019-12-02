import React from 'react'
import Navbar from 'react-bootstrap/navbar'
import Nav from 'react-bootstrap/nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'

const MyNavBar = () => {
    return (
        <Navbar fixed="top" id="my-nav-bar" bg="light" expand="lg">
            <Navbar.Brand href="#home"><span><strong id="brand">JENNIFER NELSON</strong></span></Navbar.Brand>
            <div className="links">
                <Nav.Link className="link" href="#home">HOME</Nav.Link>
                <Nav.Link className="link" href="#about">ABOUT</Nav.Link>
                <Nav.Link className="link" href="#media">MEDIA</Nav.Link>
                <Nav.Link className="link" href="#contact">CONTACT</Nav.Link>
                <div className="nav-icons">
                    <Nav.Link className="icon" href="#">
                        <FontAwesomeIcon color="black" icon={["fab", "facebook"]} />
                    </Nav.Link>
                    <Nav.Link className="icon" href="#">
                        <FontAwesomeIcon color="black" icon={["fab", "instagram"]} />
                    </Nav.Link>
                    <Nav.Link className="icon" href="#">
                        <FontAwesomeIcon color="black" icon={["fab", "linkedin"]} />
                    </Nav.Link>
                </div>
            </div>
        </Navbar>
    )
}

export default MyNavBar

