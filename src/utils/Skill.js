import React from "react";
import "../styles/skill.css";

function Skill({ name, icon }) {
  return (
    <>
      <div className="skill-container">
        <img src={icon} alt="logo" className="skill-image" />
        <p>{name}</p>
      </div>
    </>
  );
}

export default Skill;
