import React from "react";
import "../styles/Project.css";

function Project(name, live, github, image, desc) {
  return (
    <>
      <div className="project-item">
        <div className="project-image">
          <img src={image} alt="project showcase" className="image-showcase" />
        </div>
        <div className="project-details">
          <div className="project-title">
            <h2>{name}</h2>
          </div>
          <div className="project-desc">
            <div className="project-text">
              <p>{desc}</p>
            </div>
            <div className="project-links">
              <div className="github">{github}</div>
              <div className="live">{live}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
