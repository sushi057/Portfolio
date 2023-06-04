import React from "react";
import "../styles/Project.css";
import arrowTop from "../assets/images/arrow.svg";

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
            <hr />
            <div className="project-links">
              <div className="live link">
                <a href={live} target="blank">
                  Live
                  <img src={arrowTop} alt="arrow" />
                </a>
              </div>
              <div className="github link">
                <a href={github} target="blank">
                  Github
                  <img src={arrowTop} alt="arrow" />
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Project;
