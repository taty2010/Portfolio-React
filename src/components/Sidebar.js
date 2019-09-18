import React from "react";

function SideNav() {
  const partialMenu = (
    <div id="partialMenu">
      <a href="about/about-me.html" alt="About Me">
        <i id="aboutIcon" className="fas fa-user-circle" />
      </a>
      <a href="#html" alt="Skills">
        <i id="htmlIcon" className="fas fa-file-code" />
      </a>
      <a href="#spiritedAway" alt="My Portfolio">
        <i className="fas fa-briefcase" />
      </a>
      <a href="#contact" alt="Contact Me">
        <i className="fas fa-envelope" />
      </a>
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
