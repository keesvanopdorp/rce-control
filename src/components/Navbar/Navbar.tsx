'use client';
import Link from 'next/link';
import { Navbar as BSNavbar, Container, Nav, NavbarBrand } from 'react-bootstrap';

const Navbar = () => {
    return (
        <BSNavbar expand="md" variant="white">
            <Container fluid>
                <NavbarBrand>
                    <h4>RC-control</h4>
                </NavbarBrand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="text-black mx-md-3 my-md-2 text-decoration-none" href="/">
                            Commands
                        </Link>
                        <Link className="text-black mx-md-3 my-md-2 text-decoration-none" href="/new">
                            Add command
                        </Link>
                        <Link className="text-black mx-md-3 my-md-2 text-decoration-none" href="/edit">
                            Edit commands
                        </Link>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
};

export default Navbar;
