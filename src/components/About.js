import React from "react";
import "../styles/About.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function About() {
  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          className="layer1"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.2}
          className="layer2"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          className="layer3"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.4}
          className="layer4"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="layer5"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.6}
          className="layer6"
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
