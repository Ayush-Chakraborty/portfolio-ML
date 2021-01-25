import React from "react";

function Skill() {
  return (
    <div className="skill-container" id="skill">
      <h1>Skills</h1>
      <div className="skill">
        <div className="card-container">
          <section className="card">
            <div className="front">
              <table>
                <thead>
                  <tr>
                    <th>Languages</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Python</td>
                  </tr>
                  <tr>
                    <td className="last">C++</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="back">
              <table>
                <thead>
                  <tr>
                    <th>Upcoming</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Java</td>
                  </tr>
                  <tr>
                    <td className="last">R</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="card-container">
          <section className="card">
            <div className="front">
              <table>
                <thead>
                  <tr>
                    <th>Skills</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data Structure & Algorithm</td>
                  </tr>
                  <tr>
                    <td>TensorFlow / Keras</td>
                  </tr>
                  <tr>
                    <td className="last">Shell-scripting</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="back">
              <table>
                <thead>
                  <tr>
                    <th>Upcoming</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Torch</td>
                  </tr>
                  <tr>
                    <td className="last">ROS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Skill;
