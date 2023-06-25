import React from "react";
import "../styles/Hero.css";
import blob1 from "../assets/images/blob-1.svg";
import blob2 from "../assets/images/blob-2.svg";
import blob3 from "../assets/images/blob-3.svg";

function Hero() {
  return (
    <>
      <main className="about">
        <section className="blobs">
          <img src={blob1} alt="blob" className="blob-one" />
          <img src={blob2} alt="blob" className="blob-two" />
          <img src={blob3} alt="blob" className="blob-three" />
        </section>
        <div className="main-text">
          <div id="main-name">SUVASH JOSHI</div>
          <div id="main-title">FRONT END DEVELOPER</div>
        </div>
      </main>
    </>
  );
}

export default Hero;
