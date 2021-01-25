import React, { useState, useEffect } from "react";
import img from "./dp1.jpg";
function Profile() {
  const name = ["", "M ", "ML", "M ", "  ", "D ", "DL", "D "];
  const cursor = "|";
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i == name.length) {
        i = 0;
      }
      setText(name[i++]);
    }, 500);
  }, []);
  return (
    <div className="profile">
      <section>
        <img src={img} alt="" />
        <h1>Hi, there</h1>
        <h2>I'm Soumyadip Payra</h2>
      </section>
      <aside className="tag">
        <span id="ml">{text}</span>
        <span id="blink" className="cursor">
          {cursor}{" "}
        </span>
        <span id="en">Enthusiast</span>
      </aside>
    </div>
  );
}

export default Profile;
