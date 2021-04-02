import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="warning">
            <Navbar.Brand as={Link} to="/home" href="#home">O-Mega Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home" href="#">Home</Nav.Link>
                    <Nav.Link as={Link} to="/order" href="#">Order</Nav.Link>
                    <Nav.Link as={Link} to="/admin" href="#">Admin</Nav.Link>
                    <Nav.Link as={Link} to="/login" href="#">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;