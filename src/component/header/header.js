import React from 'react';

import Logo from '@app/assets/logo/logo.png';

import './header.scss';
import { Navbar, Nav} from 'react-bootstrap';

const links = [
    {
        label: 'Skills',
        href: '/skills',
        uid: 1
    },
    {
        label: 'Projects',
        href: '/projects',
        uid: 2
    },
    {
        label: 'Blog',
        href: 'https://blog.kooixiuhong.com',
        uid: 3
    }
];


function renderLink() {
    let navs = [];
    links.forEach((elem) => {
        let isActive = window.location.pathname === elem.href;
        let className = (isActive) ? 'activeLink' : '';
        navs.push(
            <Nav.Link href={elem.href} className={className} key={elem.uid}>{elem.label}</Nav.Link>
        )
    });
    return navs;
}


function Header() {
    let navLinks = renderLink();
    let isHomePageActive = window.location.pathname === '/';
    let logoClass = isHomePageActive ? 'logoWrapActive' : 'logoWrap';
    return (
        <Navbar className="headerWrapper mt-3" expand="lg" variant="dark">

            <Navbar.Brand href="/"><img className={logoClass} src={ Logo }  alt="site logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="primary-navbar-toggle" />

            <Navbar.Collapse id="basic-navbar-nav" className="ml-4 pt-2 pb-2 navBar">
                <Nav className="mr-auto">
                    { navLinks }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
