import React from "react";
import "../styles/skills.css";
import Skill from "../utils/Skill";
import css from "../assets/images/css.svg";
import html from "../assets/images/html.svg";
import git from "../assets/images/git.svg";
import npm from "../assets/images/npm.svg";
import js from "../assets/images/js.svg";
import webpack from "../assets/images/webpack.svg";
import react from "../assets/images/react.svg";

const skillSet = [
  {
    name: "React",
    icon: react,
  },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Javascript", icon: js },
  { name: "git", icon: git },
  { name: "npm", icon: npm },
  { name: "webpack", icon: webpack },
];

function Skills({ name, icon, index }) {
  return (
    <>
      <div className="skills">
        {skillSet.map((skill) => (
          <Skill name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </>
  );
}

export default Skills;
