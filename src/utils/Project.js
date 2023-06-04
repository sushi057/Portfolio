import React from "react";
import "../styles/Project.css";

function Project({ name, live, github, image, desc }) {
  return (
    <>
      <div className="project-container">
        <div className="project-image">
          <img src={image} alt="project showcase" className="image-showcase" />
        </div>
        <section className="project-details">
          <div className="project-title">
            <p>{name}</p>
          </div>
          <section className="project-desc">
            <div className="project-text">
              <p>{desc}</p>
            </div>
            <div className="project-links">
              <div className="github">{github}</div>
              <div className="live">{live}</div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Project;
