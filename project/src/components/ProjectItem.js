import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectItem.css";

const ProjectItem = ({ name, features, img, href }) => {
  return (
    <div id="project-item">
      <a href={href} className="project-link">
        <div className="card">
          <div className="card-container">
            <img src={img} alt={name} />
            <div className="project-details">
              <h2>{name}</h2>
              <p>{features}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectItem;
