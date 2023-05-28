import React from "react";
import "../styles/Contact.css";
import Icon from "@mdi/react";
import { mdiEmailHeartOutline } from "@mdi/js";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-title">
          <h2>Lets get in touch.</h2>
        </div>
        <div className="contact-icons">
          <div className="icons-list">
            <i class="devicon-linkedin-plain icon-item"></i>
            <i class="devicon-github-original icon-item"></i>
            <i class="devicon-twitter-original icon-item"></i>
            <Icon path={mdiEmailHeartOutline} size={1} className="icon-item" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
