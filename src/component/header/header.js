import React from 'react';

import Logo from '@app/assets/logo/logo.png';

import './header.scss';
import { Navbar, Nav} from 'react-bootstrap';

function Header() {
    return (
        <Navbar className="headerWrapper content" expand="lg">

            <Navbar.Brand href="/"><img className="logoWrap" src={ Logo }  alt="site logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className="ml-4 pt-3 pb-3 navBar">
                <Nav className="mr-auto">
                    <Nav.Link href="/skills" className="headerLink">Skills</Nav.Link>
                    <Nav.Link href="/projects" className="headerLink">Projects</Nav.Link>
                    <Nav.Link href="/blogs" className="headerLink">Blogs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
