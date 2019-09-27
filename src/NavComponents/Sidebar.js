import React from "react";
import NavButton from "./NavButton.js"


function SideNav() {
  const partialMenu = (
    <div>
    {//<NavButton></NavButton>

    }
    <div id="partialMenu">
      <a href="#aboutMe" alt="About Me">
        <i id="aboutIcon" className="fas fa-user-circle" />
      </a>
      <a href="#html" alt="Skills">
        <i id="htmlIcon" className="fas fa-file-code" />
      </a>
      <a href="#projects" alt="My Portfolio">
        <i className="fas fa-briefcase" />
      </a>
      <a href="#contact" alt="Contact Me">
        <i className="fas fa-envelope" />
      </a>
    </div>
    </div>
  );
  const nav = (
    <nav id="sideNav" className="nav">
      <div id="smallNav" className="smallNav" />
      {partialMenu}
    </nav>
  );
  return (
    <div id="bar" className="full-width">
      {nav}
    </div>
  );
}

export default SideNav;
