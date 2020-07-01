import React from 'react';

import Logo from '@app/assets/logo/logo.png';

import './header.scss';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const links = [
    {
        label: 'Skills',
        href: '/skills',
        external: false,
        uid: 1
    },
    {
        label: 'Projects',
        href: '/projects',
        external: false,
        uid: 2
    },
    {
        label: 'Blog',
        href: 'https://blog.kooixiuhong.com',
        external: true,
        uid: 3
    }
];


function renderLink() {
    let navs = [];
    links.forEach((elem) => {


        let navLink = (elem.external) ? <a href={elem.href} className="ml-3 mr-3" key={elem.uid}>{elem.label}</a> :
            <NavLink to={elem.href} className="ml-3 mr-3" activeClassName="activeLink" key={elem.uid}>{elem.label}</NavLink>

        navs.push(navLink);
    });
    return navs;
}


function Header() {
    let navLinks = renderLink();
    return (
        <Navbar className="headerWrapper mt-3" expand="lg" variant="dark">

            <NavLink exact to="/" className="logoWrap" activeClassName="logoWrapActive"><img src={ Logo } alt="site logo"/></NavLink>
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
