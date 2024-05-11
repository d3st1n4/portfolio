import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div id="Home">
      <nav>
        <ul>
          <li>
            <a href="#Projects" className="nav-link">
              projects
            </a>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              about me
            </NavLink>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/18upDQ9nYRQuMuqC0RO4jtdMNduafWLff/view?usp=sharing"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="home-btn">
        <ul>
          <li>
            <a href="#Home" className="nav-btn">
              DW
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
