import React from "react";
import profile from "../img/profile.png"

export default function About() {
  const AboutText = (
    <div id='aboutMe' className="aboutTitle">
      <div className="about-text">
      <h2>Hello,</h2>
      <p>My name is Tatyana, I am currently working as a Web Content Editor
         while also attending Lambda School to become a Software Engineer.
         Checkout what I've learned so far and take a peak at all the projects I've completed.
      </p>
      </div>
      <div className="profile">
      <img src={profile} ></img>
      </div>
    </div>
    
  );
  return <div className="about">{AboutText}</div>;
}


