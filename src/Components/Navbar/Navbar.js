// Navbar.js
import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-text">SCRA</div>
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
            <ul className="dropdown">
              <li>
                <a href="/">Computer Science </a>
              </li>
              <li>
                <a href="/">Electronics</a>
              </li>
              <li>
                <a href="/">Mathematics</a>
              </li>
              <li>
                <a href="/">Chemistry</a>
              </li>
              <li>
                <a href="/">Psychology</a>
              </li>
            </ul>
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
