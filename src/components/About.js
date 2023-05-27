import React from "react";
import "../styles/About.css";
import profile from "../assets/images/sushi.png";

function About() {
  return (
    <>
      <div className="hero">
        <img src={profile} alt="sushi" id="profile" />
        <div className="hero-about">
          <div className="hero-name">
            Hi im <span className="nickname">sushi</span>
          </div>
          <section className="hero-info">
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsum
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
