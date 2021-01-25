import React, { useEffect } from "react";
import Navbar from "./navbar";
import Profile from "./profille";
import About from "./about";
import Contact from "./contact";
import Skill from "./skill";
import Project from "./project";
import Education from "./education";
import Achievment from "./achievment";
function Main() {
  window.addEventListener("load", () => {
    document.querySelector("html").classList.add("scroll");
  });
  const main = () => {
    const item2 = document.querySelector(".edu");
    const top = item2.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height + 50) {
      document.querySelectorAll(".border").forEach((i) => {
        i.classList.add("bor");
      });
    }
    const items = document.querySelectorAll("#achiv p:nth-of-type(odd)");
    items.forEach((item) => {
      item.style.transform = "translateX(-1000px)";
      const top = item.getBoundingClientRect().top;
      const height = window.innerHeight;
      if (top < height + 50) {
        item.style.transform = "translateX(0px)";
      }
    });
    const items1 = document.querySelectorAll("#achiv p:nth-of-type(even)");
    items1.forEach((item) => {
      item.style.transform = "translateX(1000px)";
      const top = item.getBoundingClientRect().top;
      const height = window.innerHeight;
      if (top < height + 50) {
        item.style.transform = "translateX(0px)";
      }
    });
  };
  window.addEventListener("scroll", main);
  return (
    <>
      <Navbar />
      <Profile />
      <div className="main-container">
        <About />
        <Education />
        <Skill />
        <Project />
        <Achievment />
        <Contact />
      </div>
    </>
  );
}

export default Main;
