import React from "react";
import "../styles/About.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import img1 from "../images/img1.jpg";
// import img2 from "../images/img2.jpg";

function About() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={4}
          className="first-layer"
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          className="second-layer"
        ></ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={0.05} factor={0.3}>
          <h1>Learnign react spring</h1>
        </ParallaxLayer>

        <ParallaxLayer className="box-div" sticky={{ start: 0.2, end: 2.5 }}>
          <div className="box"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={2}>
          <h1>Confusing af</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
