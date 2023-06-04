import React from "react";
import Project from "../utils/Project";
import { projectList } from "../assets/data/projectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <>
      <div className="projects">
        {projectList.map((project) => {
          <Project
            name={project.name}
            live={project.live}
            github={project.github}
            image={project.image}
            desc={project.description}
          />;
        })}
      </div>
    </>
  );
}

export default Projects;
