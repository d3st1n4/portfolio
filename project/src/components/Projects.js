import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import ProjectItem from "./ProjectItem";
import ProjectData from "../assets/ProjectPage-data.json";

function Projects() {
  return (
    <div id="Projects">
      <div className="page-container">
        <div className="header-container">
          <h1>Selected Projects</h1>
        </div>
        <div className="project-item-container">
          {ProjectData.map((item, index) => (
            <ProjectItem
              key={index}
              name={item.name}
              features={item.features}
              img={item.image}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
