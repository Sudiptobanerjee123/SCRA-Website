// Navbar.js
import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../Images/SCRA-logo.jpeg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-text">
        <img src={logo} alt="SCRA Logo" />
      </div>
      <ul className="nav-links">
        <div className="menu">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/students">
              Students
            </NavLink>
          </li>
          <li className="research-profile">
            <a href="/">Research</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
