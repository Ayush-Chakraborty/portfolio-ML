import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faUserCircle,
  faCodeBranch,
  faEnvelope,
  faAward,
  faBrain,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  let open = false;
  const clickHnadlar = () => {
    const navButton = document.querySelector("nav");
    const arrow = document.getElementsByClassName("arrowIcon")[0];
    if (open) {
      arrow.classList.remove("rotate");
      navButton.classList.remove("stretch");
      open = false;
    } else {
      arrow.classList.add("rotate");
      navButton.classList.add("stretch");
      open = true;
    }
  };
  useEffect(() => {
    const navButton = document.querySelector("nav");
    if (window.innerWidth > 700) {
      navButton.addEventListener("mouseenter", clickHnadlar);
      navButton.addEventListener("mouseleave", clickHnadlar);
    }
  }, []);
  return (
    <nav>
      <ul>
        <li id="arrow">
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="arrowIcon"
            onClick={clickHnadlar}
          />
        </li>
        <li>
          <a href="#about">
            <span>About Me</span>
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
          </a>
        </li>
        <li>
          <a href="#edu">
            <span>Education</span>
            <FontAwesomeIcon icon={faUniversity} className="icon" />
          </a>
        </li>
        <li>
          <a href="#skill">
            <span>Skills</span>
            <FontAwesomeIcon icon={faBrain} className="icon" />
          </a>
        </li>
        <li>
          <a href="#project">
            <span>Projects</span>
            <FontAwesomeIcon icon={faCodeBranch} className="icon" />
          </a>
        </li>
        <li>
          <a href="#achiv">
            <span>Achievement</span>
            <FontAwesomeIcon icon={faAward} className="icon" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <span>Contact Me</span>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
