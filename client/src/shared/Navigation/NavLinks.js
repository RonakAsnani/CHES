import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
    return (
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
    )
}

export default NavLinks
