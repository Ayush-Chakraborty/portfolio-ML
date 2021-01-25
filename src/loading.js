import React, { useState, useEffect } from "react";
const Loading = () => {
  const name = "Ayush Chakraborty";
  const cursor = "|";
  const [text, setText] = useState("");
  const displayCursor = () => {
    document.getElementById("blink").classList.add("cursor");
  };
  useEffect(() => {
    let cnt = 0;
    let nameID = setInterval(() => {
      if (cnt === name.length) {
        clearInterval(nameID);
        console.log(nameID);
        displayCursor();
      }
      setText(name.slice(0, cnt++));
    }, 100);
  }, []);
  return (
    <main id="loading">
      <div>
        <span className="name"> {text} </span>
        <span id="blink">{cursor} </span>
      </div>
    </main>
  );
};
export default Loading;
