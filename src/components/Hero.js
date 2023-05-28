import React from "react";
import "../styles/Hero.css";
import ComponentXO from "./ComponentXO";
import { arrayX, arrayO } from "../assets/data/arrayXO";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <main className="about">
        <div className="main-text">
          <div id="main-name">SUVASH JOSHI</div>
          <div id="main-title">FRONT END DEVELOPER</div>
        </div>
        <div className="xo">
          {arrayX.map((item) => {
            return <ComponentXO name="X" x={item.x} y={item.y} />;
          })}
          {arrayO.map((item) => {
            return <ComponentXO name="O" x={item.x} y={item.y} />;
          })}
        </div>
      </main>
    </>
  );
}

export default Hero;
