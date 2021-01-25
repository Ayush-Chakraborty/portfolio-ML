import React from "react";

function Achievment() {
  const f1 = () => {
    // const items = document.querySelectorAll("#achiv p:nth-of-type(odd)");
    // items.forEach((item) => {
    //   item.style.transform = "translateX(-1000px)";
    //   const top = item.getBoundingClientRect().top;
    //   const height = window.innerHeight;
    //   if (top < height + 50) {
    //     item.style.transform = "translateX(0px)";
    //   }
    // });
    // const items1 = document.querySelectorAll("#achiv p:nth-of-type(even)");
    // items1.forEach((item) => {
    //   item.style.transform = "translateX(1000px)";
    //   const top = item.getBoundingClientRect().top;
    //   const height = window.innerHeight;
    //   if (top < height + 50) {
    //     item.style.transform = "translateX(0px)";
    //   }
    // });
  };
  // window.addEventListener("scroll", f1);
  return (
    <div className="achiv" id="achiv">
      <h1>Achievement</h1>
      <div className="achiv-container">
        <p>
          Changed Branch to Computer Science (offered to the top 3 Non- CSE
          students of the Batch; ranked 1 st in the list)
        </p>
        <p>Recipient of Institute Merit Scholarship (2019-20)</p>
        <p>
          Scored 99.6431296 percentile in Jee Main (All India Basis Engineering
          Entrance Exam with over a million candidates, 2019)
        </p>
        <p>
          Recipient of KVPY (All India Basis Exam organized by the Department of
          Science and Technology, Govt. Of India) Fellowship (2019)
        </p>
        <p>
          Secured 8 th rank in the merit list of Higher Secondary Examination
          organized by the West Bengal Council of Higher Secondary Education
          (2019)
        </p>
        <p>
          Secured 8 th rank in the merit list of Secondary Examination organized
          by the West Bengal Board of Secondary Education (2016)
        </p>
      </div>
    </div>
  );
}

export default Achievment;
