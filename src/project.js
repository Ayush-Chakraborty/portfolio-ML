import React from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Project() {
  return (
    <div className="skill-container project" id="project">
      <h1>Projects</h1>
      <div className="skill">
        <div className="card-container">
          <section className="card pro">
            <div className="front">
              <h2>Neural Style Transfer</h2>
            </div>
          </section>
          <button
            className="btn"
            onClick={(e) => {
              const view = e.target.nextElementSibling;
              view.style.top = "50%";
            }}
          >
            View
          </button>
          <div className="scale">
            <h2
              onClick={(e) => {
                const view = e.target.parentElement;
                view.style.top = "-100%";
              }}
            >
              X
            </h2>
            <h3>Overview:</h3>
            <p>
              This project implements the following research papers for creating
              pictures with artistic style imposed. Here, Charbonnier loss
              function is used to capture the content more prominently. Also,
              total variation loss has been implemented to make the output more
              coherent throughout.
            </p>
            <a
              target="blank"
              href="https://github.com/Soumya296/Neural_Style_transfer.git"
              className="prolink"
            >
              <FontAwesomeIcon icon={faLink} /> &nbsp; Project Link
            </a>
            <h3>Implementation of paper:</h3>
            <ul className="resource">
              <li>
                <a href="https://arxiv.org/pdf/1508.06576.pdf?" target="blank">
                  A Neural Algorithm of Artistic Style:
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.researchgate.net/publication/326437546_Computationally_Efficient_Approaches_for_Image_Style_Transfer"
                >
                  Computationally Efficient Approaches for Image Style Transfer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
