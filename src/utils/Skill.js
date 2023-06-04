import React from "react";

function Skill({ name, icon }) {
  return (
    <>
      <div className="skill-container">
        <img src={icon} alt="logo" />
        <p>{name}</p>
      </div>
    </>
  );
}

export default Skill;
