import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core";
import decode from "jwt-decode";

import "./NavLinks.css";

const NavLinks = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    ///JWT.....

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <React.Fragment>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/siphon">SIPHON</NavLink>
        </li>
        <li>
          <NavLink to="/eureka">EUREKA!</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">BLOGS</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        {!user?.result ? (
          <li>
            <NavLink
              to={{
                pathname: "/auth",
              }}
            >
              LOGIN
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/userProfile">PROFILE</NavLink>
          </li>
        )}
        {user?.result && (
          <li>
            <Button onClick={logout}>LOGOUT</Button>
          </li>
        )}
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
