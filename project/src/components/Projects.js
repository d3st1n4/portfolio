import React, { useEffect } from "react";
import "../styles/Projects.css";
import ProjectItem from "./ProjectItem";
import ProjectData from "../assets/ProjectPage-data.json";
import Typed from "typed.js";

function Projects() {
  useEffect(() => {
    const typed = new Typed(".header-container .auto-type", {
      strings: ["Selected Projects"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="Projects">
      <div className="page-container">
        <div className="header-container">
          <h1>
            <span
              className="auto-type"
              style={{ color: "black" }}
              aria-label="auto-typed text"
            ></span>
          </h1>
        </div>
        <div className="project-item-container">
          {ProjectData.map((item, index) => (
            <ProjectItem
              key={index}
              name={item.name}
              features={item.features}
              img={item.image}
              href={item.href}
              aria-label={`Project: ${item.name}. ${item.features}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
