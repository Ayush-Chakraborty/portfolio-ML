import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <article>
        <h2>Email me: &nbsp;</h2>
        <h3> soumyadippayra@gmail.com</h3>
      </article>
      <section>
        <div className="con">
          <a href="https://github.com/Soumya296" target="_blank">
            <p>
              <FontAwesomeIcon icon={faGithubSquare} className="contact-icon" />
              <br />
              Github
            </p>
          </a>
        </div>
        <div className="con">
          <a
            href="https://www.linkedin.com/in/soumyadip-p-518751100/"
            target="_blank"
          >
            <p>
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              <br />
              Linkedin
            </p>
          </a>
        </div>
        <div className="con">
          <a href="https://www.facebook.com/soumyadip.payra" target="_blank">
            <p>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="contact-icon"
              />
              <br />
              Facebook
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
