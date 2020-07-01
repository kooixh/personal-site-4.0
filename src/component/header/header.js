import React from 'react';

import Logo from '@app/assets/logo/logo.png';

import './header.scss';
import { Navbar, Nav} from 'react-bootstrap';

function Header() {
    return (
        <Navbar className="headerWrapper mt-3" expand="lg" variant="dark">

            <Navbar.Brand href="/"><img className="logoWrap" src={ Logo }  alt="site logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="primary-navbar-toggle" />

            <Navbar.Collapse id="basic-navbar-nav" className="ml-4 pt-2 pb-2 navBar">
                <Nav className="mr-auto">
                    <Nav.Link href="/skills" className="headerLink">Skills</Nav.Link>
                    <Nav.Link href="/projects" className="headerLink">Projects</Nav.Link>
                    <Nav.Link href="https://blog.kooixiuhong.com" className="headerLink">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
