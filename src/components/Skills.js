import React from "react";

function Skills() {
  const css = (
    <div className ="skillBox">
        <i class="fab fa-css3-alt"></i>
        <h3>CSS</h3>
    </div>
  );
  const HTML = (
    <div className ="skillBox">
        <i class="fab fa-html5"></i>
        <h3>HTML</h3>
    </div>
  );
  const js = (
    <div className ="skillBox">
        <i class="fab fa-js-square"></i>
        <h3>Javascript</h3>
    </div>
  );
  const react = (
    <div className ="skillBox">
        <i class="fab fa-react"></i>
        <h3>React</h3>
    </div>
  );
  return <div className="skills">
  {css}
  {HTML}
  {js}
  {react}
  </div>;
}

export default Skills;
