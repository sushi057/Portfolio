import React from "react";
import "../styles/About.css";
import ComponentX from "./ComponentX";
import { motion } from "framer-motion";
import iconX from "../images/alpha-x.svg";
import iconO from "../images/alpha-o.svg";

function About() {
  const arrayX= [];
  return (
    <>
      <main className="about">
        <div className="main-text">
          <div id="main-name">Suvash Joshi</div>
          <div id="main-title">Front End Developer</div>
        </div>
        <div className="xo">
          <ComponentX x="20" y="20" />
        </div>
      </main>
    </>
  );
}

export default About;
