import React from "react";

function Skills() {
  const css = (
    <div className ="skillBox">
        <span class="icon style2 major fa-css3"></span>
        <h3>CSS</h3>
    </div>
  );
  const HTML = (
    <div className ="skillBox">
        <span class="icon solid style2 major fa-html5"></span>
        <h3>HTML</h3>
    </div>
  );
  const js = (
    <div className ="skillBox">
        <i class="icon solid style2 major fa-js-square"></i>
        <h3>Javascript</h3>
    </div>
  );
  return <div className="skills">
  {css}
  {HTML}
  {js}
  </div>;
}

export default Skills;
