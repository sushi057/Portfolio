import React from "react";
import "../styles/About.css";
import pp from "../assets/images/pp.png";
import Skills from "./Skills";

function About() {
  return (
    <>
      <div className="hero">
        <div className="hero-details">
          <img src={pp} alt="sushi" id="profile" />
          <div className="hero-about">
            <div className="hero-name">
              hola soy <span className="nickname">sushi</span>
            </div>
            <section className="hero-info">
              I'm a front-end developer with a Bachelor's degree in Electronics
              Engineering from IOE Pulchowk Campus. Specializing in
              mobile-responsive web development, I create visually stunning and
              highly functional websites that adapt seamlessly across platforms.
              With a passion for technology and an unwavering commitment to
              excellence, I'm ready to collaborate with you and bring your
              digital vision to life. Let's connect and make something amazing
              together!
            </section>
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
}

export default About;
