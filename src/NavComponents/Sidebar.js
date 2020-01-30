import React from "react";
import {Route, Link, NavLink} from 'react-router-dom';
import HeaderImg from '../components/Home/HeaderImg';

function SideNav() {

  return (
    <nav id="sideNav" className="nav">
      {/* <div id="smallNav" className="smallNav" /> */}
      <div id="partialMenu">
        <NavLink to="/"><i id="aboutIcon" className="fas fa-user-circle" /><p>About Me</p></NavLink>
        <NavLink to="/skills"><i id="htmlIcon" className="fas fa-file-code" /><p>Skills</p></NavLink>
        <NavLink to="/projects"><i id="htmlIcon" className="fas fa-briefcase" /><p>Projects</p></NavLink>
        <NavLink to="/contact"><i id="htmlIcon" className="fas fa-envelope" /><p>Contact Me</p></NavLink>
      </div>
    </nav>
  );

}

export default SideNav;
