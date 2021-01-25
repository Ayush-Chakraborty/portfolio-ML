import React, { useEffect } from "react";

function Education() {
  // const appear = () => {
  //   const item = document.querySelector(".edu");
  //   const top = item.getBoundingClientRect().top;
  //   const height = window.innerHeight;
  //   if (top < height + 50) {
  //     document.querySelectorAll(".border").forEach((i) => {
  //       i.classList.add("bor");
  //     });
  //   }
  // };
  // window.addEventListener("scroll", appear);

  return (
    <div className="edu" id="edu">
      <h1>Education</h1>
      <div className="education">
        <div className="border2">
          <div className="circle"></div>
        </div>
        <div className="border">
          <div className="circle"></div>
        </div>
        <div className="left-container">
          <aside className="left">
            <p>2016</p>
          </aside>
        </div>
        <div className="right-container">
          <aside className="right">
            <h3>Secondary Education:- </h3>
            <p>
              Belda Gangadhar Academy, Belda, Paschim Medinipur, West Bengal.
            </p>
          </aside>
        </div>
      </div>
      <div className="education">
        <div className="border2">
          <div className="circle"></div>
        </div>
        <div className="border" id="sec">
          <div className="circle"></div>
        </div>
        <div className="left-container">
          <aside className="left">
            <p>2019</p>
          </aside>
        </div>
        <div className="right-container">
          <aside className="right">
            <h3>Higher Secondary Education:- </h3>
            <p>
              Pathfinder Higher Secondary Public School, Jodhpur Park, Kolkata.
            </p>
          </aside>
        </div>
      </div>
      <div className="education">
        <div className="border2">
          <div className="circle"></div>
        </div>
        <div className="border" id="thi">
          <div className="circle"></div>
        </div>
        <div className="left-container">
          <aside className="left">
            <p>2023</p>
          </aside>
        </div>
        <div className="right-container">
          <aside className="right">
            <h3>B.Tech in Computer Science and Technology:- </h3>
            <p>National Institute of Technology, Warangal</p>
          </aside>
        </div>
      </div>
      <section className="cor">
        <h2>Courses</h2>
        <div className="course-container">
          <div className="course">
            <p>PROBLEM SOLVING AND COMPUTER PROGRAMMING</p>
          </div>
          <div className="course">
            <p>DATA STRUCTURES AND ALOGORTIHMS</p>
          </div>
          <div className="course">
            <p>UNIX TOOLS AND PROGRAMMING</p>
          </div>
          <div className="course">
            <p>MODELLING AND OPTIMIZATION TECHNIQUES</p>
          </div>
          <div className="course">
            <p>DESIGN AND ANALYSIS OF ALGORITHMS </p>
          </div>
          <div className="course">
            <p>COMPUTER ARCHITECTURE </p>
          </div>
          <div className="course">
            <p> DATABASE MANAGEMENT SYSTEMS</p>
          </div>
          <div className="course">
            <p>OBJECT ORIENTED PROGRAMMING </p>
          </div>
          <div className="course">
            <p>Linear Algebra and Differential Calculus </p>
          </div>
          <div className="course">
            <p>Multivariable Calculus </p>
          </div>
          <div className="course">
            <p>Discrete Mathematics </p>
          </div>
          <div className="course">
            <p>Probability Statistics and Queuing theory </p>
          </div>
          <div className="course">
            <p>Deep Learning Certification from DeepLearning.Ai </p>
          </div>
          <div className="course">
            <p>Deep Learning using TensorFlow </p>
          </div>
          <div className="course">
            <p>DIGITAL LOGIC DESIGN </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
