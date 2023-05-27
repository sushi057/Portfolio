import React from "react";
import "../styles/About.css";
import ComponentXO from "./ComponentXO";
import { arrayX, arrayO } from "../assets/utils/arrayXO";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <main className="about">
        <div className="main-text">
          <div id="main-name">SUVASH JOSHI</div>
          <div id="main-title">FRONT END DEVELOPER</div>
        </div>
        <div className="xo">
          {arrayX.map((item, index) => {
            return <ComponentXO name="x" x={item.x} y={item.y} />;
          })}
         {arrayO.map((item, index) => {
          return <ComponentXO name="O" x={item.x} y={item.y} />
         })}
        </div>
      </main>
    </>
  );
}

export default About;
