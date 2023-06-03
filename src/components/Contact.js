import React from "react";
import "../styles/Contact.css";
import sushi from "../assets/images/sushi.png";
import gmailIcon from "../assets/images/gmail.svg";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-info">
          <h2 className="contact-title">Lets get in touch.</h2>

          <div className="icons-list">
            <a
              href="https://www.linkedin.com/in/suvash-joshi-425391213/ "
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-linkedin-plain icon-item"></i>
            </a>

            <a
              href="https://twitter.com/makeout_hill7"
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-github-original icon-item"></i>
            </a>

            <a
              href="https://github.com/sushi057  "
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-twitter-original icon-item"></i>
            </a>

            <a
              href="mailto:suvash2077@gmail.com?subject=yo%20wassup,%20man"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gmailIcon}
                alt="gmail icon"
                className="icon-item invert-icon"
              />
            </a>
          </div>
        </div>

        <img src={sushi} className="contact-image" alt="sushi" />
      </div>
    </>
  );
}

export default Contact;
