import React from 'react';

import Logo from '../../assets/logo-new.png';

import './header.css';

function Header() {
    return (
        <div className="headerWrapper content">
            <div className="ml-4 pt-3 pb-3 navBar">
                <a href="/">
                    <img className="logoWrap" src={ Logo } />
                </a>
                <a className="headerLink" href="#experiences">
                    Experience
                </a>
            </div>
        </div>
    );
}

export default Header;
