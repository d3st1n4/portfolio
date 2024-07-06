import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link, e) => {
    e.preventDefault();
    setActiveLink(link);

    if (link === "projects") {
      if (location.pathname === "/") {
        const projectsSection = document.getElementById("Projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/projects");
      }
    } else if (link === "home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        const homeSection = document.getElementById("Home");
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (link === "about") {
      navigate("/about");
    }
  };

  return (
    <div id="Home">
      <nav>
        <ul>
          <li>
            <a
              onClick={(e) => handleLinkClick("projects", e)}
              className={`nav-link ${
                activeLink === "projects" ? "active" : ""
              }`}
              href="#"
            >
              projects
            </a>
          </li>
          <li>
            <a
              onClick={(e) => handleLinkClick("about", e)}
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              href="#"
            >
              about me
            </a>
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
            <a
              onClick={(e) => handleLinkClick("home", e)}
              className={`nav-btn ${activeLink === "home" ? "active" : ""}`}
              href="#"
            >
              DW
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
