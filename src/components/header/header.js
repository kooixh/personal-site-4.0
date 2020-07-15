import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import Logo from '@app/assets/logo/logo.png';
import darkModeUtils from '@app/utils/dark.mode';
import './header.scss';

const links = [
    {
        label: 'Skills',
        href: '/skills',
        external: false,
        uid: 1,
    },
    {
        label: 'Projects',
        href: '/projects',
        external: false,
        uid: 2,
    },
    {
        label: 'Blog',
        href: 'https://blog.kooixiuhong.com',
        external: true,
        uid: 3,
    },
];

function renderLink() {
    const navs = [];
    links.forEach((elem) => {
        const navLink = elem.external ? (
            <a href={elem.href} className="ml-3 mr-3" key={elem.uid}>
                {elem.label}
            </a>
        ) : (
            <NavLink to={elem.href} className="ml-3 mr-3" activeClassName="active-link" key={elem.uid}>
                {elem.label}
            </NavLink>
        );
        navs.push(navLink);
    });
    return navs;
}

function Header() {
    const navLinks = renderLink();
    let variant = darkModeUtils.useThemeStatus();
    return (
        <Navbar className="header-wrapper mt-3" expand="lg" variant={variant}>
            <NavLink exact to="/" className="logo-wrap" activeClassName="logo-wrap-active">
                <img src={Logo} alt="site logo" />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="primary-navbar-toggle" />

            <Navbar.Collapse id="basic-navbar-nav" className="ml-4 pt-2 pb-2 nav-bar">
                <Nav className="mr-auto">{navLinks}</Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
