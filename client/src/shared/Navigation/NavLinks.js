import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
    return (
        <React.Fragment>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" exact>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/siphon">SIPHON</NavLink>
                </li>
                <li>
                    <NavLink to="/eureka">EUREKA!</NavLink>
                </li>
                < li >
                    <NavLink to="/blogs">BLOGS</NavLink>
                </li>
                < li >
                    <NavLink to="/about">ABOUT</NavLink>
                </li>
                < li >
                    <NavLink to="/auth">AUTHENTICATE</NavLink>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default NavLinks
